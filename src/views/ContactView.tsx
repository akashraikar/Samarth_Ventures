import React, { useState } from 'react';
import { NavPage } from '../types';
import { COURSES } from '../data/courses';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Send, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  ShieldCheck,
  Compass,
  Building
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: NavPage) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseKey: 'course-advanced',
    batchPreference: 'weekday-morning',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FAQ state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need prior 3D software or Rhinoceros experience to join?',
      a: 'No prior CAD experience is needed for our Intermediate course ("Jewellery designing in Rhinoceros - Intermidiate Level"). For our Advanced and Reverse Engineering diplomas, basic 3D familiarity or bench jewelry experience is recommended.'
    },
    {
      q: 'Is hardware provided, or do I need to bring my own laptop?',
      a: 'Every student in our physical cohort is allocated a dedicated workstation loaded with licensed Rhinoceros 8, KeyShot 11 Pro, and 4K calibrated color displays. Students can also bring their own laptops to install educational trial licenses.'
    },
    {
      q: 'Do students get to test their CAD files on actual 3D printers and casting?',
      a: 'Yes! We house industrial DLP resin 3D printers. Every module includes physical wax/resin slicing and printing so you can hold your designs, verify stone prongs, and inspect sprue architectures before casting.'
    },
    {
      q: 'What certificate will I receive upon graduation?',
      a: 'Graduates receive the Authorized Rhinoceros 3D Jewelry Specialist Diploma from Samarth Ventures, recognized by leading jewelry export processing zones and domestic retail fine jewelry brands.'
    },
    {
      q: 'How does the 98.4% job placement network work?',
      a: 'We host regular portfolio demo days where recruitment directors from Mumbai, Surat, Jaipur, and export companies review student capstones. We also provide resume mentoring and technical interview simulations.'
    }
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Valid corporate or personal email required';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = 'Valid phone number is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Hero Banner */}
      <section className="bg-[#0B1120] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0085CB]/20 border border-[#0085CB]/40 rounded text-xs font-bold text-[#38BDF8]">
              <Compass className="w-3.5 h-3.5" />
              <span>Admissions &amp; Industry Consulting Desk</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Get In Touch with Samarth Ventures
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Schedule a workstation trial session, speak with an academic advisor, or arrange a corporate training consultation for your jewelry design team.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid (Contact info + Interactive Form) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards & Campus Location */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-7 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-6">
              <h2 className="text-xl font-bold text-[#0B1120] border-b border-[#E2E8F0] pb-3">
                Academy Headquarters &amp; Laboratory
              </h2>

              <div className="space-y-4 text-xs text-[#565E74]">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#EFF4FF] text-[#0085CB] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B1120] text-sm">Center of Excellence</div>
                    <p className="mt-1 leading-relaxed">
                      Samarth Ventures Precision Academy, Plot 42-B, Industrial Fine Jewelry Hub, Andheri East / SEEPZ Corridor, Mumbai 400096, Maharashtra, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#EFF4FF] text-[#0085CB] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B1120] text-sm">Telephone &amp; WhatsApp</div>
                    <p className="mt-1 leading-relaxed">
                      Admissions: +91 (022) 2854-9100<br />
                      Direct WhatsApp: +91 98200-12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#EFF4FF] text-[#0085CB] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B1120] text-sm">Official Email Inquiries</div>
                    <p className="mt-1 leading-relaxed">
                      Admissions: admissions@samarthventures.in<br />
                      Corporate / B2B: partnerships@samarthventures.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#EFF4FF] text-[#0085CB] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B1120] text-sm">Studio &amp; Lab Timings</div>
                    <p className="mt-1 leading-relaxed">
                      Monday to Saturday: 9:00 AM – 7:30 PM IST<br />
                      Sunday: Reserved for Special Masterclasses &amp; Metrology Testing
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Map Visual Layout */}
            <div className="bg-[#0B1120] text-white rounded-2xl border border-slate-800 p-6 shadow-md space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-sky-400">Transit &amp; Accessibility</span>
                <span className="text-slate-400">Mumbai Metro Line 3 &amp; 7</span>
              </div>

              {/* Stylized Map Viewport Canvas */}
              <div className="relative aspect-16/9 bg-[#0F172A] rounded-xl overflow-hidden border border-slate-700 p-4 flex items-center justify-center">
                <div className="absolute inset-0 cad-dark-grid opacity-70" />
                
                {/* Visual landmark nodes */}
                <div className="relative z-10 text-center space-y-2">
                  <div className="w-10 h-10 bg-[#0085CB] rounded-full mx-auto flex items-center justify-center text-white shadow-lg ring-4 ring-sky-500/30 animate-pulse">
                    <Building className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-white">
                    Samarth Ventures Campus
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    5 Mins from SEEPZ Special Economic Zone
                  </div>
                </div>

                {/* Road lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#0284C7" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>

              <div className="text-xs text-slate-400 flex items-center justify-between">
                <span>Free Visitor Parking Available</span>
                <span className="text-emerald-400 font-medium">Campus Open Today</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form with Live Validation */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-2xl border border-[#CBD5E1] shadow-sm">
              <div className="border-b border-[#E2E8F0] pb-4 mb-6">
                <span className="text-[11px] font-bold text-[#0085CB] uppercase tracking-wider">
                  Direct Enrollment &amp; Inquiry
                </span>
                <h2 className="text-2xl font-bold text-[#0B1120] mt-1">
                  Connect with Our Academic Dean
                </h2>
                <p className="text-xs text-[#565E74] mt-1">
                  Fill in your details below for personalized course recommendations, fee structures, and batch availability.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1120]">
                    Inquiry Successfully Registered
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. A course coordinator will connect with you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> to confirm your requested demo workstation.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-[#0085CB] text-white text-xs font-semibold rounded-lg hover:bg-[#0284C7] transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Legal Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="e.g. Vikramaditya Rathore"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                        errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300'
                      } focus:outline-none focus:border-[#0085CB] focus:ring-1 focus:ring-[#0085CB]`}
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="vikram@jewellerybrand.com"
                        className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                          errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300'
                        } focus:outline-none focus:border-[#0085CB] focus:ring-1 focus:ring-[#0085CB]`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="+91 98200-XXXXX"
                        className={`w-full px-3.5 py-2.5 text-xs rounded-lg border ${
                          errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300'
                        } focus:outline-none focus:border-[#0085CB] focus:ring-1 focus:ring-[#0085CB]`}
                      />
                      {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Selected Course */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Program or Service Required
                    </label>
                    <select
                      value={formData.courseKey}
                      onChange={(e) => setFormData({ ...formData, courseKey: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#0085CB] bg-white text-slate-800"
                    >
                      {Object.values(COURSES).map((c) => (
                        <option key={c.pageKey} value={c.pageKey}>
                          {c.title} ({c.level})
                        </option>
                      ))}
                      <option value="electroforming">Electroforming Hollow Gold R&amp;D Plant Setup</option>
                      <option value="corporate-training">Corporate In-House Design Team Training</option>
                    </select>
                  </div>

                  {/* Batch Preference */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Batch Schedule
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        { id: 'weekday-morning', label: 'Weekday Morning (9am–1pm)' },
                        { id: 'weekday-evening', label: 'Weekday Evening (5pm–8pm)' },
                        { id: 'weekend-intensive', label: 'Weekend Intensive (Sat/Sun)' }
                      ].map((slot) => (
                        <button
                          type="button"
                          key={slot.id}
                          onClick={() => setFormData({ ...formData, batchPreference: slot.id })}
                          className={`p-2.5 rounded-lg border text-left text-xs transition-colors cursor-pointer ${
                            formData.batchPreference === slot.id
                              ? 'bg-[#EFF4FF] border-[#0085CB] text-[#006195] font-semibold'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {slot.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Specific Requirements */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Background or Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your background (e.g. Traditional Karigar, 2D Illustrator, Bench Jeweler, Brand Owner)..."
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#0085CB] text-slate-800"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#0085CB] hover:bg-[#0284C7] active:bg-[#006195] text-white font-semibold text-xs rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending Request...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Enrollment Request</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your inquiry goes directly to our Senior Academic Dean. No call center delays.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Frequently Asked Questions Accordion */}
      <section className="py-16 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0085CB]">
              Clarifications &amp; Guidance
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1120]">
              Frequently Asked Academic Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#E2E8F0] rounded-xl overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#0B1120]">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#0085CB] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-xs text-[#565E74] leading-relaxed bg-white border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
