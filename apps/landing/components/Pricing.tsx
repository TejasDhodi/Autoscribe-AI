import { Button } from '@/components/ui/button';
import { SectionTransition } from './SectionTransition';

export const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams getting started',
      features: [
        '10 AI-generated blogs/month',
        'Basic image optimization',
        'Email delivery up to 1,000 subscribers',
        'Basic analytics',
        'Standard support'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing marketing teams',
      features: [
        '50 AI-generated blogs/month',
        'Advanced image optimization with PixelBin',
        'Email delivery up to 10,000 subscribers',
        'Advanced analytics & reporting',
        'Workflow automation with Boltic',
        'QA checks with Ratl',
        'Priority support'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited AI-generated content',
        'Custom integrations',
        'Unlimited email delivery',
        'White-label solutions',
        'Custom workflows',
        'Dedicated account manager',
        '24/7 premium support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <SectionTransition id="pricing" className="py-20 px-6 bg-slate-900/30 relative overflow-hidden" delay={200}>
      {/* Animated pricing background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Choose the plan that fits your team's needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-xl border transition-all duration-700 hover:scale-105 hover:shadow-2xl group cursor-pointer animate-fade-in ${
                plan.popular
                  ? 'border-blue-500 bg-slate-800/50 scale-105 shadow-xl shadow-blue-500/20'
                  : 'border-slate-700 bg-slate-800/30 hover:border-slate-600 hover:shadow-purple-500/10'
              }`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                willChange: 'transform, opacity'
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: `${index * 200 + 300}ms` }}>
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium animate-pulse">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors duration-300">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold group-hover:text-white transition-colors duration-300">{plan.price}</span>
                  <span className="text-slate-400 ml-1 group-hover:text-slate-300 transition-colors duration-300">{plan.period}</span>
                </div>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-start animate-fade-in"
                    style={{ animationDelay: `${index * 200 + featureIndex * 50}ms` }}
                  >
                    <span className="text-green-400 mr-3 mt-0.5 transition-transform duration-300 group-hover:scale-110">✓</span>
                    <span className="text-slate-300 text-sm group-hover:text-white transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full transform hover:scale-105 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
};
