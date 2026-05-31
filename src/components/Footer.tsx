export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-1 mb-6 lg:mb-0">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight mb-6">
              <div className="w-8 h-8 set bg-brand-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              Moniepoint<span className="text-brand-accent">.</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Powering businesses with reliable payments, banking, and credit solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 flex items-center gap-2 text-gray-100">Products</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Business Banking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Payments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">POS Terminals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Credit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Expense Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 flex items-center gap-2 text-gray-100">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Learning Centre</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Centre</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 flex items-center gap-2 text-gray-100">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Media Kit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 flex items-center gap-2 text-gray-100">Trust & Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Trust Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 Moniepoint Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
