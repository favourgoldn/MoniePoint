import { motion } from 'motion/react';
import { ChevronRight, TrendingUp, Zap, HelpCircle } from 'lucide-react';
import type { BusinessIdea } from '../types';

interface IdeaCardProps {
  idea: BusinessIdea;
}

export default function IdeaCard({ idea }: IdeaCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 hover:shadow-lg hover:shadow-brand-primary/5 transition-all duration-300 md:hover:-translate-y-1 mb-10 group scroll-mt-24"
      id={`idea-${idea.id}`}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <span className="text-4xl font-black text-gray-100 group-hover:text-brand-primary/10 transition-colors">
            {idea.number}
          </span>
          <h3 className="text-2xl font-bold text-brand-text leading-tight">{idea.title}</h3>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-6 bg-brand-bg rounded-xl p-4 border border-gray-100">
        <div className="flex items-center gap-2">
           <Zap className="w-4 h-4 text-brand-primary" />
           <span className="text-sm text-brand-muted">Capital:</span>
           <span className="text-sm font-semibold text-brand-text">{idea.capital}</span>
        </div>
        <div className="w-px h-4 bg-gray-200 hidden sm:block self-center"></div>
        <div className="flex items-center gap-2">
           <HelpCircle className="w-4 h-4 text-brand-primary" />
           <span className="text-sm text-brand-muted">Difficulty:</span>
           <span className="text-sm font-semibold text-brand-text">{idea.difficulty}</span>
        </div>
        <div className="w-px h-4 bg-gray-200 hidden sm:block self-center"></div>
        <div className="flex items-center gap-2">
           <TrendingUp className="w-4 h-4 text-brand-accent transform -rotate-12" />
           <span className="text-sm text-brand-muted">Profit:</span>
           <span className="text-sm font-semibold text-brand-text">{idea.profitPotential}</span>
        </div>
      </div>

      <p className="text-brand-text text-[17px] md:text-[18px] lg:text-[20px] leading-[1.8] mb-6">
        {idea.description}
      </p>

      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
        <div className="flex gap-2">
           {idea.tags.map(tag => (
             <span key={tag} className="text-xs font-medium text-brand-muted bg-white border border-gray-200 px-2 py-1 rounded-md">
               {tag}
             </span>
           ))}
        </div>
        <button className="flex items-center gap-1 text-sm font-semibold text-brand-primary group-hover:text-brand-accent transition-colors">
          Learn More <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
