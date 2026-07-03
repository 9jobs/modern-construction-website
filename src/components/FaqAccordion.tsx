'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <div className="space-y-7 md:col-span-8">
      {faqs.map((faq, index) => (
        <div key={faq.question} className="border-b border-[#DADDE2] pb-5 last:border-b-0">
          <button
            type="button"
            onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
            className="flex w-full items-start justify-between gap-4 text-left"
          >
            <h3 className="font-serif text-lg font-bold text-[#071d38]">{faq.question}</h3>
            <ChevronDown
              size={18}
              className={`mt-1 shrink-0 text-[#1C4D8C] transition-transform duration-300 ${
                openFaq === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <p
            className={`overflow-hidden text-xs font-medium leading-6 text-[#41556B] transition-all duration-300 ${
              openFaq === index ? 'mt-3 max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
