import { BadgePercent, Building2, Home, KeyRound, Landmark, Search, ShieldCheck, Sparkles } from 'lucide-react';
import { MetriconThemePage } from '../../components/MetriconThemePage';

export default function CurrentOffersPage() {
  return (
    <MetriconThemePage
      eyebrow="Current offers"
      title="Featured property, package, and development opportunities."
      description="View current Modern Properties releases, buyer pathways, display appointments, and project opportunities in one clean place."
      heroImage="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=85"
      primaryHref="/properties"
      primaryLabel="View properties"
      secondaryHref="/contact?interest=Offers"
      secondaryLabel="Ask about offers"
      promoTitle="Featured releases"
      promoCards={[
        {
          title: 'House and land release',
          description: 'Explore packages where the block, build pathway, inclusions, and guide price are already connected.',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
          href: '/house-and-land',
        },
        {
          title: 'Display home appointments',
          description: 'Book a walkthrough to inspect finishes, room proportions, facades, and selection upgrades.',
          image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
          href: '/display-homes',
        },
        {
          title: 'Development-site shortlist',
          description: 'Review acquired or acquisition-ready sites for subdivision, rebuild, and investment pathways.',
          image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=85',
          href: '/development-sites',
        },
      ]}
      actionTitle="I want to view..."
      actionTiles={[
        { title: 'Package offers', href: '/house-and-land', icon: Home },
        { title: 'Display releases', href: '/display-homes', icon: KeyRound },
        { title: 'Investment stock', href: '/investment-properties', icon: ShieldCheck },
        { title: 'Development sites', href: '/development-sites', icon: Landmark },
      ]}
      storyTitle="Offers that still need proper due diligence"
      storyBody={[
        'A clean offer page should make the opportunity easy to scan, but every property still needs local checks before a buyer commits.',
        'Modern Properties keeps offer conversations linked to land availability, build timing, inclusions, approvals, and the final contract pathway.',
      ]}
      storyImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85"
      proofTitle="What each offer should clarify"
      proofPoints={[
        { title: 'Availability', description: 'Confirm whether the land, package, display, or developed property is still active.', icon: Search },
        { title: 'Inclusions', description: 'Separate standard inclusions, upgrades, site costs, and allowance items before comparing.', icon: BadgePercent },
        { title: 'Property status', description: 'Understand whether the asset is titled, under improvement, ready to buy, or complete.', icon: Building2 },
        { title: 'Next action', description: 'Book inspection, request documents, submit enquiry, or start feasibility based on the offer type.', icon: Sparkles },
      ]}
      ctaTitle="Want the latest release list?"
      ctaDescription="Send your state, budget, timing, and preferred property type. We will point you toward active releases that fit."
      ctaHref="/contact?interest=Offers"
      ctaLabel="Get release updates"
      faqs={[
        { question: 'Are offers fixed nationally?', answer: 'No. Property availability, grants, pricing, land titles, and inclusions vary by state, suburb, estate, and contract timing.' },
        { question: 'Can I reserve a package online?', answer: 'Use the enquiry path first so land status, build timing, and inclusions can be checked before any commitment.' },
        { question: 'Do offers include upgrades?', answer: 'Some offers may include upgrades or limited-time selections. Always confirm the written inclusion schedule.' },
      ]}
    />
  );
}
