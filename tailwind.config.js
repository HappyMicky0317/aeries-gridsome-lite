module.exports = {
  content: ['src/**/*.{vue,html}'],
  mode: 'jit',
  presets: [require('@aeries-design/adl-tailwind-config')],
  theme: {
    extend: {
      minWidth: {
        '1/4': '25%',
      },
      flex: {
        '175': '1.75',
        '2': '2 2 0%',
      },
    }
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
    }
  }
}
