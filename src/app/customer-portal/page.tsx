'use client';

import React, { useState } from 'react';
import { CalendarDays, ClipboardList, FileText, Image as ImageIcon, MessageSquare, UserRound } from 'lucide-react';
import { CTASection, PageHero, SectionHeading } from '../../components/MarketingSections';
import { constructionSteps, pageHeroContent } from '../../data/siteContent';

const tabs = ['Milestones', 'Documents', 'Messages'] as const;

const documents = [
  'Signed build scope',
  'Soil and contour report',
  'Developer approval pack',
  'Engineering drawings',
  'Progress claim schedule',
  'Handover certificate checklist',
];

export default function CustomerPortalPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('Milestones');

  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        {...pageHeroContent.customerPortal}
        primaryHref="/contact?interest=Customer%20Portal"
        primaryLabel="Request portal access"
        secondaryHref="/build-with-aura"
        secondaryLabel="Build journey"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portal preview"
          title="A local build tracking dashboard"
          description="This page shows the type of customer view Modern Properties buyers use after contract: milestones, photos, documents, supervisor notes, and next actions."
        />

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <aside className="border border-brand-border bg-[#0B2341] p-6 text-white lg:col-span-3">
            <UserRound size={28} className="text-brand-yellow" />
            <h2 className="mt-4 font-serif text-2xl font-bold">Horizon 240 Build</h2>
            <p className="mt-2 text-xs font-semibold leading-6 text-white/72">Point Cook VIC - house and land package</p>
            <div className="mt-6 space-y-3 text-xs font-bold">
              <div className="flex items-center justify-between border-t border-white/15 pt-3">
                <span>Current stage</span>
                <span className="text-brand-yellow">Frame</span>
              </div>
              <div className="flex items-center justify-between border-t border-white/15 pt-3">
                <span>Supervisor</span>
                <span>Assigned</span>
              </div>
              <div className="flex items-center justify-between border-t border-white/15 pt-3">
                <span>Next update</span>
                <span>Friday</span>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="flex border border-brand-border bg-brand-section p-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-4 py-3 text-xs font-extrabold uppercase tracking-wider ${
                    activeTab === tab ? 'bg-[#0B2341] text-white' : 'text-[#0B2341] hover:bg-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'Milestones' ? (
              <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden border border-brand-border bg-brand-border md:grid-cols-2">
                {constructionSteps.map((step, index) => (
                  <div key={step.title} className="bg-white p-5">
                    <div className="flex items-center justify-between">
                      <ClipboardList size={20} className="text-brand-secondary" />
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider ${index <= 2 ? 'text-emerald-700' : 'text-brand-muted'}`}>
                        {index <= 1 ? 'Complete' : index === 2 ? 'Current' : 'Upcoming'}
                      </span>
                    </div>
                    <h3 className="mt-4 font-serif text-xl font-bold text-[#0B2341]">{step.title}</h3>
                    <p className="mt-3 text-xs font-medium leading-6 text-brand-muted">{step.description}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {activeTab === 'Documents' ? (
              <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                {documents.map((document) => (
                  <div key={document} className="flex items-center gap-3 border border-brand-border bg-white p-4 text-sm font-bold text-[#0B2341]">
                    <FileText size={18} className="text-brand-secondary" />
                    {document}
                  </div>
                ))}
              </div>
            ) : null}

            {activeTab === 'Messages' ? (
              <div className="mt-6 space-y-4">
                <div className="border border-brand-border bg-white p-5">
                  <div className="flex items-center gap-3 text-sm font-bold text-[#0B2341]">
                    <MessageSquare size={18} className="text-brand-secondary" />
                    Site supervisor note
                  </div>
                  <p className="mt-3 text-xs font-medium leading-6 text-brand-muted">
                    Frame inspection is booked. Updated progress photos will be uploaded after the inspection report is received.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="border border-brand-border bg-brand-section p-5">
                    <ImageIcon size={20} className="text-brand-secondary" />
                    <h3 className="mt-4 font-serif text-xl font-bold text-[#0B2341]">Photo log</h3>
                    <p className="mt-2 text-xs font-medium leading-6 text-brand-muted">Latest frame and bracing photos ready for review.</p>
                  </div>
                  <div className="border border-brand-border bg-brand-section p-5">
                    <CalendarDays size={20} className="text-brand-secondary" />
                    <h3 className="mt-4 font-serif text-xl font-bold text-[#0B2341]">Next action</h3>
                    <p className="mt-2 text-xs font-medium leading-6 text-brand-muted">Confirm electrical walkthrough time with your consultant.</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <CTASection
        title="Need help with your build stage?"
        description="Contact Modern Properties to confirm documents, progress updates, or handover requirements."
        href="/contact?interest=Customer%20Portal"
        label="Contact support"
      />
    </div>
  );
}
