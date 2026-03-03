import { useState } from "react";
import { Target, ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

interface OKRData {
  objective: string;
  keyResults: [string, string, string];
}

interface OKRHeaderProps {
  data: OKRData;
  onChange: (data: OKRData) => void;
}

const OKRHeader = ({ data, onChange }: OKRHeaderProps) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="border-glow rounded-lg bg-card p-5">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between group"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Target className="w-4 h-4 text-primary" />
          </div>
          <h2 className="font-mono text-sm font-bold tracking-wider uppercase text-foreground">
            OKR Framework
          </h2>
        </div>
        {expanded ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        )}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-5 space-y-4">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5 block">
                  Objective
                </label>
                <Input
                  value={data.objective}
                  onChange={(e) => onChange({ ...data, objective: e.target.value })}
                  placeholder="What's your big goal?"
                  className="bg-secondary/50 border-border font-mono text-sm placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1 block">
                  Key Results
                </label>
                {data.keyResults.map((kr, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-primary w-5 text-right">
                      K{i + 1}
                    </span>
                    <Input
                      value={kr}
                      onChange={(e) => {
                        const newKRs = [...data.keyResults] as [string, string, string];
                        newKRs[i] = e.target.value;
                        onChange({ ...data, keyResults: newKRs });
                      }}
                      placeholder={`Key Result ${i + 1}`}
                      className="bg-secondary/50 border-border font-mono text-xs placeholder:text-muted-foreground/50"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OKRHeader;
