'use client';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 animate-fade-in">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold">AutoScribe AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors duration-200 hover:scale-105 transform">Features</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors duration-200 hover:scale-105 transform">How It Works</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors duration-200 hover:scale-105 transform">Pricing</a>
            <a href="#faq" className="text-slate-300 hover:text-white transition-colors duration-200 hover:scale-105 transform">FAQ</a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-slate-300 hover:text-white hover:scale-105 transition-all duration-200">
              Book a Demo
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-200">
              Try Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden hover:scale-110 transition-transform duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-800 animate-fade-in">
            <div className="flex flex-col space-y-4 mt-4">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-2 transform">Features</a>
              <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-2 transform">How It Works</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-2 transform">Pricing</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-2 transform">FAQ</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-slate-300 hover:text-white justify-start hover:scale-105 transition-all duration-200">
                  Book a Demo
                </Button>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 justify-start hover:scale-105 transition-all duration-200">
                  Try Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};