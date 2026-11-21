import { useEffect, useState } from 'react';

export interface BuildPhaseAnchor {
  step: number;
  phase: string;
  label: string;
  targetId: string;
  sectionHint: string;
}

export const BUILD_SEQUENCE_PHASES: BuildPhaseAnchor[] = [
  {
    step: 1,
    phase: 'VISION',
    label: 'Vision',
    targetId: 'top',
    sectionHint: 'Human Person & Flourishing',
  },
  {
    step: 2,
    phase: 'PRINCIPLES',
    label: 'Principles',
    targetId: 'foundation',
    sectionHint: 'Four Commitments & Guardrails',
  },
  {
    step: 3,
    phase: 'PROBLEM',
    label: 'Problem',
    targetId: 'systems-map',
    sectionHint: 'Living Systems & Trade-offs',
  },
  {
    step: 4,
    phase: 'EVIDENCE',
    label: 'Evidence',
    targetId: 'systems-map',
    sectionHint: 'System Dependencies & Reality',
  },
  {
    step: 5,
    phase: 'DESIGN',
    label: 'Design',
    targetId: 'institutions',
    sectionHint: 'Ten Foundational Institutions',
  },
  {
    step: 6,
    phase: 'PROTOTYPE',
    label: 'Prototype',
    targetId: 'kenya-pilot',
    sectionHint: 'Kenya Commons Prototype',
  },
  {
    step: 7,
    phase: 'PILOT',
    label: 'Pilot',
    targetId: 'pilot-sequence',
    sectionHint: '11-Stage Field Execution',
  },
  {
    step: 8,
    phase: 'GOVERNANCE',
    label: 'Governance',
    targetId: 'trajectory-framework',
    sectionHint: 'Horizons & Devolution',
  },
  {
    step: 9,
    phase: 'SCALE',
    label: 'Scale',
    targetId: 'trajectory-framework',
    sectionHint: '5–15 Year Replication',
  },
  {
    step: 10,
    phase: 'VERIFICATION',
    label: 'Verification',
    targetId: 'flourishing-framework',
    sectionHint: '9-Dimension Evaluation',
  },
  {
    step: 11,
    phase: 'LEARNING',
    label: 'Learning',
    targetId: 'audit-workbench',
    sectionHint: 'Audit, Critique & First Actions',
  },
];

const SCROLL_ANCHORS: Array<{ id: string; step: number }> = [
  { id: 'top', step: 1 },
  { id: 'foundation', step: 2 },
  { id: 'systems-map', step: 3 },
  { id: 'institutions', step: 5 },
  { id: 'kenya-pilot', step: 6 },
  { id: 'pilot-sequence', step: 7 },
  { id: 'trajectory-framework', step: 8 },
  { id: 'flourishing-framework', step: 10 },
  { id: 'audit-workbench', step: 11 },
  { id: 'first-actions', step: 11 },
];

export function BuildSequenceProgressBar() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [scrollRatio, setScrollRatio] = useState<number>(0);

  useEffect(() => {
    let frameId = 0;

    const updateOrientation = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
      setScrollRatio(ratio);

      const triggerLine = scrollY + 160;
      let currentStep = 1;

      for (const anchor of SCROLL_ANCHORS) {
        const el = document.getElementById(anchor.id);
        if (el) {
          const top = el.getBoundingClientRect().top + scrollY;
          if (triggerLine >= top) {
            currentStep = anchor.step;
          }
        }
      }
      setActiveStep(currentStep);
    };

    const onScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        updateOrientation();
        frameId = 0;
      });
    };

    updateOrientation();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const currentPhase =
    BUILD_SEQUENCE_PHASES.find((p) => p.step === activeStep) ??
    BUILD_SEQUENCE_PHASES[0];

  const handleJump = (targetId: string, step: number) => {
    setActiveStep(step);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      aria-label="Vision to Reality build sequence progress"
      className="sticky top-0 z-40 border-b border-[#E5DFD3] bg-[#FBF9F5]/95 backdrop-blur-xs"
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-2 lg:px-10">
        {/* Compact current-phase orientation readout */}
        <div className="flex items-center gap-2 text-xs min-w-0 shrink-0">
          <span className="font-mono text-[11px] font-semibold text-[#14532D] tabular-nums whitespace-nowrap">
            {String(currentPhase.step).padStart(2, '0')}/11
          </span>
          <span className="font-semibold text-[#1C1917] whitespace-nowrap">
            {currentPhase.label}
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-[#A8A29E]">
            ·
          </span>
          <span className="hidden sm:inline truncate max-w-[180px] text-[#57534E]">
            {currentPhase.sectionHint}
          </span>
        </div>

        {/* 11-Phase Horizontal Stepper */}
        <nav
          aria-label="Build sequence phases"
          className="hidden lg:flex items-center gap-1"
        >
          {BUILD_SEQUENCE_PHASES.map((item) => {
            const isActive = item.step === activeStep;
            const isPast = item.step < activeStep;
            return (
              <button
                key={item.step}
                onClick={() => handleJump(item.targetId, item.step)}
                title={`${item.step}. ${item.label} — ${item.sectionHint}`}
                aria-current={isActive ? 'step' : undefined}
                className={`px-2 py-1 text-[11px] font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#14532D] ${
                  isActive
                    ? 'bg-[#14532D] text-white'
                    : isPast
                    ? 'text-[#14532D] hover:bg-[#F3EFE7]'
                    : 'text-[#78716C] hover:bg-[#F3EFE7] hover:text-[#1C1917]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile / Tablet compact progress counter */}
        <div className="flex lg:hidden items-center gap-2 font-mono text-[11px] text-[#57534E] tabular-nums shrink-0">
          <span>{Math.round(scrollRatio * 100)}% read</span>
        </div>
      </div>

      {/* Hairline reading/phase progress track (compositor-only transform) */}
      <div className="h-[2px] w-full bg-[#EBE6DF] overflow-hidden">
        <div
          className="h-full w-full origin-left bg-[#14532D] transition-transform duration-150 ease-out"
          style={{
            transform: `scaleX(${Math.max(
              activeStep / BUILD_SEQUENCE_PHASES.length,
              scrollRatio
            )})`,
          }}
        />
      </div>
    </div>
  );
}
