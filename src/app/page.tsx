"use client";

import { useRouter } from "next/navigation";
import { useMissionStore } from "@/lib/store";
import { MissionType } from "@/lib/types";
import { Switch } from "@/components/ui/switch"; // Need to install switch maybe? Wait, I didn't install switch. I'll use a standard toggle or just a button for 'Simulate next day'.
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const router = useRouter();
  const setDeclaredMission = useMissionStore((state) => state.setDeclaredMission);

  const handleMissionSelect = (type: MissionType) => {
    setDeclaredMission(type, 6, "Saturday, May 16, 2026");
    router.push("/templates");
  };

  const simulateNextDay = () => {
    router.push("/feedback");
  };

  return (
    <div className="flex flex-col h-full px-6">
      <div className="flex items-center justify-between py-4">
        {/* Simulate Next Day Toggle Button - prototype only */}
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full bg-orange-50 border-orange-200 text-orange-800 hover:bg-orange-100 hover:text-orange-900"
          onClick={simulateNextDay}
        >
          Simulate next day (mission complete)
        </Button>
      </div>

      <div className="flex-1 flex flex-col justify-center pb-12">
        <h1 className="text-4xl font-semibold tracking-tight leading-tight text-foreground mb-8">
          What are you trying to pull off today?
        </h1>

        <div className="space-y-4 flex flex-col">
          <button
            onClick={() => handleMissionSelect("dinner-party")}
            className="w-full text-left p-6 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md transition-all active:scale-[0.98] active:bg-red-50 focus:outline-none focus:ring-2 focus:ring-primary/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-red-500/0 group-active:from-red-50 group-active:to-red-100 transition-colors" />
            <h2 className="text-xl font-semibold relative z-10">Host a dinner party</h2>
          </button>

          <button
            onClick={() => handleMissionSelect("sick-day")}
            className="w-full text-left p-6 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md transition-all active:scale-[0.98] active:bg-red-50 focus:outline-none focus:ring-2 focus:ring-primary/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-red-500/0 group-active:from-red-50 group-active:to-red-100 transition-colors" />
            <h2 className="text-xl font-semibold relative z-10">Pull together a sick-day spread</h2>
          </button>

          <button
            onClick={() => handleMissionSelect("45-min-dinner")}
            className="w-full text-left p-6 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md transition-all active:scale-[0.98] active:bg-red-50 focus:outline-none focus:ring-2 focus:ring-primary/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-red-500/0 group-active:from-red-50 group-active:to-red-100 transition-colors" />
            <h2 className="text-xl font-semibold relative z-10">Get dinner on the table in 45 minutes</h2>
          </button>

          <button
            className="w-full text-left p-6 rounded-2xl bg-muted/50 border border-transparent shadow-sm"
          >
            <input 
              type="text" 
              placeholder="Other mission..." 
              className="w-full bg-transparent outline-none text-xl font-semibold placeholder:text-muted-foreground"
              disabled
            />
          </button>
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Pick what you're doing, we'll handle the orchestration
        </p>
      </div>
    </div>
  );
}
