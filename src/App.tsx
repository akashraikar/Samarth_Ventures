/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { NavPage } from './types';
import { COURSES } from './data/courses';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';

import { HomeView } from './views/HomeView';
import { CourseDetailView } from './views/CourseDetailView';
import { OurStoryView } from './views/OurStoryView';
import { WhyChooseUsView } from './views/WhyChooseUsView';
import { ElectroformingView } from './views/ElectroformingView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCourseKey, setModalCourseKey] = useState<string>('course-advanced');

  // Sync with browser hash on load and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavPage;
      const validPages: NavPage[] = [
        'home',
        'course-advanced',
        'course-intermediate',
        'course-reverse-engineering',
        'course-digital-artisan',
        'our-story',
        'why-choose-us',
        'electroforming',
        'get-in-touch'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: NavPage) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = (courseKey?: string) => {
    if (courseKey) {
      setModalCourseKey(courseKey);
    }
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0B1120] font-sans selection:bg-[#0085CB] selection:text-white">
      {/* Global Header with exact corporate logo and dropdown */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenEnquireModal={handleOpenModal}
      />

      {/* Main Dynamic View Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={navigateTo}
            onOpenEnquireModal={handleOpenModal}
          />
        )}

        {currentPage === 'course-advanced' && (
          <CourseDetailView
            course={COURSES['course-advanced']}
            onNavigate={navigateTo}
            onOpenEnquireModal={handleOpenModal}
          />
        )}

        {currentPage === 'course-intermediate' && (
          <CourseDetailView
            course={COURSES['course-intermediate']}
            onNavigate={navigateTo}
            onOpenEnquireModal={handleOpenModal}
          />
        )}

        {currentPage === 'course-reverse-engineering' && (
          <CourseDetailView
            course={COURSES['course-reverse-engineering']}
            onNavigate={navigateTo}
            onOpenEnquireModal={handleOpenModal}
          />
        )}

        {currentPage === 'course-digital-artisan' && (
          <CourseDetailView
            course={COURSES['course-digital-artisan']}
            onNavigate={navigateTo}
            onOpenEnquireModal={handleOpenModal}
          />
        )}

        {currentPage === 'our-story' && (
          <OurStoryView
            onNavigate={navigateTo}
            onOpenEnquireModal={() => handleOpenModal()}
          />
        )}

        {currentPage === 'why-choose-us' && (
          <WhyChooseUsView
            onNavigate={navigateTo}
            onOpenEnquireModal={() => handleOpenModal()}
          />
        )}

        {currentPage === 'electroforming' && (
          <ElectroformingView
            onNavigate={navigateTo}
            onOpenEnquireModal={handleOpenModal}
          />
        )}

        {currentPage === 'get-in-touch' && (
          <ContactView onNavigate={navigateTo} />
        )}
      </main>

      {/* Global Footer with corporate logo, course links & campus location */}
      <Footer
        onNavigate={navigateTo}
        onOpenEnquireModal={handleOpenModal}
      />

      {/* Interactive Global Enrollment & Inquiry Modal */}
      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCourseKey={modalCourseKey}
      />
    </div>
  );
}
