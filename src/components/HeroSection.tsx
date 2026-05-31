import { motion } from 'motion/react';
import { Clock } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-white border border-gray-200 text-brand-primary text-sm font-medium rounded-full mb-6">
              Business Tips
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-brand-text leading-[1.1] tracking-tight mb-6">
              19 Small Business Ideas You Can Easily Start in Nigeria in 2025
            </h1>
            <p className="text-lg md:text-xl text-brand-muted max-w-2xl leading-relaxed">
              A practical guide to profitable businesses you can start with low capital. Turn your entrepreneurial dreams into a reality this year.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-4 pt-6 border-t border-gray-100"
          >
            <img 
              src="https://i.pravatar.cc/150?u=chidinma" 
              alt="Chidinma Nwonye" 
              className="w-12 h-12 rounded-full object-cover border border-gray-200"
            />
            <div>
              <p className="font-semibold text-brand-text">Chidinma Nwonye</p>
              <div className="flex items-center gap-2 text-sm text-brand-muted">
                <span>12 Feb 2025</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 8 min read</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1 w-full"
        >
          {/* Custom Illustration Representation */}
          <div className="aspect-[4/3] bg-white rounded-3xl p-8 relative overflow-hidden border border-gray-100 shadow-xl shadow-brand-primary/5">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-bg to-white" />
            <div className="relative h-full flex flex-col items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm relative z-10">
                <div className="bg-brand-primary/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform -rotate-6 translate-y-4 shadow-sm border border-brand-primary/10">
                  <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-white font-serif text-xl border-2 border-brand-accent/30">POS</div>
                  <span className="text-xs font-semibold text-brand-primary text-center">Agent</span>
                </div>
                <div className="bg-orange-50 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform rotate-3 shadow-sm border border-orange-100">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl">🍲</div>
                  <span className="text-xs font-semibold text-orange-700 text-center">Vendor</span>
                </div>
                <div className="bg-blue-50 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform rotate-2 -translate-y-2 shadow-sm border border-blue-100">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">📸</div>
                  <span className="text-xs font-semibold text-blue-700 text-center">Creator</span>
                </div>
                <div className="bg-brand-accent/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform -rotate-3 translate-y-2 shadow-sm border border-brand-accent/20">
                   <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white text-xl">🛵</div>
                  <span className="text-xs font-semibold text-brand-primary text-center">Delivery</span>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-accent/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
