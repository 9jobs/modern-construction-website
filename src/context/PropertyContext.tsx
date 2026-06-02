'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Property, propertiesData } from '../data/properties';

export type AustralianState = 'VIC' | 'NSW' | 'QLD' | 'SA' | 'WA' | 'ALL';

interface SearchFilters {
  state: AustralianState;
  suburb: string;
  type: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  minLand: string;
  buildStatus: string;
}

interface PropertyContextType {
  properties: Property[];
  savedProperties: string[];
  comparedProperties: string[];
  selectedState: AustralianState;
  showLocationPopup: boolean;
  searchFilters: SearchFilters;
  activePropertyForModal: Property | null;
  toggleSaveProperty: (id: string) => void;
  toggleCompareProperty: (id: string) => void;
  setSelectedState: (state: AustralianState) => void;
  setShowLocationPopup: (show: boolean) => void;
  setSearchFilters: React.Dispatch<React.SetStateAction<SearchFilters>>;
  setActivePropertyForModal: (property: Property | null) => void;
  resetFilters: () => void;
}

const defaultFilters: SearchFilters = {
  state: 'ALL',
  suburb: '',
  type: 'ALL',
  minPrice: '',
  maxPrice: '',
  bedrooms: '',
  minLand: '',
  buildStatus: 'ALL'
};

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export const PropertyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [properties] = useState<Property[]>(propertiesData);
  const [savedProperties, setSavedProperties] = useState<string[]>([]);
  const [comparedProperties, setComparedProperties] = useState<string[]>([]);
  const [selectedState, setSelectedStateState] = useState<AustralianState>('ALL');
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [searchFilters, setSearchFilters] = useState<SearchFilters>(defaultFilters);
  const [activePropertyForModal, setActivePropertyForModal] = useState<Property | null>(null);

  // Initialize from LocalStorage in client-side
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const hasChosen = sessionStorage.getItem('aura_location_chosen');
      if (!hasChosen) {
        setShowLocationPopup(true);
      }

      const saved = localStorage.getItem('aura_saved_properties');
      if (saved) {
        try { setSavedProperties(JSON.parse(saved)); } catch (e) { console.error(e); }
      }

      const compared = localStorage.getItem('aura_compared_properties');
      if (compared) {
        try { setComparedProperties(JSON.parse(compared)); } catch (e) { console.error(e); }
      }

      const state = localStorage.getItem('aura_selected_state') as AustralianState;
      if (state) {
        setSelectedStateState(state);
        setSearchFilters(prev => ({ ...prev, state }));
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const setSelectedState = (state: AustralianState) => {
    setSelectedStateState(state);
    localStorage.setItem('aura_selected_state', state);
    setSearchFilters(prev => ({ ...prev, state }));
  };

  const toggleSaveProperty = (id: string) => {
    setSavedProperties(prev => {
      const updated = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      localStorage.setItem('aura_saved_properties', JSON.stringify(updated));
      return updated;
    });
  };

  const toggleCompareProperty = (id: string) => {
    setComparedProperties(prev => {
      let updated;
      if (prev.includes(id)) {
        updated = prev.filter(item => item !== id);
      } else {
        if (prev.length >= 4) {
          alert('You can compare up to 4 properties at a time.');
          return prev;
        }
        updated = [...prev, id];
      }
      localStorage.setItem('aura_compared_properties', JSON.stringify(updated));
      return updated;
    });
  };

  const resetFilters = () => {
    setSearchFilters({
      ...defaultFilters,
      state: selectedState
    });
  };

  return (
    <PropertyContext.Provider
      value={{
        properties,
        savedProperties,
        comparedProperties,
        selectedState,
        showLocationPopup,
        searchFilters,
        activePropertyForModal,
        toggleSaveProperty,
        toggleCompareProperty,
        setSelectedState,
        setShowLocationPopup,
        setSearchFilters,
        setActivePropertyForModal,
        resetFilters
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperties = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error('useProperties must be used within a PropertyProvider');
  }
  return context;
};
