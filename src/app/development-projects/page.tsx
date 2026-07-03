import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, FileCheck2, Hammer, MapPinned } from 'lucide-react';
import { CTASection, PageHero, SectionHeading } from '../../components/MarketingSections';
import { pageHeroContent } from '../../data/siteContent';
import { developmentSitesData, renovatedHomesData } from '../../data/properties';

const projectStages = [
  { title: 'Acquisition', icon: MapPinned, description: 'Modern Properties identifies old homes, land holdings, and growth-corridor blocks where renovation or redevelopment can create value.' },
  { title: 'Planning', icon: FileCheck2, description: 'Zoning, overlays, subdivision options, service locations, engineering, and approvals are reviewed early.' },
  { title: 'Delivery', icon: Hammer, description: 'Independent contractors complete the agreed renovation or development scope while progress, quality, and timing are coordinated.' },
  { title: 'Completion', icon: Building2, description: 'Projects move to sale, lease, owner handover, or investment hold with certificates and warranty documents.' },
];

export default function DevelopmentProjectsPage() {
  const projects = [
    ...developmentSitesData.slice(0, 3).map((site) => ({
      title: site.title,
      location: `${site.suburb}, ${site.state}`,
      image: site.image,
      description: site.developmentPotential,
      stat: `${site.potentialDwellings} dwellings`,
      href: `/properties?search=${encodeURIComponent(site.suburb)}`,
    })),
    ...renovatedHomesData.slice(0, 3).map((home) => ({
      title: home.title,
      location: `${home.suburb}, ${home.state}`,
      image: home.image,
      description: home.description,
      stat: `${home.roi}% ROI`,
      href: `/properties?search=${encodeURIComponent(home.suburb)}`,
    })),
  ];

  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        {...pageHeroContent.developmentProjects}
        primaryHref="/development-sites"
        primaryLabel="Find sites"
        secondaryHref="/renovated-homes"
        secondaryLabel="View completed homes"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Project method"
          title="How Modern Properties creates property value"
          description="Development projects connect property acquisition, feasibility, planning, contractor coordination, and final handover or sale."
        />
        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-brand-border bg-brand-border md:grid-cols-4">
          {projectStages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div key={stage.title} className="bg-white p-6">
                <Icon size={24} className="text-brand-secondary" />
                <h3 className="mt-4 font-serif text-xl font-bold text-[#0B2341]">{stage.title}</h3>
                <p className="mt-3 text-xs font-medium leading-6 text-brand-muted">{stage.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-brand-border bg-brand-section/70 py-14">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Recent and active project examples"
            description="These examples show how old homes, titled land, and development sites can become completed residential assets."
          />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link key={project.title} href={project.href} className="group border border-brand-border bg-white hover:border-brand-secondary">
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3 text-[10px] font-extrabold uppercase tracking-widest text-brand-secondary">
                    <span>{project.location}</span>
                    <span>{project.stat}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-xl font-bold leading-tight text-[#0B2341]">{project.title}</h3>
                  <p className="mt-3 text-xs font-medium leading-6 text-brand-muted">{project.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wider text-brand-secondary">
                    View pathway
                    <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a site or project idea?"
        description="Modern Properties can help check acquisition, development potential, planning risk, contractor scope, and exit strategy."
        href="/contact?interest=Development%20Project"
        label="Discuss a project"
      />
    </div>
  );
}
