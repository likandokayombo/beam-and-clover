"use client";

import AButton from "../components/a-button";
import CareerVisual from "../components/career-visual";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const VALUES = [
  {
    id: "01",
    title: "Zero Bureaucracy",
    desc: "We hate red tape. If you have a good idea, you ship it. Autonomy is the default state. We trust you to make the right calls without needing a committee.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Extreme Ownership",
    desc: "We don't do 'that's not my job'. Everyone is responsible for the final product. We take pride in our craft and always look for ways to improve.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 2.944a11.955 11.955 0 00-4.5 9.1c0 3.3 1.5 6.2 3.8 8.1l.7.6.7-.6c2.3-1.9 3.8-4.8 3.8-8.1 0-3.1-1.6-6.1-4.5-9.1z"
        />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Relentless Focus",
    desc: "We focus on what matters most. Our goal is to solve the most critical problems in transportation technology, ignoring the noise and distractions.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
];

const PERKS = [
  {
    title: "Work from Anywhere",
    desc: "We are a remote-first company with flexible hours and co-working stipends.",
  },
  {
    title: "Health & Wellness",
    desc: "Comprehensive health insurance for you and your immediate family members.",
  },
  {
    title: "Continuous Learning",
    desc: "Generous budget for books, courses, conferences, and certifications.",
  },
  {
    title: "Modern Tools",
    desc: "Get the best hardware and software you need to do your best work.",
  },
];

export default function Careers() {
  return (
    <main className="min-h-screen bg-background selection:bg-[#F48244]/20 selection:text-[#F48244]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 border-b border-foreground/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F48244]/10 border border-[#F48244]/20 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F48244] animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#F48244]">
                  Join the Mission
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                Engineer <br />
                <span className="italic font-serif font-light text-foreground/40">
                  the Future
                </span>
              </h1>
              <p className="text-xl text-foreground/60 max-w-xl leading-relaxed mb-10 font-medium">
                We are building the technology that powers Nigeria's digital
                transportation infrastructure. Join us in solving complex
                problems at nationwide scale.
              </p>
              <div className="flex flex-wrap gap-4">
                <AButton href="#openings" filled showArrow>
                  View Openings
                </AButton>
                <AButton href="/about">Our Story</AButton>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-radial from-[#F48244]/5 to-transparent blur-[100px] pointer-events-none" />
              <CareerVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {VALUES.map((value) => (
              <div key={value.id} className="group">
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-background/30 mb-6 group-hover:text-[#F48244] transition-colors">
                  Value {value.id}
                </div>
                <div className="mb-6 text-[#F48244]">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-background/50 leading-relaxed text-sm font-medium">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-6 md:px-12 border-b border-foreground/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
                Perks & <br />
                <span className="italic font-serif font-light text-foreground/30">
                  Compensation
                </span>
              </h2>
              <p className="text-foreground/50 text-xl leading-relaxed max-w-lg mb-12">
                We believe in hiring the best and giving them everything they
                need to succeed and grow.
              </p>
              <div className="p-8 rounded-2xl bg-[#F48244]/5 border border-[#F48244]/15">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#F48244]/20 flex items-center justify-center text-[#F48244]">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold">Flexible Culture</h4>
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  We value outputs, not hours. Our communication is
                  asynchronous-first, giving you deep focus time when you need
                  it most.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {PERKS.map((perk) => (
                <div key={perk.title} className="p-8 border border-foreground/5 rounded-2xl hover:border-[#F48244]/30 transition-all duration-500">
                  <h4 className="font-bold mb-4">{perk.title}</h4>
                  <p className="text-sm text-foreground/40 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Openings Section */}
      <section id="openings" className="py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold tracking-tighter mb-6">
              Current <span className="italic font-serif font-light text-foreground/40">Openings</span>
            </h2>
            <p className="text-foreground/50 text-lg">
              Help us build the backbone of Nigeria's digital infrastructure.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-12 border border-dashed border-foreground/10 rounded-3xl text-center">
              <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center mx-auto mb-6 text-foreground/20">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">No active openings right now</h3>
              <p className="text-foreground/40 text-sm mb-8">
                We're always looking for exceptional talent. Send your CV to
                careers@beamandclover.com and we'll keep you in mind.
              </p>
              <AButton
                href="mailto:careers@beamandclover.com"
                className="justify-center"
              >
                Send CV
              </AButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
