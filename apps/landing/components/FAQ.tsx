import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SectionTransition } from './SectionTransition';

export const FAQ = () => {
  const faqs = [
    {
      question: 'How does AutoScribe AI generate content?',
      answer: 'AutoScribe AI uses advanced language models trained on high-quality content to generate blog posts and email content that matches your brand voice and style. You can provide guidelines and examples to ensure consistency.'
    },
    {
      question: 'What makes the image optimization special?',
      answer: 'We integrate with PixelBin to provide AI-powered image optimization that automatically adjusts images for different devices, formats, and use cases while maintaining visual quality and reducing file sizes.'
    },
    {
      question: 'Can I customize the workflows?',
      answer: 'Yes! Using Boltic integration, you can create custom workflows for content approval, editing stages, scheduling, and delivery. Set up automated triggers and conditions that fit your team\'s process.'
    },
    {
      question: 'How reliable is the email delivery?',
      answer: 'Our platform maintains a 95%+ delivery success rate through optimized sending practices, proper authentication, and smart scheduling. We monitor deliverability and provide detailed analytics.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start. You can explore all features and see how AutoScribe AI fits your workflow.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer comprehensive support including documentation, video tutorials, email support, and for Professional/Enterprise plans, priority support and dedicated account management.'
    }
  ];

  return (
    <SectionTransition id="faq" className="py-20 px-6" delay={200}>
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-400">
            Everything you need to know about AutoScribe AI
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <div>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-slate-800/30 border border-slate-700 rounded-lg px-6 hover:bg-slate-800/50 hover:border-slate-600 transition-all duration-500 group animate-fade-in"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  willChange: 'transform, opacity'
                }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 group-hover:text-white transition-colors duration-300 relative">
                  {faq.question}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-6 group-hover:text-slate-300 transition-colors duration-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </div>
        </Accordion>
      </div>
    </SectionTransition>
  );
};