'use client';

import React from 'react';
import { CTASection, ConstructionTimeline, IconCardGrid, PageHero, SectionHeading } from '../../components/MarketingSections';
import { constructionSteps, serviceCards, trustPoints } from '../../data/siteContent';

export default function CivilConstructionPage() {
  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        title="Property Development Coordination"
        eyebrow="Stage 2: Development Coordination"
        description="Modern Properties coordinates renovation and development work through trusted third-party contractors while keeping project goals clear."
        image="/img/property-purchase.jpg"
        primaryHref="/contact?interest=Development%20Coordination"
        primaryLabel="Enquire about a property project"
        secondaryHref="/structural-shells"
        secondaryLabel="See completed properties"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="End-to-End Property Coordination"
          description="Modern Properties manages property assessment, contractor coordination, project timing, documentation, and sale preparation."
        />
        <div className="mt-8">
          <IconCardGrid items={serviceCards} />
        </div>
      </section>

      <section className="border-y border-brand-border bg-brand-section/70 py-14">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Structured sequence"
            title="Property Coordination Timeline"
            description="Our structured milestones keep renovation or development projects moving from review through completed sale readiness."
          />
          <div className="mt-8">
            <ConstructionTimeline steps={constructionSteps} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Quality verification"
          title="Important Clarification"
          description="Modern Properties does not directly provide construction or building services. Any renovation or development work is carried out by independent third-party contractors and skilled workers."
        />
        <div className="mt-8">
          <IconCardGrid items={trustPoints} />
        </div>
      </section>

      <CTASection
        title="Ready to discuss a property with potential?"
        description="Send your site details, goals, or target outcome and Modern Properties will coordinate the next review step."
        href="/contact?interest=Development%20Coordination"
        label="Request property review"
      />
    </div>
  );
}
