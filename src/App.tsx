import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { DemoSection } from './components/DemoSection';
import { BenefitsSection } from './components/BenefitsSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { WhyExreaSection } from './components/WhyExreaSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaAndForm } from './components/FinalCtaAndForm';
import { DirectResponseLanding } from './components/DirectResponseLanding';
import { ThankYouPage } from './components/ThankYouPage';
import { StickyMobileCta } from './components/StickyMobileCta';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { CampaignDebugger } from './components/CampaignDebugger';
import { Footer } from './components/Footer';

import { CampaignVertical, LeadFormData, TrackingEvent, UtmParameters } from './types';
import { CAMPAIGN_VERTICALS } from './data/campaignData';
import { smoothScrollToElement } from './utils/smoothScroll';

export default function App() {
  // Landing Graphic Style: default to previous corporate style as requested
  const [landingStyle, setLandingStyle] = useState<'direct_response' | 'corporate'>('corporate');

  // Campaign Vertical State (Section 02)
  const [currentVertical, setCurrentVertical] = useState<CampaignVertical>('configuratori_3d');
  const [submittedLead, setSubmittedLead] = useState<LeadFormData | null>(null);

  // Tracking & UTM attribution state (Sections 16, 17, 18)
  const [utm, setUtm] = useState<UtmParameters>({
    utm_source: 'google',
    utm_medium: 'cpc',
    utm_campaign: 'configuratori_3d_b2b',
    utm_content: 'ad_group_industrial_machinery',
    utm_term: 'configuratore 3d industriale',
    gclid: 'Cj0KCQjwmv65BhC1ARIsAOgmivTs1...',
  });

  const [crmStatus, setCrmStatus] = useState<string>('Prospect In Session');
  const [events, setEvents] = useState<TrackingEvent[]>([]);

  // Dispatch simulated analytics event (GA4 / GTM / Enhanced Conversions)
  const logEvent = (eventName: string, payload: Record<string, any> = {}) => {
    const newEvent: TrackingEvent = {
      id: Math.random().toString(36).substring(2, 9),
      eventName,
      timestamp: new Date().toISOString(),
      payload: { ...payload, utm_campaign: utm.utm_campaign },
    };

    setEvents((prev) => [...prev, newEvent]);

    // Also dispatch to window for external GTM listeners if loaded
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: eventName, ...payload });
    }
  };

  // On mount: parse URL search params or default, and log page_view
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const utmCampaign = params.get('utm_campaign');
      const utmSource = params.get('utm_source') || 'google';
      const utmMedium = params.get('utm_medium') || 'cpc';
      const gclid = params.get('gclid');

      if (utmCampaign) {
        setUtm((prev) => ({
          ...prev,
          utm_campaign: utmCampaign,
          utm_source: utmSource,
          utm_medium: utmMedium,
          gclid: gclid || prev.gclid,
        }));

        if (utmCampaign.includes('vr') || utmCampaign.includes('training')) {
          setCurrentVertical('formazione_vr');
        } else if (utmCampaign.includes('360') || utmCampaign.includes('ar')) {
          setCurrentVertical('esperienze_360_ar');
        } else if (utmCampaign.includes('fiere') || utmCampaign.includes('stand')) {
          setCurrentVertical('fiere_eventi');
        } else {
          setCurrentVertical('configuratori_3d');
        }
      }
    }

    logEvent('page_view', { page_title: 'EXREA Campaign Landing 2026' });

    // Track scroll depth 50%
    let trackedScroll50 = false;
    const handleScroll = () => {
      if (!trackedScroll50) {
        const scrolled = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
        if (scrolled >= 0.5) {
          trackedScroll50 = true;
          logEvent('scroll_50', { depth: '50%' });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectVertical = (vertical: CampaignVertical) => {
    setCurrentVertical(vertical);
    setUtm((prev) => ({
      ...prev,
      utm_campaign: vertical,
    }));
    logEvent('campaign_variant_switch', { vertical });
  };

  const scrollToBooking = () => {
    logEvent('cta_click', { action: 'book_demo_click' });
    const targetId = landingStyle === 'direct_response' ? 'direct-booking-form' : 'booking-form';
    const form = document.getElementById(targetId) || document.getElementById('booking-form') || document.getElementById('direct-booking-form');
    if (form) {
      smoothScrollToElement(form, -75, 1000);
    }
  };

  const scrollToDemos = () => {
    logEvent('cta_click', { action: 'explore_demos_click' });
    const section = document.getElementById('demo-section');
    if (section) {
      smoothScrollToElement(section, -75, 1000);
    }
  };

  const scrollToCaseStudies = () => {
    logEvent('cta_click', { action: 'case_studies_click' });
    const section = document.getElementById('case-studies');
    if (section) {
      smoothScrollToElement(section, -75, 1000);
    }
  };

  const handleLeadSubmit = (data: LeadFormData) => {
    setSubmittedLead(data);
    setCrmStatus('Demo Booked & Qualified');

    logEvent('form_submit', {
      company: data.companyName,
      objective: data.primaryObjective,
      date_chosen: data.selectedDate,
      time_chosen: data.selectedTimeSlot,
    });

    if (data.selectedDate && data.selectedTimeSlot) {
      logEvent('calendar_booked', { slot: `${data.selectedDate} ${data.selectedTimeSlot}` });
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeCampaign = CAMPAIGN_VERTICALS[currentVertical];

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* 01 HEADER WITH GRAPHIC STYLE SELECTOR */}
      <Header
        currentVertical={currentVertical}
        onSelectVertical={handleSelectVertical}
        onBookDemoClick={scrollToBooking}
        landingStyle={landingStyle}
        onChangeLandingStyle={(style) => {
          setLandingStyle(style);
          logEvent('landing_style_switch', { style });
        }}
      />

      {/* Main Content: If lead submitted, show Section 14 Thank You Page */}
      <AnimatePresence mode="wait">
        {submittedLead ? (
          <motion.div
            key="thank-you"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <ThankYouPage
              leadData={submittedLead}
              onViewDemosClick={() => {
                setSubmittedLead(null);
                setTimeout(scrollToDemos, 100);
              }}
              onViewCaseStudiesClick={() => {
                setSubmittedLead(null);
                setTimeout(scrollToCaseStudies, 100);
              }}
              onReset={() => setSubmittedLead(null)}
            />
          </motion.div>
        ) : landingStyle === 'direct_response' ? (
          /* Direct Response / Theory Style Requested from PDF */
          <motion.main
            key="direct-response"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="flex-grow"
          >
            <DirectResponseLanding
              onBookDemoClick={scrollToBooking}
              onSubmitLead={handleLeadSubmit}
            />
          </motion.main>
        ) : (
          /* Classic Corporate B2B Flow */
          <motion.main
            key="corporate-b2b"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="flex-grow"
          >
            {/* 02 HERO */}
            <Hero
              campaign={activeCampaign}
              onBookDemoClick={scrollToBooking}
              onExploreDemoClick={scrollToDemos}
            />

            {/* 03 TRUST IMMEDIATO */}
            <TrustBar />

            {/* 04 IL PROBLEMA */}
            <ProblemSection onBookDemoClick={scrollToBooking} />

            {/* 05 LA SOLUZIONE */}
            <SolutionSection onExploreDemoClick={scrollToDemos} />

            {/* 06 DEMO INTERATTIVA */}
            <DemoSection
              onBookDemoClick={scrollToBooking}
              onDemoInteracted={(demoId) => logEvent('demo_start', { demoId })}
            />

            {/* 07 BENEFICI */}
            <BenefitsSection />

            {/* 08 CASI STUDIO (ASSOMAC, Podere Forte, VRCare) */}
            <CaseStudiesSection onBookDemoClick={scrollToBooking} />

            {/* 09 PERCHÉ EXREA */}
            <WhyExreaSection />

            {/* 10 COME FUNZIONA */}
            <HowItWorksSection onBookDemoClick={scrollToBooking} />

            {/* 11 FAQ */}
            <FaqSection onBookDemoClick={scrollToBooking} />

            {/* 12-13 CTA FINALE & FORM QUALIFICAZIONE */}
            <FinalCtaAndForm
              onSubmitLead={handleLeadSubmit}
              defaultObjective={
                currentVertical === 'formazione_vr'
                  ? 'Formare'
                  : currentVertical === 'esperienze_360_ar'
                  ? 'Far visitare'
                  : currentVertical === 'fiere_eventi'
                  ? 'Fiere ed Eventi'
                  : 'Vendere'
              }
            />
          </motion.main>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <Footer />

      {/* Sticky Mobile CTA (Section 32) */}
      {!submittedLead && (
        <StickyMobileCta onBookDemoClick={scrollToBooking} />
      )}

      {/* Cookie Consent Banner (Section 21) */}
      <CookieConsentBanner />

      {/* Campaign & Funnel Inspector (Sections 16-20) */}
      <CampaignDebugger
        utm={utm}
        events={events}
        crmStatus={crmStatus}
        onUpdateUtm={(newUtm) => setUtm((prev) => ({ ...prev, ...newUtm }))}
      />

    </div>
  );
}
