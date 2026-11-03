'use client';

import React, { useState } from 'react';
import { Download, ShieldCheck, QrCode, Check, Zap, Sparkles, Globe } from 'lucide-react';

export default function MisryDownloadPage() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setDownloadSuccess(false);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
    }, 2000);
  };

  const t = {
    ar: {
      appName: 'Misry',
      badge: 'مصرى · مركز التنزيل الرسمي',
      title: 'تطبيق Misry للتداول السريع',
      subtitle: 'المنصة الأسرع والأكثر أماناً لتداول الأسهم والعملات الرقمية في هاتفك.',
      downloadBtn: 'تنزيل تطبيق Android (APK) مباشر',
      downloadingText: 'جاري تحضير ملف التحميل الآمن...',
      waitingText: 'يرجى الانتظار ثوانٍ معدودة',
      successTitle: 'تم بدء التحميل بنجاح!',
      successDesc: 'شكراً لتحميلك تطبيق Misry. إذا لم يبدأ التحميل تلقائياً، يمكنك النقر أدناه لبدء التنزيل يدوياً.',
      retryBtn: 'إعادة المحاولة / تنزيل مباشر',
      resetBtn: 'العودة لخيارات التحميل',
      qrTitle: 'مسح QR Code للتنزيل السريع',
      qrDesc: 'وجه كاميرا هاتفك الذكي نحو الرمز لتثبيت التطبيق على جهازك مباشرة.',
      security: 'فحص أمني 100%',
      size: 'حجم الملف: 38 ميجابايت',
      footer: '© 2026 Misry Trading Platform. جميع الحقوق محفوظة.'
    },
    en: {
      appName: 'Misry',
      badge: 'Official Download Center',
      title: 'Misry Fast Trading App',
      subtitle: 'The fastest and most secure platform for stock and crypto trading on your mobile.',
      downloadBtn: 'Download Android APK (Direct)',
      downloadingText: 'Preparing secure download package...',
      waitingText: 'Please wait a few seconds',
      successTitle: 'Download Started Successfully!',
      successDesc: 'Thank you for downloading Misry. If download does not start automatically, click below.',
      retryBtn: 'Retry / Direct Download',
      resetBtn: 'Back to Download Options',
      qrTitle: 'Scan QR Code for Quick Download',
      qrDesc: 'Point your phone camera at the QR code to install the app directly on your device.',
      security: '100% Secure Scan',
      size: 'File Size: 38 MB',
      footer: '© 2026 Misry Trading Platform. All rights reserved.'
    }
  };

  const currentT = t[lang];

  return (
    <div 
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-black font-sans relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-emerald-500/10 blur-3xl pointer-events-none -z-10" />

      {/* Top Header */}
      <header className="w-full py-6 px-6 lg:px-12 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-black text-xl shadow-lg shadow-cyan-500/20">
            م
          </div>
          <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
            {currentT.appName} <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">مصرى</span>
          </span>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-white/10 text-xs font-bold text-slate-200 transition-colors"
          >
            <Globe className="w-4 h-4 text-cyan-400" />
            <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
          </button>
        </div>
      </header>

      {/* Main Download Center Box */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-xl w-full glass-card rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl relative text-center">
          
          <div className="absolute -top-3 right-1/2 translate-x-1/2 px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{currentT.badge}</span>
          </div>

          {/* App Icon */}
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-600 to-emerald-500 p-1 mx-auto mb-6 shadow-xl shadow-cyan-500/25 mt-4">
            <div className="w-full h-full bg-[#0B0F17] rounded-[22px] flex items-center justify-center text-4xl font-extrabold text-cyan-400">
              م
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-white mb-2">
            {currentT.title}
          </h1>
          <p className="text-sm text-slate-300 mb-8 leading-relaxed">
            {currentT.subtitle}
          </p>

          {/* Download Action Box */}
          {downloading ? (
            <div className="py-12 flex flex-col items-center gap-4 animate-in fade-in">
              <div className="w-12 h-12 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin"></div>
              <div className="text-sm font-bold text-white">{currentT.downloadingText}</div>
              <div className="text-xs text-slate-400">{currentT.waitingText}</div>
            </div>
          ) : downloadSuccess ? (
            <div className="py-8 flex flex-col items-center gap-4 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <div className="text-lg font-bold text-white">{currentT.successTitle}</div>
              <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                {currentT.successDesc}
              </p>
              <button
                onClick={handleDownload}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-sm shadow-lg shadow-cyan-500/25 mt-2"
              >
                {currentT.retryBtn}
              </button>
              <button
                onClick={() => setDownloadSuccess(false)}
                className="text-xs text-slate-400 hover:text-white mt-2"
              >
                {currentT.resetBtn}
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <button
                onClick={handleDownload}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-3 transition-all hover:scale-[1.02]"
              >
                <Download className="w-5 h-5 text-black" />
                <span>{currentT.downloadBtn}</span>
              </button>

              {/* QR Code Section */}
              <div className={`mt-6 p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center gap-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className="w-16 h-16 bg-white rounded-xl p-1 shrink-0 flex items-center justify-center">
                  <QrCode className="w-14 h-14 text-black" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white mb-1">{currentT.qrTitle}</div>
                  <div className="text-[11px] text-slate-400 leading-relaxed">{currentT.qrDesc}</div>
                </div>
              </div>
            </div>
          )}

          {/* Security & Info */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{currentT.security}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>{currentT.size}</span>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-6 text-center text-xs text-slate-500 border-t border-white/5">
        {currentT.footer}
      </footer>
    </div>
  );
}
