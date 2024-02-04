import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import localFont from 'next/font/local';

import { ThemeProvider } from '@/components/theme/theme-provider';
import { cn } from '@/lib/utils';

import { Toaster } from '../components/ui/toaster';

import './globals.css';

const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sourceSansPro',
});

const pretendard = localFont({
  src: '../font/PretendardVariable.woff2',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.chakchak.io/'),
  title: '착착',
  description: '팝업스토어를 위한 예약 플랫폼',
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    title: '착착',
    type: 'website',
    url: 'https://www.chakchak.io/',
    description: '팝업스토어를 위한 예약 플랫폼',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: '착착',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={cn(pretendard.className, sourceSansPro.className)}>
        <ThemeProvider
        // @TODO: enable when support dark mode
        // attribute="class"
        // defaultTheme="system"
        // enableSystem
        // disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
