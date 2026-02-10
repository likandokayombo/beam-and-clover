"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const style = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
  }
`;

export default function VehicleAdmin() {
  if (
    typeof document !== "undefined" &&
    !document.getElementById("vehicle-admin-styles")
  ) {
    const styleEl = document.createElement("style");
    styleEl.id = "vehicle-admin-styles";
    styleEl.textContent = style;
    document.head.appendChild(styleEl);
  }

  // Use state to manage which item is currently active
  const [activeItem, setActiveItem] = useState("Registration");
  const desktopItemRef = useRef({});
  const mobileItemRef = useRef({});
  const activeBackgroundRef = useRef(null);
  const mobileNavRef = useRef(null);

  const dragStartXRef = useRef(0);
  const dragStartIndexRef = useRef(0);

  const menuItems = [
    "Licensing",
    "Registration",
    "Compliance",
    "Penalties",
    "Fees",
  ];

  const handlePrevClick = (e) => {
    e.stopPropagation();
    const currentIndex = menuItems.indexOf(activeItem);
    const prevIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
    setActiveItem(menuItems[prevIndex]);
  };

  const handleNextClick = (e) => {
    e.stopPropagation();
    const currentIndex = menuItems.indexOf(activeItem);
    const nextIndex = (currentIndex + 1) % menuItems.length;
    setActiveItem(menuItems[nextIndex]);
  };

  const handleMobileNavMouseDown = (e) => {
    dragStartXRef.current = e.clientX || (e.touches && e.touches[0].clientX);
    dragStartIndexRef.current = menuItems.indexOf(activeItem);
  };

  const handleMobileNavMouseUp = (e) => {
    const endX = (e.clientX || (e.changedTouches && e.changedTouches[0].clientX));
    const diff = endX - dragStartXRef.current;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        const prevIndex = (dragStartIndexRef.current - 1 + menuItems.length) % menuItems.length;
        setActiveItem(menuItems[prevIndex]);
      }
      else {
        const nextIndex = (dragStartIndexRef.current + 1) % menuItems.length;
        setActiveItem(menuItems[nextIndex]);
      }
    }
  };

  useEffect(() => {
    const activeRef = desktopItemRef.current[activeItem];
    if (activeRef && activeBackgroundRef.current) {
      gsap.to(activeBackgroundRef.current, {
        x: activeRef.offsetLeft,
        width: activeRef.offsetWidth,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  }, [activeItem]);

  const renderContent = (item) => {
    switch (item) {
      case "Licensing":
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-[#F48244]/10 rounded-2xl flex items-center justify-center shrink-0">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F48244"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" x2="8" y1="13" y2="13"></line>
                  <line x1="16" x2="8" y1="17" y2="17"></line>
                  <line x1="10" x2="8" y1="9" y2="9"></line>
                </svg>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tight text-foreground">
                  Vehicle Licensing
                </h3>
                <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl">
                  Comprehensive licensing services for all vehicle types. We
                  handle the entire process from application to issuance,
                  ensuring full compliance with current regulations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#F48244]/30 hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F48244] rounded-full"></span>
                  Commercial Licenses
                </h4>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Specialized licensing for haulage, logistics, and corporate
                  fleets. Includes heavy-duty and multi-axle permits.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#F48244]/30 hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F48244] rounded-full"></span>
                  Private Registration
                </h4>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Fast-track licensing for private vehicles, motorcycles, and
                  leisure transport. Efficient documentation handling.
                </p>
              </div>
            </div>
          </div>
        );
      case "Registration": {
        const registrationPoints = [
          {
            title: "New Vehicle Entry",
            body: "Complete registration for brand new vehicles, including customs documentation and verification.",
          },
          {
            title: "Ownership Transfer",
            body: "Legal transfer of vehicle titles between parties with secure documentation processing.",
          },
          {
            title: "Custom Plates",
            body: "Application and management of personalized and special interest registration plates.",
          },
        ];
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-[#F48244]/10 rounded-2xl flex items-center justify-center shrink-0">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F48244"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                  <line x1="7" y1="8" x2="17" y2="8"></line>
                  <line x1="7" y1="12" x2="17" y2="12"></line>
                  <line x1="7" y1="16" x2="13" y2="16"></line>
                </svg>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tight text-foreground">
                  Vehicle Registration
                </h3>
                <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl">
                  Streamlined registration processes for any scale. From single
                  vehicles to entire corporate fleets, we manage your assets'
                  legal standing.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {registrationPoints.map((point, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="text-xs font-mono text-[#F48244]">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold">{point.title}</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      }
      case "Compliance":
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-[#F48244]/10 rounded-2xl flex items-center justify-center shrink-0">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F48244"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tight text-foreground">
                  Regulatory Compliance
                </h3>
                <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl">
                  Keep your vehicles road-legal and compliant with evolving
                  safety and environmental standards. We monitor and manage all
                  periodic requirements.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="space-y-2">
                  <h4 className="text-xl font-bold italic">Audit & Review</h4>
                  <p className="text-foreground/60 text-sm">
                    Strategic oversight of fleet documentation and maintenance
                    logs to ensure zero compliance gaps.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold italic">Process Advisory</h4>
                  <p className="text-foreground/60 text-sm">
                    Expert guidance on streamlining your administrative
                    workflows for better efficiency and record-keeping.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                {[
                  { label: "Safety Rating", val: "AAA+" },
                  { label: "Audit Success", val: "100%" },
                  { label: "Review Cycle", val: "Quart." },
                  { label: "Compliance", val: "Global" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 aspect-square flex flex-col items-center justify-center text-center group hover:bg-[#F48244] transition-colors duration-500"
                  >
                    <div className="text-2xl font-bold text-[#F48244] mb-1 group-hover:text-white transition-colors duration-500">
                      {stat.val}
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-foreground/40 group-hover:text-white/60 transition-colors duration-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "Penalties":
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-[#F48244]/10 rounded-2xl flex items-center justify-center shrink-0">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F48244"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tight text-foreground">
                  Penalty Management
                </h3>
                <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl">
                  Resolution and management of vehicle-related penalties and
                  infractions. We handle the appeals process and ensure timely
                  settlements to avoid additional costs.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-red-50/50 border border-red-100 flex items-center justify-between group hover:bg-red-50 transition-colors">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Avoid Suspensions</h4>
                    <p className="text-xs text-foreground/60">
                      Prevent operational downtime due to license suspensions.
                    </p>
                  </div>
                </div>
                <button className="text-xs font-bold text-red-500 hover:underline">
                  Learn More
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-orange-50/50 border border-orange-100 flex items-center justify-between group hover:bg-orange-50 transition-colors">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="2"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Appeal Processing</h4>
                    <p className="text-xs text-foreground/60">
                      Expert representation for legitimate penalty appeals.
                    </p>
                  </div>
                </div>
                <button className="text-xs font-bold text-orange-500 hover:underline">
                  Case Studies
                </button>
              </div>
            </div>
          </div>
        );
      case "Fees": {
        const feeDocuments = [
          { name: "Licensing Fee Schedule", format: "PDF" },
          { name: "Registration Costs 2024", format: "DOC" },
          { name: "Fleet Bulk Discount Guide", format: "PDF" },
        ];
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-[#F48244]/10 rounded-2xl flex items-center justify-center shrink-0">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F48244"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tight text-foreground">
                  Fee Management
                </h3>
                <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl">
                  Transparent fee structures and consolidated billing for all
                  vehicle administration services. Optimize your administrative
                  spend with our bulk processing rates.
                </p>
              </div>
            </div>

            <div className="border border-foreground/5 rounded-3xl overflow-hidden bg-gray-50/50">
              <div className="px-6 py-4 border-b border-foreground/5 bg-gray-50 flex items-center justify-between">
                <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/40">
                  Rate Cards & Documents
                </h4>
                <div className="text-[10px] text-foreground/30 font-mono">
                  Updated: Feb 2024
                </div>
              </div>
              <div className="divide-y divide-foreground/5">
                {feeDocuments.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between px-6 py-4 hover:bg-white transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-xs font-bold text-[#F48244] w-6">
                        {doc.format}
                      </div>
                      <div className="text-sm font-medium text-foreground group-hover:text-black transition-colors">
                        {doc.name}
                      </div>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="text-foreground/20 group-hover:text-[#F48244] transition-colors"
                    >
                      <path d="M7 7l9 9M7 16l9-9"></path>
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full max-w-[1400px] mx-auto min-h-[600px] px-6 lg:px-12 py-24 select-none">
      {/* Navigation Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[2px] bg-[#F48244] rounded-full"></span>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#F48244] font-bold">
              Fleet Solutions
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-foreground">
            Vehicle <br />
            <span className="text-foreground/30 italic font-serif font-light">
              Administration
            </span>
          </h2>
        </div>
        <p className="max-w-xs text-foreground/50 text-sm leading-relaxed mb-2 font-medium">
          Our specialized team manages the complete lifecycle of vehicle
          compliance, from initial registration to penalty resolution and fleet
          auditing.
        </p>
      </div>

      {/* Main Tabs Container - Desktop only */}
      <div className="hidden lg:block relative border-b border-foreground/5">
        <div
          ref={activeBackgroundRef}
          className="absolute bottom-0 h-[3px] bg-[#F48244] rounded-full z-20 pointer-events-none"
        />
        <div className="flex items-center gap-12 overflow-x-auto no-scrollbar pb-6 ">
          {menuItems.map((item) => {
            return (
              <div
                key={item}
                ref={(el) => (desktopItemRef.current[item] = el)}
                onClick={() => setActiveItem(item)}
                className={`
                cursor-pointer
                text-sm
                transition-all
                duration-200
                font-medium
                relative
                z-10
                rounded-full
                ${
              item === activeItem ?
                "text-foreground font-semibold" :
                "text-foreground/60 hover:text-foreground"
              }
              `}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-12 mb-12 max-w-7xl mx-auto">
        <div className="border border-foreground/10 rounded-3xl p-8 md:p-12 bg-white shadow-sm animate-fadeIn">
          {renderContent(activeItem)}
        </div>
      </div>

      {/* Mobile & Tablet: Dot Navigation */}
      <div className="lg:hidden flex justify-center items-center gap-4 p-10">
        {/* Left Arrow */}
        <button
          onClick={handlePrevClick}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Previous"
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
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Dot Navigation Container */}
        <div
          ref={mobileNavRef}
          className="flex items-center gap-2 px-4 py-2.5  rounded-full select-none"
          style={{
            cursor: "grab",
            userSelect: "none",
          }}
          onMouseDown={handleMobileNavMouseDown}
          onMouseUp={handleMobileNavMouseUp}
          onTouchStart={handleMobileNavMouseDown}
          onTouchEnd={handleMobileNavMouseUp}
        >
          {menuItems.map((item) => {
            const isActive = item === activeItem;
            return (
              <div
                key={item}
                ref={(el) => {
                  if (el)
                    mobileItemRef.current[item] = el;
                }}
                onClick={() => setActiveItem(item)}
                className={`transition-all duration-300 cursor-pointer ${
                  isActive ? "w-8 h-3" : "w-3 h-3"
                } rounded-full`}
                style={{
                  backgroundColor: isActive ? "#F48244" : "#D6D6D6",
                }}
                title={item}
              />
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNextClick}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Next"
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
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}
