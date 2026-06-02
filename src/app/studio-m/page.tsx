import { ClipboardCheck, Home, Palette, Ruler, Sofa, Sparkles, Trees } from 'lucide-react';
import { MetriconThemePage } from '../../components/MetriconThemePage';

export default function StudioMPage() {
  return (
    <MetriconThemePage
      eyebrow="Design studio"
      title="A selections studio for facades, fixtures, finishes, and flow."
      description="Explore a Metricon-style design studio experience for choosing colours, materials, kitchens, bathrooms, outdoor rooms, and upgrade priorities before the build is locked."
      heroImage="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1800&q=85"
      primaryHref="/contact?interest=Design%20Studio"
      primaryLabel="Book studio visit"
      secondaryHref="/style-inspiration"
      secondaryLabel="View inspiration"
      promoTitle="Explore the selections journey"
      promoCards={[
        {
          title: 'Facade and street presence',
          description: 'Compare roof forms, brickwork, render, cladding, windows, garage treatment, and landscape lines together.',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
          href: '/home-designs',
        },
        {
          title: 'Kitchen and living finishes',
          description: 'Review cabinetry tones, stone benches, splashbacks, flooring, lighting, and open-plan storage details.',
          image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85',
          href: '/style-inspiration',
        },
        {
          title: 'Bathrooms and wet areas',
          description: 'Select tiles, tapware, vanities, mirrors, lighting, and practical maintenance details before final pricing.',
          image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=85',
          href: '/contact?interest=Bathroom%20Selections',
        },
      ]}
      actionTitle="Plan selections for..."
      actionTiles={[
        { title: 'Facade colours', href: '/home-designs', icon: Home },
        { title: 'Kitchen finishes', href: '/style-inspiration', icon: Sofa },
        { title: 'Outdoor living', href: '/display-homes', icon: Trees },
        { title: 'Build contract', href: '/building-process', icon: ClipboardCheck },
      ]}
      storyTitle="Selections feel easier when the whole home is considered at once"
      storyBody={[
        'A polished selections process helps buyers understand what is standard, what is an upgrade, and which choices have cost or construction timing impacts.',
        'Modern-Property connects the design studio path to the chosen block, home design, build budget, estate guidelines, and approval requirements.',
      ]}
      storyImage="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85"
      proofTitle="Design studio checkpoints"
      proofPoints={[
        { title: 'Palette logic', description: 'Exterior and interior choices are reviewed as one system so the home feels intentional.', icon: Palette },
        { title: 'Plan fit', description: 'Selections are checked against room sizes, storage, natural light, and household priorities.', icon: Ruler },
        { title: 'Display proof', description: 'Display homes help buyers see materials at full scale before making final decisions.', icon: Sparkles },
        { title: 'Build impact', description: 'Upgrade choices stay linked to contract scope, budget, timing, and site constraints.', icon: ClipboardCheck },
      ]}
      ctaTitle="Want to walk through selections?"
      ctaDescription="Share your preferred style, rooms that matter most, and budget range. We will map a design studio appointment around your build path."
      ctaHref="/contact?interest=Design%20Studio"
      ctaLabel="Book studio appointment"
      faqs={[
        { question: 'Can I visit before signing a build contract?', answer: 'Yes. A pre-contract studio conversation can help you understand the look, inclusions, and likely upgrade priorities before final pricing.' },
        { question: 'Are all display finishes included as standard?', answer: 'No. Some display finishes may be upgrades, so every selection should be checked against the written inclusions schedule.' },
        { question: 'How should I prepare for a studio visit?', answer: 'Bring facade references, preferred colours, must-have rooms, appliance priorities, and any estate guidelines or block details.' },
      ]}
    />
  );
}
