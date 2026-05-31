import { motion } from 'motion/react';

export default function ComparisonTable() {
  const data = [
    { name: 'POS Agency', capital: 'Low', difficulty: 'Easy', profit: 'High' },
    { name: 'Photography', capital: 'Medium', difficulty: 'Medium', profit: 'High' },
    { name: 'Laundry Service', capital: 'Low', difficulty: 'Easy', profit: 'Medium' },
    { name: 'Copywriting', capital: 'Very Low', difficulty: 'Easy', profit: 'High' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-12 overflow-x-auto"
    >
      <div className="min-w-[600px] border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-brand-bg text-brand-muted text-sm font-semibold">
              <th className="py-4 px-6 border-b border-gray-100">Business Idea</th>
              <th className="py-4 px-6 border-b border-gray-100">Capital Required</th>
              <th className="py-4 px-6 border-b border-gray-100">Difficulty</th>
              <th className="py-4 px-6 border-b border-gray-100">Profit Potential</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="group hover:bg-brand-bg/50 transition-colors">
                <td className="py-4 px-6 border-b border-gray-50 text-brand-text font-medium">{row.name}</td>
                <td className="py-4 px-6 border-b border-gray-50 text-brand-text">{row.capital}</td>
                <td className="py-4 px-6 border-b border-gray-50 text-brand-text">{row.difficulty}</td>
                <td className="py-4 px-6 border-b border-gray-50 text-brand-accent font-semibold">{row.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
