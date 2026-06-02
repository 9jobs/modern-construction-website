import { BadgeCheck, Banknote, Home, KeyRound, MapPinned, Ruler, Search, ShieldCheck } from 'lucide-react';
import { MetriconThemePage } from '../../components/MetriconThemePage';

export default function FirstHomeBuyersPage() {
  return (
    <MetriconThemePage
      eyebrow="First home buyers"
      title="A clearer path from first shortlist to first keys."
      description="Compare land, packages, designs, budgets, grants, and build timing with a simple buyer journey that avoids guesswork."
      heroImage="https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1800&q=85"
      primaryHref="/house-and-land"
      primaryLabel="Explore house and land"
      secondaryHref="/contact?interest=First%20Home"
      secondaryLabel="Ask a consultant"
      promoTitle="Start with the right first step"
      promoCards={[
        {
          title: 'House and land packages',
          description: 'Compare land, design, inclusions, build timing, and guide price in a single buyer path.',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
          href: '/house-and-land',
        },
        {
          title: 'Land first, design next',
          description: 'Secure a block, then match a design after frontage, covenants, services, and soil checks.',
          image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85',
          href: '/land-estates',
        },
        {
          title: 'Visit before deciding',
          description: 'Walk through a display home to understand size, inclusions, finishes, and upgrade choices.',
          image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
          href: '/display-homes',
        },
      ]}
      actionTitle="I want help with..."
      actionTiles={[
        { title: 'Finding land', href: '/land-estates', icon: MapPinned },
        { title: 'Choosing a design', href: '/home-designs', icon: Ruler },
        { title: 'Budget planning', href: '/contact?interest=Budget', icon: Banknote },
        { title: 'Getting build-ready', href: '/build-with-aura', icon: KeyRound },
      ]}
      storyTitle="First-home confidence comes from seeing the whole pathway"
      storyBody={[
        'First buyers often compare sticker prices without seeing site costs, developer requirements, selections, timelines, or approvals.',
        'Modern-Property presents the purchase and build path together so buyers can compare options with a clearer picture of what happens next.',
      ]}
      storyImage="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85"
      proofTitle="First buyer checkpoints"
      proofPoints={[
        { title: 'Search fit', description: 'Start with state, suburb, bedrooms, budget, and timing instead of browsing every property.', icon: Search },
        { title: 'Grant questions', description: 'Eligibility can depend on state, property type, contract dates, and buyer circumstances.', icon: BadgeCheck },
        { title: 'Build stage', description: 'Understand whether land is titled, ready to build, under construction, or complete.', icon: Home },
        { title: 'Risk clarity', description: 'Separate land price, build price, site costs, upgrades, and approval items before signing.', icon: ShieldCheck },
      ]}
      ctaTitle="Ready to make a first-home shortlist?"
      ctaDescription="Send your region, deposit range, preferred home size, and timeline. We will help narrow the path."
      ctaHref="/contact?interest=First%20Home"
      ctaLabel="Start first-home enquiry"
      faqs={[
        { question: 'Should I buy land or a package first?', answer: 'A package is simpler when the land and design already match. Buying land first can work well if you want more design flexibility.' },
        { question: 'Can I estimate total cost from the advertised price?', answer: 'Not fully. Site costs, upgrades, approvals, estate requirements, and finance timing can all affect the final number.' },
        { question: 'What should I inspect in a display home?', answer: 'Look at room size, storage, ceiling heights, finishes, standard inclusions, upgrade items, and how the layout feels in real life.' },
      ]}
    />
  );
}
