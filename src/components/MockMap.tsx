'use client';

import React, { useMemo, useState } from 'react';
import { Minus, Plus, RotateCcw, Search } from 'lucide-react';

interface MockMapProps {
  variant?: 'dark' | 'light';
}

type VicRegion = 'MELB WEST' | 'MELB NORTH' | 'MELB EAST' | 'MELB SOUTH' | 'REGIONAL VIC' | 'ALL';

export const MockMap: React.FC<MockMapProps> = () => {
  const [selectedRegion, setSelectedRegion] = useState<VicRegion>('ALL');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const regionMapQueries: Record<VicRegion, string> = {
    ALL: 'Victoria, Australia',
    'MELB WEST': 'Melbourne West, Victoria, Australia',
    'MELB NORTH': 'Melbourne North, Victoria, Australia',
    'MELB EAST': 'Melbourne East, Victoria, Australia',
    'MELB SOUTH': 'Melbourne South, Victoria, Australia',
    'REGIONAL VIC': 'Regional Victoria, Australia',
  };

  React.useEffect(() => {
    if (!searchQuery.trim()) {
      setSelectedRegion('ALL');
      return;
    }

    const term = searchQuery.toLowerCase();
    if (term.includes('west') || term.includes('werribee') || term.includes('point cook')) {
      setSelectedRegion('MELB WEST');
      return;
    }
    if (term.includes('north') || term.includes('preston')) {
      setSelectedRegion('MELB NORTH');
      return;
    }
    if (term.includes('east') || term.includes('mulgrave') || term.includes('glen waverley')) {
      setSelectedRegion('MELB EAST');
      return;
    }
    if (term.includes('south') || term.includes('brighton') || term.includes('bayside') || term.includes('melbourne')) {
      setSelectedRegion('MELB SOUTH');
      return;
    }
    if (term.includes('regional') || term.includes('geelong') || term.includes('ballarat') || term.includes('bendigo') || term.includes('victoria')) {
      setSelectedRegion('REGIONAL VIC');
      return;
    }
    setSelectedRegion('ALL');
  }, [searchQuery]);

  const selectedQuery = useMemo(() => {
    return searchQuery.trim() ? `${searchQuery.trim()}, Victoria, Australia` : regionMapQueries[selectedRegion];
  }, [regionMapQueries, searchQuery, selectedRegion]);

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedQuery)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const adjustZoom = (nextZoom: number) => {
    const clamped = Math.max(1, Math.min(2.4, Number(nextZoom.toFixed(2))));
    setZoomLevel(clamped);
  };

  return (
    <div className="relative mx-auto w-full overflow-hidden border border-[#DADDE2] bg-[#CED7DC] shadow-[0_16px_34px_rgba(7,29,56,0.08)]">
      <div
        className="relative min-h-[400px] w-full overflow-hidden"
        onWheel={(e) => {
          e.preventDefault();
          adjustZoom(zoomLevel + (e.deltaY < 0 ? 0.1 : -0.1));
        }}
      >
        <button
          type="button"
          onClick={openGoogleMaps}
          className="absolute inset-0 z-[1] cursor-pointer"
          aria-label="Open Google Maps"
        />

        <div className="absolute left-3 top-3 z-20 flex w-[168px] items-center gap-2 border border-[#D8E0E5] bg-white px-3 py-2 shadow-sm md:left-4 md:top-4 md:w-[182px]">
          <Search size={13} className="shrink-0 text-[#7E909D]" />
          <input
            value={searchQuery}
            onChange={(e) => {
              e.stopPropagation();
              setSearchQuery(e.target.value);
            }}
            onKeyDown={(e) => {
              e.stopPropagation();
              if (e.key === 'Enter') {
                openGoogleMaps();
              }
            }}
            placeholder="Enter a suburb or postcode"
            className="w-full border-0 bg-transparent text-[10px] font-medium text-[#738592] outline-none placeholder:text-[#97A8B3]"
          />
        </div>

        <div className="absolute right-3 top-3 z-20 flex items-center gap-2 md:right-4 md:top-4">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              adjustZoom(zoomLevel - 0.2);
            }}
            className="inline-flex h-9 w-9 items-center justify-center border border-[#D8E0E5] bg-white text-[#071D38] transition-colors hover:bg-[#F4F8FB]"
            aria-label="Zoom out"
          >
            <Minus size={15} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSearchQuery('');
              setSelectedRegion('ALL');
              adjustZoom(1);
            }}
            className="inline-flex h-9 items-center justify-center gap-1 border border-[#D8E0E5] bg-white px-3 text-[10px] font-extrabold uppercase tracking-wider text-[#071D38] transition-colors hover:bg-[#F4F8FB]"
          >
            <RotateCcw size={13} />
            Reset
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              adjustZoom(zoomLevel + 0.2);
            }}
            className="inline-flex h-9 w-9 items-center justify-center border border-[#D8E0E5] bg-white text-[#071D38] transition-colors hover:bg-[#F4F8FB]"
            aria-label="Zoom in"
          >
            <Plus size={15} />
          </button>
        </div>

        <svg viewBox="0 0 1000 420" className="absolute inset-0 h-full w-full select-none">
          <rect x="0" y="0" width="1000" height="420" fill="#CED7DC" />
          
          <g 
            style={{ 
              transform: `scale(${zoomLevel})`, 
              transformOrigin: 'center', 
              transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)' 
            }}
          >
            <defs>
              <filter id="mp-blur-filter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="15" />
              </filter>
              <pattern id="mp-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth={1.2} />
              </pattern>
            </defs>

            {/* Grid pattern fill */}
            <rect width="2500" height="1500" x="-750" y="-500" fill="url(#mp-grid-pattern)" />

            {/* Clouds overlay background */}
            <g>
              <ellipse cx="300" cy="150" rx="90" ry="25" fill="#ffffff" opacity={0.55} filter="url(#mp-blur-filter)" />
              <ellipse cx="700" cy="250" rx="110" ry="30" fill="#ffffff" opacity={0.55} filter="url(#mp-blur-filter)" />
              <ellipse cx="500" cy="100" rx="70" ry="20" fill="#ffffff" opacity={0.55} filter="url(#mp-blur-filter)" />
            </g>

            {/* Outer Metropolitan Boundary */}
            <rect x="440" y="50" width="395" height="320" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth={2} strokeDasharray="4,4" />

            {/* Regional Victoria */}
            <g onClick={() => setSelectedRegion('REGIONAL VIC')} className="group cursor-pointer">
              <polygon 
                className={`transition-all duration-200 ${
                  selectedRegion === 'REGIONAL VIC'
                    ? 'fill-[rgba(25,135,84,0.16)] stroke-[#198754] stroke-[3px]'
                    : 'fill-[rgba(255,255,255,0.55)] stroke-[#cad1d6] stroke-[1.5px] hover:fill-[rgba(25,135,84,0.06)]'
                }`}
                points="60,60 420,60 420,360 60,360" 
              />
              <text className="font-sans font-bold text-[12px] fill-[#334155]" x="120" y="100" style={{ pointerEvents: 'none', textShadow: '0 1px 2px rgba(255,255,255,0.7)' }}>
                Regional Victoria
              </text>
              <circle cx="240" cy="180" r="7" className="fill-[#0a3d62] transition-transform duration-200 hover:scale-125" style={{ transformOrigin: '240px 180px' }} />
              <circle cx="180" cy="260" r="7" className="fill-[#0a3d62] transition-transform duration-200 hover:scale-125" style={{ transformOrigin: '180px 260px' }} />
            </g>

            {/* Melbourne North */}
            <g onClick={() => setSelectedRegion('MELB NORTH')} className="group cursor-pointer">
              <polygon 
                className={`transition-all duration-200 ${
                  selectedRegion === 'MELB NORTH'
                    ? 'fill-[rgba(25,135,84,0.16)] stroke-[#198754] stroke-[3px]'
                    : 'fill-[rgba(255,255,255,0.55)] stroke-[#cad1d6] stroke-[1.5px] hover:fill-[rgba(25,135,84,0.06)]'
                }`}
                points="460,60 630,60 630,190 460,190" 
              />
              <text className="font-sans font-bold text-[12px] fill-[#334155]" x="480" y="135" style={{ pointerEvents: 'none', textShadow: '0 1px 2px rgba(255,255,255,0.7)' }}>
                Melbourne North
              </text>
              <circle cx="580" cy="100" r="7" className="fill-[#0a3d62] transition-transform duration-200 hover:scale-125" style={{ transformOrigin: '580px 100px' }} />
            </g>

            {/* Melbourne East */}
            <g onClick={() => setSelectedRegion('MELB EAST')} className="group cursor-pointer">
              <polygon 
                className={`transition-all duration-200 ${
                  selectedRegion === 'MELB EAST'
                    ? 'fill-[rgba(25,135,84,0.16)] stroke-[#198754] stroke-[3px]'
                    : 'fill-[rgba(255,255,255,0.55)] stroke-[#cad1d6] stroke-[1.5px] hover:fill-[rgba(25,135,84,0.06)]'
                }`}
                points="630,60 840,60 810,210 630,210" 
              />
              <text className="font-sans font-bold text-[12px] fill-[#334155]" x="650" y="145" style={{ pointerEvents: 'none', textShadow: '0 1px 2px rgba(255,255,255,0.7)' }}>
                Melbourne East
              </text>
              <circle cx="740" cy="120" r="7" className="fill-[#0a3d62] transition-transform duration-200 hover:scale-125" style={{ transformOrigin: '740px 120px' }} />
            </g>

            {/* Melbourne South */}
            <g onClick={() => setSelectedRegion('MELB SOUTH')} className="group cursor-pointer">
              <polygon 
                className={`transition-all duration-200 ${
                  selectedRegion === 'MELB SOUTH'
                    ? 'fill-[rgba(25,135,84,0.16)] stroke-[#198754] stroke-[3px]'
                    : 'fill-[rgba(255,255,255,0.55)] stroke-[#cad1d6] stroke-[1.5px] hover:fill-[rgba(25,135,84,0.06)]'
                }`}
                points="630,210 810,210 780,360 630,360" 
              />
              <text className="font-sans font-bold text-[12px] fill-[#334155]" x="650" y="285" style={{ pointerEvents: 'none', textShadow: '0 1px 2px rgba(255,255,255,0.7)' }}>
                Melbourne South
              </text>
              <circle cx="710" cy="250" r="7" className="fill-[#0a3d62] transition-transform duration-200 hover:scale-125" style={{ transformOrigin: '710px 250px' }} />
            </g>

            {/* Melbourne West/Central */}
            <g onClick={() => setSelectedRegion('MELB WEST')} className="group cursor-pointer">
              <polygon 
                className={`transition-all duration-200 ${
                  selectedRegion === 'MELB WEST'
                    ? 'fill-[rgba(25,135,84,0.16)] stroke-[#198754] stroke-[3px]'
                    : 'fill-[rgba(255,255,255,0.55)] stroke-[#cad1d6] stroke-[1.5px] hover:fill-[rgba(25,135,84,0.06)]'
                }`}
                points="460,190 630,190 630,360 460,360" 
              />
              <text className="font-sans font-bold text-[12px] fill-[#334155]" x="480" y="275" style={{ pointerEvents: 'none', textShadow: '0 1px 2px rgba(255,255,255,0.7)' }}>
                Melbourne West/Central
              </text>
              <circle cx="510" cy="230" r="7" className="fill-[#0a3d62] transition-transform duration-200 hover:scale-125" style={{ transformOrigin: '510px 230px' }} />
              <circle cx="550" cy="310" r="7" className="fill-[#0a3d62] transition-transform duration-200 hover:scale-125" style={{ transformOrigin: '550px 310px' }} />
            </g>

          </g>
        </svg>

        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 border border-[#D6DDE2] bg-white px-4 py-2 text-[12px] font-semibold text-[#071D38] shadow-sm">
          Loading coverage
        </div>

        <div className="absolute bottom-2 left-2 z-20 text-[8px] font-medium text-[#7B8E9D]">mapbox</div>
        <div className="absolute bottom-2 right-2 z-20 text-[8px] font-medium text-[#7B8E9D]">© Mapbox © OpenStreetMap Improve this map</div>
      </div>
    </div>
  );
};
