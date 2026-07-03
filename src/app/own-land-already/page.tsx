import { ClipboardCheck, FileCheck2, Home, MapPinned, Ruler, Search, ShieldCheck, Trees } from 'lucide-react';
import { MetriconThemePage } from '../../components/MetriconThemePage';

export default function OwnLandAlreadyPage() {
  return (
    <MetriconThemePage
      eyebrow="Own land already"
      title="Match your block to a build-ready home design."
      description="If you already own land, start with frontage, slope, services, overlays, estate rules, soil, budget, and lifestyle needs before locking a home design."
      heroImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85"
      primaryHref="/contact?interest=Own%20Land"
      primaryLabel="Check my block"
      secondaryHref="/home-designs"
      secondaryLabel="Browse designs"
      promoTitle="What happens after you own the block"
      promoCards={[
        {
          title: 'Site feasibility check',
          description: 'Review title, frontage, depth, slope, services, easements, overlays, and developer requirements before design selection.',
          image: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1000&q=85',
          href: '/contact?interest=Site%20Feasibility',
        },
        {
          title: 'Design matching',
          description: 'Shortlist single or double-storey homes that fit the block envelope, garage access, living orientation, and budget.',
          image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85',
          href: '/home-designs',
        },
        {
          title: 'Build pathway',
          description: 'Map selections, approvals, site costs, contractor stages, inspections, and handover before the project begins.',
          image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85',
          href: '/building-process',
        },
      ]}
      actionTitle="I need help with..."
      actionTiles={[
        { title: 'Checking title', href: '/contact?interest=Title%20Check', icon: FileCheck2 },
        { title: 'Matching designs', href: '/home-designs', icon: Ruler },
        { title: 'Understanding costs', href: '/contact?interest=Build%20Budget', icon: Search },
        { title: 'Planning approvals', href: '/building-process', icon: ClipboardCheck },
      ]}
      storyTitle="The right design depends on the land details"
      storyBody={[
        'A home design can look perfect online but fail on the block because of frontage, setbacks, slope, estate controls, orientation, access, or services.',
        'Modern Properties uses a practical review process so buyers can move from land ownership to a realistic development and resale path.',
      ]}
      storyImage="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=85"
      proofTitle="Block-fit checks"
      proofPoints={[
        { title: 'Frontage and depth', description: 'Garage position, room planning, outdoor living, and facade options depend on the build envelope.', icon: MapPinned },
        { title: 'Site conditions', description: 'Slope, soil, trees, drainage, easements, and service locations can change the build scope.', icon: Trees },
        { title: 'Design suitability', description: 'The chosen home should fit the block, household needs, budget, and long-term resale goals.', icon: Home },
        { title: 'Risk clarity', description: 'Approvals, inclusions, upgrades, and site costs are separated before the contract pathway.', icon: ShieldCheck },
      ]}
      ctaTitle="Already have a title or land contract?"
      ctaDescription="Send the address, lot dimensions, estate guidelines, and preferred home size. We will help shortlist designs that fit."
      ctaHref="/contact?interest=Own%20Land"
      ctaLabel="Start block review"
      faqs={[
        { question: 'What block details should I send first?', answer: 'Address, lot width, lot depth, title plan, contour information, estate guidelines, services, easements, and preferred home size are useful starting points.' },
        { question: 'Can I use any home design on my block?', answer: 'No. The design needs to fit frontage, setbacks, orientation, garage access, site conditions, developer rules, and local approvals.' },
        { question: 'When are site costs confirmed?', answer: 'Site costs are usually refined after land details, soil/contour information, engineering, and final design selections are reviewed.' },
      ]}
    />
  );
}
