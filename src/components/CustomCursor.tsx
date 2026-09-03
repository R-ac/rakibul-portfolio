import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isTouch, setIsTouch] = useState(false);
  const [hoverState, setHoverState] = useState<'default' | 'pointer' | 'project' | 'text'>('default');
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Detect touch / coarse pointer devices
    const checkTouch = () => {
      if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
        setIsTouch(true);
      }
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);

    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check hover target type
      const target = e.target as HTMLElement | null;
      if (target) {
        const isButton = target.closest('button, a, [role="button"], input, textarea, select');
        const isProject = target.closest('[data-cursor="project"]');
        const isInteractive = target.closest('[data-cursor="pointer"]');

        if (isProject) {
          setHoverState('project');
        } else if (isButton || isInteractive) {
          setHoverState('pointer');
        } else {
          setHoverState('default');
        }
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth animation loop for trailing ring
    let animationFrameId: number;
    const render = () => {
      // Linear interpolation for smooth trailing ring
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTouch, isVisible]);

  if (isTouch) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Central Sharp Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#00f2fe] will-change-transform"
      />

      {/* Trailing Responsive Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border transition-all duration-200 ease-out will-change-transform flex items-center justify-center -translate-x-1/2 -translate-y-1/2 ${
          hoverState === 'project'
            ? '-ml-8 -mt-8 w-16 h-16 border-cyan-400 bg-cyan-950/30 shadow-[0_0_20px_rgba(0,242,254,0.4)] backdrop-blur-[2px]'
            : hoverState === 'pointer'
            ? '-ml-6 -mt-6 w-12 h-12 border-emerald-400 bg-emerald-950/20 shadow-[0_0_16px_rgba(0,255,157,0.3)]'
            : '-ml-4 -mt-4 w-8 h-8 border-cyan-500/40 bg-transparent'
        }`}
      >
        {hoverState === 'project' && (
          <span className="text-[9px] font-mono font-bold text-cyan-300 tracking-wider uppercase">VIEW</span>
        )}
      </div>
    </div>
  );
};
