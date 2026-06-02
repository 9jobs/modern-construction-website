'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, SlidersHorizontal, RotateCcw, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AustralianState, useProperties } from '../context/PropertyContext';

const TABS = [
  { id: 'house-land', label: 'House & Land' },
  { id: 'house-designs', label: 'House Designs' },
  { id: 'display', label: 'Display Homes' },
  { id: 'land-only', label: 'Buy Land' },
  { id: 'renovated', label: 'Completed Homes' },
  { id: 'old-home', label: 'Development Sites' },
  { id: 'investment', label: 'Investments' },
];

export const QuickSearch: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setSearchFilters, resetFilters } = useProperties();

  // Local state for search filters matching Metricon guidelines
  const [activeTab, setActiveTab] = useState(searchParams.get('type') || 'house-land');
  const [state, setState] = useState<AustralianState>((searchParams.get('state') as AustralianState) || 'ALL');
  const [suburb, setSuburb] = useState(searchParams.get('suburb') || searchParams.get('search') || '');
  const [budget, setBudget] = useState(searchParams.get('budget') || '');
  const [bedrooms, setBedrooms] = useState(searchParams.get('bedrooms') || '');
  const [bathrooms, setBathrooms] = useState(searchParams.get('bathrooms') || '');
  const [landSize, setLandSize] = useState(searchParams.get('landSize') || '');
  const [buildStatus, setBuildStatus] = useState(searchParams.get('buildStatus') || 'ALL');
  const [showMobileDrawer, setShowMobileDrawer] = useState(false);

  // Sync local state with URL search params when they change
  useEffect(() => {
    setActiveTab(searchParams.get('type') || 'house-land');
    setState((searchParams.get('state') as AustralianState) || 'ALL');
    setSuburb(searchParams.get('suburb') || searchParams.get('search') || '');
    setBudget(searchParams.get('budget') || '');
    setBedrooms(searchParams.get('bedrooms') || '');
    setBathrooms(searchParams.get('bathrooms') || '');
    setLandSize(searchParams.get('landSize') || '');
    setBuildStatus(searchParams.get('buildStatus') || 'ALL');
  }, [searchParams]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'house-designs') {
      router.push('/house-designs');
    }
  };

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    // Update context filters directly for instant, reliable UI response
    setSearchFilters({
      state,
      suburb: suburb.trim(),
      type: activeTab,
      minPrice: '',
      maxPrice: budget,
      bedrooms,
      minLand: landSize,
      buildStatus
    });
    
    const params = new URLSearchParams();
    if (activeTab) params.set('type', activeTab);
    if (state !== 'ALL') params.set('state', state);
    if (suburb.trim()) params.set('suburb', suburb.trim());
    if (budget) params.set('budget', budget);
    if (bedrooms) params.set('bedrooms', bedrooms);
    if (bathrooms) params.set('bathrooms', bathrooms);
    if (landSize) params.set('landSize', landSize);
    if (buildStatus !== 'ALL') params.set('buildStatus', buildStatus);

    router.push(`/properties?${params.toString()}`);
    setShowMobileDrawer(false);
  };

  const handleReset = () => {
    setState('ALL');
    setSuburb('');
    setBudget('');
    setBedrooms('');
    setBathrooms('');
    setLandSize('');
    setBuildStatus('ALL');
    resetFilters();
  };

  return (
    <div className="bg-white border border-[#DADDE2] rounded-none p-4 md:p-6 w-full font-sans shadow-xs">
      {/* 1. FILTER TABS (Metricon layout) */}
      <div className="flex overflow-x-auto gap-1 pb-4 border-b border-[#DADDE2] mb-6 scrollbar-none">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap focus:outline-none ${
              activeTab === tab.id
                ? 'bg-[#0B2341] text-white shadow-xs'
                : 'bg-[#F5F6F8] text-[#222222] hover:bg-[#DADDE2]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 2. DESKTOP FILTER ROW (Horizontal layout) */}
      <form onSubmit={handleSearchSubmit} action="/properties" method="get" className="hidden lg:grid grid-cols-8 gap-4 items-end">
        <input type="hidden" name="type" value={activeTab} />
        {/* State Selection */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] text-[#667085] uppercase font-extrabold tracking-wider">State</label>
          <select
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value as AustralianState)}
            className="w-full bg-[#F5F6F8] border border-[#DADDE2] text-[#222222] text-xs py-2.5 px-3 font-semibold outline-none focus:border-[#1C4D8C] focus:bg-white transition-colors"
          >
            <option value="ALL">All Victoria</option>
            <option value="VIC">Victoria (VIC)</option>
          </select>
        </div>

        {/* Suburb Search */}
        <div className="flex flex-col gap-1.5 col-span-1">
          <label className="text-[9px] text-[#667085] uppercase font-extrabold tracking-wider">Suburb</label>
          <input
            type="text"
            name="suburb"
            placeholder="e.g. Box Hill"
            value={suburb}
            onChange={(e) => setSuburb(e.target.value)}
            className="w-full bg-[#F5F6F8] border border-[#DADDE2] text-[#222222] text-xs py-2.5 px-3 font-semibold outline-none focus:border-[#1C4D8C] focus:bg-white transition-colors placeholder-gray-400"
          />
        </div>

        {/* Budget */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] text-[#667085] uppercase font-extrabold tracking-wider">Max Budget</label>
          <select
            name="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full bg-[#F5F6F8] border border-[#DADDE2] text-[#222222] text-xs py-2.5 px-3 font-semibold outline-none focus:border-[#1C4D8C] focus:bg-white transition-colors"
          >
            <option value="">No Max</option>
            <option value="500000">$500k</option>
            <option value="750000">$750k</option>
            <option value="1000000">$1.0M</option>
            <option value="1500000">$1.5M</option>
            <option value="2000000">$2.0M</option>
            <option value="2500000">$2.5M</option>
            <option value="3000000">$3.0M+</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] text-[#667085] uppercase font-extrabold tracking-wider">Bedrooms</label>
          <select
            name="bedrooms"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full bg-[#F5F6F8] border border-[#DADDE2] text-[#222222] text-xs py-2.5 px-3 font-semibold outline-none focus:border-[#1C4D8C] focus:bg-white transition-colors"
          >
            <option value="">Any</option>
            <option value="3">3+ Bed</option>
            <option value="4">4+ Bed</option>
            <option value="5">5+ Bed</option>
          </select>
        </div>

        {/* Bathrooms */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] text-[#667085] uppercase font-extrabold tracking-wider">Bathrooms</label>
          <select
            name="bathrooms"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            className="w-full bg-[#F5F6F8] border border-[#DADDE2] text-[#222222] text-xs py-2.5 px-3 font-semibold outline-none focus:border-[#1C4D8C] focus:bg-white transition-colors"
          >
            <option value="">Any</option>
            <option value="2">2+ Bath</option>
            <option value="3">3+ Bath</option>
            <option value="4">4+ Bath</option>
          </select>
        </div>

        {/* Land Size */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] text-[#667085] uppercase font-extrabold tracking-wider">Min Land</label>
          <select
            name="landSize"
            value={landSize}
            onChange={(e) => setLandSize(e.target.value)}
            className="w-full bg-[#F5F6F8] border border-[#DADDE2] text-[#222222] text-xs py-2.5 px-3 font-semibold outline-none focus:border-[#1C4D8C] focus:bg-white transition-colors"
          >
            <option value="">Any</option>
            <option value="300">300sqm+</option>
            <option value="400">400sqm+</option>
            <option value="500">500sqm+</option>
            <option value="600">600sqm+</option>
          </select>
        </div>

        {/* Build Status */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] text-[#667085] uppercase font-extrabold tracking-wider">Build Status</label>
          <select
            name="buildStatus"
            value={buildStatus}
            onChange={(e) => setBuildStatus(e.target.value)}
            className="w-full bg-[#F5F6F8] border border-[#DADDE2] text-[#222222] text-xs py-2.5 px-3 font-semibold outline-none focus:border-[#1C4D8C] focus:bg-white transition-colors"
          >
            <option value="ALL">Any Stage</option>
            <option value="Completed">Completed</option>
            <option value="Under Construction">Under Construction</option>
            <option value="Ready to Build">Ready to Build</option>
            <option value="Subdivided">Titled Land</option>
            <option value="Renovated">Renovated</option>
          </select>
        </div>

        {/* Search & Reset Actions */}
        <div className="flex gap-2 font-bold w-full">
          <button
            onClick={handleReset}
            type="button"
            className="flex-1 bg-[#F5F6F8] hover:bg-[#DADDE2] text-[#222222] py-2.5 rounded-none text-xs flex items-center justify-center gap-1.5 transition-colors focus:outline-none border border-[#DADDE2]"
            title="Reset Filters"
          >
            <RotateCcw size={13} />
          </button>
          
          <button
            type="submit"
            className="flex-grow bg-[#0B2341] hover:bg-[#1C4D8C] text-white py-2.5 rounded-none text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-xs"
          >
            <Search size={13} />
            Search
          </button>
        </div>
      </form>

      {/* 3. TABLET & MOBILE SEARCH TRIGGER */}
      <div className="lg:hidden flex gap-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#667085]" size={15} />
          <input
            type="text"
            placeholder="Search Suburb (e.g. Brighton)"
            value={suburb}
            onChange={(e) => setSuburb(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
            className="w-full bg-[#F5F6F8] border border-[#DADDE2] text-[#222222] text-xs rounded-none py-2.5 pl-9 pr-3 outline-none placeholder-gray-400 font-semibold"
          />
        </div>
        <button
          onClick={() => setShowMobileDrawer(true)}
          className="bg-[#0B2341] text-white hover:bg-[#1C4D8C] py-2.5 px-4 rounded-none text-xs font-bold flex items-center gap-1.5 transition-colors"
        >
          <SlidersHorizontal size={14} />
          Filters
        </button>
      </div>

      {/* 4. MOBILE SLIDING FILTER DRAWER */}
      <AnimatePresence>
        {showMobileDrawer && (
          <div className="fixed inset-0 z-50 flex justify-end lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileDrawer(false)}
              className="absolute inset-0 bg-[#0B2341]/60 backdrop-blur-xs"
            />

            {/* Sliding Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-80 max-w-full bg-white h-full p-6 shadow-xl flex flex-col gap-6 overflow-y-auto z-10"
            >
              <div className="flex justify-between items-center pb-4 border-b border-[#DADDE2]">
                <h3 className="font-serif text-lg font-bold text-[#0B2341] flex items-center gap-1.5">
                  <SlidersHorizontal size={18} className="text-[#1C4D8C]" />
                  Search Filters
                </h3>
                <button
                  onClick={() => setShowMobileDrawer(false)}
                  className="p-1 rounded bg-[#F5F6F8] text-[#222222] hover:bg-[#DADDE2] transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Form elements */}
              <div className="flex flex-col gap-4 flex-grow text-xs font-semibold text-[#222222]">
                {/* State select */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] text-[#667085] uppercase font-bold tracking-wider">State</label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value as AustralianState)}
                    className="w-full bg-[#F5F6F8] border border-[#DADDE2] rounded-none py-2.5 px-3 font-bold outline-none"
                  >
                    <option value="ALL">All Victoria</option>
                    <option value="VIC">Victoria (VIC)</option>
                  </select>
                </div>

                {/* Suburb Search */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] text-[#667085] uppercase font-bold tracking-wider">Suburb</label>
                  <input
                    type="text"
                    placeholder="e.g. Box Hill"
                    value={suburb}
                    onChange={(e) => setSuburb(e.target.value)}
                    className="w-full bg-[#F5F6F8] border border-[#DADDE2] rounded-none py-2.5 px-3 outline-none font-semibold"
                  />
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] text-[#667085] uppercase font-bold tracking-wider">Maximum Budget</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-[#F5F6F8] border border-[#DADDE2] rounded-none py-2.5 px-3 font-bold outline-none"
                  >
                    <option value="">No Max</option>
                    <option value="500000">$500k</option>
                    <option value="750000">$750k</option>
                    <option value="1000000">$1.0M</option>
                    <option value="1500000">$1.5M</option>
                    <option value="2000000">$2.0M</option>
                    <option value="2500000">$2.5M</option>
                    <option value="3000000">$3.0M+</option>
                  </select>
                </div>

                {/* Bedrooms */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] text-[#667085] uppercase font-bold tracking-wider">Bedrooms</label>
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full bg-[#F5F6F8] border border-[#DADDE2] rounded-none py-2.5 px-3 font-bold outline-none"
                  >
                    <option value="">Any</option>
                    <option value="3">3+ Bed</option>
                    <option value="4">4+ Bed</option>
                    <option value="5">5+ Bed</option>
                  </select>
                </div>

                {/* Bathrooms */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] text-[#667085] uppercase font-bold tracking-wider">Bathrooms</label>
                  <select
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                    className="w-full bg-[#F5F6F8] border border-[#DADDE2] rounded-none py-2.5 px-3 font-bold outline-none"
                  >
                    <option value="">Any</option>
                    <option value="2">2+ Bath</option>
                    <option value="3">3+ Bath</option>
                    <option value="4">4+ Bath</option>
                  </select>
                </div>

                {/* Land Size */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] text-[#667085] uppercase font-bold tracking-wider">Min Land</label>
                  <select
                    value={landSize}
                    onChange={(e) => setLandSize(e.target.value)}
                    className="w-full bg-[#F5F6F8] border border-[#DADDE2] rounded-none py-2.5 px-3 font-bold outline-none"
                  >
                    <option value="">Any</option>
                    <option value="300">300sqm+</option>
                    <option value="400">400sqm+</option>
                    <option value="500">500sqm+</option>
                    <option value="600">600sqm+</option>
                  </select>
                </div>

                {/* Build Status */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] text-[#667085] uppercase font-bold tracking-wider">Build Status</label>
                  <select
                    value={buildStatus}
                    onChange={(e) => setBuildStatus(e.target.value)}
                    className="w-full bg-[#F5F6F8] border border-[#DADDE2] rounded-none py-2.5 px-3 font-bold outline-none"
                  >
                    <option value="ALL">Any Stage</option>
                    <option value="Completed">Completed</option>
                    <option value="Under Construction">Under Construction</option>
                    <option value="Ready to Build">Ready to Build</option>
                    <option value="Subdivided">Titled Land</option>
                    <option value="Renovated">Renovated</option>
                  </select>
                </div>
              </div>

              {/* Bottom buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#DADDE2] font-bold">
                <button
                  onClick={handleReset}
                  className="bg-[#F5F6F8] border border-[#DADDE2] text-[#222222] py-3 rounded-none text-xs text-center flex items-center justify-center gap-1.5"
                >
                  <RotateCcw size={12} />
                  Reset
                </button>
                <button
                  onClick={() => handleSearchSubmit()}
                  className="bg-[#0B2341] text-white py-3 rounded-none text-xs text-center shadow-sm font-bold uppercase tracking-wider"
                >
                  Apply
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
