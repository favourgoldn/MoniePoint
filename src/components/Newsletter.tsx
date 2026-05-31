import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-20 px-4 md:px-8 bg-brand-bg mt-12 border-t border-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row">
        <div className="flex-1 p-10 md:p-14 flex flex-col justify-center">
          <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-bold text-brand-text mb-4">Get Weekly Business Ideas</h3>
          <p className="text-brand-muted text-lg mb-8">
            Actionable business tips, growth strategies, and Moniepoint updates delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-5 py-4 bg-brand-bg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all text-brand-text placeholder:text-gray-400"
              required
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-brand-primary text-white font-semibold rounded-xl hover:bg-brand-primary/90 transition-colors shadow-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="hidden md:block w-2/5 bg-brand-primary/5 relative overflow-hidden">
           {/* Abstract Newsletter Illustration */}
           <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="w-full aspect-square border-2 border-brand-primary/20 rounded-full flex items-center justify-center relative">
                <div className="w-3/4 aspect-square border-2 border-brand-accent/20 rounded-full flex items-center justify-center">
                   <div className="w-1/2 aspect-square bg-brand-primary/10 rounded-full animate-pulse flex items-center justify-center">
                      <Mail className="w-8 h-8 text-brand-primary opacity-50" />
                   </div>
                </div>
                <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-brand-accent" />
                <div className="absolute bottom-20 left-10 w-3 h-3 rounded-full bg-brand-primary" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
