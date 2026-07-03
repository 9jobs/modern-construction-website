import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, ClipboardCheck, Home, MapPinned, Ruler } from 'lucide-react';
import { CTASection, PageHero, SectionHeading } from '../../components/MarketingSections';
import { guideCards, pageHeroContent } from '../../data/siteContent';

const articles = [
  {
    title: 'How to buy land before choosing a home design',
    category: 'Land buying',
    icon: MapPinned,
    description: 'Understand frontage, slope, soil class, services, easements, and estate guidelines before you pay a deposit.',
  },
  {
    title: 'What is included in a house and land package?',
    category: 'Packages',
    icon: Home,
    description: 'Compare land price, improvement scope, site works, standard inclusions, upgrades, titles, and project timing.',
  },
  {
    title: 'Choosing a design for a narrow block',
    category: 'Home designs',
    icon: Ruler,
    description: 'What to check when your block is under 12 metres wide and you still need light, storage, parking, and living space.',
  },
  {
    title: 'From contract to keys: the Modern Properties build stages',
    category: 'Construction',
    icon: ClipboardCheck,
    description: 'A simple walkthrough of slab, frame, lock-up, fixing, fit-off, quality checks, handover, and warranty documents.',
  },
  {
    title: 'Should you buy a development site or completed home?',
    category: 'Development',
    icon: BookOpen,
    description: 'Compare the risk, timing, capital, approvals, and contractor coordination behind each property pathway.',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        {...pageHeroContent.blog}
        primaryHref="/contact"
        primaryLabel="Ask a question"
        secondaryHref="/build-with-aura"
        secondaryLabel="Build journey"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Modern Properties guides"
          title="Practical reading before you buy or build"
          description="Use these local guide cards to understand the real decisions behind land, packages, improvement stages, and development opportunities."
        />
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...guideCards, ...articles].map((article) => {
            const Icon = 'icon' in article ? article.icon : BookOpen;
            return (
              <Link key={article.title} href="/contact?interest=Guide" className="group border border-brand-border bg-white p-6 hover:border-brand-secondary">
                <Icon size={24} className="text-brand-secondary" />
                <div className="mt-5 text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">
                  {'category' in article ? article.category : 'Guide'}
                </div>
                <h3 className="mt-3 font-serif text-xl font-bold leading-tight text-[#0B2341]">{article.title}</h3>
                <p className="mt-3 text-xs font-medium leading-6 text-brand-muted">{article.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wider text-brand-secondary">
                  Ask Modern Properties
                  <ArrowRight size={13} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Need advice for a real property?"
        description="Send the listing, land details, or suburb brief. Modern Properties can help explain what to check before you move forward."
        href="/contact?interest=Advice"
        label="Ask Modern Properties"
      />
    </div>
  );
}
