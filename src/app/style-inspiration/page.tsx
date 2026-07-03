import { Home, Landmark, Palette, Ruler, Sofa, Sparkles, Trees } from 'lucide-react';
import { MetriconThemePage } from '../../components/MetriconThemePage';

export default function StyleInspirationPage() {
  return (
    <MetriconThemePage
      eyebrow="Style inspiration"
      title="Design ideas for homes that feel finished from day one."
      description="Explore facade palettes, kitchens, storage, outdoor rooms, and material selections inspired by premium Australian display homes."
      heroImage="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1800&q=85"
      primaryHref="/contact?interest=Style%20Inspiration"
      primaryLabel="Start selections"
      secondaryHref="/home-designs"
      secondaryLabel="Browse home designs"
      promoTitle="Fresh ideas for every room"
      promoCards={[
        {
          title: 'Warm modern interiors',
          description: 'Layer timber, stone, soft lighting, and practical storage for a home that feels calm and elevated.',
          image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=85',
          href: '/contact?interest=Interior%20Style',
        },
        {
          title: 'Kitchen and living palettes',
          description: 'Compare island benches, cabinet tones, splashbacks, pendant lighting, and family-friendly layouts.',
          image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85',
          href: '/contact?interest=Kitchen%20Selections',
        },
        {
          title: 'Facade inspiration',
          description: 'Match roof forms, brickwork, render, cladding, windows, and landscape lines to your street presence.',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
          href: '/home-designs',
        },
      ]}
      actionTitle="I want inspiration for..."
      actionTiles={[
        { title: 'Facade colours', href: '/home-designs', icon: Home },
        { title: 'Kitchen finishes', href: '/contact?interest=Kitchen', icon: Sofa },
        { title: 'Outdoor living', href: '/display-homes', icon: Trees },
        { title: 'Investment style', href: '/investment-properties', icon: Landmark },
      ]}
      storyTitle="Bring selections together before you build"
      storyBody={[
        'A strong home design is more than a facade. It is the way natural light, storage, finishes, outdoor space, and long-term maintenance work together.',
        'Modern Properties uses display-home thinking to help buyers make decisions earlier, with selections that suit the land, budget, and property plan.',
      ]}
      storyImage="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85"
      proofTitle="Style decisions we help connect"
      proofPoints={[
        { title: 'Facade rhythm', description: 'Street-facing materials, window proportions, garage treatment, and roof form are reviewed together.', icon: Palette },
        { title: 'Plan fit', description: 'Rooms, storage, entries, and open-plan areas are tested against the way the household will live.', icon: Ruler },
        { title: 'Display detail', description: 'Visit or review display homes to see selections at real scale before locking decisions.', icon: Sparkles },
        { title: 'Build logic', description: 'Style choices stay aligned with buildability, durability, and the total project budget.', icon: Home },
      ]}
      ctaTitle="Ready to shape the look and feel?"
      ctaDescription="Share the home style, facade mood, and room priorities you like. We will connect it to designs, displays, and available property options."
      ctaHref="/contact?interest=Style%20Inspiration"
      ctaLabel="Request style guidance"
      faqs={[
        { question: 'Can I choose finishes before buying land?', answer: 'You can shortlist style preferences early, but final selections should be checked against the chosen design, estate guidelines, and build budget.' },
        { question: 'Do display homes show standard inclusions?', answer: 'Some items may be upgrades. A consultant should separate standard inclusions, optional selections, and site-specific items before contract.' },
        { question: 'How do I keep a home from feeling dated?', answer: 'Use a restrained base palette, durable surfaces, good lighting, and flexible furniture zones instead of relying on short-lived trends.' },
      ]}
    />
  );
}
