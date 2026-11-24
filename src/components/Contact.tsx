import { useState } from 'react';
import Rise from './Rise';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, LOCATION } from '../data';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import {
  Mail,
  Copy,
  Check,
  ArrowUp,
  RotateCcw,
  Sparkles,
  Send,
  MessageSquare,
  User,
  AtSign,
  MapPin,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';

interface ContactProps {
  onReplay: () => void;
}

export default function Contact({ onReplay }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const [activeSubject, setActiveSubject] = useState('Full Stack Engineering Role');

  // Quick Message Composer Form State
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState('');

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = EMAIL;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
    } catch {
      // fallback silent
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const SUBJECT_TEMPLATES = [
    'Full Stack Engineering Role',
    'Project Collaboration',
    'Technical Consultation',
    'General Chat',
  ];

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = senderName.trim();
    const trimmedEmail = senderEmail.trim();
    const trimmedMsg = message.trim();

    if (!trimmedName) {
      setSendError('Please enter your name.');
      return;
    }
    if (!trimmedEmail || !trimmedEmail.includes('@') || !trimmedEmail.includes('.')) {
      setSendError('Please enter a valid email address so I can reply back to you.');
      return;
    }
    if (!trimmedMsg) {
      setSendError('Please enter a short message.');
      return;
    }

    setIsSending(true);
    setSendError('');
    setSendSuccess(false);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          _replyto: trimmedEmail,
          _subject: `[Portfolio Contact] ${trimmedName} — ${activeSubject}`,
          topic: activeSubject,
          message: trimmedMsg,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success !== 'false') {
        setSendSuccess(true);
        setSenderName('');
        setSenderEmail('');
        setMessage('');
        setTimeout(() => setSendSuccess(false), 8000);
      } else {
        // Fallback to mailto if FormSubmit asks for activation or fails
        const mailtoSubject = encodeURIComponent(`[Portfolio] Regarding ${activeSubject}`);
        const mailtoBody = encodeURIComponent(
          `Hello Harish,\n\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nTopic: ${activeSubject}\n\nMessage:\n${trimmedMsg}\n\nBest regards,\n${trimmedName}`
        );
        window.location.href = `mailto:${EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;
        setSendSuccess(true);
      }
    } catch {
      // Direct Mailto fallback if network or adblocker blocks the API
      const mailtoSubject = encodeURIComponent(`[Portfolio] Regarding ${activeSubject}`);
      const mailtoBody = encodeURIComponent(
        `Hello Harish,\n\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nTopic: ${activeSubject}\n\nMessage:\n${trimmedMsg}\n\nBest regards,\n${trimmedName}`
      );
      window.location.href = `mailto:${EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setSendSuccess(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-ink text-cream rounded-t-[2.5rem] sm:rounded-t-[3.5rem] px-4 sm:px-6 md:px-14 pt-16 sm:pt-24 pb-28 md:pb-12 min-h-[90svh] flex flex-col justify-between shadow-2xl relative overflow-hidden scroll-mt-12"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lilac/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-deep/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Top Header Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-cream text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-butter" />
            Let's Collaborate
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-cream/70 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-butter" />
            <span>{LOCATION}</span>
          </div>
        </div>

        {/* Big Headline */}
        <Rise as="h2" className="font-display font-extrabold leading-none text-[clamp(2.8rem,13vw,10.5rem)] bg-gradient-to-r from-butter via-lilac to-white bg-clip-text text-transparent">
          Say hello.
        </Rise>

        <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-xl text-cream/80 leading-relaxed font-normal">
          Whether you have an engineering role to discuss, a web platform to build, or want to connect — my inbox is always open.
        </p>

        {/* Main 2-Column Contact Stage */}
        <div className="grid lg:grid-cols-12 gap-8 mt-12 sm:mt-16 items-start">
          {/* Left Column: Direct Action Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Email Card */}
            <div className="bg-white/[0.06] border border-white/15 hover:border-butter/40 rounded-3xl p-6 transition-all duration-300 backdrop-blur-xl group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-2xl bg-lilac/20 text-butter flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cream/50 bg-white/5 px-2.5 py-1 rounded-full">
                  Direct Email
                </span>
              </div>

              <div className="text-xs font-semibold text-cream/60">Preferred Channel</div>
              <a
                href={`mailto:${EMAIL}`}
                className="font-display font-bold text-base sm:text-lg text-cream hover:text-butter transition-colors block mt-1 break-all"
              >
                {EMAIL}
              </a>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-cream text-xs font-bold transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-butter" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${EMAIL}`}
                  className="py-2.5 px-4 rounded-xl bg-butter text-ink hover:bg-lilac text-xs font-bold transition-all duration-150 flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                >
                  <span>Open Mail</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Connect Links */}
            <div className="grid grid-cols-2 gap-3">
              {/* GitHub */}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/[0.04] border border-white/10 hover:border-white/25 rounded-2xl p-4 transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-3">
                  <GithubIcon className="w-5 h-5 text-cream/70 group-hover:text-butter transition-colors" />
                  <ArrowRight className="w-4 h-4 text-cream/40 group-hover:translate-x-1 transition-transform" />
                </div>
                <div>
                  <span className="text-xs font-bold text-cream block">GitHub</span>
                  <span className="text-[11px] text-cream/50 truncate block">Code &amp; Repos</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/[0.04] border border-white/10 hover:border-white/25 rounded-2xl p-4 transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-3">
                  <LinkedinIcon className="w-5 h-5 text-cream/70 group-hover:text-butter transition-colors" />
                  <ArrowRight className="w-4 h-4 text-cream/40 group-hover:translate-x-1 transition-transform" />
                </div>
                <div>
                  <span className="text-xs font-bold text-cream block">LinkedIn</span>
                  <span className="text-[11px] text-cream/50 truncate block">Professional Network</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Sleek Message Dispatch Form */}
          <div className="lg:col-span-7 bg-white/[0.05] border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-butter" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cream">
                  Quick Message Dispatcher
                </span>
              </div>
              <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Direct Inbox
              </span>
            </div>

            {/* Topic Selector Chips */}
            <div className="mb-5">
              <span className="text-xs font-semibold text-cream/60 block mb-2">
                What would you like to discuss?
              </span>
              <div className="flex flex-wrap gap-2">
                {SUBJECT_TEMPLATES.map((tpl) => (
                  <button
                    key={tpl}
                    type="button"
                    onClick={() => setActiveSubject(tpl)}
                    className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                      activeSubject === tpl
                        ? 'bg-butter text-ink border-butter shadow-md scale-102'
                        : 'bg-white/5 border-white/15 text-cream/75 hover:bg-white/10'
                    }`}
                  >
                    {tpl}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div className="relative">
                  <User className="w-4 h-4 text-cream/40 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Your Name / Organization"
                    className="w-full bg-black/40 border border-white/15 rounded-2xl pl-11 pr-4 py-3.5 text-base sm:text-sm text-cream placeholder:text-cream/40 focus:border-butter outline-none transition-colors min-h-[48px]"
                  />
                </div>

                <div className="relative">
                  <AtSign className="w-4 h-4 text-cream/40 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="w-full bg-black/40 border border-white/15 rounded-2xl pl-11 pr-4 py-3.5 text-base sm:text-sm text-cream placeholder:text-cream/40 focus:border-butter outline-none transition-colors min-h-[48px]"
                  />
                </div>
              </div>

              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`Brief note regarding ${activeSubject}...`}
                className="w-full bg-black/40 border border-white/15 rounded-2xl p-4 text-base sm:text-sm text-cream placeholder:text-cream/40 focus:border-butter outline-none transition-colors resize-none"
              />

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full sm:w-auto bg-lilac hover:bg-butter text-ink font-bold rounded-full px-7 py-3.5 transition-all duration-200 shadow-lg text-sm flex items-center justify-center gap-2 cursor-pointer hover:scale-102 active:scale-95 disabled:opacity-50 min-h-[48px]"
                  >
                    <Send className={`w-4 h-4 ${isSending ? 'animate-bounce' : ''}`} />
                    <span>{isSending ? 'Sending directly to Harish...' : 'Send Message Now'}</span>
                  </button>
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent(`[Portfolio] Regarding ${activeSubject}`)}`}
                    className="text-xs text-cream/60 hover:text-butter underline underline-offset-4 text-center sm:text-left"
                    title="Open directly in your default email client"
                  >
                    or send via email client ↗
                  </a>
                </div>

                {sendSuccess && (
                  <div className="text-xs text-emerald-300 font-bold flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-2 rounded-xl">
                    <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>Delivered directly to {EMAIL}!</span>
                  </div>
                )}

                {sendError && (
                  <div className="text-xs text-rose-300 font-bold flex items-center gap-1.5">
                    <span>{sendError}</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <footer className="mt-16 pt-8 border-t border-cream/15 flex flex-col md:flex-row justify-between items-center gap-6 text-cream/70 text-xs sm:text-sm max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span>© {new Date().getFullYear()} Harish · Krishnagiri / Coimbatore, Tamil Nadu</span>
          <span className="hidden sm:inline text-cream/30">|</span>
          <span className="text-cream/50">React, TypeScript &amp; Tailwind CSS</span>
        </div>

        {/* Footer Navigation Anchor Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
          <a href="#about" className="hover:text-butter transition-colors">
            About
          </a>
          <a href="#work" className="hover:text-butter transition-colors">
            Work
          </a>
          <a href="#experience" className="hover:text-butter transition-colors">
            Experience
          </a>
          <a href="#education" className="hover:text-butter transition-colors">
            Education
          </a>
          <a href="#toolbox" className="hover:text-butter transition-colors">
            Skills
          </a>
          <span className="text-cream/30 hidden sm:inline">|</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-cream flex items-center gap-1.5 transition-colors cursor-pointer text-xs"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
          <span className="text-cream/30">|</span>
          <button
            type="button"
            onClick={onReplay}
            className="underline underline-offset-4 hover:text-lilac transition-colors cursor-pointer flex items-center gap-1.5 text-xs"
            aria-label="Replay landing page"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay</span>
          </button>
        </div>
      </footer>
    </section>
  );
}
