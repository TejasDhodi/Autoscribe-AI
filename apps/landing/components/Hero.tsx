import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
            Create. Optimize. Deliver.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">
            All in one AI-powered platform.
          </p>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Automated content that connects — from idea to inbox. Generate high-quality blog content, optimize visuals, and deliver seamlessly to your email audiences.
          </p>
        </div>

        <div className="animate-scale-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-to-r cursor-pointer from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-200">
            Try Free
          </Button>
          <Button size="lg" variant="outline" className="border-slate-600 cursor-pointer text-black hover:bg-slate-800 hover:text-white text-lg px-8 py-3 transform hover:scale-105 transition-all duration-200">
            Book a Demo
          </Button>
        </div>

        {/* Hero Visual */}
        <div className="relative max-w-4xl mx-auto animate-float">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 shadow-2xl hover:shadow-blue-500/10 transition-shadow duration-500">
            <div className="bg-slate-900 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-left">
                <div className="text-emerald-400 text-sm mb-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>✓ Blog Generated</div>
                <div className="text-blue-400 text-sm mb-2 animate-fade-in" style={{ animationDelay: '0.7s' }}>✓ Images Optimized via PixelBin</div>
                <div className="text-purple-400 text-sm mb-2 animate-fade-in" style={{ animationDelay: '0.9s' }}>✓ Email Campaign Scheduled</div>
                <div className="text-slate-400 text-sm animate-fade-in" style={{ animationDelay: '1.1s' }}>→ Ready to deliver to 10,000 subscribers</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 animate-fade-in" style={{ animationDelay: '1.3s' }}>
          <p className="text-slate-500 mb-4">Scroll to explore the platform</p>
          <ArrowDown className="w-6 h-6 mx-auto text-slate-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
