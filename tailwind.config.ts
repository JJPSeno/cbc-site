module.exports = {
  theme: {
    extend: {
      colors: {
        'edge': '#EED6EE',
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        neutral: "var(--color-neutral)",
        muted: "var(--color-muted)",
      },
      fontSize: {
        h1: ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }], // MDN's large headers
        h2: ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }],
        h3: ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],
        h4: ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }],
        h5: ['1rem', { lineHeight: '1.5rem', fontWeight: '600' }],
        h6: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '600' }],
      },
    }
  }
}
