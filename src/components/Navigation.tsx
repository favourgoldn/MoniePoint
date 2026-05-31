import { motion, useScroll, useSpring } from 'motion/react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-brand-bg py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-brand-primary font-bold text-xl tracking-tight">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              Moniepoint<span className="text-brand-accent">.</span>
            </div>

            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-brand-text">
              <a href="#" className="hover:text-brand-primary transition-colors flex items-center gap-1">
                Products <ChevronDown className="w-4 h-4 text-brand-muted" />
              </a>
              <a href="#" className="flex items-center gap-1 text-brand-primary">
                Business Tips
              </a>
              <a href="#" className="hover:text-brand-primary transition-colors">News</a>
              <a href="#" className="hover:text-brand-primary transition-colors">Engineering</a>
              <a href="#" className="hover:text-brand-primary transition-colors">Learning Centre</a>
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 text-brand-muted hover:text-brand-text transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="px-5 py-2.5 text-sm font-medium text-white bg-brand-primary hover:bg-brand-primary/90 rounded-full transition-colors shadow-sm">
              Subscribe
            </button>
          </div>

          <button 
            className="lg:hidden p-2 text-brand-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Reading Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-accent origin-left"
          style={{ scaleX }}
        />
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-4 pb-6 overflow-y-auto lg:hidden">
          <div className="flex flex-col gap-6 text-lg font-medium">
            <a href="#" className="text-brand-primary border-b border-gray-100 pb-4">Business Tips</a>
            <a href="#" className="border-b border-gray-100 pb-4">Products</a>
            <a href="#" className="border-b border-gray-100 pb-4">News</a>
            <a href="#" className="border-b border-gray-100 pb-4">Engineering</a>
            <a href="#" className="border-b border-gray-100 pb-4">Learning Centre</a>
            <div className="mt-4 flex gap-4">
               <button className="flex-1 py-3 text-center border border-gray-200 rounded-lg text-brand-text">Search</button>
               <button className="flex-1 py-3 text-center bg-brand-primary text-white rounded-lg">Subscribe</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
