'use client';

import React from 'react';
import { useProperties } from '../../context/PropertyContext';
import { PropertyCard } from '../../components/PropertyCard';
import { CTASection, IconCardGrid, PageHero, SectionHeading } from '../../components/MarketingSections';
import { pageHeroContent, trustPoints } from '../../data/siteContent';

export default function NewBuildsPage() {
  const { properties, selectedState } = useProperties();
  const homes = properties.filter(
    (property) => property.type === 'new-build' && (selectedState === 'ALL' || property.state === selectedState)
  );

  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        {...pageHeroContent.newBuilds}
        primaryHref="/properties?type=new-build"
        primaryLabel="View completed homes"
        secondaryHref="/contact"
        secondaryLabel="Book walkthrough"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Move-in ready"
          title={`Completed and near-complete homes in ${selectedState === 'ALL' ? 'Australia' : selectedState}`}
          description="These homes are for buyers who want a completed, ready-to-buy property without managing the development process themselves."
        />
        {homes.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {homes.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="mt-8 border border-brand-border bg-brand-section p-10 text-center text-sm font-semibold text-brand-muted">
            No completed properties are listed in this region right now.
          </div>
        )}
      </section>

      <section className="border-y border-brand-border bg-brand-section/70 py-14">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Ready with assurance"
            title="What buyers still receive at completion"
            description="Even when the property is complete, Modern Properties supports inspection notes, certificates, warranty documents, and handover guidance."
          />
          <div className="mt-8">
            <IconCardGrid items={trustPoints} />
          </div>
        </div>
      </section>

      <CTASection
        title="Want a finished Modern Properties home?"
        description="Tell us your region and preferred move-in date so the local team can confirm available homes and inspection windows."
        href="/contact?interest=Completed%20Home"
        label="Request inspection"
      />
    </div>
  );
}
