import { useState, useCallback } from "react";
import { Layers } from "lucide-react";
import OKRHeader from "@/components/impact/OKRHeader";
import FlashCard from "@/components/impact/FlashCard";
import GCSSidebar from "@/components/impact/GCSSidebar";
import { motion } from "framer-motion";

const ImpactCards = () => {
  const [okrData, setOkrData] = useState({
    objective: "",
    keyResults: ["", "", ""] as [string, string, string],
  });
  const [completedCards, setCompletedCards] = useState(0);

  const handleCardComplete = useCallback(() => {
    setCompletedCards((prev) => prev + 1);
  }, []);

  return (
    <div className="min-h-screen bg-background dark dot-matrix">
      {/* Top Bar */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-primary" />
            <h1 className="font-mono text-sm font-bold tracking-wider uppercase">
              Impact Cards
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              {completedCards} completed
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Column */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <OKRHeader data={okrData} onChange={setOkrData} />
            <FlashCard onComplete={handleCardComplete} />
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            className="w-full lg:w-72 xl:w-80"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <GCSSidebar />
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

export default ImpactCards;
