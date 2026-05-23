import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Send, Mail, MapPin, Phone, CheckCircle, Smartphone, Linkedin, Github, Sparkles, AlertCircle } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export interface ContactRef {
  prefillMessage: (serviceName: string) => void;
}

const Contact = forwardRef<ContactRef, ContactProps>(({ darkMode }, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  // Expose prefilling method to Services CTAs
  useImperativeHandle(ref, () => ({
    prefillMessage(serviceName: string) {
      setFormData({
        name: formData.name,
        email: formData.email,
        subject: `Inquiry: ${serviceName} Services`,
        message: `Hi Sharmin,\n\nI was browsing your responsive portfolio website and am interested in requesting your expert consultation on "${serviceName}". Let's arrange a slot to discuss requirements!\n\nBest regards.`
      });
      // Scroll to contact form smoothly
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('⚠️ Missing criteria. Please fill out Name, Email, and Message.');
      return;
    }

    setStatus('sending');
    // Simulate API request delay
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus('idle');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <span className="text-xs font-mono tracking-widest text-purple-500 uppercase font-bold bg-purple-500/10 px-3 py-1 rounded-full">
            07 . Collaborate
          </span>
          <h3 className={`text-3xl sm:text-4xl font-display font-extrabold mt-3 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            Contact with Me
          </h3>
          <p className={`text-sm mt-3 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-neutral-600'}`}>
            Initiate automated consultation slots, submit requests, and establish digital project scope.
          </p>
        </div>

        {/* Contact Layout Dual splitting */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left panel: Info matrices & Cyber Dhaka vector chart */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className={`p-6 rounded-3xl border text-left flex-1 flex flex-col justify-between space-y-6 ${
              darkMode ? 'glass-card-dark' : 'glass-card-light'
            }`}>
              
              <div className="space-y-4">
                {/* Active Availability indicator */}
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full w-fit">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold">
                    AVAILABLE FROM JULY 2026
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className={`text-xl font-display font-bold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                    UI/UX • QA • Automation
                  </h4>
                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-gray-400' : 'text-neutral-600'}`}>
                    Passionate about designing, testing, and building intelligent digital products that combine creativity, usability, and technical excellence.
                  </p>
                </div>
              </div>

              {/* Channels row info */}
              <div className="space-y-3 pt-4 border-t border-neutral-700/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-gray-400 block">Direct Mailbox</span>
                    <a href="mailto:sharminliza1510@gmail.com" className={`text-xs font-semibold ${darkMode ? 'text-white hover:underline' : 'text-neutral-900 hover:text-purple-650'}`}>
                      sharminliza1510@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Smartphone size={16} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-gray-400 block">WhatsApp Telephony</span>
                    <a href="https://wa.me/8801700000000" target="_blank" rel="noreferrer" className={`text-xs font-semibold ${darkMode ? 'text-white hover:underline' : 'text-neutral-900 hover:text-emerald-500'}`}>
                      +8801645757481 (Contact via whatsup)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-gray-400 block">Coordinates Position</span>
                    <span className={`text-xs font-semibold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                      Mirpur, Dhaka, Bangladesh
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Modern glassmorphic form handler */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border h-full flex flex-col justify-center ${
              darkMode ? 'glass-card-dark' : 'glass-card-light'
            }`}>
              {status === 'idle' && (
                <form id="portfolio-contact-form" onSubmit={handleFormSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className={`text-[10px] font-mono uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-neutral-500'} font-bold`}>
                        Sharmin Sultana Liza
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Sharmin S. Liza"
                        className={`w-full text-xs p-3 rounded-xl border outline-none transition-all ${
                          darkMode
                            ? 'bg-neutral-900 border-white/5 text-white placeholder-gray-500 focus:border-purple-500/50'
                            : 'bg-neutral-50 border-black/10 text-neutral-900 placeholder-neutral-400 focus:border-purple-650/50'
                        }`}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className={`text-[10px] font-mono uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-neutral-500'} font-bold`}>
                        sharminliza1510@gmail.com
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="liza.collaborate@gmail.com"
                        className={`w-full text-xs p-3 rounded-xl border outline-none transition-all ${
                          darkMode
                            ? 'bg-neutral-900 border-white/5 text-white placeholder-gray-500 focus:border-purple-500/50'
                            : 'bg-neutral-50 border-black/10 text-neutral-900 placeholder-neutral-400 focus:border-purple-650/50'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className={`text-[10px] font-mono uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-neutral-500'} font-bold`}>
                      Subject (Inquiry Domain)
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="UI/UX Redesign & PyTorch Adapters consultation"
                      className={`w-full text-xs p-3 rounded-xl border outline-none transition-all ${
                        darkMode
                          ? 'bg-neutral-900 border-white/5 text-white placeholder-gray-500 focus:border-purple-500/50'
                          : 'bg-neutral-50 border-black/10 text-neutral-900 placeholder-neutral-400 focus:border-purple-650/50'
                      }`}
                    />
                  </div>

                  <div className="space-y-1 font-sans">
                    <label className={`text-[10px] font-mono uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-neutral-500'} font-bold`}>
                      Detailed Specifications *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Provide outline of scope milestones, automated regression parameters, or university collaboration terms."
                      className={`w-full text-xs p-3 rounded-xl border outline-none transition-all ${
                        darkMode
                          ? 'bg-neutral-900 border-white/5 text-white placeholder-gray-500 focus:border-purple-500/50 font-sans'
                          : 'bg-neutral-50 border-black/10 text-neutral-900 placeholder-neutral-400 focus:border-purple-650/50 font-sans'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white font-mono text-xs font-bold tracking-wider hover:opacity-95 shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send size={14} />
                    Send Message
                  </button>
                </form>
              )}

              {/* Status Loader during simulated submit */}
              {status === 'sending' && (
                <div className="py-16 text-center space-y-4 select-none">
                  <div className="w-12 h-12 rounded-full border-4 border-purple-500 border-t-transparent animate-spin mx-auto" />
                  <p className={`text-xs font-mono tracking-widest uppercase text-purple-400 animate-pulse`}>
                    ENCRYPTING SECURE ROUTING GATEWAYS...
                  </p>
                  <p className={`text-[10px] font-mono text-gray-500`}>
                    Please hold... connecting to sharminliza1510@gmail.com mailing routes.
                  </p>
                </div>
              )}

              {/* Inquiry Success state card layout */}
              {/* Inquiry Success state card layout */}
{status === 'success' && (
  <div className="py-10 text-center space-y-6 select-none">
    
    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
      <CheckCircle size={32} />
    </div>

    <div className="space-y-2">
      <span className="text-[9px] font-mono bg-emerald-500/10 text-emerald-400 px-2 rounded">
        STATUS CODE: 200 SUCCESS
      </span>

      <h4
        className={`text-xl font-display font-extrabold ${
          darkMode ? 'text-white' : 'text-neutral-900'
        }`}
      >
        Message Sent Successfully!
      </h4>

      <p
        className={`text-xs leading-relaxed max-w-md mx-auto ${
          darkMode ? 'text-gray-300' : 'text-neutral-600'
        }`}
      >
        Thank you for reaching out. Your message has been received successfully.
      </p>

      <p className="text-[10px] font-mono text-purple-400 italic">
        I’ll get back to you as soon as possible.
      </p>
    </div>

    <button
      onClick={handleResetForm}
      className="px-4 py-2 rounded-xl text-xs font-mono bg-purple-600 hover:bg-purple-700 text-white cursor-pointer transition-colors"
    >
      SEND ANOTHER MESSAGE
    </button>
  </div>
)}
              {/* {status === 'success' && (
                <div className="py-10 text-center space-y-6 select-none animate-float-slow">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle size={32} className="animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono bg-emerald-500/10 text-emerald-400 px-2 rounded">
                      STATUS CODE: 200 SUCCESS
                    </span>
                    <h4 className={`text-xl font-display font-extrabold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                      Inquiry Ticket Lodged!
                    </h4>
                    <p className={`text-xs leading-relaxed max-w-md mx-auto ${darkMode ? 'text-gray-300' : 'text-neutral-600'}`}>
                      Thank you for matching requirements. Your consultation form has been successfully formatted and logged inside Liza's communication terminal queue.
                    </p>
                    <p className="text-[10px] font-mono text-purple-400 italic">
                      Liza will contact you via your provided email within 12 standard business hours.
                    </p>
                  </div>
                  <button
                    onClick={handleResetForm}
                    className="px-4 py-2 rounded-xl text-xs font-mono bg-purple-650 hover:bg-purple-700 text-white cursor-pointer"
                  >
                    SUBMIT ANOTHER MESSAGE
                  </button>
                </div>
              )} */}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
