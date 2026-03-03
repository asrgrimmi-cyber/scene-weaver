import { useState } from "react";
import { Crosshair, ListChecks, Route } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const GCSSidebar = () => {
  const [goal, setGoal] = useState("");
  const [criteria, setCriteria] = useState("");
  const [strategy, setStrategy] = useState("");

  const sections = [
    {
      key: "goal",
      label: "Goal",
      icon: Crosshair,
      value: goal,
      onChange: setGoal,
      placeholder: "What do you want to achieve this session?",
    },
    {
      key: "criteria",
      label: "Criteria",
      icon: ListChecks,
      value: criteria,
      onChange: setCriteria,
      placeholder: "How will you measure success?",
    },
    {
      key: "strategy",
      label: "Strategy",
      icon: Route,
      value: strategy,
      onChange: setStrategy,
      placeholder: "What's your approach?",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
        <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
          Session GCS
        </h3>
      </div>

      {sections.map((section) => (
        <div key={section.key} className="border-glow rounded-lg bg-card p-4">
          <div className="flex items-center gap-2 mb-2.5">
            <section.icon className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground font-bold">
              {section.label}
            </span>
          </div>
          <Textarea
            value={section.value}
            onChange={(e) => section.onChange(e.target.value)}
            placeholder={section.placeholder}
            className="bg-secondary/30 border-none font-mono text-xs resize-none min-h-[60px] placeholder:text-muted-foreground/40"
            rows={3}
          />
        </div>
      ))}

      {/* Session Stats */}
      <div className="border-glow rounded-lg bg-card p-4 dot-matrix-subtle">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold block mb-3">
          Session Stats
        </span>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <span className="font-mono text-[10px] text-muted-foreground block">Cards Done</span>
            <span className="font-mono text-lg text-foreground font-bold">0</span>
          </div>
          <div>
            <span className="font-mono text-[10px] text-muted-foreground block">Streak</span>
            <span className="font-mono text-lg text-foreground font-bold">0 🔥</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GCSSidebar;
