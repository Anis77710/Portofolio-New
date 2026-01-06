import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TerminalWindow = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullCommand = "npm run dev";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullCommand.length) {
        setDisplayedText(fullCommand.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-window max-w-lg mx-auto lg:mx-0">
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-dot bg-destructive" />
        <div className="terminal-dot bg-code-yellow" />
        <div className="terminal-dot bg-code-green" />
        <span className="ml-4 text-sm text-muted-foreground font-mono">terminal</span>
      </div>

      {/* Terminal Content */}
      <div className="p-6 code-block">
        {/* Command Line */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-muted-foreground">$</span>
          <span className="text-primary">{displayedText}</span>
          <span className="typing-cursor text-primary">▌</span>
        </div>

        {/* Code Output */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="space-y-2"
        >
          <div>
            <span className="text-code-purple">const</span>
            <span className="text-code-yellow"> developer</span>
            <span className="text-muted-foreground"> = {"{"}</span>
          </div>
          <div className="pl-4">
            <span className="text-foreground">name</span>
            <span className="text-muted-foreground">: </span>
            <span className="text-code-green">"Anish Guragain"</span>
            <span className="text-muted-foreground">,</span>
          </div>
          <div className="pl-4">
            <span className="text-foreground">stack</span>
            <span className="text-muted-foreground">: </span>
            <span className="text-muted-foreground">[</span>
            <span className="text-code-green">"React"</span>
            <span className="text-muted-foreground">, </span>
            <span className="text-code-green">"Tailwind"</span>
            <span className="text-muted-foreground">, </span>
            <span className="text-code-green">"JS"</span>
            <span className="text-muted-foreground">]</span>
            <span className="text-muted-foreground">,</span>
          </div>
          <div className="pl-4">
            <span className="text-foreground">passion</span>
            <span className="text-muted-foreground">: </span>
            <span className="text-code-purple">Infinity</span>
            <span className="ml-2">🚀</span>
          </div>
          <div>
            <span className="text-muted-foreground">{"}"}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
