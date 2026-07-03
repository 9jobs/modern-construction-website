'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Award, CheckCircle, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { brand } from '../data/siteContent';

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    state: '',
    interest: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const interestParam = params.get('interest') || '';
      const titleParam = params.get('title') || '';
      const idParam = params.get('id') || '';
      const stateParam = params.get('state') || '';

      let mappedInterest = '';
      if (interestParam) {
        const lowerInterest = interestParam.toLowerCase();
        if (lowerInterest.includes('house') || lowerInterest.includes('hl') || lowerInterest === 'house-land') {
          mappedInterest = 'House & Land Pack';
        } else if (lowerInterest.includes('land') || lowerInterest === 'land-only') {
          mappedInterest = 'Land Only subdivision';
        } else if (lowerInterest.includes('renovated') || lowerInterest.includes('ren')) {
          mappedInterest = 'Renovated Home';
        } else if (lowerInterest.includes('develop') || lowerInterest.includes('dev') || lowerInterest === 'old-home') {
          mappedInterest = 'Develop Old Site';
        } else if (lowerInterest.includes('investment') || lowerInterest.includes('inv')) {
          mappedInterest = 'Investment Portfolio';
        } else if (
          lowerInterest.includes('construction') ||
          lowerInterest.includes('civil') ||
          lowerInterest.includes('display') ||
          lowerInterest.includes('visit') ||
          lowerInterest.includes('coordination')
        ) {
          mappedInterest = 'Property Coordination';
        }
      }

      let initialMessage = '';
      if (titleParam) {
        initialMessage = `Hi, I am interested in inquiring about: ${titleParam}${idParam ? ` (Ref: ${idParam})` : ''}. Please provide further details.`;
      }

      setFormData((prev) => ({
        ...prev,
        interest: mappedInterest || prev.interest,
        state: stateParam || prev.state,
        message: initialMessage || prev.message
      }));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
 
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        budget: '',
        state: '',
        interest: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };
 
  return (
    <div className="bg-white border border-brand-border rounded-2xl overflow-hidden shadow-premium font-sans grid grid-cols-1 lg:grid-cols-5 max-w-[1512px] mx-auto">
      
      {/* Contact Details Left Panel - Rethemed to light sand panel */}
      <div className="lg:col-span-2 p-8 bg-brand-sand/50 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-brand-border relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
        
        <div className="relative z-10 flex flex-col gap-6">
          <div>
            <span className="text-[10px] text-brand-primary font-bold tracking-widest uppercase block mb-1">CONNECT WITH Modern Properties</span>
            <h3 className="text-2xl font-serif text-brand-charcoal font-bold tracking-tight">
              Start your property acquisition or sales brief.
            </h3>
            <p className="text-xs text-brand-textMuted leading-relaxed mt-2">
              Whether you are submitting an estate for direct acquisition, looking for subdivided land allotments, searching for developed residential villas, or asking about coordinated renovation or development progress, our team is ready to respond.
            </p>
          </div>
 
          {/* Core Info list */}
          <div className="flex flex-col gap-4 text-xs text-brand-charcoal font-semibold">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-sand border border-brand-border flex items-center justify-center text-brand-primary">
                <Phone size={14} />
              </div>
              <div>
                <span className="text-[9px] text-brand-textMuted uppercase block font-bold">General Hotline</span>
                <a href={`tel:${brand.phone}`} className="hover:text-brand-primary transition-colors font-bold text-sm">{brand.phone}</a>
              </div>
            </div>
 
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-sand border border-brand-border flex items-center justify-center text-brand-primary">
                <Mail size={14} />
              </div>
              <div>
                <span className="text-[9px] text-brand-textMuted uppercase block font-bold">Corporate Enquiries</span>
                <a href={`mailto:${brand.email}`} className="hover:text-brand-primary transition-colors font-bold">{brand.email}</a>
              </div>
            </div>
 
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-sand border border-brand-border flex items-center justify-center text-brand-primary mt-0.5">
                <MapPin size={14} />
              </div>
              <div>
                <span className="text-[9px] text-brand-textMuted uppercase block font-bold">Headquarters</span>
                <span className="font-bold leading-normal">Melbourne VIC, 3000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials seals */}
        <div className="relative z-10 pt-8 border-t border-brand-border flex items-center gap-4 text-brand-textMuted text-[10px] font-semibold">
          <Award size={18} className="text-brand-primary flex-shrink-0" />
          <p className="leading-relaxed">
            Development and renovation work is coordinated through trusted third-party contractors and tracked with clear documentation.
          </p>
        </div>
      </div>

      {/* Form Input Right Panel - White Card */}
      <div className="lg:col-span-3 p-8 bg-white relative">
        <AnimatePresence>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white p-8 flex flex-col items-center justify-center text-center z-10"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600 mb-4 animate-pulse-blue">
                <CheckCircle size={32} />
              </div>
              <h4 className="font-serif text-2xl font-bold text-brand-charcoal mb-2">Enquiry Logged Successfully</h4>
              <p className="text-sm text-brand-textMuted max-w-sm leading-relaxed mb-6">
                Your request has been routed to our regional branch manager. We will review the property details and get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-brand-primary hover:bg-brand-secondary text-white py-2.5 px-6 rounded text-xs font-bold transition-all shadow"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs font-semibold text-brand-charcoal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-brand-textMuted uppercase font-bold tracking-wider">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Mitchell Johnson"
                className="bg-brand-sand border border-brand-border text-brand-charcoal rounded py-2.5 px-3.5 outline-none focus:border-brand-primary transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-brand-textMuted uppercase font-bold tracking-wider">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 0412 345 678"
                className="bg-brand-sand border border-brand-border text-brand-charcoal rounded py-2.5 px-3.5 outline-none focus:border-brand-primary transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Email */}
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-[10px] text-brand-textMuted uppercase font-bold tracking-wider">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. mitch@example.com.au"
                className="bg-brand-sand border border-brand-border text-brand-charcoal rounded py-2.5 px-3.5 outline-none focus:border-brand-primary transition-colors"
              />
            </div>

            {/* State */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-brand-textMuted uppercase font-bold tracking-wider">State</label>
              <select
                name="state"
                required
                value={formData.state}
                onChange={handleChange}
                className="bg-brand-sand border border-brand-border text-brand-charcoal rounded py-2.5 px-3 outline-none focus:border-brand-primary transition-colors"
              >
                <option value="">Select State</option>
                <option value="VIC">Victoria (VIC)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Budget */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-brand-textMuted uppercase font-bold tracking-wider">Target Budget</label>
              <select
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className="bg-brand-sand border border-brand-border text-brand-charcoal rounded py-2.5 px-3 outline-none focus:border-brand-primary transition-colors"
              >
                <option value="">Select Budget</option>
                <option value="Under $750k">Under $750k</option>
                <option value="$750k - $1.2M">$750k - $1.2M</option>
                <option value="$1.2M - $2.0M">$1.2M - $2.0M</option>
                <option value="$2.0M - $3.0M">$2.0M - $3.0M</option>
                <option value="Over $3.0M">Over $3.0M</option>
              </select>
            </div>

            {/* Interest */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-brand-textMuted uppercase font-bold tracking-wider">Interest Type</label>
              <select
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className="bg-brand-sand border border-brand-border text-brand-charcoal rounded py-2.5 px-3 outline-none focus:border-brand-primary transition-colors"
              >
                <option value="">Select Interest</option>
                <option value="House & Land Pack">House & Land Package</option>
                <option value="Land Only subdivision">Land Only deal</option>
                <option value="Renovated Home">Renovated home purchase</option>
                <option value="Develop Old Site">Selling old house / Site Dev</option>
                <option value="Investment Portfolio">High Yield Investment</option>
                <option value="Property Coordination">Property Development Coordination</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] text-brand-textMuted uppercase font-bold tracking-wider">Notes / Specific Location Requirements</label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. Looking for R30 subdividable block in Perth suburbs, or house designs for a 12.5m wide block..."
              className="bg-brand-sand border border-brand-border text-brand-charcoal rounded py-2.5 px-3.5 outline-none focus:border-brand-primary transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-3.5 rounded text-xs font-bold transition-all shadow hover:shadow-premium flex items-center justify-center gap-2 mt-2 focus:outline-none"
          >
            {loading ? 'Processing...' : 'Submit Enquiry Details'}
            <Send size={12} />
          </button>
        </form>
      </div>

    </div>
  );
};
