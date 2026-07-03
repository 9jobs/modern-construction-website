'use client';

import React from 'react';
import { useProperties } from '../../context/PropertyContext';
import { PropertyCard } from '../../components/PropertyCard';
import { CTASection, IconCardGrid, PageHero, SectionHeading } from '../../components/MarketingSections';
import { pageHeroContent, trustPoints } from '../../data/siteContent';

export default function RenovatedHomesPage() {
  const { properties, selectedState } = useProperties();
  const homes = properties.filter(
    (property) => property.type === 'renovated' && (selectedState === 'ALL' || property.state === selectedState)
  );

  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        {...pageHeroContent.renovatedHomes}
        primaryHref="/properties?type=renovated"
        primaryLabel="View renovated homes"
        secondaryHref="/development-projects"
        secondaryLabel="See projects"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Completed transformations"
          title={`Renovated Modern Properties homes in ${selectedState === 'ALL' ? 'Australia' : selectedState}`}
          description="Buy a completed home where acquisition, planning, renovation, structural upgrades, and finish selections have already been managed."
        />
        {homes.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {homes.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="mt-8 border border-brand-border bg-brand-section p-10 text-center text-sm font-semibold text-brand-muted">
            No renovated homes are listed for this region right now.
          </div>
        )}
      </section>

      <section className="border-y border-brand-border bg-brand-section/70 py-14">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Construction value"
            title="Old property, new standard"
            description="Modern Properties renovation projects focus on structural condition, planning controls, upgraded services, new finishes, and clean handover documents."
          />
          <div className="mt-8">
            <IconCardGrid items={trustPoints} />
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in a completed transformation?"
        description="Tell Modern Properties what suburb, price range, and property style you want so we can confirm suitable homes or upcoming projects."
        href="/contact?interest=Renovated%20Home"
        label="Ask about renovated homes"
      />
    </div>
  );
}
