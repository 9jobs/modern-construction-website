'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Calendar, ChevronDown, Heart, Menu, Phone, Search, User, X, MapPin } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { AustralianState, useProperties } from '../context/PropertyContext';

const REGIONS = [
  { label: 'Melbourne', stateCode: 'VIC' as AustralianState },
  { label: 'Sydney', stateCode: 'NSW' as AustralianState },
  { label: 'Brisbane', stateCode: 'QLD' as AustralianState },
  { label: 'Adelaide', stateCode: 'SA' as AustralianState },
  { label: 'Perth', stateCode: 'WA' as AustralianState },
  { label: 'Australia', stateCode: 'ALL' as AustralianState },
];

const NAV_LINKS = [
  { name: 'Home Designs', href: '/home-designs' },
  { name: 'Display Homes', href: '/display-homes' },
  { name: 'House & Land', href: '/house-and-land' },
  { name: 'Style Inspiration', href: '/style-inspiration' },
  { name: 'Build with Modern-Property', href: '/build-with-aura' },
  { name: 'More', href: '/current-offers' },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const { savedProperties, selectedState, setSelectedState } = useProperties();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;

      setScrolled(currentScrollY > 24);
      setNavHidden(scrollingDown && currentScrollY > 140 && !isOpen);
      lastScrollY = Math.max(currentScrollY, 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const currentRegionLabel = REGIONS.find((region) => region.stateCode === selectedState)?.label || 'Australia';

  const handleRegionSelect = (stateCode: AustralianState) => {
    setSelectedState(stateCode);
    setIsRegionDropdownOpen(false);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const query = searchQuery.trim();
    router.push(query ? `/properties?search=${encodeURIComponent(query)}` : '/properties');
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-50 bg-white font-sans text-[#071d38]"
    >
      <div className="border-t-2 border-brand-yellow bg-[#F8FBFD] text-[10px] font-bold">
        <div className="mx-auto flex max-w-[1512px] items-center justify-between gap-3 px-4 py-1.5 sm:px-6">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsRegionDropdownOpen((value) => !value)}
              className="inline-flex items-center gap-1.5 text-[#071d38] hover:text-[#1C4D8C]"
            >
              <MapPin size={12} className="text-[#1C4D8C]" />
              <span>Build in {currentRegionLabel}</span>
              <ChevronDown size={12} className={`transition-transform ${isRegionDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isRegionDropdownOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  className="absolute left-0 top-6 w-44 border border-[#DADDE2] bg-white shadow-lg"
                >
                  {REGIONS.map((region) => (
                    <button
                      key={region.stateCode}
                      type="button"
                      onClick={() => handleRegionSelect(region.stateCode)}
                      className={`flex w-full items-center justify-between px-3 py-2 text-left text-[11px] hover:bg-[#F4F8FB] ${
                        selectedState === region.stateCode ? 'text-[#1C4D8C]' : 'text-[#071d38]'
                      }`}
                    >
                      <span>{region.label}</span>
                      <span className="font-mono text-[9px] text-[#667085]">{region.stateCode === 'ALL' ? 'AUS' : region.stateCode}</span>
                    </button>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <div className="hidden items-center gap-4 text-[#071d38] sm:flex">
            <a href="tel:130000MODERNPROPERTY" className="inline-flex items-center gap-1 hover:text-[#1C4D8C]">
              <Phone size={12} />
              1300 00 MODERN-PROPERTY
            </a>
            <Link href="/customer-portal" className="inline-flex items-center gap-1 hover:text-[#1C4D8C]">
              <User size={12} />
              Login
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b border-[#DADDE2] bg-white">
        <div className="mx-auto flex max-w-[1512px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="shrink-0">
            <span className="block font-serif text-2xl font-extrabold leading-none tracking-wide text-[#071d38] md:text-[1.7rem]">
              Modern-Property
            </span>
            <span className="mt-0.5 block text-[7px] font-extrabold uppercase tracking-[0.32em] text-[#667085]">
              Acquisitions & Developments
            </span>
          </Link>

          <form onSubmit={handleSearchSubmit} className="relative hidden min-w-0 flex-1 md:block">
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search acquired sites, developments, or portfolios"
              className="h-9 w-full border border-[#DADDE2] bg-[#F8FBFD] px-3 pr-9 text-[11px] font-semibold text-[#071d38] outline-none transition-colors placeholder:text-[#667085] focus:border-[#1C4D8C] focus:bg-white"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-1 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center text-[#071d38] hover:text-[#1C4D8C]"
            >
              <Search size={15} />
            </button>
          </form>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/properties?saved=true"
              className="inline-flex h-9 items-center gap-1 border border-[#DADDE2] px-3 text-[11px] font-extrabold hover:border-[#1C4D8C]"
            >
              <Heart size={14} className={savedProperties.length > 0 ? 'fill-[#1C4D8C] text-[#1C4D8C]' : ''} />
              Saved ({savedProperties.length})
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center bg-[#0B2341] px-4 text-[11px] font-extrabold text-white hover:bg-[#1C4D8C]"
            >
              Enquire
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center border border-[#DADDE2] text-[#071d38] md:hidden"
            aria-label="Open menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <motion.nav 
        animate={{ 
          y: navHidden ? '-100%' : '0%',
          opacity: navHidden ? 0.96 : 1,
          boxShadow: scrolled ? '0 14px 34px -18px rgba(7, 29, 56, 0.18)' : '0 0px 0px rgba(0,0,0,0)',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 1)',
          backdropFilter: scrolled ? 'blur(14px)' : 'blur(0px)'
        }}
        transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
        className={`hidden border-b border-[#DADDE2] bg-white will-change-transform md:block ${scrolled ? 'sticky top-0 shadow-sm' : ''}`}
      >
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <motion.ul 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.1
                }
              }
            }}
            className="flex items-center justify-center gap-1 text-[11px] font-extrabold text-[#071d38]"
          >
            {NAV_LINKS.map((link) => (
              <motion.li 
                key={link.href}
                variants={{
                  hidden: { opacity: 0, y: -8 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={link.href}
                  className={`block px-4 py-3 transition-colors duration-200 hover:text-[#1C4D8C] ${
                    pathname === link.href ? 'text-[#1C4D8C] underline decoration-brand-yellow decoration-2 underline-offset-[14px]' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-[#DADDE2] bg-white md:hidden"
          >
            <div className="px-4 py-4">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search Modern-Property"
                  className="h-10 w-full border border-[#DADDE2] bg-[#F8FBFD] px-3 pr-10 text-xs font-semibold outline-none"
                />
                <button type="submit" aria-label="Search" className="absolute right-2 top-1/2 -translate-y-1/2 text-[#071d38]">
                  <Search size={16} />
                </button>
              </form>
              <ul className="mt-4 divide-y divide-[#E8EDF2] text-xs font-extrabold text-[#071d38]">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 ${pathname === link.href ? 'text-[#1C4D8C]' : ''}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] font-extrabold text-[#071d38]">
                <a href="tel:130000MODERNPROPERTY" className="border border-[#DADDE2] py-2">
                  <Phone size={14} className="mx-auto mb-1" />
                  Call
                </a>
                <Link href="/contact?interest=Display" className="border border-[#DADDE2] py-2">
                  <Calendar size={14} className="mx-auto mb-1" />
                  Visit
                </Link>
                <Link href="/properties?saved=true" className="border border-[#DADDE2] py-2">
                  <Heart size={14} className="mx-auto mb-1" />
                  Saved
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
};
