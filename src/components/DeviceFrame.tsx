import { Battery, Wifi, Signal } from "lucide-react";

export function DeviceFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 sm:p-8">
      {/* Live Prototype Pill */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white/80 backdrop-blur-md shadow-sm border border-border px-4 py-2 rounded-full flex items-center gap-2 z-50">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-sm font-medium text-foreground">
          Live Prototype • {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
      </div>

      {/* Device Bezel */}
      <div className="relative w-[393px] h-[852px] bg-black rounded-[55px] shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] ring-1 ring-gray-900/5 p-2 overflow-hidden shrink-0">
        {/* Screen Content Area */}
        <div className="relative w-full h-full bg-background rounded-[47px] overflow-hidden flex flex-col">
          {/* iOS Status Bar */}
          <div className="absolute top-0 inset-x-0 h-12 flex items-center justify-between px-6 z-50 pointer-events-none text-foreground">
            <div className="text-[15px] font-semibold tracking-tight w-[54px] text-center ml-1">
              9:41
            </div>
            {/* Dynamic Island Placeholder */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-[120px] h-[32px] bg-black rounded-full" />
            
            <div className="flex items-center gap-1.5 opacity-90">
              <Signal className="w-4 h-4 fill-current" />
              <Wifi className="w-4 h-4" />
              <div className="relative flex items-center justify-center">
                <Battery className="w-6 h-6 fill-current opacity-50" />
                <div className="absolute w-[18px] h-2.5 bg-current rounded-sm right-[3px]" />
              </div>
            </div>
          </div>

          {/* App Content */}
          <div className="flex-1 w-full h-full overflow-y-auto no-scrollbar relative z-0 pt-12 pb-8">
            {children}
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-foreground/20 rounded-full z-50 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
