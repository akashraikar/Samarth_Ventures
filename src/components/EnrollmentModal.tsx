import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Phone, Mail } from 'lucide-react';
import { COURSES } from '../data/courses';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseKey?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  defaultCourseKey = 'course-advanced'
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseKey: defaultCourseKey,
    mode: 'classroom',
    experience: 'intermediate',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultCourseKey) {
      setFormData((prev) => ({ ...prev, courseKey: defaultCourseKey }));
    }
  }, [defaultCourseKey]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Valid corporate or personal email required';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = 'Please provide a valid contact number';
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
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#0B1120]">
              Inquiry Successfully Received
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong>{formData.fullName}</strong>. Our Senior Academic Counselor will contact you at <strong>{formData.phone}</strong> within 4 business hours with detailed syllabus PDFs and batch timing options.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="w-full py-2.5 bg-[#0085CB] text-white font-semibold text-xs rounded-lg hover:bg-[#0284C7] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="border-b border-slate-100 pb-4 mb-5">
              <span className="text-[11px] font-bold tracking-wider text-[#0085CB] uppercase">
                Admissions &amp; Studio Demo
              </span>
              <h3 className="text-xl font-bold text-[#0B1120] mt-1">
                Enquire or Reserve Your Workstation
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Small cohort sizes capped at 8 students per batch for direct instructor mentorship.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-3 py-2 text-xs rounded-lg border ${
                    errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300'
                  } focus:outline-none focus:border-[#0085CB] focus:ring-1 focus:ring-[#0085CB]`}
                />
                {errors.fullName && <p className="text-[11px] text-rose-500 mt-0.5">{errors.fullName}</p>}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@jewellery.com"
                    className={`w-full px-3 py-2 text-xs rounded-lg border ${
                      errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300'
                    } focus:outline-none focus:border-[#0085CB] focus:ring-1 focus:ring-[#0085CB]`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-500 mt-0.5">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98200-XXXXX"
                    className={`w-full px-3 py-2 text-xs rounded-lg border ${
                      errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300'
                    } focus:outline-none focus:border-[#0085CB] focus:ring-1 focus:ring-[#0085CB]`}
                  />
                  {errors.phone && <p className="text-[11px] text-rose-500 mt-0.5">{errors.phone}</p>}
                </div>
              </div>

              {/* Course Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Program of Interest
                </label>
                <select
                  value={formData.courseKey}
                  onChange={(e) => setFormData({ ...formData, courseKey: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#0085CB] bg-white text-slate-800"
                >
                  {Object.values(COURSES).map((course) => (
                    <option key={course.pageKey} value={course.pageKey}>
                      {course.title} ({course.level})
                    </option>
                  ))}
                  <option value="electroforming-consult">Hollow Electroforming R&amp;D Consultation</option>
                </select>
              </div>

              {/* Training Mode & Background */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Format
                  </label>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#0085CB] bg-white text-slate-800"
                  >
                    <option value="classroom">Studio Workstation (Mumbai)</option>
                    <option value="hybrid">Live Hybrid Interactive</option>
                    <option value="corporate">Corporate Team Batch</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#0085CB] bg-white text-slate-800"
                  >
                    <option value="beginner">Beginner (No CAD background)</option>
                    <option value="intermediate">Bench Jeweler / 2D Artist</option>
                    <option value="professional">Practicing CAD Modeler</option>
                    <option value="manufacturer">Jewelry Manufacturer</option>
                  </select>
                </div>
              </div>

              {/* Optional Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Specific Learning Objectives (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Interested in bridal pave setting, hollow bangle casting, or weekend batches..."
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#0085CB] text-slate-800"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#0085CB] hover:bg-[#0284C7] active:bg-[#006195] text-white font-semibold text-xs rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Processing Reservation...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry &amp; Receive Syllabus PDF</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your information is confidential. No spam policy.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
