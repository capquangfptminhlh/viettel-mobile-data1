import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data/packages';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl border border-gray-150 p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
        
        {/* Headline Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto text-lg border border-red-100">
            ❓
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-none">
            Giải Đáp Thắc Mắc Thường Gặp
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Mọi thắc mắc của bạn liên quan đến việc đăng ký, nạp tiền hoặc thao tác hạ băng thông 4G/5G Viettel sẽ được trả lời đầy đủ tại đây.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-red-500 bg-red-50/5 shadow-md' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-5 py-4 sm:py-5 flex items-start justify-between gap-4 font-bold text-gray-850 text-sm sm:text-base cursor-pointer focus:outline-none focus:bg-gray-50 transition-colors"
                >
                  <span className="flex items-start gap-3">
                    <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 ${isOpen ? 'text-red-605' : 'text-gray-400'}`} />
                    <span>{faq.question}</span>
                  </span>
                  <span className="shrink-0 pt-0.5">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-red-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </span>
                </button>

                {/* Sub Content Expanded Container */}
                {isOpen && (
                  <div className="px-5 pb-5 sm:pb-6 pl-13 text-xs sm:text-sm text-gray-650 leading-relaxed border-t border-gray-100 pt-3 animate-fade-in whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
