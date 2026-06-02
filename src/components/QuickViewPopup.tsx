'use client';

import React, { ReactNode, useEffect, useId } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, X, type LucideIcon } from 'lucide-react';

interface PopupStat {
  label: string;
  value: ReactNode;
  icon?: LucideIcon;
}

interface QuickViewPopupProps {
  isOpen: boolean;
  onClose: () => void;
  kicker?: string;
  title: string;
  image: string;
  description: string;
  stats?: PopupStat[];
  features?: string[];
  note?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function QuickViewPopup({
  isOpen,
  onClose,
  kicker,
  title,
  image,
  description,
  stats = [],
  features = [],
  note,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: QuickViewPopupProps) {
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-6 sm:px-6" role="dialog" aria-modal="true" aria-labelledby={titleId}>
          <motion.button
            type="button"
            aria-label="Close quick view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#071d38]/68 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex max-h-[88vh] w-full max-w-5xl flex-col overflow-hidden border border-[#DADDE2] bg-white shadow-[0_26px_70px_rgba(7,29,56,0.22)] lg:grid lg:grid-cols-5"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#071d38] shadow-sm transition-colors hover:bg-[#0B2341] hover:text-white"
              aria-label="Close quick view"
            >
              <X size={18} />
            </button>

            <div className="relative min-h-[230px] overflow-hidden bg-[#DDEAF3] lg:col-span-2 lg:min-h-[560px]">
              <img src={image} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071d38]/78 to-transparent px-5 pb-5 pt-16 text-white">
                {kicker ? (
                  <div className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/82">
                    {kicker}
                  </div>
                ) : null}
                <div className="mt-2 font-serif text-2xl font-bold leading-tight">{title}</div>
              </div>
            </div>

            <div className="min-h-0 overflow-y-auto p-6 sm:p-8 lg:col-span-3">
              {kicker ? (
                <div className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#1C4D8C]">
                  Quick view
                </div>
              ) : null}
              <h2 id={titleId} className="mt-2 max-w-2xl font-serif text-3xl font-bold leading-tight text-[#071d38] md:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-[#41556B]">
                {description}
              </p>

              {stats.length > 0 ? (
                <div className="mt-6 grid grid-cols-2 border border-[#DADDE2] bg-[#F8FBFD] sm:grid-cols-4">
                  {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="min-h-[92px] border-b border-r border-[#DADDE2] p-4 last:border-r-0 sm:border-b-0">
                        <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-[#667085]">
                          {Icon ? <Icon size={13} className="text-[#1C4D8C]" /> : null}
                          {stat.label}
                        </div>
                        <div className="mt-2 font-serif text-xl font-bold leading-tight text-[#071d38]">
                          {stat.value}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}

              {features.length > 0 ? (
                <div className="mt-7">
                  <h3 className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#071d38]">
                    Things you will love
                  </h3>
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-xs font-semibold leading-5 text-[#41556B]">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#1C4D8C]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {note ? (
                <p className="mt-7 border border-[#DADDE2] bg-[#EAF3FC] p-4 text-xs font-semibold leading-6 text-[#071d38]">
                  {note}
                </p>
              ) : null}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={primaryHref}
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2 bg-[#0B2341] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white transition-colors hover:bg-[#1C4D8C]"
                >
                  {primaryLabel}
                  <ArrowRight size={14} />
                </Link>
                {secondaryHref && secondaryLabel ? (
                  <Link
                    href={secondaryHref}
                    onClick={onClose}
                    className="inline-flex items-center justify-center gap-2 border border-[#DADDE2] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-[#071d38] transition-colors hover:border-[#1C4D8C] hover:text-[#1C4D8C]"
                  >
                    {secondaryLabel}
                  </Link>
                ) : null}
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
