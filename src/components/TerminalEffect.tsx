import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TerminalEffectProps {
  text: string;
  className?: string;
  prefix?: string;
  typingSpeed?: number;
  onComplete?: () => void;
}

const TerminalEffect = ({
  text,
  className,
  prefix = "> ",
  typingSpeed = 50,
  onComplete,
}: TerminalEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
      if (onComplete) onComplete();
    }
  }, [currentIndex, text, typingSpeed, onComplete]);

  return (
    <div className={cn("font-mono text-sm md:text-base", className)}>
      <span className="text-primary">{prefix}</span>
      <span>{displayText}</span>
      {isTyping && <span className="animate-blink">|</span>}
    </div>
  );
};

export default TerminalEffect;
