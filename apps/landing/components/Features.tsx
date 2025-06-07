import { SectionTransition } from './SectionTransition';

export const Features = () => {
  const features = [
    {
      title: 'AI Content Generation',
      description: 'Create engaging blog posts and email content with our advanced AI engine that understands your brand voice.',
      icon: '🤖'
    },
    {
      title: 'Image Optimization',
      description: 'Automatically optimize images with PixelBin for perfect performance and loading speeds.',
      icon: '🖼️'
    },
    {
      title: 'Workflow Orchestration',
      description: 'Automate your entire content pipeline with Boltic, from creation to delivery.',
      icon: '⚡'
    },
    {
      title: 'Quality Assurance',
      description: 'Built-in QA checks with Ratl ensure your content meets the highest standards.',
      icon: '✅'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track open rates, click-through rates, and delivery success with comprehensive analytics.',
      icon: '📊'
    },
    {
      title: 'Email Integration',
      description: 'Seamlessly deliver content to your email audience with automated scheduling.',
      icon: '📧'
    }
  ];

  return (
    <SectionTransition id="features" className="py-20 px-6 bg-slate-900/30 relative overflow-hidden" delay={200}>
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Powerful features designed to streamline your content creation and delivery process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-700 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group cursor-pointer animate-fade-in"
              style={{ 
                animationDelay: `${index * 100}ms`,
                willChange: 'transform, opacity'
              }}
            >
              <div className="text-3xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 origin-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">{feature.title}</h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{feature.description}</p>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
};