import { SectionTransition } from './SectionTransition';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "AutoScribe AI transformed our content strategy. We're now publishing 3x more content with better engagement rates.",
      author: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Inc."
    },
    {
      quote: "The automation workflows saved us 20 hours per week. The quality is consistently excellent.",
      author: "Michael Rodriguez",
      role: "Content Manager",
      company: "Digital Dynamics"
    },
    {
      quote: "Our email open rates increased by 45% since using AutoScribe AI. The AI-generated content really resonates.",
      author: "Emily Watson",
      role: "Growth Marketing Lead",
      company: "StartupBoost"
    }
  ];

  return (
    <SectionTransition className="py-20 px-6 relative" delay={200}>
      {/* Floating testimonial bubbles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-emerald-400/20 rounded-full animate-float`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Teams Worldwide</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            See what our customers are saying about their experience with AutoScribe AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-700 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10 group cursor-pointer animate-fade-in"
              style={{ 
                animationDelay: `${index * 250}ms`,
                willChange: 'transform, opacity'
              }}
            >
              {/* Quote marks */}
              <div className="text-4xl text-emerald-400/30 font-serif leading-none mb-4 group-hover:text-emerald-400/50 transition-colors duration-300">"</div>
              
              <div className="text-slate-300 mb-6 text-lg leading-relaxed group-hover:text-white transition-colors duration-300 relative">
                {testimonial.quote}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 group-hover:w-full transition-all duration-500"></div>
              </div>
              <div>
                <div className="font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">{testimonial.author}</div>
                <div className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">{testimonial.role}</div>
                <div className="text-slate-500 text-sm group-hover:text-slate-400 transition-colors duration-300">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
};