import { useState, useEffect } from "react";
import { Zap, RotateCcw, Gift } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const REWARDS = [
  "Go for a 15-minute walk 🚶",
  "Grab your favorite snack 🍫",
  "5-minute stretch break 🧘",
  "Listen to your favorite song 🎵",
  "Take a power nap (10 min) 😴",
  "Watch a short funny video 😂",
  "Make yourself a nice coffee ☕",
  "Text a friend something kind 💬",
];

interface FlashCardProps {
  onComplete: () => void;
}

const FlashCard = ({ onComplete }: FlashCardProps) => {
  const [bigRock, setBigRock] = useState("");
  const [doneItems, setDoneItems] = useState([
    { label: "", checked: false },
    { label: "", checked: false },
    { label: "", checked: false },
  ]);
  const [reward] = useState(() => REWARDS[Math.floor(Math.random() * REWARDS.length)]);
  const [showReward, setShowReward] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const allChecked = doneItems.every((item) => item.checked) && doneItems.every((item) => item.label.trim() !== "");

  useEffect(() => {
    if (allChecked && !hasTriggered) {
      setHasTriggered(true);
      setShowReward(true);
      onComplete();

      // Fire confetti
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
          colors: ["#dc2626", "#ffffff", "#666666"],
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
          colors: ["#dc2626", "#ffffff", "#666666"],
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [allChecked, hasTriggered, onComplete]);

  const handleReset = () => {
    setBigRock("");
    setDoneItems([
      { label: "", checked: false },
      { label: "", checked: false },
      { label: "", checked: false },
    ]);
    setShowReward(false);
    setHasTriggered(false);
  };

  const toggleCheck = (index: number) => {
    if (doneItems[index].label.trim() === "") return;
    setDoneItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, checked: !item.checked } : item))
    );
  };

  const updateLabel = (index: number, value: string) => {
    setDoneItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, label: value } : item))
    );
  };

  return (
    <motion.div
      layout
      className="border-glow rounded-lg bg-card overflow-hidden"
    >
      {/* Card Header */}
      <div className="p-5 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <h2 className="font-mono text-sm font-bold tracking-wider uppercase text-foreground">
              Impact Card
            </h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="text-muted-foreground hover:text-foreground font-mono text-xs"
          >
            <RotateCcw className="w-3 h-3 mr-1" />
            Reset
          </Button>
        </div>
      </div>

      {/* Big Rock */}
      <div className="p-5 space-y-5">
        <div>
          <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5 block">
            Big Rock Task
          </label>
          <Input
            value={bigRock}
            onChange={(e) => setBigRock(e.target.value)}
            placeholder="What's your most important task?"
            className="bg-secondary/50 border-border font-mono text-sm placeholder:text-muted-foreground/50 h-11"
          />
        </div>

        {/* Definition of Done */}
        <div>
          <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3 block">
            Definition of Done
          </label>
          <div className="space-y-2.5">
            {doneItems.map((item, i) => (
              <motion.div
                key={i}
                className={`flex items-center gap-3 p-3 rounded-md transition-all duration-300 ${
                  item.checked
                    ? "bg-primary/5 border border-primary/20"
                    : "bg-secondary/30 border border-transparent"
                }`}
                animate={item.checked ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 0.2 }}
              >
                <Checkbox
                  checked={item.checked}
                  onCheckedChange={() => toggleCheck(i)}
                  disabled={item.label.trim() === ""}
                  className="border-muted-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <Input
                  value={item.label}
                  onChange={(e) => updateLabel(i, e.target.value)}
                  placeholder={`Criteria ${i + 1}`}
                  disabled={item.checked}
                  className={`border-none bg-transparent font-mono text-xs p-0 h-auto placeholder:text-muted-foreground/40 ${
                    item.checked ? "line-through text-muted-foreground" : ""
                  }`}
                />
                {item.checked && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-primary font-mono text-[10px]"
                  >
                    ✓
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center gap-2">
          {doneItems.map((item, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                item.checked ? "bg-primary" : "bg-secondary"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Reward Section */}
      <AnimatePresence>
        {showReward && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="p-5 border-t border-primary/20 bg-primary/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-dot">
                  <Gift className="w-4 h-4 text-primary" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                  Reward Unlocked!
                </span>
              </div>
              <p className="font-mono text-sm text-foreground pl-11">
                {reward}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FlashCard;
