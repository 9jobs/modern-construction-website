import { ClipboardCheck, Hammer, Home, Landmark, MapPinned, Ruler, ShieldCheck, Trees } from 'lucide-react';
import { MetriconThemePage } from '../../components/MetriconThemePage';

export default function KnockdownRebuildPage() {
  return (
    <MetriconThemePage
      eyebrow="Knockdown rebuild"
      title="Keep the location. Rebuild the home around the future."
      description="Plan a knockdown rebuild or site redevelopment with feasibility checks, approvals, contractor coordination, and resale-focused handover support."
      heroImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85"
      primaryHref="/contact?interest=Knockdown%20Rebuild"
      primaryLabel="Check my site"
      secondaryHref="/development-sites"
      secondaryLabel="View development sites"
      promoTitle="Rebuild pathways"
      promoCards={[
        {
          title: 'Family home rebuild',
          description: 'Replace an ageing dwelling with a modern design that better fits the block, lifestyle, and future resale.',
          image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85',
          href: '/home-designs',
        },
        {
          title: 'Duplex or dual occupancy',
          description: 'Review zoning, frontage, access, overlays, and feasibility before assuming multi-dwelling potential.',
          image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85',
          href: '/development-sites',
        },
        {
          title: 'Investor redevelopment',
          description: 'Assess acquisition cost, demolition, approvals, contractor scope, holding costs, and exit value together.',
          image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=85',
          href: '/investment-properties',
        },
      ]}
      actionTitle="I want to..."
      actionTiles={[
        { title: 'Check my block', href: '/contact?interest=Site%20Check', icon: MapPinned },
        { title: 'Choose a design', href: '/home-designs', icon: Home },
        { title: 'Develop a site', href: '/development-sites', icon: Landmark },
        { title: 'Understand approvals', href: '/build-with-aura', icon: ClipboardCheck },
      ]}
      storyTitle="A rebuild starts with the site, not the facade"
      storyBody={[
        'Before choosing a design, the block needs to be checked for access, slope, service locations, overlays, neighbouring constraints, and demolition realities.',
        'Modern Properties connects these checks to practical redevelopment planning and contractor coordination so the project moves forward with fewer surprises.',
      ]}
      storyImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85"
      proofTitle="What we check first"
      proofPoints={[
        { title: 'Site constraints', description: 'Slope, access, trees, easements, drainage, setbacks, and service locations are reviewed early.', icon: Trees },
        { title: 'Design envelope', description: 'Width, depth, orientation, garage access, and living zones guide which plans can work.', icon: Ruler },
        { title: 'Demolition path', description: 'Existing structures, services, asbestos risk, and access affect project timing and cost.', icon: Hammer },
        { title: 'Approval pathway', description: 'Council, developer, engineering, and renovation or redevelopment approvals are mapped before work begins.', icon: ShieldCheck },
      ]}
      ctaTitle="Need to know if your site works?"
      ctaDescription="Send the address, block size, existing dwelling details, and preferred outcome. We will map the likely next step."
      ctaHref="/contact?interest=Knockdown%20Rebuild"
      ctaLabel="Start site review"
      faqs={[
        { question: 'Is knockdown rebuild cheaper than renovating?', answer: 'It depends on the existing structure, scope, approvals, and desired finish. A site and condition review should happen before comparing options.' },
        { question: 'Can every block support a duplex?', answer: 'No. Frontage, zoning, overlays, access, services, parking, and council rules all affect development potential.' },
        { question: 'When should I choose the home design?', answer: 'Shortlist designs early, but confirm the block envelope and approvals path before locking a plan.' },
      ]}
    />
  );
}
