import { Globe, RefreshCcw, ExternalLink, X, Sparkles } from "lucide-react";

interface WebFrameProps {
    activeUrl?: string | null;
    onReload?: () => void;
    onClose?: () => void;
}

const WebFrame = ({ activeUrl, onReload, onClose }: WebFrameProps) => {
    const hasValidUrl = Boolean(activeUrl && activeUrl !== "#");

    return (
        <div className="relative w-full rounded-2xl border border-border/60 bg-card/60 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.35)] overflow-hidden">
            {/* Browser Chrome Bar */}
            <div className="relative border-b border-border/50 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95 px-4 py-3">
                <div className="flex items-center gap-2">
                    <span
                        className={`h-2.5 w-2.5 rounded-full bg-rose-400/90 ${hasValidUrl && onClose ? 'cursor-pointer hover:scale-125 transition-transform' : ''}`}
                        onClick={hasValidUrl ? onClose : undefined}
                        title={hasValidUrl ? "Close Preview" : undefined}
                    />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                    <div className="mx-2 h-4 w-px bg-white/15" />
                    <button
                        type="button"
                        onClick={onReload}
                        disabled={!hasValidUrl}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-md text-white/65 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:pointer-events-none"
                        title="Reload Preview"
                    >
                        <RefreshCcw size={14} />
                    </button>
                    <div className="flex-1 min-w-0 rounded-md border border-white/15 bg-black/25 px-3 py-1.5 text-[11px] md:text-xs text-white/80 truncate">
                        {hasValidUrl ? activeUrl : "Ready to launch — Select a web project below"}
                    </div>
                    {hasValidUrl && (
                        <a
                            href={activeUrl as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-7 w-7 items-center justify-center rounded-md text-white/65 hover:text-white hover:bg-white/10 transition-colors"
                            title="Open in New Tab"
                        >
                            <ExternalLink size={14} />
                        </a>
                    )}
                    {hasValidUrl && onClose && (
                        <button
                            type="button"
                            onClick={onClose}
                            className="inline-flex h-7 w-7 items-center justify-center rounded-md text-white/65 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                            title="Close Preview"
                        >
                            <X size={15} />
                        </button>
                    )}
                </div>
            </div>

            {/* Content Area */}
            <div className="relative w-full h-[500px] md:h-[560px] lg:h-[600px] bg-background">
                {hasValidUrl ? (
                    <iframe
                        src={activeUrl as string}
                        className="absolute inset-0 w-full h-full border-0 bg-white"
                        title="Web Preview"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        loading="lazy"
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.12),transparent_50%)]" />
                        <div className="relative z-10 flex flex-col items-center text-center px-6">
                            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-[0_0_25px_rgba(56,189,248,0.22)]">
                                <Globe size={26} />
                            </div>
                            <h4 className="text-lg font-semibold text-foreground mb-2">Live Web & Desktop Preview</h4>
                            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                                Select any of the web projects below to launch the live interactive preview.
                            </p>
                            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs text-primary font-mono">
                                <Sparkles size={13} /> Click a card below to launch
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WebFrame;
