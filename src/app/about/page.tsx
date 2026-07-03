import React from 'react';
import { CTASection, IconCardGrid, PageHero, SectionHeading } from '../../components/MarketingSections';
import { brand, mainJourneys, pageHeroContent, trustPoints } from '../../data/siteContent';

const stats = [
  { label: 'Operating states', value: '5' },
  { label: 'Buyer paths', value: '4' },
  { label: 'Project stages tracked', value: '6' },
  { label: 'Local support line', value: brand.phone },
];

export default function AboutPage() {
  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        {...pageHeroContent.about}
        primaryHref="/contact"
        primaryLabel="Talk to Modern Properties"
        secondaryHref="/build-with-aura"
        secondaryLabel="How we work"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who we are"
          title="A property buying, development coordination, and sales business"
          description="Modern Properties specializes in buying and selling properties. We identify properties with strong potential, arrange development or renovation work through reliable third-party contractors and skilled workers, and then offer the completed properties to buyers."
        />
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-brand-border bg-brand-border md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6">
              <div className="font-serif text-3xl font-bold text-[#0B2341]">{stat.value}</div>
              <div className="mt-2 text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-brand-border bg-brand-section/70 py-14">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What Modern Properties helps with"
            title="Start from the path that fits you"
            description="Whether you are selling a site, buying an improved property, or exploring a development opportunity, Modern Properties helps move the property toward a reliable ready-to-buy outcome."
          />
          <div className="mt-8">
            <IconCardGrid items={mainJourneys} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our promise"
          title="Make the hidden property details visible"
          description="We do not provide construction services ourselves. Our focus is on delivering well-developed, ready-to-buy properties while ensuring a smooth and reliable buying and selling experience for our customers."
        />
        <div className="mt-8">
          <IconCardGrid items={trustPoints} />
        </div>
      </section>

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Important Clarification"
          title="Independent contractors complete the improvement work"
          description="Modern Properties does not directly provide construction or building services. Any renovation or development work is carried out by independent third-party contractors and skilled workers."
        />
      </section>

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <CTASection
          title="Tell Modern Properties your property and investment goals"
          description="We buy properties, coordinate development or renovation through trusted contractors, and sell completed properties. Contact us to explore available opportunities."
          href="/contact"
          label="Start conversation"
        />
      </section>
    </div>
  );
}
