import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight, Share2, MessageCircle, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import InteractiveFilters from './InteractiveFilters';
import StatsBreak from './StatsBreak';
import ComparisonTable from './ComparisonTable';
import IdeaCard from './IdeaCard';
import InlineCTA from './InlineCTA';
import Newsletter from './Newsletter';
import RelatedArticles from './RelatedArticles';
import Footer from './Footer';
import type { BusinessIdea } from '../types';
import { useState } from 'react';

const businessIdeas: BusinessIdea[] = [
  {
    id: 'pos',
    number: '01',
    title: 'POS Agency Business',
    capital: 'Low',
    difficulty: 'Easy',
    profitPotential: 'High',
    description: 'Provide banking services like cash withdrawals, transfers, and bill payments to people in your neighborhood. With Moniepoint\'s robust POS terminals, you can start earning commissions immediately. It requires a small space or kiosk.',
    tags: ['Low Capital', 'Service Business', 'Under ₦50k']
  },
  {
    id: 'laundry',
    number: '02',
    title: 'Home-Based Laundry Service',
    capital: 'Low',
    difficulty: 'Easy',
    profitPotential: 'Medium',
    description: 'Start a laundry business from your home using your washing machine or by hand-washing. Many professionals have tight schedules and gladly pay for convenient laundry and ironing services. As you grow, you can invest in industrial washers.',
    tags: ['Home-Based', 'Low Capital', 'Service Business']
  },
  {
    id: 'social-media',
    number: '03',
    title: 'Social Media Management',
    capital: 'Very Low',
    difficulty: 'Medium',
    profitPotential: 'High',
    description: 'Help small businesses run their social media accounts, create content, and engage with their audience. You only need a smartphone, internet connection, and creativity. Learn basic design with Canva and scheduling tools.',
    tags: ['Online', 'Very Low', 'Service Business']
  },
  {
    id: 'agriculture',
    number: '04',
    title: 'Snail Farming',
    capital: 'Medium',
    difficulty: 'Medium',
    profitPotential: 'High',
    description: 'Snail farming is extremely profitable in Nigeria with very low mortality rates if managed well. They require minimal space for a pen, feed on cheap organic matter, and have high market demand from hotels and restaurants.',
    tags: ['Agriculture', 'Under ₦100k', 'Home-Based']
  },
  {
    id: 'food',
    number: '05',
    title: 'Mini Food Restaurant (Buka)',
    capital: 'Medium',
    difficulty: 'Hard',
    profitPotential: 'High',
    description: 'Food is a basic necessity. Starting a small food business focusing on popular local dishes can yield high returns. The key is finding a good location, maintaining excellent hygiene, and offering tasty meals consistently.',
    tags: ['Service Business', 'Under ₦100k']
  },
  {
    id: 'graphics',
    number: '06',
    title: 'Freelance Graphic Design',
    capital: 'Very Low',
    difficulty: 'Medium',
    profitPotential: 'High',
    description: 'If you have a laptop, you can learn graphic design and start offering logo and flyer design services to small businesses. Platforms like Upwork or direct outreach on X (Twitter) can get you your first clients.',
    tags: ['Online', 'Very Low', 'Service Business']
  }
];

export default function ArticleLayout() {
  const [filteredIdeas, setFilteredIdeas] = useState(businessIdeas);

  const handleFilterChange = (activeFilters: string[]) => {
    if (activeFilters.length === 0) {
      setFilteredIdeas(businessIdeas);
      return;
    }
    const filtered = businessIdeas.filter(idea => 
      activeFilters.some(filter => idea.tags.includes(filter))
    );
    setFilteredIdeas(filtered);
  };

  return (
    <div className="min-h-screen bg-brand-bg select-none sm:select-auto">
      <Navigation />
      <main>
        <HeroSection />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content Area - 70% */}
            <div className="w-full lg:w-[70%] max-w-[750px] mx-auto lg:mx-0">
              <div className="text-[17px] md:text-[18px] lg:text-[20px] leading-[1.8] text-brand-text mb-12">
                <p className="mb-8">
                  Starting a business in Nigeria doesn't always require massive capital. With the right idea, dedication, and a reliable financial partner, you can build a profitable venture that scales over time.
                </p>
                <p className="text-brand-muted mb-12">
                  Whether you're looking for a side hustle to supplement your income or a full-time business to replace your 9-to-5, this curated list explores practical opportunities that are highly viable in the 2025 Nigerian economy.
                </p>
              </div>

              <ComparisonTable />
              
              <InteractiveFilters onFilterChange={handleFilterChange} />

              <div className="mt-12 space-y-2">
                {filteredIdeas.map((idea, index) => {
                  return (
                    <div key={idea.id}>
                      <IdeaCard idea={idea} />
                      
                      {/* Visual Breaks and CTAs */}
                      {index === 2 && <StatsBreak />}
                      {index === 4 && (
                        <InlineCTA 
                          title="Ready to Start Your Business?" 
                          subtitle="Open a Moniepoint Business Account in minutes and get a POS terminal easily."
                          buttonText="Get Started Now"
                        />
                      )}
                      {index === 5 && (
                        <InlineCTA 
                          title="Need Payments for Your New Business?" 
                          subtitle="Accept transfers and payments easily with reliable Moniepoint integration."
                          buttonText="Explore Solutions"
                        />
                      )}
                    </div>
                  );
                })}
                
                {filteredIdeas.length === 0 && (
                  <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                    <p className="text-brand-muted text-lg">No business ideas match all selected filters.</p>
                    <button 
                      onClick={() => handleFilterChange([])}
                      className="mt-4 text-brand-primary font-semibold hover:underline"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Sticky Sidebar - 30% */}
            <div className="hidden lg:block w-[30%]">
              <div className="sticky top-32 space-y-10">
                
                {/* Quick Summary Box */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-brand-text mb-4">Quick Summary</h4>
                  <ul className="space-y-3 text-sm text-brand-muted font-medium">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" /> <span>Start with low capital</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" /> <span>Home-based options</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" /> <span>Service businesses</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" /> <span>Online businesses</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" /> <span>Agriculture opportunities</span></li>
                  </ul>
                </div>

                {/* Newsletter Box */}
                <div className="bg-brand-primary text-white rounded-2xl p-6 shadow-lg shadow-brand-primary/10">
                  <h4 className="font-bold text-xl mb-2">Grow your business</h4>
                  <p className="text-brand-bg/80 text-sm mb-6">Get weekly tips on growing sales and managing cash flow.</p>
                  <form className="space-y-3">
                    <input type="email" placeholder="Email address" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:bg-white focus:text-brand-text placeholder:text-white/60 transition-colors" />
                    <button className="w-full py-3 bg-brand-accent text-white font-semibold rounded-xl hover:bg-white hover:text-brand-primary transition-colors">Subscribe</button>
                  </form>
                </div>
                
                {/* Floating Share */}
                <div>
                   <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-4 block">Share Article</span>
                   <div className="flex gap-3">
                     <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-text hover:border-brand-primary hover:text-brand-primary transition-colors"><MessageCircle className="w-4 h-4" /></button>
                     <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-text hover:border-brand-primary hover:text-brand-primary transition-colors"><Twitter className="w-4 h-4" /></button>
                     <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-text hover:border-brand-primary hover:text-brand-primary transition-colors"><Linkedin className="w-4 h-4" /></button>
                     <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-text hover:border-brand-primary hover:text-brand-primary transition-colors"><LinkIcon className="w-4 h-4" /></button>
                   </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        
        <Newsletter />
        <RelatedArticles />
      </main>
      
      <Footer />

      {/* Mobile Sticky CTA */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] lg:hidden z-40"
      >
        <button className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl flex items-center justify-center gap-2">
          Open Business Account <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
}
