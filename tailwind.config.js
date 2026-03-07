module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './skills/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(187 76% 45%)",
        background: "hsl(222 47% 1%)",
        foreground: "hsl(213 31% 91%)",
        'primary-foreground': 'var(--color-primary-foreground)'
      },
      backgroundImage: {
        'mesh-gradient': "radial-gradient(at 0% 0%, hsla(187, 76%, 45%, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, hsla(263, 70%, 50%, 0.15) 0px, transparent 50%)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(1deg)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        }
      },
      borderRadius: {
        DEFAULT: 'var(--radius)'
      }
    }
  },
  plugins: []
};
