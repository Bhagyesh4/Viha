@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-headline: "Manrope", ui-sans-serif, system-ui, sans-serif;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-label: "Inter", ui-sans-serif, system-ui, sans-serif;

  /* Theme Colors from HTML */
  --color-surface-dim: #cedce5;
  --color-secondary-dim: #415660;
  --color-primary-container: #d9e2ff;
  --color-outline-variant: #a8b3bb;
  --color-tertiary: #006b5f;
  --color-secondary-fixed-dim: #c1d8e4;
  --color-surface-bright: #f7f9fc;
  --color-on-primary-fixed: #003b8d;
  --color-on-tertiary-fixed-variant: #006f62;
  --color-surface-container-low: #f0f4f8;
  --color-secondary-container: #cfe6f2;
  --color-background: #f7f9fc;
  --color-on-surface: #29343a;
  --color-tertiary-dim: #005e53;
  --color-surface: #f7f9fc;
  --color-on-secondary: #f2faff;
  --color-on-tertiary-fixed: #005046;
  --color-surface-container-lowest: #ffffff;
  --color-primary-fixed-dim: #c5d4ff;
  --color-inverse-on-surface: #9a9da0;
  --color-on-tertiary-container: #006458;
  --color-primary-dim: #1a4ea8;
  --color-tertiary-fixed: #a2ffed;
  --color-primary: #2b5bb5;
  --color-on-surface-variant: #566168;
  --color-inverse-primary: #759efd;
  --color-error: #9f403d;
  --color-on-secondary-container: #40555f;
  --color-surface-container-high: #e1e9f0;
  --color-on-secondary-fixed-variant: #495f69;
  --color-tertiary-fixed-dim: #94f0df;
  --color-error-dim: #4e0309;
  --color-on-primary-fixed-variant: #2858b2;
  --color-on-primary: #f7f7ff;
  --color-surface-container-highest: #d9e4ec;
  --color-primary-fixed: #d9e2ff;
  --color-surface-container: #e8eff4;
  --color-surface-tint: #2b5bb5;
  --color-on-secondary-fixed: #2d424c;
  --color-outline: #717c84;
  --color-on-error: #fff7f6;
  --color-secondary-fixed: #cfe6f2;
  --color-on-tertiary: #e3fff7;
  --color-on-background: #29343a;
  --color-on-error-container: #752121;
  --color-inverse-surface: #0b0f11;
  --color-on-primary-container: #194da7;
  --color-secondary: #4d626c;
  --color-surface-variant: #d9e4ec;
  --color-tertiary-container: #a2ffed;
  --color-error-container: #fe8983;

  --radius-DEFAULT: 0.125rem;
  --radius-lg: 0.25rem;
  --radius-xl: 0.5rem;
  --radius-full: 0.75rem;
}

@layer base {
  body {
    @apply font-body bg-background text-on-surface antialiased;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-headline;
  }
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cedce5;
  border-radius: 10px;
}
