import React, { useState } from "react";
import { NavPage } from "../types";
import {
  GraduationCap,
  ShieldCheck,
  FileText,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  Cpu,
  ArrowLeft,
  ArrowRight,
  Lock,
} from "lucide-react";

interface TermsOfEnrollmentViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenEnquireModal?: (courseKey?: string) => void;
}

export const TermsOfEnrollmentView: React.FC<TermsOfEnrollmentViewProps> = ({
  onNavigate,
  onOpenEnquireModal,
}) => {
  const [activeSection, setActiveSection] = useState<string>("scope");

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
    { id: "scope", title: "1. Academic Scope & Institutional Mandate" },
    {
      id: "eligibility",
      title: "2. Admissions Eligibility & Workstation Allocation",
    },
    {
      id: "fees-refunds",
      title: "3. Tuition Fees, Payment Schedules & Refunds",
    },
    {
      id: "hardware-licensing",
      title: "4. Hardware Access & Software Licensure",
    },
    {
      id: "academic-honesty",
      title: "5. Academic Integrity & Anti-Plagiarism Rules",
    },
    {
      id: "lab-safety",
      title: "6. 3D Printing, Casting Lab & Workshop Safety",
    },
    { id: "attendance", title: "7. Attendance, Punctuality & Leave Protocols" },
    {
      id: "certification",
      title: "8. Capstone Evaluation & Diploma Certification",
    },
    {
      id: "intellectual-property",
      title: "9. Student IP Rights & Non-Disclosure",
    },
    {
      id: "conduct-discipline",
      title: "10. Studio Code of Conduct & Discipline",
    },
    {
      id: "data-privacy",
      title: "11. Student Data Usage & Privacy Compliance",
    },
    { id: "governing-law", title: "12. Governing Jurisdiction & Amendments" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Hero Header */}
      <section className="bg-[#0B1120] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <button
                onClick={() => onNavigate("home")}
                className="hover:text-[#38BDF8] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </button>
              <span>/</span>
              <span className="text-[#38BDF8] font-medium">
                Terms of Academic Enrollment
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0085CB]/20 border border-[#0085CB]/40 rounded text-xs font-bold text-[#38BDF8]">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>
                Official Academic Framework · Effective Academic Year 2026–2027
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Terms of Academic Enrollment &amp; Studio Guidelines
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              These terms establish the legal and academic covenant between
              Samarth Ventures and enrolled students, sponsoring export
              jewellery manufacturers, and industry fellows participating in our
              precision CAD and electroforming diplomas.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Content Layout */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Navigation Sidebar (Sticky) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Table of Contents */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-xs">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#0085CB] mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Academic Regulations</span>
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

            {/* Academic Standards At A Glance */}
            <div className="bg-[#0B1120] text-white rounded-xl p-5 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#38BDF8]">
                <ShieldCheck className="w-4 h-4" />
                <span>Academic Integrity Principles</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Student IP:</strong> You retain complete,
                    unrestricted copyright over all 3D jewellery files modeled
                    during your training.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>
                    <strong>85% Studio Attendance:</strong> Compulsory
                    attendance threshold for graduation diploma and campus job
                    placement eligibility.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>
                    <strong>Genuine Software:</strong> Every workstation runs
                    licensed Rhinoceros 8 and KeyShot Pro licenses with zero
                    cracked plugins.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>
                    <strong>Physical Proof of Work:</strong> Final diplomas
                    require passing watertight mesh validation and physical 3D
                    resin casting review.
                  </span>
                </li>
              </ul>
            </div>

            {/* Admissions Assistance & Consultation Card */}
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5 space-y-3">
              <div className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Admissions Office</span>
              </div>
              <p className="text-xs text-[#1E40AF] leading-relaxed">
                Have questions regarding batch schedules, corporate group
                sponsorships, or payment plans?
              </p>
              {onOpenEnquireModal && (
                <button
                  onClick={() => onOpenEnquireModal("course-advanced")}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0085CB] text-white text-xs font-bold rounded-lg hover:bg-[#006195] transition-colors shadow-xs cursor-pointer"
                >
                  <span>Inquire for Next Batch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
              <div className="pt-2 text-[11px] text-[#1E40AF] space-y-1">
                <div>Phone: +91 (022) 2854-9100 / +91 98200-12345</div>
                <div>Email: admissions@samarthventures.in</div>
              </div>
            </div>
          </aside>

          {/* Right Column: Full Academic Terms */}
          <main className="lg:col-span-8 space-y-10">
            {/* Section 1 */}
            <article
              id="scope"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Academic Scope &amp; Institutional Mandate
                  </h2>
                  <p className="text-xs text-slate-500">
                    Authorized curriculum standards, diplomas, and corporate
                    mission
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-3 pt-2">
                <p>
                  Samarth Ventures (&ldquo;the Academy&rdquo;) operates as an
                  authorized advanced training institute dedicated to precision
                  jewellery engineering, computer-aided design (CAD), reverse
                  engineering metrology, and electroforming chemistry.
                </p>
                <p>
                  Our curricula are structured according to industrial
                  production tolerances mandated by domestic fine jewellery
                  houses and global export processing zones (including
                  SEEPZ-SEZ). By submitting an application, paying a seat
                  reservation fee, or attending studio sessions, the applicant
                  (&ldquo;Student&rdquo; or &ldquo;Fellow&rdquo;) agrees to
                  abide by these Terms of Academic Enrollment in their entirety.
                </p>
              </div>
            </article>

            {/* Section 2 */}
            <article
              id="eligibility"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Admissions Eligibility &amp; Workstation Allocation
                  </h2>
                  <p className="text-xs text-slate-500">
                    Cohort capacities, qualification thresholds, and seat
                    reservations
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-3 pt-2">
                <p>
                  To ensure that every student receives dedicated one-on-one
                  mentorship, physical cohort sizes are strictly capped at{" "}
                  <strong>12 workstations per studio batch</strong>:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <div className="text-xs font-bold text-[#0B1120]">
                      Intermediate Course Eligibility
                    </div>
                    <p className="text-xs text-[#565E74]">
                      Open to beginners, traditional goldsmiths (karigars), and
                      design graduates. Basic computer literacy and fundamental
                      understanding of jewellery ornaments are required.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <div className="text-xs font-bold text-[#0B1120]">
                      Advanced &amp; Reverse Engineering
                    </div>
                    <p className="text-xs text-[#565E74]">
                      Requires either graduation from our Intermediate program,
                      an evaluated portfolio of existing NURBS models, or a
                      minimum of 1 year of commercial jewellery modeling
                      experience.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 pt-1">
                  Workstations are assigned on the first day of orientation and
                  remain dedicated to the registered student for the entire
                  duration of their scheduled cohort time slots.
                </p>
              </div>
            </article>

            {/* Section 3 */}
            <article
              id="fees-refunds"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Tuition Fees, Payment Schedules &amp; Refund Policies
                  </h2>
                  <p className="text-xs text-slate-500">
                    Installment regulations, seat reservations, and cancellation
                    schedules
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-3 pt-2">
                <p>
                  Tuition fees cover classroom instructional hours, dedicated
                  high-performance workstation access, trial software
                  allocations, resin slicing allocations, and scheduled foundry
                  test castings.
                </p>
                <div className="space-y-2.5 text-xs text-[#565E74]">
                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <div className="font-bold text-[#0B1120]">
                      1. Seat Reservation Deposit
                    </div>
                    <p>
                      A non-refundable seat reservation deposit is required to
                      confirm workstation booking in an upcoming batch. This
                      deposit is credited directly against the total tuition
                      balance.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <div className="font-bold text-[#0B1120]">
                      2. Payment Schedule &amp; Installments
                    </div>
                    <p>
                      Full tuition or the approved initial installment must be
                      cleared at least 48 hours prior to the batch commencement
                      date. Delay in installment clearance exceeding 7 working
                      days may result in temporary suspension of studio
                      workstation access.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <div className="font-bold text-[#0B1120]">
                      3. Cancellation &amp; Refund Protocol
                    </div>
                    <p>
                      - If written cancellation is received{" "}
                      <strong>7 or more calendar days prior</strong> to cohort
                      start: 100% of tuition (less seat reservation
                      administrative fee) will be refunded.
                      <br />- If cancellation is received{" "}
                      <strong>within 6 days</strong> of cohort start or after
                      the first lecture: No refund will be issued; however,
                      tuition credits may be deferred to the subsequent batch
                      upon approved medical or corporate grounds.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 4 */}
            <article
              id="hardware-licensing"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  4
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Hardware Access &amp; Software Licensure Compliance
                  </h2>
                  <p className="text-xs text-slate-500">
                    Commercial workstation rules, anti-piracy policies, and lab
                    assets
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-4 pt-2">
                <p>
                  Each student workstation in our physical labs represents an
                  industrial-grade engineering investment equipped with
                  dedicated GPUs (NVIDIA RTX series), high-refresh 4K
                  color-calibrated displays, and digital drawing tablets.
                </p>

                <div className="p-4 bg-[#EFF4FF] border border-[#CDE5FF] rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#006195]">
                    <Cpu className="w-4 h-4 text-[#0085CB]" />
                    <span>Software &amp; Digital Security Mandate:</span>
                  </div>
                  <ul className="text-xs text-[#565E74] space-y-1.5 list-disc pl-5">
                    <li>
                      <strong>Genuine Licensed Software:</strong> All lab
                      systems run licensed Rhinoceros&reg; 8, Grasshopper&reg;,
                      and KeyShot&reg; Pro software managed through centralized
                      educational network license servers.
                    </li>
                    <li>
                      <strong>Zero-Tolerance for Pirated Software:</strong>{" "}
                      Connecting USB drives containing cracked plugins, keygens,
                      or unauthorized third-party scripts to Academy
                      workstations is strictly forbidden and constitutes grounds
                      for immediate academic suspension.
                    </li>
                    <li>
                      <strong>Cloud &amp; Project Backup:</strong> Students are
                      responsible for backing up their project files to verified
                      personal cloud repositories. Academy workstations are
                      re-imaged at the conclusion of each cohort.
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Section 5 */}
            <article
              id="academic-honesty"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  5
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Academic Integrity &amp; Anti-Plagiarism Standards
                  </h2>
                  <p className="text-xs text-slate-500">
                    Original NURBS CAD construction, digital asset
                    authentication, and honesty
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-3 pt-2">
                <p>
                  The essence of a true jewellery CAD specialist lies in
                  understanding fundamental curve mathematics, prong tolerances,
                  and weight physics from scratch:
                </p>
                <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span>Plagiarism &amp; Asset Piracy Prohibition:</span>
                  </div>
                  <p className="text-xs text-amber-950 leading-relaxed">
                    Submitting purchased commercial 3D models (such as
                    downloaded CGTrader, TurboSquid, or Telegram ring STLs) as
                    original class coursework or capstone evaluation work is
                    strictly considered academic fraud. All graded project files
                    must include original construction curves, surface
                    histories, and parametric layer setups verifiable by the
                    faculty.
                  </p>
                </div>
                <p className="text-xs text-[#565E74]">
                  Students found guilty of submitting plagiarized CAD assets
                  will forfeit their capstone evaluation and will not be
                  eligible to receive the authorized graduation diploma.
                </p>
              </div>
            </article>

            {/* Section 6 */}
            <article
              id="lab-safety"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  6
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    3D Printing, Casting Lab &amp; Workshop Safety
                  </h2>
                  <p className="text-xs text-slate-500">
                    Industrial DLP resin printers, chemical wash stations, and
                    foundry access
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-3 pt-2">
                <p>
                  Practical testing of digital CAD models takes place in our
                  dedicated prototyping and electroforming laboratory:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs text-[#565E74]">
                  <li>
                    <strong>Chemical &amp; Resin Handling:</strong> Students
                    operating photopolymer resin wash and UV cure units must
                    wear required personal protective equipment (nitrile gloves,
                    protective eyewear, and lab coats). Direct contact with
                    uncured resins or ultrasonic cleaning solvents without
                    supervision is prohibited.
                  </li>
                  <li>
                    <strong>Casting Foundry Protocols:</strong> Metal burnout
                    ovens and vacuum pressure casting equipment operate at
                    temperatures exceeding 1,000&deg;C. Only certified lab
                    technicians may pour molten precious metal flasks.
                  </li>
                  <li>
                    <strong>Material Allocations:</strong> Standard course fees
                    include allocated test slices on industrial castable resin
                    3D printers. Excessive failed prints resulting from
                    negligent refusal to check non-manifold naked edges may
                    incur additional resin material charges.
                  </li>
                </ul>
              </div>
            </article>

            {/* Section 7 */}
            <article
              id="attendance"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  7
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Attendance, Punctuality &amp; Leave Protocols
                  </h2>
                  <p className="text-xs text-slate-500">
                    Mandatory attendance threshold, makeup sessions, and cohort
                    pacing
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-3 pt-2">
                <p>
                  Because every lecture directly builds on the surface
                  continuity math and stone-setting techniques of the preceding
                  module, regular attendance is vital:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <div className="text-xs font-bold text-[#0B1120]">
                      85% Attendance Mandate
                    </div>
                    <p className="text-xs text-[#565E74]">
                      Students must maintain at least 85% logged attendance
                      across classroom lectures and lab hours to qualify for
                      capstone defense and authorized certification.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                    <div className="text-xs font-bold text-[#0B1120]">
                      Makeup Studio Hours
                    </div>
                    <p className="text-xs text-[#565E74]">
                      Excused absences documented 24 hours in advance may be
                      compensated with up to 6 hours of supervised weekend lab
                      makeup time, subject to workstation availability.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 8 */}
            <article
              id="certification"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  8
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Capstone Evaluation &amp; Diploma Certification
                  </h2>
                  <p className="text-xs text-slate-500">
                    Watertight mesh metrics, casting review, and portfolio
                    defense
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-3 pt-2">
                <p>
                  Graduation from Samarth Ventures is performance-based.
                  Diplomas are not awarded for mere attendance, but for proven
                  industrial capability:
                </p>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs text-[#565E74]">
                  <div className="font-bold text-[#0B1120]">
                    Mandatory Graduation Milestones:
                  </div>
                  <ol className="list-decimal pl-5 space-y-1.5">
                    <li>
                      <strong>Watertight Topology:</strong> Submission of 3
                      complete high-jewellery CAD models free of naked edges,
                      duplicate surfaces, or flipped normal vectors.
                    </li>
                    <li>
                      <strong>Stone Weight Accuracy:</strong> Pre-calculated
                      carat counts matching GIA millimeter tables within
                      &plusmn;0.02mm tolerance.
                    </li>
                    <li>
                      <strong>Physical Cast Feasibility:</strong> At least one
                      student design must successfully 3D print and pass
                      inspection for sprue distribution and mold ejection
                      clearances.
                    </li>
                    <li>
                      <strong>Portfolio Presentation:</strong> Rendering
                      portfolio comprising at least 5 luxury jewellery pieces
                      rendered in KeyShot with photorealistic lighting and
                      depth-of-field.
                    </li>
                  </ol>
                </div>
              </div>
            </article>

            {/* Section 9 */}
            <article
              id="intellectual-property"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  9
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Student Intellectual Property Rights &amp; Non-Disclosure
                  </h2>
                  <p className="text-xs text-slate-500">
                    Full ownership guarantees for creative jewellery collections
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-3 pt-2">
                <p>
                  We firmly believe in empowering independent designers and
                  protecting corporate manufacturing secrets:
                </p>
                <div className="p-4 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl space-y-2">
                  <div className="text-xs font-bold text-[#15803D] flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-[#16A34A]" />
                    <span>100% Student &amp; Sponsor Ownership:</span>
                  </div>
                  <p className="text-xs text-[#166534] leading-relaxed">
                    All 3D CAD files (.3dm, .stl), original jewellery sketches,
                    renders, and physical casting prototypes created by a
                    student during enrollment remain 100% the intellectual
                    property of the student or their sponsoring jewellery
                    company. Samarth Ventures will never license, manufacture,
                    or sell student designs.
                  </p>
                </div>
                <p className="text-xs text-[#565E74]">
                  With prior consent, the Academy may photograph or showcase
                  student capstone models in official graduation exhibitions,
                  website galleries, or social media portfolios with full author
                  attribution.
                </p>
              </div>
            </article>

            {/* Section 10 */}
            <article
              id="conduct-discipline"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  10
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Studio Code of Conduct &amp; Disciplinary Protocols
                  </h2>
                  <p className="text-xs text-slate-500">
                    Professional studio behavior, peer respect, and studio
                    etiquette
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-3 pt-2">
                <p>
                  Our academy mirrors an elite industrial jewellery design
                  studio. Students are expected to maintain professional
                  courtesy, punctuality, and mutual respect toward peers,
                  faculty, and studio technicians.
                </p>
                <p>
                  Any conduct involving harassment, intentional sabotage of peer
                  CAD files, unauthorized removal of laboratory tools, or
                  willful damage to hardware workstations will result in
                  immediate termination of enrollment without refund and
                  potential referral to legal authorities.
                </p>
              </div>
            </article>

            {/* Section 11 */}
            <article
              id="data-privacy"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  11
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Student Data Usage &amp; Privacy Compliance
                  </h2>
                  <p className="text-xs text-slate-500">
                    Record storage, educational progress tracking, and privacy
                    standards
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-3 pt-2">
                <p>
                  Student personal records, email contacts, and enrollment
                  verification forms are governed in accordance with the
                  official <strong>Samarth Ventures Privacy Policy</strong>.
                </p>
                <p>
                  Transaction details submitted through inquiry channels are
                  relayed securely using our certified Resend API
                  infrastructure. Graduate credential verification (serial
                  numbers on issued diplomas) is maintained in our authorized
                  database to enable jewellery manufacturers to verify
                  credentials during hiring.
                </p>
              </div>
            </article>

            {/* Section 12 */}
            <article
              id="governing-law"
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0085CB] flex items-center justify-center font-bold text-sm shrink-0">
                  12
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[#0B1120]">
                    Governing Jurisdiction &amp; Amendments
                  </h2>
                  <p className="text-xs text-slate-500">
                    Arbitration, statutory jurisdiction, and institutional
                    updates
                  </p>
                </div>
              </div>
              <div className="text-sm text-[#565E74] leading-relaxed space-y-4 pt-2">
                <p>
                  These Terms of Academic Enrollment shall be governed by and
                  construed in accordance with the laws of the Republic of
                  India. Any disputes arising in connection with academic
                  admissions, certifications, or studio agreements shall be
                  subject to the exclusive jurisdiction of the competent courts
                  in <strong>Mumbai, Maharashtra, India</strong>.
                </p>
                <p>
                  Samarth Ventures reserves the right to update software
                  versions (e.g., upgrading from Rhino 7 to Rhino 8) or refine
                  laboratory safety protocols to reflect evolving industry best
                  practices.
                </p>

                {/* Footer Action Bar */}
                <div className="pt-4 flex flex-wrap gap-4 items-center justify-between border-t border-slate-200">
                  <button
                    onClick={() => onNavigate("home")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0085CB] text-white text-xs font-bold rounded-lg hover:bg-[#006195] transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Return to Home Overview</span>
                  </button>
                  {onOpenEnquireModal && (
                    <button
                      onClick={() => onOpenEnquireModal("course-advanced")}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#CBD5E1] text-[#0B1120] text-xs font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
                    >
                      <span>Inquire for Upcoming Cohort</span>
                    </button>
                  )}
                </div>
              </div>
            </article>
          </main>
        </div>
      </section>
    </div>
  );
};
