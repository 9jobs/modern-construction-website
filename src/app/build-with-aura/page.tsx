import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import {
  CTASection,
  ConstructionTimeline,
  IconCardGrid,
  PageHero,
  SectionHeading,
} from '../../components/MarketingSections';
import { constructionSteps, pageHeroContent, supportActions, trustPoints } from '../../data/siteContent';

const inclusions = [
  'Land and site feasibility review',
  'Home design matching and facade guidance',
  'Developer guideline and covenant checks',
  'Soil, slope, drainage, and services coordination',
  'Engineering, documentation, and approvals pathway',
  'Development stage updates and handover support',
];

export default function BuildWithAuraPage() {
  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        {...pageHeroContent.buildWithAura}
        primaryHref="/contact?interest=Property%20Journey"
        primaryLabel="Start property journey"
        secondaryHref="/customer-portal"
        secondaryLabel="View portal"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Property journey"
          title="A guided path after you buy"
          description="Whether you start with property acquisition, development planning, or renovation coordination, Modern Properties connects every phase of the lifecycle from feasibility and subdivisions to completed property sales."
        />
        <div className="mt-8">
          <ConstructionTimeline steps={constructionSteps} />
        </div>
      </section>

      <section className="border-y border-brand-border bg-brand-section/70 py-14">
        <div className="mx-auto grid max-w-[1512px] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Included support"
              title="What Modern Properties coordinates"
              description="Your consultant keeps scope, approvals, contractor updates, and buyer-readiness details visible throughout the project."
            />
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:col-span-7">
            {inclusions.map((item) => (
              <div key={item} className="flex items-center gap-3 border border-brand-border bg-white p-4 text-sm font-bold text-[#0B2341]">
                <CheckCircle2 size={18} className="text-brand-secondary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Buyer actions"
          title="Choose the support you need"
          description="Book a consultation, inspect a display home, or view the portal-style milestone flow."
        />
        <div className="mt-8">
          <IconCardGrid items={supportActions} />
        </div>
      </section>

      <section className="border-y border-brand-border bg-white py-14">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Property assurance"
            title="Designed to reduce surprises"
            description="The Modern Properties process makes property acquisition, development potential, quality oversight, and final property sales part of a seamless conversation."
          />
          <div className="mt-8">
            <IconCardGrid items={trustPoints} />
          </div>
        </div>
      </section>

      <CTASection
        title="Start with your land, package, or suburb brief"
        description="Modern Properties will help turn your property target into a premium constructed asset with strong investment value."
        href="/contact?interest=Property%20Journey"
        label="Start property enquiry"
      />
    </div>
  );
}
