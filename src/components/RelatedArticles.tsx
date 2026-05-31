import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const articles = [
  {
    title: 'How to Manage Cash Flow in Your First Year',
    category: 'Finance',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400&h=250'
  },
  {
    title: '5 Social Media Strategies for Nigerian SMEs',
    category: 'Marketing',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400&h=250'
  },
  {
    title: 'Understanding Business Registration in 2025',
    category: 'Legal',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400&h=250'
  }
];

export default function RelatedArticles() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-gray-100">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-3xl font-bold text-brand-text">Read Next</h3>
        <a href="#" className="hidden sm:flex items-center gap-1 text-brand-primary font-semibold hover:text-brand-accent transition-colors">
          View all articles <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <motion.a
            key={i}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group block"
          >
            <div className="rounded-2xl overflow-hidden mb-5 relative aspect-[16/10]">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 will-change-transform"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold text-brand-muted mb-3">
              <span className="text-brand-primary uppercase tracking-wider">{article.category}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
            <h4 className="text-xl font-bold text-brand-text leading-tight group-hover:text-brand-primary transition-colors">
              {article.title}
            </h4>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
