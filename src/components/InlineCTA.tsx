import { motion } from 'motion/react';
import { ArrowRight, Briefcase } from 'lucide-react';

interface InlineCTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export default function InlineCTA({ title, subtitle, buttonText }: InlineCTAProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="my-12 p-8 md:p-10 bg-brand-primary rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-brand-primary/20 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
        <Briefcase className="w-48 h-48 transform rotate-12 translate-x-12 -translate-y-12" />
      </div>
      
      <div className="relative z-10 max-w-md text-center md:text-left">
        <h4 className="text-2xl font-bold mb-2">{title}</h4>
        <p className="text-brand-bg/80 text-lg">{subtitle}</p>
      </div>
      
      <div className="relative z-10 w-full md:w-auto">
        <button className="w-full md:w-auto px-8 py-4 bg-brand-accent hover:bg-white hover:text-brand-primary text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group">
          {buttonText}
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
