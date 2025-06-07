import { SectionTransition } from './SectionTransition';

export const Stats = () => {
  const stats = [
    { number: '24', label: 'Blogs Generated', color: 'text-blue-400' },
    { number: '18', label: 'Sent via Email', color: 'text-purple-400' },
    { number: '68.5%', label: 'Open Rate', color: 'text-emerald-400' },
    { number: '12.8%', label: 'CTR', color: 'text-yellow-400' },
    { number: '95.2%', label: 'Delivery Success', color: 'text-green-400' },
  ];

  return (
    <SectionTransition className="py-20 px-6 bg-slate-900/50 relative overflow-hidden" delay={200}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results, Real Impact</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            See how AutoScribe AI is transforming content creation and delivery for teams worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center transition-all duration-700 ease-out hover:scale-110 cursor-pointer group animate-fade-in"
              style={{ 
                animationDelay: `${index * 150}ms`,
                willChange: 'transform, opacity'
              }}
            >
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:text-white transition-all duration-500 group-hover:drop-shadow-lg`}>
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm md:text-base group-hover:text-slate-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
};
