import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { EnquiryForm } from '../../components/EnquiryForm';
import { PageHero, SectionHeading } from '../../components/MarketingSections';
import { brand, pageHeroContent } from '../../data/siteContent';

export default function ContactPage() {
  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        {...pageHeroContent.contact}
        primaryHref="#enquiry"
        primaryLabel="Open enquiry form"
        secondaryHref="/customer-portal"
        secondaryLabel="Customer portal"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Local enquiry"
          title="Send Modern-Property your property and project brief"
          description="The form works locally and shows a success state. Use it for house and land, land checks, design matching, display homes, investments, or construction support."
        />
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <a href={`tel:${brand.phone}`} className="border border-brand-border bg-white p-5 hover:border-brand-secondary">
            <Phone className="text-brand-secondary" size={22} />
            <h3 className="mt-4 font-serif text-xl font-bold text-[#0B2341]">Call Modern-Property</h3>
            <p className="mt-2 text-sm font-bold text-[#0B2341]">{brand.phone}</p>
          </a>
          <a href={`mailto:${brand.email}`} className="border border-brand-border bg-white p-5 hover:border-brand-secondary">
            <Mail className="text-brand-secondary" size={22} />
            <h3 className="mt-4 font-serif text-xl font-bold text-[#0B2341]">Email enquiry</h3>
            <p className="mt-2 text-sm font-bold text-[#0B2341]">{brand.email}</p>
          </a>
          <div className="border border-brand-border bg-white p-5">
            <MapPin className="text-brand-secondary" size={22} />
            <h3 className="mt-4 font-serif text-xl font-bold text-[#0B2341]">Operating regions</h3>
            <p className="mt-2 text-sm font-medium leading-6 text-brand-muted">Victoria (VIC) growth corridors.</p>
          </div>
        </div>
      </section>

      <section id="enquiry" className="border-y border-brand-border bg-brand-section/70 px-4 py-14 sm:px-6 lg:px-8">
        <EnquiryForm />
      </section>
    </div>
  );
}
