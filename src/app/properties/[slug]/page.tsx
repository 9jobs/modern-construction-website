'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  Bath,
  BedDouble,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  Compass,
  FileText,
  Heart,
  Info,
  MapPin,
  Maximize,
  Phone,
  Send,
} from 'lucide-react';
import { propertiesData } from '../../../data/properties';
import { useProperties } from '../../../context/PropertyContext';
import { ConstructionTimeline, SectionHeading } from '../../../components/MarketingSections';
import { constructionSteps, brand } from '../../../data/siteContent';

const tabs = ['overview', 'build path', 'specs', 'location'] as const;

export default function PropertyDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const { savedProperties, toggleSaveProperty, comparedProperties, toggleCompareProperty } = useProperties();

  const property = useMemo(() => propertiesData.find((item) => item.slug === slug), [slug]);
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    financeApproved: 'no',
    timeframe: 'immediate',
    message: '',
  });

  useEffect(() => {
    if (property && !formData.message) {
      setFormData((prev) => ({
        ...prev,
        message: `Hi, I am interested in inquiring about: ${property.title}. Please provide further details.`,
      }));
    }
  }, [property]);

  if (!property) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-brand-section p-8 text-center font-sans">
        <div className="mb-4 flex h-16 w-16 items-center justify-center bg-white text-[#0B2341]">
          <Info size={28} />
        </div>
        <h1 className="font-serif text-3xl font-bold text-[#0B2341]">Property not found</h1>
        <p className="mt-2 max-w-sm text-sm font-medium leading-6 text-brand-muted">
          The Modern-property property, land option, or package you requested is no longer available.
        </p>
        <Link href="/properties" className="mt-6 bg-[#0B2341] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white">
          Return to property search
        </Link>
      </div>
    );
  }

  const isSaved = savedProperties.includes(property.id);
  const isCompared = comparedProperties.includes(property.id);
  const images = [
    property.image,
    property.afterImage || 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    property.floorPlanImage || 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  ];

  const formatPrice = (price: number) =>
    price.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 });

  const propertyType = {
    'house-land': 'House and land package',
    'land-only': 'Land plus build option',
    renovated: 'Completed renovated home',
    'old-home': 'Development site',
    'new-build': 'New build home',
    investment: 'Investment property',
    display: 'Display home',
  }[property.type];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setEnquirySuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      financeApproved: 'no',
      timeframe: 'immediate',
      message: '',
    });
    setTimeout(() => setEnquirySuccess(false), 5000);
  };

  const nextImage = () => setCurrentImageIndex((current) => (current + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((current) => (current - 1 + images.length) % images.length);

  return (
    <div className="bg-white pb-16 font-sans text-brand-text md:pb-0">
      <div className="bg-[#0B2341] py-4 text-white">
        <div className="mx-auto flex max-w-[1512px] items-center justify-between gap-4 px-4 text-xs font-semibold sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2 text-white/70">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-white">Properties</Link>
            <span>/</span>
            <span className="truncate text-white">{property.title}</span>
          </div>
          <Link href="/properties" className="inline-flex shrink-0 items-center gap-2 text-white hover:text-brand-yellow">
            <ArrowLeft size={13} />
            Back
          </Link>
        </div>
      </div>

      <section className="border-b border-brand-border bg-white py-8">
        <div className="mx-auto flex max-w-[1512px] flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#EAF3FC] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#0B2341]">
                {propertyType}
              </span>
              <span className="bg-brand-yellow px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#0B2341]">
                {property.buildStatus}
              </span>
              {property.roi ? (
                <span className="bg-emerald-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-800">
                  {property.roi}% est. ROI
                </span>
              ) : null}
            </div>
            <h1 className="mt-4 max-w-4xl font-serif text-3xl font-bold leading-tight text-[#0B2341] md:text-5xl">
              {property.title}
            </h1>
            <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-brand-muted">
              <MapPin size={16} className="text-brand-secondary" />
              {property.suburb}, {property.state}
            </div>
          </div>
          <div className="md:text-right">
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">Guide price</div>
            <div className="mt-1 font-serif text-3xl font-bold text-[#0B2341]">{formatPrice(property.price)}</div>
            <div className="mt-2 text-[10px] font-bold uppercase tracking-wider text-emerald-700">Land and build pathway available</div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1512px] grid-cols-1 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-[16/10] overflow-hidden border border-brand-border bg-gray-100">
            <img src={images[currentImageIndex]} alt={`${property.title} image ${currentImageIndex + 1}`} className="h-full w-full object-cover" />
            <button onClick={prevImage} className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/90 text-[#0B2341]" aria-label="Previous image">
              <ChevronLeft size={21} />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/90 text-[#0B2341]" aria-label="Next image">
              <ChevronRight size={21} />
            </button>
            <div className="absolute bottom-4 left-4 bg-[#0B2341]/85 px-3 py-2 text-xs font-bold text-white">
              Image {currentImageIndex + 1} of {images.length}
            </div>
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-20 w-28 shrink-0 overflow-hidden border-2 ${currentImageIndex === index ? 'border-[#0B2341]' : 'border-brand-border'}`}
              >
                <img src={image} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-brand-border bg-brand-border md:grid-cols-4">
            {[
              { label: 'Bedrooms', value: property.bedrooms > 0 ? `${property.bedrooms} beds` : 'Land', icon: BedDouble },
              { label: 'Bathrooms', value: property.bathrooms > 0 ? `${property.bathrooms} baths` : 'N/A', icon: Bath },
              { label: 'Car spaces', value: property.cars > 0 ? `${property.cars} cars` : 'N/A', icon: Car },
              { label: 'Land area', value: `${property.landSize} sqm`, icon: Maximize },
            ].map((spec) => {
              const Icon = spec.icon;
              return (
                <div key={spec.label} className="bg-white p-5">
                  <Icon size={20} className="text-brand-secondary" />
                  <div className="mt-3 text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">{spec.label}</div>
                  <div className="mt-1 text-sm font-bold text-[#0B2341]">{spec.value}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 border-b border-brand-border">
            <nav className="flex gap-5 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`border-b-2 px-1 py-3 text-xs font-extrabold uppercase tracking-wider ${
                    activeTab === tab ? 'border-[#0B2341] text-[#0B2341]' : 'border-transparent text-brand-muted'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-8">
            {activeTab === 'overview' ? (
              <div>
                <SectionHeading
                  title="Property and build overview"
                  description={property.description}
                />
                <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {property.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 border border-brand-border bg-white p-4 text-sm font-bold text-[#0B2341]">
                      <Check size={16} className="text-brand-secondary" />
                      {feature}
                    </div>
                  ))}
                </div>
                {property.developmentPotential ? (
                  <p className="mt-6 border border-brand-border bg-[#EAF3FC] p-5 text-sm font-semibold leading-7 text-[#0B2341]">
                    {property.developmentPotential}
                  </p>
                ) : null}
              </div>
            ) : null}

            {activeTab === 'build path' ? (
              <div>
                <SectionHeading
                  title="Recommended Modern-Property build path"
                  description="This is the practical sequence Modern-property would use to move from shortlist to contract, construction, and handover."
                />
                <div className="mt-6">
                  <ConstructionTimeline steps={constructionSteps} />
                </div>
              </div>
            ) : null}

            {activeTab === 'specs' ? (
              <div>
                <SectionHeading
                  title="Technical and purchase details"
                  description="Use this information to compare the property before requesting the full brochure and build scope."
                />
                <div className="mt-6 divide-y divide-brand-border border border-brand-border">
                  {[
                    ['Property type', propertyType],
                    ['Build status', property.buildStatus],
                    ['Estate', property.estateName || 'Available on request'],
                    ['House design', property.houseName || 'Design matching available'],
                    ['House size', property.houseSize ? `${property.houseSize} sqm` : 'To be confirmed'],
                    ['Land size', `${property.landSize} sqm`],
                    ['Rental yield', property.rentalYield ? `${property.rentalYield}%` : 'Not supplied'],
                  ].map(([label, value]) => (
                    <div key={label} className="grid grid-cols-2 gap-4 p-4 text-sm">
                      <span className="font-bold text-brand-muted">{label}</span>
                      <span className="font-bold text-[#0B2341]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {activeTab === 'location' ? (
              <div>
                <SectionHeading
                  title={`${property.suburb}, ${property.state}`}
                  description="Modern-property reviews suburb demand, nearby services, estate controls, and construction access before final build pricing."
                />
                <div className="mt-6 flex h-72 items-center justify-center border border-brand-border bg-brand-section">
                  <div className="text-center">
                    <MapPin size={36} className="mx-auto text-brand-secondary" />
                    <h3 className="mt-4 font-serif text-2xl font-bold text-[#0B2341]">{property.suburb} site marker</h3>
                    <p className="mt-2 text-sm font-medium text-brand-muted">Local schools, services, transport, and estate controls are confirmed during enquiry.</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 overflow-hidden border border-brand-border bg-white">
            <div className="bg-[#0B2341] p-5 text-white">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-brand-yellow">Connect with Modern-Property</div>
              <h2 className="mt-2 font-serif text-2xl font-bold">Request site details</h2>
              <p className="mt-2 text-xs font-semibold leading-6 text-white/72">Ask for land checks, inclusions, design fit, brochure, and next purchase step.</p>
            </div>

            <div className="p-5">
              <div className="mb-4 grid grid-cols-2 gap-2">
                <button
                  onClick={() => toggleSaveProperty(property.id)}
                  className={`inline-flex items-center justify-center gap-2 border px-3 py-2.5 text-xs font-extrabold uppercase tracking-wider ${
                    isSaved ? 'border-brand-secondary bg-[#EAF3FC] text-[#0B2341]' : 'border-brand-border text-[#0B2341]'
                  }`}
                >
                  <Heart size={14} className={isSaved ? 'fill-[#0B2341]' : ''} />
                  {isSaved ? 'Saved' : 'Save'}
                </button>
                <button
                  onClick={() => toggleCompareProperty(property.id)}
                  className={`inline-flex items-center justify-center gap-2 border px-3 py-2.5 text-xs font-extrabold uppercase tracking-wider ${
                    isCompared ? 'border-brand-secondary bg-[#EAF3FC] text-[#0B2341]' : 'border-brand-border text-[#0B2341]'
                  }`}
                >
                  <Compass size={14} />
                  Compare
                </button>
              </div>

              {enquirySuccess ? (
                <div className="border border-emerald-200 bg-emerald-50 p-5 text-center text-sm font-bold text-emerald-800">
                  Enquiry registered locally. Modern-property will contact you about this property path.
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3 text-xs font-bold text-[#0B2341]">
                  <input name="name" required value={formData.name} onChange={handleInputChange} placeholder="Full name" className="w-full border border-brand-border px-3 py-3 outline-none focus:border-brand-secondary" />
                  <input name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="Email address" className="w-full border border-brand-border px-3 py-3 outline-none focus:border-brand-secondary" />
                  <input name="phone" type="tel" required value={formData.phone} onChange={handleInputChange} placeholder="Phone number" className="w-full border border-brand-border px-3 py-3 outline-none focus:border-brand-secondary" />
                  <select name="financeApproved" value={formData.financeApproved} onChange={handleInputChange} className="w-full border border-brand-border px-3 py-3 outline-none focus:border-brand-secondary">
                    <option value="yes">Finance approved</option>
                    <option value="no">Planning finance</option>
                    <option value="cash">Cash buyer or developer</option>
                  </select>
                  <select name="timeframe" value={formData.timeframe} onChange={handleInputChange} className="w-full border border-brand-border px-3 py-3 outline-none focus:border-brand-secondary">
                    <option value="immediate">Immediate</option>
                    <option value="3-6">3-6 months</option>
                    <option value="6-12">6-12 months</option>
                    <option value="future">Future research</option>
                  </select>
                  <textarea name="message" rows={4} value={formData.message} onChange={handleInputChange} placeholder="Tell us what you want checked..." className="w-full resize-none border border-brand-border px-3 py-3 outline-none focus:border-brand-secondary" />
                  <button type="submit" className="inline-flex w-full items-center justify-center gap-2 bg-[#0B2341] px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-brand-secondary">
                    Submit enquiry
                    <Send size={14} />
                  </button>
                </form>
              )}

              <div className="mt-4 grid grid-cols-2 gap-2">
                <a href={`tel:${brand.phone}`} className="inline-flex items-center justify-center gap-2 border border-brand-border px-3 py-3 text-xs font-extrabold uppercase tracking-wider text-[#0B2341]">
                  <Phone size={14} />
                  Call
                </a>
                <button onClick={() => alert('Modern-property brochure request saved locally.')} className="inline-flex items-center justify-center gap-2 border border-brand-border px-3 py-3 text-xs font-extrabold uppercase tracking-wider text-[#0B2341]">
                  <FileText size={14} />
                  Brochure
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-brand-border bg-white p-2 text-center text-[10px] font-extrabold uppercase tracking-wider text-[#0B2341] md:hidden">
        <a href={`tel:${brand.phone}`} className="py-2">Call</a>
        <button onClick={() => toggleSaveProperty(property.id)} className="py-2">{isSaved ? 'Saved' : 'Save'}</button>
        <button onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#0B2341] py-2 text-white">Enquire</button>
      </div>
    </div>
  );
}
