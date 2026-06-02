'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Send } from 'lucide-react';
import { ScrollAnimate, StaggerContainer, StaggerItem } from './ScrollReveal';
import { motion } from 'framer-motion';

const footerGroups = [
  {
    title: 'Build',
    links: [
      { label: 'Home Designs', href: '/home-designs' },
      { label: 'House & Land', href: '/house-and-land' },
      { label: 'Display Homes', href: '/display-homes' },
      { label: 'Build with Modern-Property', href: '/build-with-aura' },
    ],
  },
  {
    title: 'Buy',
    links: [
      { label: 'First Home Buyers', href: '/first-home-buyers' },
      { label: 'Current Offers', href: '/current-offers' },
      { label: 'Properties', href: '/properties' },
      { label: 'Land Estates', href: '/land-estates' },
    ],
  },
  {
    title: 'Develop',
    links: [
      { label: 'Knockdown Rebuild', href: '/knockdown-rebuild' },
      { label: 'Development Sites', href: '/development-sites' },
      { label: 'Development Projects', href: '/development-projects' },
      { label: 'Investment Properties', href: '/investment-properties' },
      { label: 'Construction Services', href: '/construction-services' },
    ],
  },
  {
    title: 'Modern-Property',
    links: [
      { label: 'Style Inspiration', href: '/style-inspiration' },
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Customer Portal', href: '/customer-portal' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    window.setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="border-t border-[#DADDE2] bg-white pb-24 pt-8 font-sans text-[#071d38] md:pb-10">
      <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
        <ScrollAnimate variant="fadeUp" duration={0.8}>
          <div className="flex flex-col gap-5 border-b border-[#DADDE2] pb-7 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-xl font-bold leading-tight">Stay close to new Modern-property releases</h2>
              <p className="mt-2 max-w-xl text-xs font-medium leading-5 text-[#667085]">
                Get local residential, commercial, subdivision, and property development updates before major public release windows.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="relative w-full max-w-sm">
              <input
                type="email"
                value={email}
                required
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="h-10 w-full border border-[#DADDE2] bg-[#F8FBFD] px-3 pr-11 text-xs font-semibold outline-none transition-colors placeholder:text-[#667085] focus:border-[#1C4D8C] focus:bg-white"
              />
              <motion.button
                type="submit"
                aria-label="Subscribe"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center bg-[#0B2341] text-white hover:bg-[#1C4D8C] transition-colors"
              >
                {subscribed ? <CheckCircle size={15} /> : <Send size={15} />}
              </motion.button>
              {subscribed ? <p className="mt-2 text-[11px] font-bold text-[#1C4D8C]">Subscribed to Modern-property updates.</p> : null}
            </form>
          </div>
        </ScrollAnimate>

        <StaggerContainer className="grid grid-cols-2 gap-7 border-b border-[#DADDE2] py-8 md:grid-cols-4">
          {footerGroups.map((group) => (
            <StaggerItem key={group.title} variant="fadeUp">
              <h3 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#071d38]">{group.title}</h3>
              <ul className="mt-4 space-y-2.5 text-xs font-semibold text-[#41556B]">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-[#1C4D8C] hover:underline transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollAnimate variant="fadeUp" duration={0.8} delay={0.1}>
          <div className="flex flex-col gap-6 py-7 md:flex-row md:items-start md:justify-between">
            <div>
              <Link href="/" className="inline-flex flex-col group">
                <span className="font-serif text-2xl font-extrabold leading-none tracking-wide text-[#071d38] group-hover:text-[#1C4D8C] transition-colors">Modern-Property</span>
                <span className="mt-0.5 text-[7px] font-extrabold uppercase tracking-[0.32em] text-[#667085]">Acquisitions & Developments</span>
              </Link>
              <p className="mt-4 max-w-2xl text-[10px] font-medium leading-5 text-[#667085]">
                Copyright {new Date().getFullYear()} Modern-Property Developments & Construction Pty Ltd. Property availability,
                acquisition details, construction timing, design options, and investment yields are subject to independent verification and local approvals.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <motion.a 
                href="#" 
                aria-label="Facebook" 
                whileHover={{ scale: 1.1, borderColor: '#1C4D8C', color: '#1C4D8C' }}
                whileTap={{ scale: 0.95 }}
                className="flex h-8 w-8 items-center justify-center border border-[#DADDE2] text-[#071d38] hover:border-[#1C4D8C] hover:text-[#1C4D8C] transition-colors"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 8H6v4h3v12h5V12h3.6L18 8h-4V6.3c0-1 .2-1.3 1.1-1.3H18V0h-3.8C10.6 0 9 1.6 9 4.6V8z" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="Instagram" 
                whileHover={{ scale: 1.1, borderColor: '#1C4D8C', color: '#1C4D8C' }}
                whileTap={{ scale: 0.95 }}
                className="flex h-8 w-8 items-center justify-center border border-[#DADDE2] text-[#071d38] hover:border-[#1C4D8C] hover:text-[#1C4D8C] transition-colors"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.2.1 4.8 1.7 4.9 4.9.1 1.3.1 1.7.1 4.8s0 3.6-.1 4.9c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-3.2-.1-4.8-1.7-4.9-4.9C2.1 15.6 2.1 15.2 2.1 12s0-3.6.1-4.9C2.3 3.9 3.9 2.3 7.1 2.2 8.4 2.2 8.8 2.2 12 2.2zM12 .2C8.7.2 8.3.2 7 .3 2.6.5.5 2.6.3 7 .2 8.3.2 8.7.2 12s0 3.7.1 5c.2 4.4 2.3 6.5 6.7 6.7 1.3.1 1.7.1 5 .1s3.7 0 5-.1c4.4-.2 6.5-2.3 6.7-6.7.1-1.3.1-1.7.1-5s0-3.7-.1-5C23.5 2.6 21.4.5 17 .3 15.7.2 15.3.2 12 .2zm0 5.8a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="LinkedIn" 
                whileHover={{ scale: 1.1, borderColor: '#1C4D8C', color: '#1C4D8C' }}
                whileTap={{ scale: 0.95 }}
                className="flex h-8 w-8 items-center justify-center border border-[#DADDE2] text-[#071d38] hover:border-[#1C4D8C] hover:text-[#1C4D8C] transition-colors"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM5 8H0v16h5V8zm8 0H8v16h5v-8.4c0-4.7 6-5 6 0V24h5V13.9c0-7.9-8.9-7.6-11-3.7V8z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </ScrollAnimate>

        <ScrollAnimate variant="fadeIn" duration={0.8} delay={0.2} className="border-t border-[#DADDE2] pt-4 text-[9px] font-medium leading-5 text-[#667085]">
          Images, facades, inclusions, floorplans, and land references are indicative only. Finance, grant, stamp duty,
          planning, and investment matters should be checked with qualified local advisors.
        </ScrollAnimate>
      </div>
    </footer>
  );
};
