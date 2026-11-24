import { ArrowLeft, Sparkles, Home } from 'lucide-react';

interface NotFoundProps {
  onGoHome: () => void;
}

export default function NotFound({ onGoHome }: NotFoundProps) {
  return (
    <div className="min-h-screen bg-ink text-cream flex items-center justify-center p-6 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-lilac/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-deep/25 rounded-full blur-[100px] pointer-events-none" />

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 max-w-lg w-full text-center backdrop-blur-xl relative z-10 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lilac/20 border border-lilac/30 text-lilac text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          HTTP 404 — System Anomaly
        </div>

        <h1 className="font-display font-black text-6xl sm:text-7xl leading-none bg-gradient-to-r from-butter via-lilac to-white bg-clip-text text-transparent mb-4">
          404
        </h1>

        <h2 className="font-display font-bold text-xl sm:text-2xl text-cream mb-3">
          Coordinates Not Found
        </h2>

        <p className="text-cream/70 text-sm sm:text-base leading-relaxed mb-8">
          The requested path does not exist in the ZenX engineering dossier. It may have been relocated or archived.
        </p>

        <button
          onClick={onGoHome}
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-lilac hover:bg-butter text-ink font-bold rounded-full transition-all duration-200 text-sm sm:text-base cursor-pointer shadow-lg hover:scale-102 active:scale-95"
        >
          <Home className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </button>
      </div>
    </div>
  );
}
