"use client";

import { useMemo, useState } from "react";

import AButton from "../components/a-button";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Icons = {
  Search: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  Information: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  ),
  ExternalLink: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  ),
};

const CONTACT_CHANNELS = [
  {
    name: "Legal Support",
    email: "legal@beamandclover.com",
    label: "Compliance & Licensing",
  },
  {
    name: "Technical Desk",
    email: "tech@beamandclover.com",
    label: "IT & Systems",
  },
  {
    name: "General Inquiry",
    email: "hello@beamandclover.com",
    label: "General Support",
  },
];

const FAQS = [
  {
    id: "BC-101",
    category: "Licensing",
    question: "What is the standard processing time for a vehicle license?",
    answer:
      "Standard processing typically takes 3-5 business days from the moment of document submission. For bulk fleet applications, this can extend to 7-10 days depending on the volume and specific jurisdictional requirements.",
  },
  {
    id: "BC-102",
    category: "Licensing",
    question: "Do you handle international vehicle importation licensing?",
    answer:
      "Yes, we manage the complete cross-border compliance stack, including customs clearance documentation, regional homogenization permits, and initial registration within the target country.",
  },
  {
    id: "BC-201",
    category: "Compliance",
    question: "How do you monitor changing local transport regulations?",
    answer:
      "Our system integrates directly with national transport databases and legislative feeds. We provide real-time updates to our clients via our compliance dashboard, highlighting any action items required for their specific fleet profile.",
  },
  {
    id: "BC-202",
    category: "Compliance",
    question: "What happens if a vehicle in my fleet fails an audit?",
    answer:
      "We immediately move the vehicle into our 'Resolution Track'. This involves identifying the specific compliance gap, coordinating the necessary technical or administrative fix, and resubmitting for audit within 48 hours to minimize operational downtime.",
  },
  {
    id: "BC-301",
    category: "IT & Systems",
    question: "Can your API integrate with existing ERP systems?",
    answer:
      "Absolutely. Our platform is built on a RESTful architecture with comprehensive GraphQL endpoints. We support native integrations with major ERPs like SAP, Oracle, and Microsoft Dynamics, as well as custom-built industrial solutions.",
  },
  {
    id: "BC-302",
    category: "IT & Systems",
    question: "How secure is my fleet data on your platform?",
    answer:
      "We employ AES-256 at-rest encryption and TLS 1.3 for all data in transit. Our systems are SOC2 Type II compliant, with continuous 24/7 monitoring and automated threat detection protocols.",
  },
  {
    id: "BC-401",
    category: "Billing",
    question: "Is there a bulk discount for fleet-wide registration?",
    answer:
      "Yes, we offer tiered pricing models based on fleet size. Volume discounts begin at 50+ vehicles, with significantly optimized rates for large-scale enterprise operations exceeding 500 units.",
  },
];

const CATEGORIES = ["All", "Licensing", "Compliance", "IT & Systems", "Billing"];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.id.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Generate structured data for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      {/* FAQ Schema for Google Rich Snippets */}
      { }
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-background text-foreground selection:bg-[#F48244]/20">
        <Navbar />

        <div className="pt-32 pb-20 px-6 md:px-12 border-b border-foreground/10 overflow-hidden">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left Content */}
              <div className="max-w-4xl w-full md:w-1/2 relative z-10">
                <div className="flex ">
                  <div className="  bg-[#F48244]/15 border-[#F48244]/30 border-2 rounded-lg px-2 py-1.5">
                    <div className="flex items-center gap-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_232_104)">
                          <path
                            d="M2.77545 8.00924L1.52942 9.89472L2.34523 10.7081L4.18806 9.48601C4.49846 9.67983 4.83686 9.84922 5.19642 9.95322L5.64533 12.1882H6.79551L7.23345 10.0073C7.59951 9.9228 7.94688 9.78302 8.26743 9.60633L10.1529 10.8535L10.9663 10.0382L9.7442 8.19575C9.93802 7.88535 10.0721 7.54695 10.1761 7.18739L12.3756 6.73844V5.5883L10.2301 5.15032C10.1456 4.78426 10.0233 4.43689 9.84698 4.11676L11.1032 2.23123L10.2922 1.41788L8.45186 2.63995C8.14146 2.44613 7.80425 2.30805 7.44469 2.20362L6.99659 0H5.84646L5.40847 2.14958C5.04241 2.23408 4.69505 2.35839 4.37453 2.53514L2.48901 1.28014L1.67565 2.0915L2.89772 3.9319C2.7039 4.24269 2.53043 4.57952 2.42642 4.93908L0.1875 5.38717V6.53731L2.37242 6.9753C2.45693 7.34132 2.5987 7.68868 2.77545 8.00924ZM6.32098 4.32885C7.27857 4.32885 8.05492 5.1052 8.05492 6.06279C8.05492 7.02038 7.27853 7.79676 6.32098 7.79676C5.36339 7.79676 4.587 7.02038 4.587 6.06279C4.587 5.1052 5.36339 4.32885 6.32098 4.32885Z"
                            fill="#F48244"
                          />
                          <path
                            d="M11.21 8.59737L11.6021 10.7721C11.2933 10.9858 11.0191 11.2369 10.7863 11.5193L8.57255 11.0521L8.11672 12.108L9.93197 13.3691C9.86616 13.7294 9.84789 14.0999 9.88405 14.4725L7.98633 15.7084L8.41047 16.7773L10.5844 16.3856C10.7981 16.6944 11.0488 16.969 11.3311 17.2014L10.8635 19.4152L11.9194 19.871L13.1805 18.0558C13.5409 18.1216 13.9106 18.1386 14.2835 18.1029L15.519 19.9998L16.5879 19.5757L16.1966 17.4025C16.5054 17.1888 16.78 16.9385 17.0128 16.6562L19.227 17.1238L19.6829 16.0679L17.8677 14.8072C17.9335 14.4469 17.9517 14.0768 17.916 13.7038L19.8137 12.4679L19.3896 11.399L17.2156 11.7907C17.0019 11.4819 16.7512 11.2073 16.4689 10.9749L16.9365 8.76111L15.8806 8.30528L14.6195 10.1205C14.2592 10.0547 13.8886 10.0356 13.5157 10.0714L12.2794 8.17285L11.21 8.59737ZM13.2601 12.4769C14.1502 12.1234 15.1582 12.559 15.5116 13.4491C15.8651 14.3393 15.4296 15.3472 14.5394 15.7007C13.6493 16.0541 12.6413 15.6186 12.2879 14.7284C11.9348 13.8379 12.3699 12.8299 13.2601 12.4769Z"
                            fill="#F48244"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_232_104">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <p className="text-xs font-normal">
                        System Knowlege Base
                      </p>
                    </div>
                  </div>
                </div>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter pt-4 md:pt-5  mb-8 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/60">
                  Protocols & <br />
                  <span className="italic font-serif font-light text-foreground/40">
                    Resolution
                  </span>
                </h1>
                <p className="text-xl text-foreground/50 max-w-xl leading-relaxed mb-10 font-medium">
                  Comprehensive documentation on our administrative framework,
                  system compliance, and technical standards.
                </p>

                {/* Search Bar */}
                <div className="relative max-w-2xl group">
                  <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-foreground/20 group-focus-within:text-[#F48244] transition-colors">
                    <Icons.Search />
                  </div>
                  <input
                    type="text"
                    placeholder="Search protocols, categories, or IDs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl py-6 pl-14 pr-6 text-lg focus:outline-none focus:ring-2 focus:ring-[#F48244]/20 focus:border-[#F48244]/40 transition-all placeholder:text-foreground/20"
                  />
                </div>
              </div>

              {/* Right Decoration - Abstract UI Elements */}
              <div className="hidden lg:block w-1/3 relative pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F48244]/20 blur-[120px] rounded-full animate-pulse" />
                <div className="space-y-4 font-mono text-[10px] text-foreground/30 uppercase tracking-widest">
                  <div className="flex justify-between border-b border-foreground/5 pb-2">
                    <span>System Status</span>
                    <span className="text-green-500">Operational</span>
                  </div>
                  <div className="flex justify-between border-b border-foreground/5 pb-2">
                    <span>Latent Sync</span>
                    <span>14ms</span>
                  </div>
                  <div className="flex justify-between border-b border-foreground/5 pb-2">
                    <span>Compliance Hub</span>
                    <span>v.2.4.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Navigation & List */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 shrink-0 space-y-12">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/30 mb-8 font-bold">
                  Categories
                </h4>
                <nav className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar pb-4 lg:pb-0">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap text-left transition-all ${
                        activeCategory === cat ?
                          "bg-[#F48244] text-white shadow-lg shadow-[#F48244]/20" :
                          "text-foreground/50 hover:bg-foreground/5 hover:text-foreground"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/5">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#F48244] mb-4 font-bold">
                  Need Assistance?
                </h4>
                <p className="text-xs text-foreground/40 leading-relaxed mb-6">
                  Can't find what you're looking for? Our specialized teams are
                  online.
                </p>
                <AButton
                  href="/contact"
                  className="w-full justify-center text-[10px] uppercase font-bold tracking-widest py-3"
                  filled
                >
                  Open Ticket
                </AButton>
              </div>
            </aside>

            {/* Main Content - FAQ List */}
            <div className="flex-1 min-h-[500px]">
              {filteredFaqs.length === 0 ?
                  (
                    <div className="flex flex-col items-center justify-center h-64 text-foreground/40 border border-dashed border-foreground/10 rounded-xl">
                      <p className="font-mono">
                        No protocols found matching query.
                      </p>
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setActiveCategory("All");
                        }}
                        className="mt-4 text-sm text-[#F48244] hover:underline"
                      >
                        Reset Filters
                      </button>
                    </div>
                  ) :
                  (
                    <div className="space-y-4">
                      {filteredFaqs.map((faq) => (
                        <div
                          key={faq.id}
                          className={`group border rounded-xl overflow-hidden transition-all duration-300 ease-out
                        ${
                        expandedId === faq.id ?
                          "border-[#F48244]/30 bg-foreground/[0.02]" :
                          "border-foreground/10 bg-background hover:border-foreground/20"
                        }`}
                        >
                          <button
                            onClick={() =>
                              setExpandedId(expandedId === faq.id ? null : faq.id)}
                            className="w-full flex items-start gap-6 p-6 text-left focus:outline-none"
                          >
                            <span
                              className={`font-mono text-xs mt-1 transition-colors duration-300 ${
                                expandedId === faq.id ?
                                  "text-[#F48244]" :
                                  "text-foreground/30"
                              }`}
                            >
                              {faq.id}
                            </span>

                            <div className="flex-1">
                              <h3
                                className={`text-lg font-medium pr-8 transition-colors duration-300 ${
                                  expandedId === faq.id ?
                                    "text-foreground" :
                                    "text-foreground/80"
                                }`}
                              >
                                {faq.question}
                              </h3>

                              <div
                                className={`grid transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${
                                  expandedId === faq.id ?
                                    "grid-rows-[1fr] opacity-100 mt-4" :
                                    "grid-rows-[0fr] opacity-0 mt-0"
                                }`}
                              >
                                <div className="overflow-hidden">
                                  <p className="text-foreground/60 leading-relaxed text-base max-w-2xl">
                                    {faq.answer}
                                  </p>

                                  {/* Tag Pill */}
                                  <div className="mt-6 flex items-center gap-2">
                                    <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-foreground/5 text-foreground/50 border border-foreground/5">
                                      {faq.category}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className={`mt-1 transition-transform duration-500 ${
                                expandedId === faq.id ? "rotate-45" : ""
                              }`}
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={
                                  expandedId === faq.id ?
                                    "text-[#F48244]" :
                                    "text-foreground/20"
                                }
                              >
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                              </svg>
                            </div>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
            </div>
          </div>
        </div>

        {/* Institutional Contact Section */}
        <section className="bg-foreground text-background py-32 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-md">
                  Direct <span className="italic font-serif font-light text-background/30">Channels</span>
                </h2>
                <p className="text-background/50 text-xl leading-relaxed max-w-lg">
                  For matters requiring immediate escalation or specialized
                  administrative override, please bypass the standard knowledge
                  base and contact our departmental desks directly.
                </p>
                <div className="pt-8">
                  <AButton href="/contact" filled showArrow>
                    Contact Support
                  </AButton>
                </div>
              </div>

              <div className="space-y-6">
                {CONTACT_CHANNELS.map((ch) => (
                  <div
                    key={ch.name}
                    className="p-8 border border-background/10 rounded-2xl flex items-center justify-between group hover:bg-background hover:text-foreground transition-all duration-500 cursor-pointer"
                  >
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] mb-2 text-background/30 group-hover:text-foreground/40 transition-colors">
                        {ch.label}
                      </div>
                      <h4 className="text-xl font-bold">{ch.name}</h4>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium mb-1 group-hover:text-[#F48244]">
                        {ch.email}
                      </div>
                      <div className="flex items-center justify-end gap-1 text-[10px] font-mono uppercase tracking-widest text-background/20 group-hover:text-foreground/20 transition-colors">
                        <span>EST 09:00 - 18:00</span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-12 flex items-center gap-6 text-background/20">
                  <div className="flex items-center gap-2">
                    <Icons.Information />
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em]">
                      ISO 27001 Certified
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icons.ExternalLink />
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em]">
                      Status Page
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
