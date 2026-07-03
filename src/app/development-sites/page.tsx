'use client';

import React from 'react';
import { useProperties } from '../../context/PropertyContext';
import { PropertyCard } from '../../components/PropertyCard';
import { CTASection, ConstructionTimeline, IconCardGrid, PageHero, SectionHeading } from '../../components/MarketingSections';
import { constructionSteps, pageHeroContent, serviceCards } from '../../data/siteContent';

export default function DevelopmentSitesPage() {
  const { properties, selectedState } = useProperties();
  const sites = properties.filter(
    (property) => property.type === 'old-home' && (selectedState === 'ALL' || property.state === selectedState)
  );

  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        {...pageHeroContent.developmentSites}
        primaryHref="/properties?type=old-home"
        primaryLabel="View sites"
        secondaryHref="/construction-services"
        secondaryLabel="Coordination overview"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Buy with development intent"
          title={`Development sites in ${selectedState === 'ALL' ? 'Australia' : selectedState}`}
          description="Shortlist old homes, splitter blocks, and zoned land where value can be unlocked through subdivision, dual occupancy, renovation, or resale planning."
        />
        {sites.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sites.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="mt-8 border border-brand-border bg-brand-section p-10 text-center text-sm font-semibold text-brand-muted">
            No development sites are listed in this region right now.
          </div>
        )}
      </section>

      <section className="border-y border-brand-border bg-brand-section/70 py-14">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Feasibility pathway"
            title="From old property to approved build"
            description="Modern Properties can help test zoning, overlays, access, services, development potential, planning pathways, and build costs before you commit."
          />
          <div className="mt-8">
            <ConstructionTimeline steps={constructionSteps.slice(0, 4)} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Useful services" title="Support for site buyers" />
        <div className="mt-8">
          <IconCardGrid items={serviceCards} />
        </div>
      </section>

      <CTASection
        title="Want a site assessed?"
        description="Send us the address, zoning, land size, and target outcome. Modern Properties will help identify the build and planning questions."
        href="/contact?interest=Development%20Site"
        label="Assess a site"
      />
    </div>
  );
}
