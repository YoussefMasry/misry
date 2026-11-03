import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Misry | منصة التداول الذكي والعملات الرقمية',
  description: 'منصة تداول الأسهم والعملات الرقمية الأسرع والأكثر أماناً في مصر والمنطقة العربية بتنفيذ لحظي وتصميم فائق السرعة.',
  openGraph: {
    title: 'Misry | منصة التداول الذكي والعملات الرقمية',
    description: 'منصة تداول الأسهم والعملات الرقمية الأسرع والأكثر أماناً في مصر والمنطقة العربية.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Misry | منصة التداول الذكي والعملات الرقمية',
    description: 'منصة تداول الأسهم والعملات الرقمية الأسرع والأكثر أماناً في مصر والمنطقة العربية.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body suppressHydrationWarning className="bg-[#0B0F17] text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
