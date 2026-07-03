import React from 'react';
import { CTASection, ConstructionTimeline, IconCardGrid, PageHero, SectionHeading } from '../../components/MarketingSections';
import { constructionSteps, pageHeroContent, serviceCards, trustPoints } from '../../data/siteContent';

export default function ConstructionServicesPage() {
  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        {...pageHeroContent.constructionServices}
        primaryHref="/contact?interest=Property%20Coordination"
        primaryLabel="Ask about property coordination"
        secondaryHref="/build-with-aura"
        secondaryLabel="See property journey"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Property coordination support for buyers and sellers"
          description="Modern Properties helps with acquisition reviews, development coordination, renovation management, resale planning, and ready-to-buy property presentation."
        />
        <div className="mt-8">
          <IconCardGrid items={serviceCards} />
        </div>
      </section>

      <section className="border-y border-brand-border bg-brand-section/70 py-14">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Delivery stages"
            title="A practical property improvement sequence"
            description="The same step-by-step approach supports acquisition, renovation coordination, development management, presentation, and final sale."
          />
          <div className="mt-8">
            <ConstructionTimeline steps={constructionSteps} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Quality controls"
          title="Checks before and during coordination"
          description="Modern Properties keeps the key property risks visible: site condition, planning needs, contractor coordination, timing, documentation, and sale readiness."
        />
        <div className="mt-8">
          <IconCardGrid items={trustPoints} />
        </div>
      </section>

      <CTASection
        title="Need help with a property opportunity?"
        description="Send your property address, current status, target outcome, and preferred timing. Modern Properties will suggest the next practical step."
        href="/contact?interest=Property%20Coordination"
        label="Request property review"
      />
    </div>
  );
}
