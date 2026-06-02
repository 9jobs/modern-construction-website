'use client';

import React, { useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

interface MotionSiteShellProps {
  children: React.ReactNode;
}

const sectionVariants = ['motion-fade-up', 'motion-fade-left', 'motion-fade-right', 'motion-blur-reveal'];

export function MotionSiteShell({ children }: MotionSiteShellProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.35,
  });

  useEffect(() => {
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (time: number) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      smoothWheel: true,
      wheelMultiplier: 0.88,
      touchMultiplier: 1.05,
    });

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;

    const root = document.documentElement;
    root.classList.add('premium-motion-ready');

    const prepareReveal = (element: Element, className: string, index = 0) => {
      element.classList.add('motion-reveal', className);
      (element as HTMLElement).style.setProperty('--motion-delay', `${Math.min(index % 8, 7) * 70}ms`);
    };

    const sections = Array.from(document.querySelectorAll('main section'));
    sections.forEach((section, index) => prepareReveal(section, sectionVariants[index % sectionVariants.length], index));

    const cards = Array.from(document.querySelectorAll('main article'));
    cards.forEach((card, index) => prepareReveal(card, 'motion-card-reveal', index));

    const images = Array.from(document.querySelectorAll('main img'));
    images.forEach((image, index) => prepareReveal(image, 'motion-image-reveal', index));
    const parallaxImages = images.filter(
      (image) => !image.closest('article') && !image.closest('a') && !image.closest('button')
    ) as HTMLElement[];

    const headings = Array.from(document.querySelectorAll('main h1'));
    headings.forEach((heading) => heading.classList.add('motion-heading-reveal'));

    const footer = document.querySelector('footer');
    if (footer) prepareReveal(footer, 'motion-fade-up', 0);

    const revealElements = Array.from(document.querySelectorAll('.motion-reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('motion-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    let parallaxFrame = 0;
    const updateParallax = () => {
      parallaxFrame = 0;
      const viewportHeight = window.innerHeight;

      parallaxImages.forEach((image) => {
        const rect = image.getBoundingClientRect();
        const isVisible = rect.bottom > 0 && rect.top < viewportHeight;

        if (!isVisible) return;

        const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
        const y = Math.max(-28, Math.min(28, centerOffset * -0.035));
        image.style.setProperty('translate', `0 ${y.toFixed(2)}px`);
      });
    };

    const requestParallax = () => {
      if (parallaxFrame) return;
      parallaxFrame = requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener('scroll', requestParallax, { passive: true });
    window.addEventListener('resize', requestParallax);

    return () => {
      observer.disconnect();
      if (parallaxFrame) cancelAnimationFrame(parallaxFrame);
      window.removeEventListener('scroll', requestParallax);
      window.removeEventListener('resize', requestParallax);
      revealElements.forEach((element) => {
        element.classList.remove(
          'motion-reveal',
          'motion-visible',
          'motion-fade-up',
          'motion-fade-left',
          'motion-fade-right',
          'motion-blur-reveal',
          'motion-card-reveal',
          'motion-image-reveal'
        );
        (element as HTMLElement).style.removeProperty('--motion-delay');
      });
      parallaxImages.forEach((image) => image.style.removeProperty('translate'));
      headings.forEach((heading) => heading.classList.remove('motion-heading-reveal'));
      root.classList.remove('premium-motion-ready');
    };
  }, [pathname, reduceMotion]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[999] h-[3px] w-full origin-left bg-brand-yellow"
        style={{ scaleX: progressScale }}
      />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
          className="flex-grow pb-16 md:pb-0"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
}
