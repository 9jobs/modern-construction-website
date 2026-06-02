'use client';

import React from 'react';
import { Property } from '../data/properties';
import { useProperties } from '../context/PropertyContext';
import { Heart, BedDouble, Bath, Car, Maximize, CheckSquare, Square, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedCounter, Magnetic } from './ScrollReveal';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  }
};

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const {
    savedProperties,
    comparedProperties,
    toggleSaveProperty,
    toggleCompareProperty,
    setActivePropertyForModal
  } = useProperties();

  const isSaved = savedProperties.includes(property.id);
  const isCompared = comparedProperties.includes(property.id);

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(2)}M`;
    }
    return `$${price.toLocaleString()}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Under Construction':
        return 'bg-blue-50 text-brand-secondary border-blue-200';
      case 'Ready to Build':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Subdivided':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Renovated':
        return 'bg-teal-50 text-teal-700 border-teal-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
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
    <motion.div 
      variants={cardVariants}
      whileHover={{ y: -8, boxShadow: '0 22px 45px -15px rgba(7, 29, 56, 0.14)' }}
      className="bg-white border border-[#DADDE2] rounded-none overflow-hidden flex flex-col h-full relative group transition-shadow duration-300"
    >
      {/* Facade Image */}
      <button 
        onClick={() => setActivePropertyForModal(property)}
        className="relative aspect-[16/10] w-full block overflow-hidden bg-gray-100 text-left focus:outline-none"
      >
        <img
          src={property.image}
          alt={property.title}
          className="object-cover w-full h-full scale-100 group-hover:scale-[1.06] transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Builder Type Tag */}
        <span className="absolute top-3 left-3 bg-[#0B2341] text-white text-[9px] font-sans font-bold tracking-wider uppercase px-2.5 py-1 rounded-none shadow-sm z-10">
          {getPropertyTypeName(property.type)}
        </span>
      </button>

      {/* Bookmark Button Overlay */}
      <motion.button
        onClick={() => toggleSaveProperty(property.id)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-3 right-3 p-2 rounded-full bg-white/95 text-[#222222] hover:text-[#1C4D8C] transition-colors shadow-xs focus:outline-none z-10"
        aria-label={isSaved ? 'Unsave Property' : 'Save Property'}
      >
        <Heart size={14} className={isSaved ? 'fill-[#1C4D8C] text-[#1C4D8C]' : 'text-[#222222]'} />
      </motion.button>

      {/* Content Container */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center gap-2 mb-1.5">
          <span className="text-[10px] uppercase tracking-widest text-[#1C4D8C] font-extrabold font-sans">
            {property.suburb}, {property.state}
          </span>
          <span className={`text-[9px] font-bold border px-2 py-0.5 rounded-none ${getStatusColor(property.buildStatus)}`}>
            {property.buildStatus}
          </span>
        </div>

        <button 
          onClick={() => setActivePropertyForModal(property)}
          className="block group-hover:text-[#1C4D8C] text-left transition-colors focus:outline-none"
        >
          <h3 className="font-serif text-base text-[#222222] font-bold tracking-tight line-clamp-1 mb-1.5 hover:text-[#1C4D8C] transition-colors">
            {property.title}
          </h3>
        </button>

        <p className="text-xs text-[#667085] line-clamp-2 leading-relaxed mb-4">
          {property.description}
        </p>

        {/* Specifications Grid */}
        <div className="flex flex-wrap items-center gap-3 text-[#222222] text-xs border-t border-[#DADDE2] pt-3.5 pb-2.5 mb-3 mt-auto font-semibold">
          {property.bedrooms > 0 && (
            <span className="flex items-center gap-1" title="Bedrooms">
              <BedDouble size={13} className="text-[#1C4D8C]" />
              <AnimatedCounter value={property.bedrooms} decimals={property.bedrooms % 1 === 0 ? 0 : 1} /> <span className="text-[#667085] text-[10px] font-normal">Beds</span>
            </span>
          )}
          {property.bathrooms > 0 && (
            <span className="flex items-center gap-1" title="Bathrooms">
              <Bath size={13} className="text-[#1C4D8C]" />
              <AnimatedCounter value={property.bathrooms} decimals={property.bathrooms % 1 === 0 ? 0 : 1} /> <span className="text-[#667085] text-[10px] font-normal">Baths</span>
            </span>
          )}
          {property.cars > 0 && (
            <span className="flex items-center gap-1" title="Car Spaces">
              <Car size={13} className="text-[#1C4D8C]" />
              <AnimatedCounter value={property.cars} decimals={property.cars % 1 === 0 ? 0 : 1} /> <span className="text-[#667085] text-[10px] font-normal">Cars</span>
            </span>
          )}
          <span className="flex items-center gap-1 ml-auto" title="Land Size">
            <Maximize size={13} className="text-[#1C4D8C]" />
            <AnimatedCounter value={property.landSize} /> <span className="text-[#667085] text-[10px] font-normal font-sans">sqm</span>
          </span>
        </div>

        {/* Pricing & Actions */}
        <div className="flex flex-wrap justify-between items-center gap-2 pt-3 border-t border-[#DADDE2]">
          <div>
            <span className="text-[9px] text-[#667085] uppercase font-bold block mb-0.5">Guide price</span>
            <span className="text-base font-extrabold font-serif text-[#222222] leading-none">
              {formatPrice(property.price)}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Compare Checkbox */}
            <motion.button
              onClick={() => toggleCompareProperty(property.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 text-xs text-[#667085] hover:text-[#222222] transition-colors focus:outline-none"
              title="Compare"
            >
              {isCompared ? (
                <CheckSquare size={14} className="text-[#1C4D8C]" />
              ) : (
                <Square size={14} />
              )}
              <span className="hidden sm:inline font-bold">Compare</span>
            </motion.button>

            <Magnetic>
              <Link
                href={`/properties/${property.slug}`}
                className="bg-[#0B2341] hover:bg-[#1C4D8C] text-white font-bold text-xs py-2 px-3 rounded-none transition-all flex items-center gap-1"
              >
                View Build Path
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
