const fs = require('fs')
const path = require('path')

const SKILLS_DIR = path.join(__dirname, '..', 'skills')

function findSkillFiles(dir) {
  const results = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) {
      results.push(...findSkillFiles(p))
    } else if (e.isFile() && e.name.toLowerCase() === 'skill.md') {
      results.push(p)
    }
  }
  return results
}

function parseInvocation(content) {
  const lines = content.split(/\r?\n/)
  const out = { triggers: [], auto: false }
  let inInvocation = false
  let inTriggers = false
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()
    if (!inInvocation && /^invocation:/i.test(trimmed)) {
      inInvocation = true
      inTriggers = false
      continue
    }
    if (inInvocation) {
      if (/^[A-Za-z0-9_-]+:/.test(trimmed) && !/^triggers:/i.test(trimmed)) {
        // other key; check for auto
        const m = trimmed.match(/^auto:\s*(true|false)/i)
        if (m) out.auto = m[1].toLowerCase() === 'true'
      }
      if (/^triggers:/i.test(trimmed)) {
        inTriggers = true
        continue
      }
      if (inTriggers) {
        if (/^[-]\s*/.test(trimmed)) {
          out.triggers.push(trimmed.replace(/^[-]\s*/, '').trim())
          continue
        }
        // end triggers when blank or new top-level key
        if (trimmed === '' || /^[A-Za-z0-9_-]+:/.test(trimmed)) {
          inTriggers = false
        }
      }
      // stop invocation block when we hit a top-level header or blank after reading things
      if (/^#{1,6}\s+/.test(trimmed)) break
    }
  }
  return out
}

function loadSkills() {
  const files = findSkillFiles(SKILLS_DIR)
  const skills = files.map((f) => {
    const content = fs.readFileSync(f, 'utf8')
    const invocation = parseInvocation(content)
    // skill name from parent folder
    const name = path.basename(path.dirname(f))
    return { name, file: f, invocation }
  })
  return skills
}

function activateSkill(skill, reason) {
  const badge = `⌬ SKILL ACTIVADA: ${skill.name.toUpperCase()}`
  console.log('\n' + badge)
  console.log('Reason:', reason)
  try {
    const memFile = path.join(path.dirname(skill.file), 'memory.md')
    if (fs.existsSync(memFile)) {
      console.log('--- memory snippet ---')
      const mem = fs.readFileSync(memFile, 'utf8').split(/\r?\n/).slice(0,10).join('\n')
      console.log(mem)
      console.log('--- end memory ---')
    }
  } catch (e) {
    // ignore
  }

  // write handshake-style activation entry to logs
  try {
    const logsDir = path.join(__dirname, '..', 'logs')
    if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true })
    const logFile = path.join(logsDir, 'skill-activations.log')
    const when = new Date().toISOString()
    const entry = []
    entry.push('**REPORTE: Para el ajuste [activation] se activaron las habilidades:**')
    entry.push('')
    entry.push('```text')
    entry.push('⌬ SKILLS ACTIVADAS')
    entry.push(skill.name.toUpperCase())
    entry.push('')
    entry.push('Applied')
    entry.push(`${skill.name.toUpperCase()} → ${reason}`)
    entry.push('')
    entry.push('STATUS')
    entry.push('🛡  Security: ACTIVE | ⚗  Env: DEV | ⟳  Mode: Single')
    entry.push('```')
    entry.push('')
    entry.push(`# TIMESTAMP: ${when}`)
    entry.push('')
    fs.appendFileSync(logFile, entry.join('\n') + '\n')
  } catch (e) {
    console.warn('Could not write activation log:', e && e.message)
  }
}

function containsEmoji(str) {
  if (!str) return false
  // basic emoji/unicode symbol ranges
  return /[\p{Emoji}\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u.test(str)
}

function validateSkillFile(skill) {
  const content = fs.readFileSync(skill.file, 'utf8')
  const problems = []
  if (/REPORTE:/i.test(content) === false) problems.push('Missing top-level "REPORTE:" header')
  if (/```text[\s\S]*?⌬ SKILLS ACTIVADAS[\s\S]*?```/i.test(content) === false) problems.push('Missing code block ````text```` with "⌬ SKILLS ACTIVADAS"')
  // check triggers and content for emojis
  if (skill.invocation && skill.invocation.triggers) {
    for (const t of skill.invocation.triggers) {
      if (containsEmoji(t)) problems.push(`Trigger contains emoji: "${t}"`)
    }
  }
  if (containsEmoji(content)) problems.push('File contains emoji characters')
  return problems
}

function matchTriggers(changedPath, skills) {
  const matched = []
  for (const s of skills) {
    if (!s.invocation || !s.invocation.triggers) continue
    for (const t of s.invocation.triggers) {
      const lowt = t.toLowerCase()
      if (changedPath.toLowerCase().includes(lowt) || path.basename(changedPath).toLowerCase().includes(lowt)) {
        matched.push({ skill: s, trigger: t })
        break
      }
    }
  }
  return matched
}

function main() {
  const skills = loadSkills()
  console.log('Found', skills.length, 'skills. Auto-enabled:')
  skills.filter(s => s.invocation && s.invocation.auto).forEach(s => console.log('-', s.name))

  // dump JSON and exit
  if (process.argv.includes('--dump')) {
    const out = skills.map(s => ({ name: s.name, file: s.file, invocation: s.invocation }))
    console.log(JSON.stringify(out, null, 2))
    return
  }

  // validate mode: check handshake format and emojis
  if (process.argv.includes('--validate')) {
    console.log('Running validation across', skills.length, 'skills...')
    let totalProblems = 0
    for (const s of skills) {
      const probs = validateSkillFile(s)
      if (probs.length) {
        totalProblems += probs.length
        console.log('\n- Skill:', s.name)
        console.log('  file:', s.file)
        for (const p of probs) console.log('   *', p)
      }
    }
    if (totalProblems === 0) console.log('\nValidation OK — no handshake or emoji issues found')
    else console.log(`\nValidation detected ${totalProblems} issues across skills`) 
    return
  }

  // one-shot mode
  if (process.argv.includes('--once')) return

  // Watch for file changes under repo relevant folders
  const watchDirs = [path.join(__dirname, '..', 'src'), SKILLS_DIR]
  for (const d of watchDirs) {
    if (!fs.existsSync(d)) continue
    try {
      fs.watch(d, { recursive: true }, (eventType, filename) => {
        if (!filename) return
        const full = path.join(d, filename)
        // reload skills list to pick up new SKILL.md edits
        const all = loadSkills()
        const matches = matchTriggers(full, all)
        if (matches.length) {
          for (const m of matches) activateSkill(m.skill, `file change: ${full}`)
        }
      })
      console.log('Watching', d)
    } catch (e) {
      console.warn('Cannot watch', d, e.message)
    }
  }
  console.log('Orchestrator running — modifications in watched folders will trigger activations.')
}

main()
