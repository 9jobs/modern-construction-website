'use client';

import React from 'react';
import { useProperties } from '../context/PropertyContext';
import { MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const LocationSelector: React.FC = () => {
  const {
    showLocationPopup,
    setShowLocationPopup,
    setSelectedState
  } = useProperties();

  const handleSelectLocation = () => {
    setSelectedState('VIC');
    sessionStorage.setItem('aura_location_chosen', 'true');
    setShowLocationPopup(false);
  };

  const handleSelectAll = () => {
    setSelectedState('ALL');
    sessionStorage.setItem('aura_location_chosen', 'true');
    setShowLocationPopup(false);
  };

  const locations = [
    {
      name: 'Melbourne',
      desc: 'Metropolitan Melbourne and surrounding suburbs'
    },
    {
      name: 'Regional Victoria',
      desc: 'Ballarat, Bendigo, Bairnsdale, Geelong, Gippsland, Shepparton, Warrnambool and surrounding areas'
    }
  ];

  return (
    <AnimatePresence>
      {showLocationPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Overlay - strict gatekeeper, no close on click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-brand-charcoal/70 backdrop-blur-md"
          />

          {/* Modal Container - strictly square corners, borderless */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="relative bg-white w-full max-w-2xl overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.35)] z-10 flex flex-col rounded-none"
          >
            {/* Header banner decoration - strictly square elements, borderless */}
            <div className="bg-[#0B2341] text-white p-8 relative overflow-hidden flex flex-col items-center text-center rounded-none">
              <div className="absolute inset-0 opacity-15 bg-[url('/img/home2.jpg')] bg-cover bg-center" />
              
              {/* MapPin Container - strictly square, borderless */}
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-3 rounded-none">
                <MapPin size={24} className="text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-white font-medium tracking-tight">
                Where would you like to buy or sell?
              </h2>
              <p className="text-[10px] text-white/80 tracking-[0.24em] uppercase mt-2 font-bold font-sans">
                MODERN PROPERTIES BUYING & SELLING
              </p>
            </div>

            {/* Content Selection Grid - borderless list */}
            <div className="p-6 md:p-8 flex flex-col gap-6 bg-white text-center sm:text-left rounded-none">
              <p className="text-center text-xs sm:text-sm text-[#41556B] max-w-md mx-auto leading-relaxed">
                Select your Victoria location of interest to explore ready-to-buy properties, investment opportunities, and local property buying or selling support.
              </p>

              <div className="flex flex-col gap-4 mt-2">
                {locations.map((loc) => (
                  <div
                    key={loc.name}
                    className="flex flex-col sm:flex-row justify-between sm:items-center p-5 bg-[#F4F8FB] hover:bg-[#EAF3FC] transition-all group rounded-none text-left"
                  >
                    <div className="flex flex-col mb-4 sm:mb-0">
                      <span className="font-bold text-[#0B2341] text-lg group-hover:text-[#1C4D8C] transition-colors">
                        {loc.name}
                      </span>
                      <span className="text-xs text-[#41556B] mt-1 leading-relaxed max-w-md font-medium">
                        {loc.desc}
                      </span>
                    </div>
                    
                    {/* perfectly square button */}
                    <button
                      onClick={handleSelectLocation}
                      className="bg-[#1C4D8C] hover:bg-[#0B2341] text-white text-[11px] font-extrabold uppercase tracking-wider py-2.5 px-6 rounded-none transition-all duration-300 shadow-sm hover:shadow-md shrink-0 w-fit active:translate-y-[1px]"
                    >
                      View Properties
                    </button>
                  </div>
                ))}
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={handleSelectAll}
                  className="text-xs font-bold text-[#1C4D8C] hover:text-[#0B2341] underline underline-offset-4 decoration-[#1C4D8C] transition-colors rounded-none"
                >
                  View All Victoria Properties
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
