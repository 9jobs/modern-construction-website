'use client';

import React from 'react';
import { CTASection, ConstructionTimeline, IconCardGrid, PageHero, SectionHeading } from '../../components/MarketingSections';
import { constructionSteps, serviceCards, trustPoints } from '../../data/siteContent';

export default function CivilConstructionPage() {
  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        title="Premium Civil & Building Construction"
        eyebrow="Stage 2: Civil Construction"
        description="Structured, quality-controlled civil execution, reliable timelines, and expert site engineering services."
        image="/img/construction2.jpg"
        primaryHref="/contact?interest=Construction"
        primaryLabel="Enquire about civil build"
        secondaryHref="/structural-shells"
        secondaryLabel="See completed shells"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="End-to-End Civil Site Sourcing & Construction"
          description="Modern-property manages soil tests, site cuts, structural concrete foundations, plumbing, and structural frames."
        />
        <div className="mt-8">
          <IconCardGrid items={serviceCards} />
        </div>
      </section>

      <section className="border-y border-brand-border bg-brand-section/70 py-14">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Structured sequence"
            title="Civil Building Timeline"
            description="Our structured milestones keep civil builds on track, from initial slab preparation to lock-up completion."
          />
          <div className="mt-8">
            <ConstructionTimeline steps={constructionSteps} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Quality verification"
          title="120-Point Site Audit Checklist"
          description="Every construction stage undergoes strict independent civil audits before sign-off to ensure lifetime warranty standards."
        />
        <div className="mt-8">
          <IconCardGrid items={trustPoints} />
        </div>
      </section>

      <CTASection
        title="Ready to coordinate a civil build scope?"
        description="Send your land coordinates, council approvals, or target site brief. Modern-property civil engineers will coordinate the review."
        href="/contact?interest=Civil%20Construction"
        label="Request construction scope"
      />
    </div>
  );
}
