import type {Metadata} from 'next';
import { JetBrains_Mono, IBM_Plex_Sans, Fira_Code } from 'next/font/google';
import './globals.css'; // Global styles

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex',
});

const firaCode = Fira_Code({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: 'Visual Capital — The Visualization Layer for the Agentic Era',
  description: 'An AI engine that generates context-aware, interactive data visualizations on demand.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${ibmPlexSans.variable} ${firaCode.variable}`} suppressHydrationWarning>
      <body className="font-ibm-plex antialiased text-[#1A1A1A] bg-[#FAFAF9]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
