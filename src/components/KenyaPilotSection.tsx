import { useState } from 'react';
import { ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';
import {
  KENYA_PILOT_BUILD_SEQUENCE,
  PILOT_CHALLENGE_QUESTIONS,
} from '../data/pilotAndTrajectoryData';
import { EditorialImage } from './EditorialImage';

export function KenyaPilotSection() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [openQuestionIdx, setOpenQuestionIdx] = useState<number>(0);

  const stage =
    KENYA_PILOT_BUILD_SEQUENCE.find((s) => s.step === activeStep) ??
    KENYA_PILOT_BUILD_SEQUENCE[0];

  return (
    <section
      id="kenya-pilot"
      aria-labelledby="kenya-pilot-heading"
      className="border-t border-[#E5DFD3] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        {/* Pilot Header Split */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <EditorialImage
              src="/src/assets/images/kenya_pilot_watershed_station_1795174050549.jpg"
              alt="Kenyan agronomists and community elders examining water and soil test records beneath a solar-roofed stone and timber pavilion"
              figureNumber="Fig. 3"
              caption="Field-station architecture: local stone and timber pavilion housing water testing benches, WRUA assembly seating, and solar microgrid canopy."
              aspectClass="aspect-[4/3]"
            />
          </div>

          <div className="lg:col-span-6">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#57534E]">
              Section 04 · First Grounded Pilot in Kenya
            </p>
            <h2
              id="kenya-pilot-heading"
              className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#1C1917] sm:text-4xl"
            >
              The Highland Sub-Catchment Watershed & Livelihoods Commons
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#44403C]">
              Rather than launching a grand city or disconnected software platform, the first
              practical test begins within Kenya’s existing statutory landscape—specifically
              linking a Water Resource Users Association (Water Act 2016), an established
              rural SACCO, and county agricultural extension inside one 40–80 km² highland
              sub-catchment.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-[#57534E]">
              No partnerships, yield gains, or funding figures are fabricated below. Every
              assumption is tagged openly as established institutional context, a testable
              hypothesis, or a field question requiring empirical proof.
            </p>

            {/* Three Coupled Minimum Viable Organs */}
            <div className="mt-6 grid grid-cols-1 gap-4 border-t border-[#E5DFD3] pt-5 sm:grid-cols-3">
              <div>
                <p className="font-mono text-xs font-medium text-[#14532D]">Organ 01</p>
                <p className="mt-1 text-sm font-semibold text-[#1C1917]">
                  Riparian Restoration Brigade
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#57534E]">
                  Paid local youth and farmers planting native buffers & gabions alongside
                  3–5 open stream gauges.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs font-medium text-[#14532D]">Organ 02</p>
                <p className="mt-1 text-sm font-semibold text-[#1C1917]">
                  Commons Study & Soil Lab
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#57534E]">
                  Stone-and-timber pavilion built by apprentices with 48-hour soil/water
                  diagnostics and study tables.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs font-medium text-[#14532D]">Organ 03</p>
                <p className="mt-1 text-sm font-semibold text-[#1C1917]">
                  SACCO Cold-Chain Window
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#57534E]">
                  Solar cold storage cutting smallholder spoilage and generating local
                  maintenance revenue.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive 11-Stage Build Sequence */}
        <div
          id="pilot-sequence"
          className="mt-16 scroll-mt-16 border border-[#E5DFD3] bg-[#FFFFFF]"
        >
          <div className="flex flex-col gap-3 border-b border-[#E5DFD3] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-serif text-xl font-semibold text-[#1C1917]">
                11-Stage Build Philosophy Sequence
              </h3>
              <p className="text-xs text-[#57534E]">
                Vision → Principles → Problem → Evidence → Design → Prototype → Pilot →
                Governance → Scale → Verification → Learning
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setActiveStep((s) => Math.max(1, s - 1))}
                disabled={activeStep === 1}
                aria-label="Previous build stage"
                className="inline-flex h-9 w-9 items-center justify-center border border-[#E5DFD3] text-[#1C1917] transition-colors hover:bg-[#F3EFE7] disabled:opacity-35"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="font-mono text-xs tabular-nums text-[#57534E] px-2">
                {String(activeStep).padStart(2, '0')} / 11
              </span>
              <button
                onClick={() => setActiveStep((s) => Math.min(11, s + 1))}
                disabled={activeStep === 11}
                aria-label="Next build stage"
                className="inline-flex h-9 w-9 items-center justify-center border border-[#E5DFD3] text-[#1C1917] transition-colors hover:bg-[#F3EFE7] disabled:opacity-35"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Step Strip */}
          <div
            role="tablist"
            aria-label="11 build sequence stages"
            className="grid grid-cols-3 border-b border-[#E5DFD3] sm:grid-cols-6 lg:grid-cols-11"
          >
            {KENYA_PILOT_BUILD_SEQUENCE.map((item) => {
              const selected = item.step === activeStep;
              return (
                <button
                  key={item.step}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveStep(item.step)}
                  className={`border-b-2 px-2.5 py-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#14532D] ${
                    selected
                      ? 'border-[#14532D] bg-[#F3EFE7]/70 text-[#1C1917]'
                      : 'border-transparent text-[#57534E] hover:bg-[#FBF9F5] hover:text-[#1C1917]'
                  }`}
                >
                  <span className="block font-mono text-[10px] tabular-nums text-[#78716C]">
                    {String(item.step).padStart(2, '0')}
                  </span>
                  <span className="mt-0.5 block truncate text-[11px] font-semibold tracking-wide">
                    {item.phase}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Details */}
          <div className="p-7 sm:p-9">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E]">
              <span className="font-mono font-semibold text-[#14532D]">
                Stage {String(stage.step).padStart(2, '0')} · {stage.phase}
              </span>
              <span aria-hidden="true">·</span>
              <span
                className={
                  stage.epistemicStatus === 'Established Context'
                    ? 'font-medium text-[#14532D]'
                    : stage.epistemicStatus === 'Field Verification Needed'
                    ? 'font-medium text-[#78350F]'
                    : 'font-medium text-[#1E3A8A]'
                }
              >
                Epistemic Status: {stage.epistemicStatus}
              </span>
            </div>

            <h4 className="mt-2 font-serif text-2xl font-semibold text-[#1C1917]">
              {stage.title}
            </h4>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#57534E]">
                  Core Discipline
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#292524]">{stage.summary}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#14532D]">
                  Kenyan Institutional Grounding
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#292524]">
                  {stage.kenyaSpecifics}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#78350F]">
                  Verification Gate
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#292524]">
                  {stage.evidenceOrCheck}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Practical Challenge Questions */}
        <div className="mt-14">
          <div className="max-w-2xl">
            <h3 className="font-serif text-2xl font-semibold text-[#1C1917]">
              Challenging the Pilot with Practical Reality
            </h3>
            <p className="mt-1.5 text-sm text-[#57534E]">
              Every grand idea must answer who bears the cost, who owns the assets, and how
              failure surfaces early.
            </p>
          </div>

          <div className="mt-6 divide-y divide-[#E5DFD3] border border-[#E5DFD3] bg-[#FFFFFF]">
            {PILOT_CHALLENGE_QUESTIONS.map((item, idx) => {
              const isOpen = openQuestionIdx === idx;
              return (
                <div key={idx}>
                  <button
                    onClick={() => setOpenQuestionIdx(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-[#FBF9F5]"
                  >
                    <span className="flex items-center gap-3 text-sm font-semibold text-[#1C1917] sm:text-[15px]">
                      <HelpCircle
                        className="h-4 w-4 shrink-0 text-[#14532D]"
                        aria-hidden="true"
                      />
                      <span>{item.question}</span>
                    </span>
                    <span className="font-mono text-xs text-[#57534E] shrink-0">
                      {isOpen ? 'Close' : 'Inspect'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-[#E5DFD3] bg-[#FBF9F5] px-6 py-5 pl-13 space-y-2.5">
                      <p className="text-sm leading-relaxed text-[#292524]">{item.answer}</p>
                      <p className="text-xs leading-relaxed text-[#78350F]">
                        <strong className="font-semibold">Guardrail: </strong>
                        {item.riskNote}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
