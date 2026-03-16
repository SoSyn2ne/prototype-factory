import localFont from 'next/font/local'

// Pretendard (self-hosted). Keep a single source of truth for the app.
export const pretendard = localFont({
  src: [
    {
      path: '../public/fonts/pretendard/PretendardVariable.woff2',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
  fallback: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'Apple Color Emoji',
    'Segoe UI Emoji',
  ],
})
