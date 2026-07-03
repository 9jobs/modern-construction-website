'use client';

import React, { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { AustralianState, useProperties } from '../../context/PropertyContext';
import { QuickSearch } from '../../components/QuickSearch';
import { MapListings } from '../../components/MapListings';
import { PageHero, SectionHeading } from '../../components/MarketingSections';
import { pageHeroContent } from '../../data/siteContent';

function PropertiesContent() {
  const searchParams = useSearchParams();
  const { setSearchFilters } = useProperties();

  const savedOnly = searchParams.get('saved') === 'true';
  const compareOnly = searchParams.get('compare') === 'true';
  const queryKey = searchParams.toString();

  useEffect(() => {
    if (savedOnly || compareOnly) {
      setSearchFilters({
        state: 'ALL',
        suburb: '',
        type: 'ALL',
        minPrice: '',
        maxPrice: '',
        bedrooms: '',
        minLand: '',
        buildStatus: 'ALL',
      });
      return;
    }

    setSearchFilters({
      state: (searchParams.get('state') as AustralianState) || 'ALL',
      suburb: searchParams.get('suburb') || searchParams.get('search') || '',
      type: searchParams.get('type') || 'ALL',
      minPrice: '',
      maxPrice: searchParams.get('budget') || '',
      bedrooms: searchParams.get('bedrooms') || '',
      minLand: searchParams.get('landSize') || '',
      buildStatus: searchParams.get('buildStatus') || 'ALL',
    });
  }, [compareOnly, savedOnly, queryKey, searchParams, setSearchFilters]);

  const title = savedOnly
    ? 'Saved properties and build options'
    : compareOnly
      ? 'Compare your selected properties'
      : pageHeroContent.properties.title;

  const description = savedOnly
    ? 'Review the packages, land lots, homes, and sites you saved locally in this browser.'
    : compareOnly
      ? 'Compare selected properties before you ask Modern Properties for land checks, development options, or resale guidance.'
      : pageHeroContent.properties.description;

  return (
    <div className="bg-white font-sans text-brand-text">
      <PageHero
        {...pageHeroContent.properties}
        title={title}
        description={description}
        primaryHref="/house-and-land"
        primaryLabel="House and land"
        secondaryHref="/land-estates"
        secondaryLabel="Buy land"
      />

      <section className="mx-auto max-w-[1512px] px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Search Modern Properties stock"
          title={savedOnly ? 'Your saved shortlist' : compareOnly ? 'Your compare shortlist' : 'Search properties by buyer path'}
          description={
            savedOnly || compareOnly
              ? 'Local saved and compare selections are stored in this browser only.'
              : 'Filter by state, suburb, price, bedrooms, land size, property type, and build stage.'
          }
        />
        {!savedOnly && !compareOnly ? (
          <div className="mt-8">
            <QuickSearch />
          </div>
        ) : null}
        <div className="mt-8">
          <MapListings mode={savedOnly ? 'saved' : compareOnly ? 'compare' : 'all'} />
        </div>
      </section>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-white p-8">
          <span className="animate-pulse-blue text-xs font-semibold uppercase tracking-widest text-brand-muted">
            Loading Modern Properties listings...
          </span>
        </div>
      }
    >
      <PropertiesContent />
    </Suspense>
  );
}
