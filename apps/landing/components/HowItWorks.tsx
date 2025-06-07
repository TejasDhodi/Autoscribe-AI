import { SectionTransition } from './SectionTransition';

export const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Generate with AI',
      description: 'Create high-quality blog content using advanced AI algorithms tailored to your brand voice.',
      tool: 'Powered by AutoScribe AI Engine'
    },
    {
      step: '02',
      title: 'Optimize Images',
      description: 'Automatically optimize and transform images for perfect performance across all devices.',
      tool: 'Powered by PixelBin'
    },
    {
      step: '03',
      title: 'Orchestrate Workflows',
      description: 'Set up automated workflows for content review, editing, and scheduling.',
      tool: 'Powered by Boltic'
    },
    {
      step: '04',
      title: 'Quality Assurance',
      description: 'Run automated QA checks to ensure content meets your standards before delivery.',
      tool: 'Powered by Ratl'
    },
    {
      step: '05',
      title: 'Deliver & Analyze',
      description: 'Send to your email audience and track performance with detailed analytics.',
      tool: 'Built-in Analytics'
    }
  ];

  return (
    <SectionTransition id="how-it-works" className="py-20 px-6 relative" delay={200}>
      {/* Flowing connection lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
          <path
            d="M100,400 Q300,200 500,400 T900,400 Q1000,300 1100,400"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From content creation to delivery, AutoScribe AI streamlines your entire workflow with powerful integrations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group animate-fade-in"
              style={{ 
                animationDelay: `${index * 200}ms`,
                willChange: 'transform, opacity'
              }}
            >
              {/* Floating step number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                {step.step}
              </div>
              
              <div className="text-blue-400 font-bold text-sm mb-2 group-hover:text-blue-300 transition-colors duration-300">{step.step}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">{step.title}</h3>
              <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition-colors duration-300">{step.description}</p>
              <div className="text-xs text-slate-500 bg-slate-700/50 px-3 py-1 rounded-full inline-block group-hover:bg-slate-600/50 transition-colors duration-300">
                {step.tool}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
};