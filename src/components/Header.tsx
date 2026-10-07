import React, { useState, useRef, useEffect } from 'react';
import { NavPage } from '../types';
import { BrandLogo } from './BrandLogo';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  Sparkles,
  BookOpen,
  Layers,
  Cpu,
  Hammer
} from 'lucide-react';

interface HeaderProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenEnquireModal: (defaultCourse?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenEnquireModal
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileOffersAccordionOpen, setIsMobileOffersAccordionOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown on route change or outside click
  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const offerSubmenus: { id: NavPage; label: string; icon: React.ReactNode; level: string; desc: string }[] = [
    {
      id: 'course-advanced',
      label: 'Jewellery CAD Professional in Rhinoceros - Advanced Level',
      icon: <Sparkles className="w-4 h-4 text-[#0085CB]" />,
      level: 'Advanced',
      desc: 'Complex bridal suites, multi-axis pavé arrays, SubD organic forms, and production casting tolerances.'
    },
    {
      id: 'course-intermediate',
      label: 'Jewellery designing in Rhinoceros - Intermidiate Level',
      icon: <BookOpen className="w-4 h-4 text-[#0085CB]" />,
      level: 'Intermediate',
      desc: 'Commercial rings, solitaire prongs, hollow profiles, stone sizing, and wax 3D print file prep.'
    },
    {
      id: 'course-reverse-engineering',
      label: 'Rhino level 1 & 2 Reverse Engineering & Designing Pro',
      icon: <Cpu className="w-4 h-4 text-[#0085CB]" />,
      level: 'Industry Pro',
      desc: 'Blue light laser scan point clouds to flawless mathematical NURBS surfaces with 0.02mm tolerance.'
    },
    {
      id: 'course-digital-artisan',
      label: 'Digital Artisan - Advanced 3D Modelling for Traditional Crafts',
      icon: <Hammer className="w-4 h-4 text-[#0085CB]" />,
      level: 'Masterclass',
      desc: 'Temple jewelry, nakshi repoussé relief, algorithmic filigree wirework, and jali fretwork.'
    }
  ];

  const isOffersActive = [
    'course-advanced',
    'course-intermediate',
    'course-reverse-engineering',
    'course-digital-artisan'
  ].includes(currentPage);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Corporate Brand Mark */}
        <div className="flex items-center">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0085CB] rounded-md p-1"
            title="Samarth Ventures Home"
          >
            {/* Exact corporate logo matching user's attached image */}
            <img
              src="/samarth ventures logo - horizontal.png"
              alt="Samarth Ventures"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            {/* Vector fallback */}
            <div className="hidden">
              <BrandLogo className="h-10 sm:h-12 w-auto" />
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links (Single-line, 5 main navigation targets) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#565E74]">
          {/* 1. Home */}
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors hover:text-[#0085CB] py-2 relative ${
              currentPage === 'home'
                ? 'text-[#0085CB] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0085CB]'
                : ''
            }`}
          >
            Home
          </button>

          {/* 2. What we offer (Dropdown) */}
          <div
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center gap-1.5 transition-colors hover:text-[#0085CB] py-2 focus:outline-none ${
                isOffersActive
                  ? 'text-[#0085CB] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0085CB]'
                  : ''
              }`}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <span>What we offer</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180 text-[#0085CB]' : ''
                }`}
              />
            </button>

            {/* Desktop Dropdown Menu */}
            {isDropdownOpen && (
              <div 
                className="absolute left-0 mt-1 w-[460px] bg-white rounded-xl shadow-xl border border-[#E2E8F0] p-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="text-[11px] font-bold text-[#707882] tracking-wider uppercase px-3 py-1.5 border-b border-[#E2E8F0]/70 mb-1 flex items-center justify-between">
                  <span>Accredited CAD Programs</span>
                  <span className="text-[#0085CB] font-medium lowercase">Rhinoceros 8</span>
                </div>
                <div className="space-y-1">
                  {offerSubmenus.map((item) => {
                    const isSelected = currentPage === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          onNavigate(item.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left p-3 rounded-lg transition-all flex items-start gap-3 group ${
                          isSelected
                            ? 'bg-[#EFF4FF] border border-[#CDE5FF]'
                            : 'hover:bg-[#F8FAFC]'
                        }`}
                      >
                        <div className={`mt-0.5 p-2 rounded-md ${isSelected ? 'bg-white shadow-xs' : 'bg-[#EFF4FF] group-hover:bg-white group-hover:shadow-xs transition-colors'}`}>
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-semibold text-[#0B1120] group-hover:text-[#0085CB] transition-colors leading-snug">
                              {item.label}
                            </span>
                            <span className="shrink-0 text-[10px] font-medium text-[#006195] bg-[#E5EEFF] px-2 py-0.5 rounded">
                              {item.level}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#565E74] mt-1 line-clamp-1 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-2 pt-2 border-t border-[#E2E8F0] px-3 flex items-center justify-between text-xs text-[#565E74]">
                  <span>Authorized McNeel Training Partner</span>
                  <button 
                    onClick={() => {
                      setIsDropdownOpen(false);
                      onOpenEnquireModal();
                    }}
                    className="text-[#0085CB] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>Compare Courses</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 3. Our Story */}
          <button
            onClick={() => onNavigate('our-story')}
            className={`transition-colors hover:text-[#0085CB] py-2 relative ${
              currentPage === 'our-story'
                ? 'text-[#0085CB] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0085CB]'
                : ''
            }`}
          >
            Our Story
          </button>

          {/* 4. Why Choose Us */}
          <button
            onClick={() => onNavigate('why-choose-us')}
            className={`transition-colors hover:text-[#0085CB] py-2 relative ${
              currentPage === 'why-choose-us'
                ? 'text-[#0085CB] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0085CB]'
                : ''
            }`}
          >
            Why Choose Us
          </button>

          {/* 5. Electroforming */}
          <button
            onClick={() => onNavigate('electroforming')}
            className={`transition-colors hover:text-[#0085CB] py-2 relative flex items-center gap-1.5 ${
              currentPage === 'electroforming'
                ? 'text-[#0085CB] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0085CB]'
                : ''
            }`}
          >
            <span>Electroforming</span>
            <span className="text-[10px] bg-[#FEF3C7] text-[#92400E] font-bold px-1.5 py-0.2 rounded">
              R&amp;D
            </span>
          </button>

          {/* 6. Get In Touch */}
          <button
            onClick={() => onNavigate('get-in-touch')}
            className={`transition-colors hover:text-[#0085CB] py-2 relative ${
              currentPage === 'get-in-touch'
                ? 'text-[#0085CB] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0085CB]'
                : ''
            }`}
          >
            Get In Touch
          </button>
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenEnquireModal()}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0085CB] hover:bg-[#0284C7] active:bg-[#006195] rounded-lg shadow-sm transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer hover:shadow"
          >
            <span>Enquire / Book Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#0B1120] hover:text-[#0085CB] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E2E8F0] bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <button
            onClick={() => {
              onNavigate('home');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
              currentPage === 'home' ? 'bg-[#EFF4FF] text-[#0085CB]' : 'text-[#0B1120]'
            }`}
          >
            Home
          </button>

          {/* Mobile Nesting Accordion for "What we offer" */}
          <div className="border border-[#E2E8F0] rounded-lg overflow-hidden">
            <button
              onClick={() => setIsMobileOffersAccordionOpen(!isMobileOffersAccordionOpen)}
              className="w-full flex items-center justify-between py-2.5 px-3 bg-[#F8FAFC] text-sm font-medium text-[#0B1120]"
            >
              <span className="flex items-center gap-2">
                <span>What we offer</span>
                <span className="text-[10px] bg-[#E5EEFF] text-[#006195] font-semibold px-1.5 py-0.5 rounded">
                  4 Courses
                </span>
              </span>
              <ChevronDown
                className={`w-4 h-4 text-[#565E74] transition-transform ${
                  isMobileOffersAccordionOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isMobileOffersAccordionOpen && (
              <div className="p-2 space-y-1 bg-white">
                {offerSubmenus.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-md text-xs transition-colors flex items-start gap-2.5 ${
                      currentPage === item.id ? 'bg-[#EFF4FF] text-[#0085CB] font-semibold' : 'text-[#0B1120] hover:bg-[#F8FAFC]'
                    }`}
                  >
                    <span className="mt-0.5 text-[#0085CB]">{item.icon}</span>
                    <div className="flex-1">
                      <div className="font-semibold leading-tight">{item.label}</div>
                      <div className="text-[10px] text-[#565E74] mt-0.5">{item.level}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => {
              onNavigate('our-story');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
              currentPage === 'our-story' ? 'bg-[#EFF4FF] text-[#0085CB]' : 'text-[#0B1120]'
            }`}
          >
            Our Story
          </button>

          <button
            onClick={() => {
              onNavigate('why-choose-us');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
              currentPage === 'why-choose-us' ? 'bg-[#EFF4FF] text-[#0085CB]' : 'text-[#0B1120]'
            }`}
          >
            Why Choose Us
          </button>

          <button
            onClick={() => {
              onNavigate('electroforming');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium flex items-center justify-between ${
              currentPage === 'electroforming' ? 'bg-[#EFF4FF] text-[#0085CB]' : 'text-[#0B1120]'
            }`}
          >
            <span>Electroforming</span>
            <span className="text-[10px] bg-[#FEF3C7] text-[#92400E] font-bold px-2 py-0.5 rounded">
              Lightweighting R&amp;D
            </span>
          </button>

          <button
            onClick={() => {
              onNavigate('get-in-touch');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
              currentPage === 'get-in-touch' ? 'bg-[#EFF4FF] text-[#0085CB]' : 'text-[#0B1120]'
            }`}
          >
            Get In Touch
          </button>

          <div className="pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnquireModal();
              }}
              className="w-full py-3 text-center text-xs font-semibold text-white bg-[#0085CB] rounded-lg shadow-sm"
            >
              Enquire Now / Book Demo Session
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
