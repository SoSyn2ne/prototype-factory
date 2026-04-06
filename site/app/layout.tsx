import './globals.css';
import { pretendard } from './fonts';

export const metadata = {
  title: 'Prototype Factory — Brainstorming Gallery',
  description: 'Daily prototypes index and cluster map for brainstorming',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${pretendard.variable}`}>
      <body className="font-sans bg-background-dark text-white">{children}</body>
    </html>
  );
}
