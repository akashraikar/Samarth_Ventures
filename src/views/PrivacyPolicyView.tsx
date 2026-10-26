import React, { useState } from "react";
import { NavPage } from "../types";
import {
  ShieldCheck,
  Lock,
  Mail,
  Cpu,
  FileText,
  CheckCircle2,
  Phone,
  MapPin,
  ExternalLink,
  Server,
  Layers,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

interface PrivacyPolicyViewProps {
  onNavigate: (page: NavPage) => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({
  onNavigate,
}) => {
  const [activeSection, setActiveSection] = useState<string>("intro");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const sections = [
    { id: "intro", title: "1. Introduction & Academic Scope" },
    { id: "data-collected", title: "2. Information We Collect" },
    { id: "resend-api", title: "3. Resend API & Email Communications" },
    {
      id: "browser-metadata",
      title: "4. Localized Browser Metadata & 3D WebGL",
    },
    { id: "web-assets", title: "5. Web Optimization Assets & CDNs" },
    { id: "cad-ip", title: "6. Student CAD Designs & IP Protection" },
    { id: "security-retention", title: "7. Data Security & Storage Retention" },
    { id: "cookies", title: "8. Cookies & Local Storage Practices" },
    { id: "user-rights", title: "9. Your Rights & Data Choices" },
    { id: "contact-officer", title: "10. Contact & Grievance Redressal" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Hero Header */}
      <section className="bg-[#0B1120] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            {/* Breadcrumb / Back Navigation */}
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <button
                onClick={() => onNavigate("home")}
                className="hover:text-[#38BDF8] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </button>
              <span>/</span>
              <span className="text-[#38BDF8] font-medium">Privacy Policy</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0085CB]/20 border border-[#0085CB]/40 rounded text-xs font-bold text-[#38BDF8]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official Policy Document · Updated October 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Privacy Policy &amp; Data Protection Standards
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              At Samarth Ventures, we hold the privacy of our students,
              jewellery industry partners, and academic prospective inquiries to
              the exact same uncompromising standards of precision that govern
              our engineering and electroforming laboratories.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Quick Table of Contents & Trust Card (Sticky on desktop) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Quick Navigation Card */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-xs">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#0085CB] mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Document Contents</span>
              </h2>
              <nav className="space-y-1">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3 py-2 text-xs rounded-md transition-colors flex items-center justify-between cursor-pointer ${
                      activeSection === sec.id
                        ? "bg-[#EFF6FF] text-[#0085CB] font-bold border-l-2 border-[#0085CB]"
                        : "text-[#565E74] hover:bg-slate-50 hover:text-[#0B1120]"
                    }`}
                  >
                    <span className="truncate">{sec.title}</span>
                    <span className="text-slate-400 text-[10px]">›</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Privacy Architecture Highlights */}
            <div className="bg-[#0B1120] text-white rounded-xl p-5 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#38BDF8]">
                <Lock className="w-4 h-4" />
                <span>Our Privacy Commitments</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Ad-Tracking:</strong> We never sell, rent, or
                    trade your inquiry information to external ad brokers.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>
                    <strong>Encrypted Dispatch:</strong> Inquiries are relayed
                    securely via Resend API using TLS 1.3 cryptographic
                    transport.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>
                    <strong>Client-Side 3D:</strong> CAD renderings and
                    Rhinoceros models execute locally on your GPU without
                    biometric tracking.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>
                    <strong>Student IP Protection:</strong> All CAD geometries
                    designed in our cohorts remain 100% student intellectual
                    property.
                  </span>
                </li>
              </ul>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5 space-y-3">
              <div className="text-xs font-bold text-[#15803D] uppercase tracking-wider flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Data Protection Inquiry</span>
              </div>
              <p className="text-xs text-[#166534] leading-relaxed">
                Have questions regarding your personal details or need to submit
                a data erasure request?
              </p>
              <div className="pt-1">
                <a
                  href="mailto:admissions@samarthventures.in"
                  className="text-xs font-bold text-[#15803D] hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <span>admissions@samarthventures.in</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Full Legal and Technical Disclosure Sections */}
          <main className="lg:col-span-8 space-y-10">
            {/* Section 1 */}
            <article
              id="intro"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Introduction &amp; Academic Scope
                  </h2>
                  <p className="text-xs text-slate-500">
                    Legal entities, application domain, and jurisdiction
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-3 pt-2">
                <p>
                  This Privacy Policy applies to the web application, digital
                  platforms, educational portals, and workstation reservation
                  interfaces operated by <strong>Samarth Ventures</strong>{" "}
                  (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;),
                  registered in Mumbai, Maharashtra, India.
                </p>
                <p>
                  We operate as a premier industrial training academy and
                  engineering studio specializing in Rhinoceros&reg; 3D
                  jewellery computer-aided design (CAD), reverse engineering
                  metrology, and high-precision electroforming technology. We
                  recognize that prospective students, corporate design
                  directors, and jewellery manufacturers entrust us with
                  confidential contact details and educational aspirations. This
                  document governs how we collect, process, store, and safeguard
                  that information.
                </p>
              </div>
            </article>

            {/* Section 2 */}
            <article
              id="data-collected"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Information We Collect
                  </h2>
                  <p className="text-xs text-slate-500">
                    Voluntary submissions, academic credentials, and contact
                    records
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-3 pt-2">
                <p>
                  We collect information strictly when you voluntarily submit it
                  through our academic inquiry forms, course reservation modals,
                  studio demo requests, or contact consultations:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <div className="text-xs font-bold text-[#0B1120]">
                      Identity &amp; Contact Records
                    </div>
                    <p className="text-xs text-[#565E74]">
                      Full legal name, email address, telephone/WhatsApp contact
                      number, and city/country of origin.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <div className="text-xs font-bold text-[#0B1120]">
                      Academic &amp; Skill Preferences
                    </div>
                    <p className="text-xs text-[#565E74]">
                      Selected course program, current experience level
                      (Beginner, Intermediate, Bench Karigar, Industry Pro), and
                      preferred training mode.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <div className="text-xs font-bold text-[#0B1120]">
                      Batch &amp; Schedule Demands
                    </div>
                    <p className="text-xs text-[#565E74]">
                      Weekday morning, evening executive, or intensive weekend
                      workshop cohort selections.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <div className="text-xs font-bold text-[#0B1120]">
                      Inquiry Notes &amp; Project Scope
                    </div>
                    <p className="text-xs text-[#565E74]">
                      Optional messages detailing manufacturing challenges,
                      corporate training goals, or electroforming chemical bath
                      consultations.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 3: Resend API */}
            <article
              id="resend-api"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Resend API Integration &amp; Transactional Email Processing
                  </h2>
                  <p className="text-xs text-slate-500">
                    How inquiry forms are routed and transmitted
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-4 pt-2">
                <p>
                  To guarantee reliable, instantaneous delivery of course
                  syllabus brochures, batch confirmation notices, and academic
                  demo bookings without risking email loss, our application
                  integrates with the <strong>Resend API</strong> (
                  <code className="px-1.5 py-0.5 bg-slate-100 text-slate-800 rounded font-mono text-xs">
                    api.resend.com
                  </code>
                  ), a certified enterprise transactional email infrastructure
                  provider.
                </p>

                <div className="p-4 bg-[#EFF4FF] border border-[#CDE5FF] rounded-xl space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#006195]">
                    <Server className="w-4 h-4 text-[#0085CB]" />
                    <span>Technical Architecture of Email Inquiries:</span>
                  </div>
                  <ul className="text-xs text-[#565E74] space-y-1.5 list-disc pl-5">
                    <li>
                      <strong>TLS Cryptographic Transit:</strong> All contact
                      form payloads (name, email, phone, and course interest)
                      are transmitted to the Resend API endpoint via encrypted
                      HTTPS (Transport Layer Security 1.2+).
                    </li>
                    <li>
                      <strong>Zero Data Commercialization:</strong> Information
                      transmitted via Resend is used exclusively to dispatch
                      transactional notifications to our academic advisory desk
                      (
                      <code className="font-mono text-slate-700">
                        admissions@samarthventures.in
                      </code>
                      ) and send you confirmation receipts. It is never used for
                      automated third-party ad profiling.
                    </li>
                    <li>
                      <strong>API Key &amp; Server-Side Protection:</strong> All
                      application communication credentials with Resend are
                      strictly managed in compliance with modern zero-trust
                      developer guidelines to prevent unauthorized message
                      spoofing.
                    </li>
                  </ul>
                </div>

                <p>
                  By submitting an inquiry form on this site, you acknowledge
                  that your contact details will be processed through this
                  transactional pipeline to enable our academic counselors to
                  contact you regarding batch vacancies.
                </p>
              </div>
            </article>

            {/* Section 4: Browser Metadata & 3D WebGL */}
            <article
              id="browser-metadata"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  4
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Localized Browser Metadata &amp; 3D WebGL Processing
                  </h2>
                  <p className="text-xs text-slate-500">
                    Interactive Rhino CAD viewport, GPU compute, and client-side
                    states
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-4 pt-2">
                <p>
                  Our application features an advanced, interactive{" "}
                  <strong>3D jewellery CAD Viewport</strong> powered by WebGL
                  and Three.js, simulating the precision NURBS modeling
                  environment of Rhinoceros 3D.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <div className="text-xs font-bold text-[#0B1120] flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-[#0085CB]" />
                      <span>Local GPU Hardware Execution</span>
                    </div>
                    <p className="text-xs text-[#565E74]">
                      All 3D calculations—facet normals, gold material
                      reflection maps, camera orbit math, and wireframe mesh
                      shaders—are calculated strictly on your personal device's
                      local graphics processor. No 3D interaction data is
                      transmitted back to external servers.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <div className="text-xs font-bold text-[#0B1120] flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#0085CB]" />
                      <span>URL Hash Routing &amp; View State</span>
                    </div>
                    <p className="text-xs text-[#565E74]">
                      We utilize client-side HTML5 hash navigation (e.g.,{" "}
                      <code className="font-mono text-slate-700">
                        #privacy-policy
                      </code>
                      ,{" "}
                      <code className="font-mono text-slate-700">
                        #electroforming
                      </code>
                      ). Your page changes are handled smoothly in-memory
                      without initiating page refresh compilation loops or
                      sending tracking pings.
                    </p>
                  </div>
                </div>

                <p>
                  Standard client telemetry (such as your browser's viewport
                  pixel dimensions and device pixel ratio) is accessed strictly
                  by Three.js to resize the canvas dynamically and prevent 3D
                  rendering distortion. This metadata is volatile, transient,
                  and never retained or linked to individual personal records.
                </p>
              </div>
            </article>

            {/* Section 5: Web Assets & Optimization */}
            <article
              id="web-assets"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  5
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Web Performance, CDNs &amp; Optimization Assets
                  </h2>
                  <p className="text-xs text-slate-500">
                    Asset bundling, typography caching, and responsive media
                    delivery
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-3 pt-2">
                <p>
                  To ensure rapid loading speeds across mobile devices and
                  high-resolution CAD workstations, this application utilizes
                  modern build packaging:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs text-[#565E74]">
                  <li>
                    <strong>Vector Icons &amp; Fonts:</strong> Icons are
                    rendered client-side using Lucide SVG components embedded
                    directly into application code, eliminating unvetted
                    third-party tracking pixels.
                  </li>
                  <li>
                    <strong>Static Photography &amp; Diagrams:</strong>{" "}
                    Photographic documentation of our Mumbai manufacturing
                    laboratory, classroom workshops, and electroforming
                    equipment are hosted as static web assets, optimized to
                    preserve bandwidth without harvesting personal data.
                  </li>
                  <li>
                    <strong>Browser Caching:</strong> Static assets may be
                    stored in your local browser cache to ensure that subsequent
                    visits to our course catalog load instantaneously.
                  </li>
                </ul>
              </div>
            </article>

            {/* Section 6: CAD Designs & IP */}
            <article
              id="cad-ip"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  6
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Student CAD Designs &amp; Intellectual Property Protection
                  </h2>
                  <p className="text-xs text-slate-500">
                    Non-disclosure policy for jewellery manufacturers, karigars,
                    and students
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-3 pt-2">
                <p>
                  In the fine jewellery sector, 3D CAD files represent trade
                  secrets, proprietary diamond weight calculations, and
                  exclusive design copyrights. We treat all student and
                  manufacturing client project data under strict non-disclosure
                  conventions:
                </p>
                <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Exclusive Ownership Guarantee</span>
                  </div>
                  <p className="text-xs text-amber-950 leading-relaxed">
                    Any Rhinoceros 3D (.3dm) project, STL/SLC 3D printing
                    slicing file, or electroforming mandrel engineered by a
                    student during our diploma programs remains the exclusive
                    intellectual property of the student or their sponsoring
                    jewellery firm. Samarth Ventures never claims copyright over
                    student portfolio masterpieces.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 7: Security & Retention */}
            <article
              id="security-retention"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  7
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Data Security &amp; Storage Retention Practices
                  </h2>
                  <p className="text-xs text-slate-500">
                    Safeguards, retention schedules, and access protocols
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-3 pt-2">
                <p>
                  We implement administrative, technical, and physical security
                  measures to protect inquiry data against accidental loss,
                  unauthorized access, or alteration:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#565E74]">
                  <li>
                    <strong>Access Control:</strong> Only authorized admissions
                    coordinators and faculty advisors possess access to
                    prospective student inquiry logs.
                  </li>
                  <li>
                    <strong>Retention Period:</strong> Inquiries not progressing
                    to academic enrollment are scheduled for purge within 24
                    months, unless a student requests earlier removal.
                  </li>
                  <li>
                    <strong>Academic Records:</strong> Records of certified
                    graduates (diploma verification certificates) are retained
                    indefinitely in our verified registry for employer
                    credential checks.
                  </li>
                </ul>
              </div>
            </article>

            {/* Section 8: Cookies & Storage */}
            <article
              id="cookies"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  8
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Cookies &amp; Local Storage Practices
                  </h2>
                  <p className="text-xs text-slate-500">
                    Essential navigation session preservation
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-3 pt-2">
                <p>
                  Our platform does <strong>not</strong> install intrusive
                  behavioral tracking cookies or third-party marketing beacons
                  on your computer.
                </p>
                <p>
                  We only utilize essential browser storage mechanisms (such as
                  session memory and standard DOM storage) strictly necessary
                  for maintaining your active navigation tab, remembering your
                  preferred course selection inside the enrollment modal, and
                  preserving viewport states during your browsing session.
                </p>
              </div>
            </article>

            {/* Section 9: User Rights */}
            <article
              id="user-rights"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  9
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Your Rights &amp; Data Choices
                  </h2>
                  <p className="text-xs text-slate-500">
                    Access, correction, withdrawal of consent, and erasure
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-3 pt-2">
                <p>
                  Regardless of your geographic location, you enjoy
                  comprehensive control over any personal information submitted
                  to Samarth Ventures:
                </p>
                <div className="space-y-2 pt-1 text-xs text-[#565E74]">
                  <div className="p-3 bg-slate-50 rounded border border-slate-200">
                    <strong className="text-[#0B1120]">Right to Review:</strong>{" "}
                    You can request a summary copy of all inquiry records
                    associated with your email or phone number.
                  </div>
                  <div className="p-3 bg-slate-50 rounded border border-slate-200">
                    <strong className="text-[#0B1120]">
                      Right to Rectification:
                    </strong>{" "}
                    You may correct outdated contact details, phone numbers, or
                    course preferences at any time.
                  </div>
                  <div className="p-3 bg-slate-50 rounded border border-slate-200">
                    <strong className="text-[#0B1120]">
                      Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):
                    </strong>{" "}
                    You may instruct our admissions team to permanently delete
                    your contact records from our active database.
                  </div>
                </div>
              </div>
            </article>

            {/* Section 10: Contact & Grievance */}
            <article
              id="contact-officer"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  10
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Contact &amp; Grievance Redressal Officer
                  </h2>
                  <p className="text-xs text-slate-500">
                    Direct contact channels for privacy and compliance matters
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-4 pt-2">
                <p>
                  If you have questions regarding this Privacy Policy, wish to
                  exercise any of your data protection rights, or have feedback
                  concerning our transactional email practices, please contact
                  our designated coordinator:
                </p>

                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3 text-xs">
                  <div className="font-bold text-[#0B1120] text-sm">
                    Samarth Ventures — Academic Admissions &amp; Data Compliance
                    Desk
                  </div>
                  <div className="flex items-start gap-2.5 text-[#565E74]">
                    <MapPin className="w-4 h-4 text-[#0085CB] shrink-0 mt-0.5" />
                    <span>
                      SEEPZ-SEZ &amp; MIDC jewellery Corridor, Andheri (East),
                      Mumbai, Maharashtra 400096, India
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#565E74]">
                    <Phone className="w-4 h-4 text-[#0085CB] shrink-0" />
                    <span>
                      +91 (022) 2854-9100 / +91 98200-12345 (Mon–Sat: 9:00 AM –
                      7:30 PM IST)
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#565E74]">
                    <Mail className="w-4 h-4 text-[#0085CB] shrink-0" />
                    <a
                      href="mailto:admissions@samarthventures.in"
                      className="text-[#0085CB] hover:underline font-semibold cursor-pointer"
                    >
                      admissions@samarthventures.in
                    </a>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4 items-center justify-between border-t border-slate-200">
                  <button
                    onClick={() => onNavigate("home")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0085CB] text-white text-xs font-bold rounded-lg hover:bg-[#006195] transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Return to Home Overview</span>
                  </button>
                  <button
                    onClick={() => onNavigate("get-in-touch")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#CBD5E1] text-[#0B1120] text-xs font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Contact Campus Directly</span>
                  </button>
                </div>
              </div>
            </article>
          </main>
        </div>
      </section>
    </div>
  );
};
