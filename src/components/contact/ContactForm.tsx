'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, User, Mail, MessageSquare, ClipboardList } from 'lucide-react';

export default function ContactForm() {
  const t = useTranslations('Contact.form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-12 rounded-3xl border border-white/20 relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-wiser-gold/5 rounded-full blur-3xl" />
      
      <h2 className="text-3xl font-bold text-wiser-dark-teal mb-8 relative z-10 flex items-center gap-3">
        <span className="w-10 h-10 rounded-xl bg-wiser-dark-teal/5 flex items-center justify-center text-wiser-gold">
          <MessageSquare size={20} />
        </span>
        {t('title')}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-wiser-dark-teal/70 px-1 flex items-center gap-2">
              <User size={14} className="text-wiser-gold" />
              {t('name')}
            </label>
            <input 
              required
              type="text" 
              placeholder="John Doe"
              className="w-full px-5 py-4 rounded-xl border border-wiser-dark-teal/10 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-wiser-gold/20 focus:border-wiser-gold transition-all duration-300" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-wiser-dark-teal/70 px-1 flex items-center gap-2">
              <Mail size={14} className="text-wiser-gold" />
              {t('email')}
            </label>
            <input 
              required
              type="email" 
              placeholder="john@example.com"
              className="w-full px-5 py-4 rounded-xl border border-wiser-dark-teal/10 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-wiser-gold/20 focus:border-wiser-gold transition-all duration-300" 
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-semibold text-wiser-dark-teal/70 px-1 flex items-center gap-2">
            <ClipboardList size={14} className="text-wiser-gold" />
            {t('subject')}
          </label>
          <input 
            required
            type="text" 
            placeholder="How can we help?"
            className="w-full px-5 py-4 rounded-xl border border-wiser-dark-teal/10 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-wiser-gold/20 focus:border-wiser-gold transition-all duration-300" 
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-wiser-dark-teal/70 px-1 flex items-center gap-2">
            <MessageSquare size={14} className="text-wiser-gold" />
            {t('message')}
          </label>
          <textarea 
            required
            rows={5} 
            placeholder="Tell us about your project..."
            className="w-full px-5 py-4 rounded-xl border border-wiser-dark-teal/10 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-wiser-gold/20 focus:border-wiser-gold transition-all duration-300 resize-none" 
          />
        </div>

        <button 
          disabled={isSubmitting}
          className="w-full group relative bg-wiser-dark-teal text-white font-bold py-5 rounded-xl transition-all duration-500 overflow-hidden hover:shadow-xl hover:shadow-wiser-dark-teal/20"
        >
          <div className="absolute inset-0 bg-wiser-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          <span className="relative flex items-center justify-center gap-2 group-hover:text-white transition-colors">
            {isSubmitting ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                {t('send')}
                <Send size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </span>
        </button>

        {isSuccess && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-600 font-medium text-center bg-green-50 py-3 rounded-lg border border-green-100"
          >
            {t('success')}
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}
