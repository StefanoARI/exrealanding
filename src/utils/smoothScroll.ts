/**
 * Professional Smooth Scroll Engine
 * 
 * Provides an ultra-smooth, weighted cubic-quartic inertia scroll (1000ms - 1300ms)
 * that feels dignified, luxurious, and calibrated for high-end B2B corporate interfaces.
 */

// Custom ease-in-out quartic curve: slow start, silky glide, long progressive deceleration
function easeInOutQuart(t: number): number {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

let activeScrollAnimationId: number | null = null;

/**
 * Smoothly scrolls to target Y coordinate with weighted progressive timing.
 * Interruptible if user manually scrolls or touches the screen.
 */
export function smoothScrollTo(targetY: number, baseDuration: number = 1100) {
  if (activeScrollAnimationId !== null) {
    cancelAnimationFrame(activeScrollAnimationId);
    activeScrollAnimationId = null;
  }

  const startY = window.pageYOffset || document.documentElement.scrollTop;
  const maxScroll = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight
  ) - window.innerHeight;

  const clampedTargetY = Math.max(0, Math.min(targetY, maxScroll));
  const diff = clampedTargetY - startY;

  if (Math.abs(diff) < 2) return;

  const distance = Math.abs(diff);
  // Deliberate, calibrated duration: between 950ms and 1350ms depending on distance
  const duration = Math.min(1400, Math.max(900, baseDuration * (0.8 + (distance / 3000) * 0.35)));

  let startTime: number | null = null;

  // Stop animation if user touches or mouse-wheels
  const handleUserInterruption = () => {
    if (activeScrollAnimationId !== null) {
      cancelAnimationFrame(activeScrollAnimationId);
      activeScrollAnimationId = null;
      cleanupListeners();
    }
  };

  const cleanupListeners = () => {
    window.removeEventListener('wheel', handleUserInterruption);
    window.removeEventListener('touchstart', handleUserInterruption);
  };

  window.addEventListener('wheel', handleUserInterruption, { passive: true, once: true });
  window.addEventListener('touchstart', handleUserInterruption, { passive: true, once: true });

  function step(currentTime: number) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = easeInOutQuart(progress);

    window.scrollTo(0, startY + diff * easeProgress);

    if (progress < 1) {
      activeScrollAnimationId = window.requestAnimationFrame(step);
    } else {
      activeScrollAnimationId = null;
      cleanupListeners();
    }
  }

  activeScrollAnimationId = window.requestAnimationFrame(step);
}

export function smoothScrollToElement(
  elementIdOrElement: string | HTMLElement, 
  yOffset: number = -75, 
  duration: number = 1100
) {
  const element = typeof elementIdOrElement === 'string' 
    ? document.getElementById(elementIdOrElement) 
    : elementIdOrElement;

  if (!element) return;

  const rect = element.getBoundingClientRect();
  const currentY = window.pageYOffset || document.documentElement.scrollTop;
  const targetY = rect.top + currentY + yOffset;

  smoothScrollTo(targetY, duration);
}
