import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

function AnimatedCounter({ value, text, suffix = "" }: { value: number, text: string, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-brand-primary/10">
      <div className="text-4xl lg:text-5xl font-black text-brand-primary mb-2">
        {count}{suffix}
      </div>
      <p className="text-sm font-medium text-brand-muted">{text}</p>
    </div>
  );
}

export default function StatsBreak() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="my-16 grid grid-cols-1 md:grid-cols-3 gap-6 bg-brand-bg rounded-3xl p-8 border border-gray-100"
    >
      <AnimatedCounter value={96} suffix="%" text="of businesses in Nigeria are SMEs" />
      <AnimatedCounter value={84} suffix="%" text="employment contribution rating" />
      <AnimatedCounter value={30} suffix="k+" text="minimum startup cost example (₦)" />
    </motion.div>
  );
}
