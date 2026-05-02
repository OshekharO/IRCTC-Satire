'use client';

import { useState } from "react";

const faqs = [
  {
    q: "Why are all Tatkal tickets sold in 0.3 seconds?",
    a: 'IRCTC has pioneered quantum booking technology that allows specially registered agents to purchase tickets before the booking window actually opens. This is called "innovation."',
  },
  {
    q: "Why does the server always crash during peak booking?",
    a: "Our servers are highly sensitive to human anticipation. The collective hope of 1.4 billion Indians wanting tickets creates a spiritual overload that our 1999-era servers simply cannot handle.",
  },
  {
    q: "Can I get a refund if my payment was deducted but no ticket was issued?",
    a: "Yes! Simply fill Form TDR-7/B, submit it at your nearest railway station between 2–4 PM on Tuesdays (except public holidays), wait 90 working days, and receive a helpful rejection email.",
  },
  {
    q: "Why is the captcha so hard?",
    a: "We take security very seriously. Our captcha is designed to verify that you are human. Unfortunately, it's so effective that it also successfully blocks humans.",
  },
  {
    q: "Is there any way to guarantee a Tatkal ticket?",
    a: "We're glad you asked! Our Agent Network page has all the information you need. Tell them IRCTC sent you. They'll laugh, but they'll understand.",
  },
];

export default function TatkalFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-primary mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Questions we receive. Answers we have perfected.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const buttonId = `faq-btn-${idx}`;
            const panelId = `faq-panel-${idx}`;
            return (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                id={buttonId}
                aria-expanded={openFaq === idx}
                aria-controls={panelId}
                className="w-full text-left px-6 py-4 font-semibold text-gray-800 hover:bg-gray-50 transition-colors flex items-center justify-between gap-4"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <span className={`flex-shrink-0 text-primary transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === idx ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 bg-blue-50">
                  {faq.a}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
