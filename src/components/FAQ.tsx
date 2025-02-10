"use client";

import { useState } from "react";
import Script from "next/script";
import { FiPlus, FiMinus } from "react-icons/fi";
import type { FAQItem } from "@/types";

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs: FAQItem[];
}

const FAQSection = ({
  title = "Frequently Asked Questions",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac ridiculus id aliquet elementum morbi sit viverra bibendum viverra. Senectus lacinia aliquet mi feugiat metus, mauris justo.",
  faqs,
}: FAQSectionProps) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="py-16 px-4" aria-labelledby="faq-heading">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              {title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-pink-50 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={openItems.includes(faq.id)}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="ml-4">
                    {openItems.includes(faq.id) ? (
                      <div className="bg-pink-200 rounded-full p-1">
                        <FiMinus
                          className="w-5 h-5 text-pink-500"
                          aria-hidden="true"
                        />
                      </div>
                    ) : (
                      <div className="bg-pink-200 rounded-full p-1">
                        <FiPlus
                          className="w-5 h-5 text-pink-500"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </span>
                </button>

                {openItems.includes(faq.id) && (
                  <div id={`faq-answer-${faq.id}`} className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
