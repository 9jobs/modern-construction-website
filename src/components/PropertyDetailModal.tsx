'use client';

import React from 'react';
import { useProperties } from '../context/PropertyContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BedDouble, Bath, Car, Maximize, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { AnimatedCounter, Magnetic } from './ScrollReveal';

export const PropertyDetailModal: React.FC = () => {
  const { activePropertyForModal, setActivePropertyForModal } = useProperties();

  const handleClose = () => setActivePropertyForModal(null);

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(2)}M`;
    }
    return `$${price.toLocaleString()}`;
  };

  const getPropertyTypeName = (type: string) => {
    switch (type) {
      case 'house-land': return 'House & Land';
      case 'land-only': return 'Land + Build Option';
      case 'renovated': return 'Completed Home';
      case 'old-home': return 'Development Site';
      case 'new-build': return 'New Build';
      case 'investment': return 'Investment';
      case 'display': return 'Display Home';
      default: return 'Residential';
    }
  };

  return (
    <AnimatePresence>
      {activePropertyForModal && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative bg-white border border-[#DADDE2] w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto flex flex-col md:flex-row shadow-[0_24px_50px_rgba(7,29,56,0.18)] z-10"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white text-[#222222] hover:text-[#1C4D8C] transition-colors rounded-full shadow-md z-20"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Image Column */}
            <div className="relative w-full md:w-1/2 aspect-[16/10] md:aspect-auto md:min-h-[400px] bg-slate-100 shrink-0">
              <img
                src={activePropertyForModal.image}
                alt={activePropertyForModal.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#0B2341] text-white text-[9px] font-sans font-bold tracking-wider uppercase px-2.5 py-1 z-10">
                {getPropertyTypeName(activePropertyForModal.type)}
              </span>
            </div>

            {/* Info Column */}
            <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#1C4D8C] font-extrabold block mb-2">
                  {activePropertyForModal.suburb}, {activePropertyForModal.state}
                </span>
                <h2 className="font-serif text-xl md:text-2xl text-[#222222] font-bold tracking-tight mb-3">
                  {activePropertyForModal.title}
                </h2>
                <p className="text-xs text-[#667085] leading-relaxed mb-5 md:max-h-[140px] overflow-y-auto">
                  {activePropertyForModal.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 border-t border-b border-[#DADDE2] py-4 mb-5 text-[#222222] text-xs font-semibold">
                  {activePropertyForModal.bedrooms > 0 && (
                    <span className="flex items-center gap-1.5">
                      <BedDouble size={14} className="text-[#1C4D8C]" />
                      <AnimatedCounter value={activePropertyForModal.bedrooms} decimals={activePropertyForModal.bedrooms % 1 === 0 ? 0 : 1} /> <span className="text-[#667085] text-[10px] font-normal">Beds</span>
                    </span>
                  )}
                  {activePropertyForModal.bathrooms > 0 && (
                    <span className="flex items-center gap-1.5">
                      <Bath size={14} className="text-[#1C4D8C]" />
                      <AnimatedCounter value={activePropertyForModal.bathrooms} decimals={activePropertyForModal.bathrooms % 1 === 0 ? 0 : 1} /> <span className="text-[#667085] text-[10px] font-normal">Baths</span>
                    </span>
                  )}
                  {activePropertyForModal.cars > 0 && (
                    <span className="flex items-center gap-1.5">
                      <Car size={14} className="text-[#1C4D8C]" />
                      <AnimatedCounter value={activePropertyForModal.cars} decimals={activePropertyForModal.cars % 1 === 0 ? 0 : 1} /> <span className="text-[#667085] text-[10px] font-normal">Cars</span>
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <Maximize size={14} className="text-[#1C4D8C]" />
                    <AnimatedCounter value={activePropertyForModal.landSize} /> <span className="text-[#667085] text-[10px] font-normal">sqm Land</span>
                  </span>
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div>
                  <span className="text-[9px] text-[#667085] uppercase font-bold block mb-0.5">Guide price</span>
                  <span className="text-lg md:text-xl font-extrabold font-serif text-[#222222]">
                    {formatPrice(activePropertyForModal.price)}
                  </span>
                </div>

                <Magnetic>
                  <Link
                    href={`/properties/${activePropertyForModal.slug}`}
                    onClick={handleClose}
                    className="bg-[#0B2341] hover:bg-[#1C4D8C] text-white font-bold text-xs py-3 px-5 rounded-none transition-all inline-flex items-center gap-1.5"
                  >
                    View Build Path
                    <ArrowRight size={14} />
                  </Link>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
