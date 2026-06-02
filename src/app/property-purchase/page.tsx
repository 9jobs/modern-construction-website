'use client';

import React from 'react';
import { useProperties } from '../../context/PropertyContext';
import { PropertyCard } from '../../components/PropertyCard';
import { CTASection, ConstructionTimeline, IconCardGrid, PageHero, SectionHeading } from '../../components/MarketingSections';
import { constructionSteps, pageHeroContent, serviceCards } from '../../data/siteContent';

export default function PropertyPurchasePage() {
  const { properties, selectedState } = useProperties();
  const sites = properties.filter(
    (property) => property.type === 'old-home' && (selectedState === 'ALL' || property.state === selectedState)
  );

  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        title="Premium Property Sourcing & Acquisitions"
        eyebrow="Stage 1: Property Purchase"
        description="Acquire high-potential residential land, splitter blocks, and subdivided allotments backed by independent civil feasibility audits."
        image="/img/home6.jpg"
        primaryHref="/properties?type=old-home"
        primaryLabel="Explore acquired sites"
        secondaryHref="/civil-construction"
        secondaryLabel="See build stage"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Active Allotments"
          title={`Available Sourced Sites in ${selectedState === 'ALL' ? 'Australia' : selectedState}`}
          description="Sourced regional Victorian allotments screened weekly to secure top-tier residential yields."
          actionHref="/properties"
          actionLabel="View all property listings"
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
            title="Sourcing to Approved Building Layouts"
            description="We coordinates evolutionary design and council zoning feasibility pathways before deposit sign-off."
          />
          <div className="mt-8">
            <ConstructionTimeline steps={constructionSteps.slice(0, 4)} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Acquisition Support" title="Sourcing Engine Capabilities" />
        <div className="mt-8">
          <IconCardGrid items={serviceCards} />
        </div>
      </section>

      <CTASection
        title="Have a specific investment region in mind?"
        description="Provide your location criteria, target budget, and yields. Modern-Property will present matching acquired land opportunities."
        href="/contact?interest=Property%20Acquisition"
        label="Start acquisition brief"
      />
    </div>
  );
}
