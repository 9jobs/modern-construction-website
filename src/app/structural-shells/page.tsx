'use client';

import React from 'react';
import { useProperties } from '../../context/PropertyContext';
import { PropertyCard } from '../../components/PropertyCard';
import { CTASection, IconCardGrid, PageHero, SectionHeading } from '../../components/MarketingSections';
import { trustPoints } from '../../data/siteContent';

export default function StructuralShellsPage() {
  const { properties, selectedState } = useProperties();
  const homes = properties.filter(
    (property) => property.type === 'new-build' && (selectedState === 'ALL' || property.state === selectedState)
  );

  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        title="Completed Structural Shells & Showcases"
        eyebrow="Stage 3: Completed Shells"
        description="Finished high-performance structural lock-ups, dual occupancies, and showcase displays ready for handover."
        image="/img/shell2.jpg"
        primaryHref="/properties?type=new-build"
        primaryLabel="Explore completed builds"
        secondaryHref="/contact"
        secondaryLabel="Book site walkthrough"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Finished Homes"
          title={`Completed Showcases in ${selectedState === 'ALL' ? 'Australia' : selectedState}`}
          description="Move-in ready structures constructed with premium specifications, structural guarantees, and absolute security."
          actionHref="/properties"
          actionLabel="View all property listings"
        />
        {homes.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {homes.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="mt-8 border border-brand-border bg-brand-section p-10 text-center text-sm font-semibold text-brand-muted">
            No completed builds are listed in this region right now.
          </div>
        )}
      </section>

      <section className="border-y border-brand-border bg-brand-section/70 py-14">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Built with assurance"
            title="What We Hand Over After Civil Lock-up"
            description="Our civil handover packs include detailed structural certificates, materials audits, and full warranty documentation."
          />
          <div className="mt-8">
            <IconCardGrid items={trustPoints} />
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in a completed structural showcase?"
        description="Tell us your target region and moving timeline. Modern-Property will arrange priority access folders and walkthrough inspection windows."
        href="/contact?interest=Completed%20Home"
        label="Request inspection brief"
      />
    </div>
  );
}
