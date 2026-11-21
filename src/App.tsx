import { useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { FOUNDING_COMMITMENTS } from './data/blueprintData';
import { FIRST_THREE_ACTIONS } from './data/pilotAndTrajectoryData';
import { EditorialImage } from './components/EditorialImage';
import { SystemsDependencyMap } from './components/SystemsDependencyMap';
import { InstitutionsArchive } from './components/InstitutionsArchive';
import { KenyaPilotSection } from './components/KenyaPilotSection';
import { TrajectoryAndFrameworkSection } from './components/TrajectoryAndFrameworkSection';
import { AuditWorkbench } from './components/AuditWorkbench';
import { BuildSequenceProgressBar } from './components/BuildSequenceProgressBar';

export default function App() {
  const [activeCommitmentId, setActiveCommitmentId] = useState<string>(
    FOUNDING_COMMITMENTS[0].id
  );
  const [preloadedInstitutionId, setPreloadedInstitutionId] = useState<string | null>(
    null
  );

  const activeCommitment =
    FOUNDING_COMMITMENTS.find((c) => c.id === activeCommitmentId) ??
    FOUNDING_COMMITMENTS[0];

  const handleSendToWorkbench = (institutionId: string) => {
    setPreloadedInstitutionId(institutionId);
    const el = document.getElementById('audit-workbench');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1917]">
      {/* Strict 3-Zone Top Bar */}
      <header className="border-b border-[#E5DFD3] bg-[#FBF9F5]/95 backdrop-blur-xs">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-4 lg:px-10">
          <a
            href="#top"
            className="font-serif text-xl font-semibold tracking-tight text-[#1C1917] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D]"
          >
            The Flourishing World
          </a>

          <nav
            aria-label="Primary sections"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-[#57534E]"
          >
            <a
              href="#foundation"
              className="hover:text-[#1C1917] hover:underline decoration-[#14532D] underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Foundation
            </a>
            <a
              href="#systems-map"
              className="hover:text-[#1C1917] hover:underline decoration-[#14532D] underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Systems Map
            </a>
            <a
              href="#institutions"
              className="hover:text-[#1C1917] hover:underline decoration-[#14532D] underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Institutions
            </a>
            <a
              href="#kenya-pilot"
              className="hover:text-[#1C1917] hover:underline decoration-[#14532D] underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Kenya Pilot
            </a>
            <a
              href="#audit-workbench"
              className="hover:text-[#1C1917] hover:underline decoration-[#14532D] underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Audit
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <a
              href="#first-actions"
              className="inline-flex items-center gap-1.5 bg-[#14532D] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#166534] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D]"
            >
              <span>First Actions</span>
              <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <BuildSequenceProgressBar />

      <main id="top">
        {/* Hero: Starting With the Human Person & Moral Foundations */}
        <section className="mx-auto max-w-[1200px] px-6 pt-12 pb-16 lg:px-10 lg:pt-16 lg:pb-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#57534E]">
                  Foundational Blueprint · Setting Hearts and Minds Above
                </p>

                <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#1C1917] sm:text-5xl lg:text-[3.35rem]">
                  A World Where Goodness Has Infrastructure
                </h1>

                <p className="drop-cap mt-6 max-w-prose text-[16px] leading-[1.7] text-[#292524]">
                  Every civilisation begins not with steel, silicon, or grand masterplans,
                  but with how it answers a prior question: what is a human being worth,
                  and what conditions allow a person, a family, and living creation to
                  thrive? Flourishing is never reducible to aggregate output or impressive
                  monuments; it is visible when a child has room to learn, a household lives
                  without fear, a farmer stewards living soil, and institutions remain
                  trustworthy even when leaders fail.
                </p>

                <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-[#57534E]">
                  This blueprint translates moral conviction into accountable institutions,
                  living systems architecture, and a grounded Kenyan watershed pilot built
                  from what can realistically begin today.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[#E5DFD3] pt-6">
                <a
                  href="#foundation"
                  className="inline-flex items-center gap-2 bg-[#14532D] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#166534] whitespace-nowrap"
                >
                  <span>Read Founding Philosophy</span>
                </a>
                <a
                  href="#kenya-pilot"
                  className="inline-flex items-center gap-1.5 border border-[#D6CEBE] bg-[#FFFFFF] px-5 py-2.5 text-xs font-semibold text-[#1C1917] transition-colors hover:bg-[#F3EFE7] whitespace-nowrap"
                >
                  <span>Inspect Kenya Pilot</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col">
              <EditorialImage
                src="/src/assets/images/hero_flourishing_watershed_1795174050114.jpg"
                alt="Terraced East African highland watershed with clear spring-fed stone water channel, agroforestry gardens, and timber-and-stone community learning pavilion at golden hour"
                figureNumber="Fig. 1"
                caption="The unit of civilisational health: living watershed, productive agroforestry terraces, and an open community learning pavilion."
                aspectClass="aspect-[16/10] lg:h-full"
                className="h-full"
              />
            </div>
          </div>

          {/* 4-Column Foundational Anchor Strip */}
          <div className="mt-12 grid grid-cols-1 divide-y divide-[#E5DFD3] border border-[#E5DFD3] bg-[#FFFFFF] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            <div className="p-6">
              <p className="font-mono text-xs text-[#14532D]">I · Wisdom</p>
              <h2 className="mt-1.5 font-serif text-xl font-semibold text-[#1C1917]">
                Wisdom Becomes Discovery
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-[#57534E]">
                Truth accountable to evidence, intergenerational memory, and open inquiry.
              </p>
            </div>
            <div className="p-6">
              <p className="font-mono text-xs text-[#14532D]">II · Faith</p>
              <h2 className="mt-1.5 font-serif text-xl font-semibold text-[#1C1917]">
                Faith Becomes Action
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-[#57534E]">
                Service, humility, and stewardship paired with full freedom of conscience.
              </p>
            </div>
            <div className="p-6">
              <p className="font-mono text-xs text-[#14532D]">III · Compassion</p>
              <h2 className="mt-1.5 font-serif text-xl font-semibold text-[#1C1917]">
                Compassion Becomes Infrastructure
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-[#57534E]">
                Systems designed first for the person easiest to overlook.
              </p>
            </div>
            <div className="p-6">
              <p className="font-mono text-xs text-[#14532D]">IV · Innovation</p>
              <h2 className="mt-1.5 font-serif text-xl font-semibold text-[#1C1917]">
                Innovation Serves Life
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-[#57534E]">
                Human-centred tools that expand agency and regenerate living ecosystems.
              </p>
            </div>
          </div>
        </section>

        {/* Section 01: Moral & Philosophical Foundation Reader */}
        <section
          id="foundation"
          aria-labelledby="foundation-heading"
          className="border-t border-[#E5DFD3] bg-[#F3EFE7]/45 py-20 lg:py-24"
        >
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#57534E]">
                Section 01 · Civilisational Vision & Founding Philosophy
              </p>
              <h2
                id="foundation-heading"
                className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#1C1917] sm:text-4xl"
              >
                The Four Transformative Commitments and Their Guardrails
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#44403C]">
                Moral ideals fail when they lack structural checks against their own shadow
                sides. Inspect each commitment alongside the institutional guardrail
                designed to keep it honest.
              </p>
            </div>

            {/* Commitments Interactive Folio */}
            <div className="mt-10 border border-[#E5DFD3] bg-[#FFFFFF]">
              <div
                role="tablist"
                aria-label="Four transformative commitments"
                className="grid grid-cols-1 divide-y divide-[#E5DFD3] border-b border-[#E5DFD3] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4"
              >
                {FOUNDING_COMMITMENTS.map((c) => {
                  const selected = c.id === activeCommitmentId;
                  return (
                    <button
                      key={c.id}
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveCommitmentId(c.id)}
                      className={`px-6 py-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#14532D] ${
                        selected
                          ? 'bg-[#14532D] text-white'
                          : 'bg-[#FFFFFF] text-[#1C1917] hover:bg-[#FBF9F5]'
                      }`}
                    >
                      <span
                        className={`font-mono text-xs ${
                          selected ? 'text-white/80' : 'text-[#14532D]'
                        }`}
                      >
                        Commitment {c.numeral}
                      </span>
                      <span className="mt-1 block font-serif text-xl font-semibold">
                        {c.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="p-7 sm:p-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7 space-y-5">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-[#57534E]">
                      {activeCommitment.subtitle}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-semibold text-[#1C1917] sm:text-3xl">
                      {activeCommitment.numeral}. {activeCommitment.title}
                    </h3>
                  </div>

                  <p className="max-w-prose text-[16px] leading-[1.7] text-[#292524]">
                    {activeCommitment.thesis}
                  </p>

                  <div className="border-t border-[#E5DFD3] pt-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#14532D]">
                      What This Cultivates in Practice
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {activeCommitment.cultivates.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-baseline gap-3 text-sm leading-relaxed text-[#44403C]"
                        >
                          <span className="font-mono text-xs text-[#14532D] tabular-nums">
                            0{idx + 1}
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between gap-6 border-t border-[#E5DFD3] pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                  <div className="bg-[#FBF9F5] border border-[#E5DFD3] p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#78350F]">
                      {activeCommitment.guardrailTitle}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#292524]">
                      {activeCommitment.guardrail}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#57534E]">
                      Intellectual & Moral Synthesis
                    </p>
                    <p className="mt-2 font-serif text-[16px] italic leading-relaxed text-[#44403C]">
                      {activeCommitment.traditions}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Systems Dependency Map */}
        <SystemsDependencyMap />

        {/* Section 03: Ten Foundational Institutions */}
        <InstitutionsArchive onSendToWorkbench={handleSendToWorkbench} />

        {/* Section 04: First Practical Initiative in Kenya */}
        <KenyaPilotSection />

        {/* Section 05 & 06: Trajectory & 9-Dimension Framework */}
        <TrajectoryAndFrameworkSection />

        {/* Section 07: Audit Workbench & Constructive Critique */}
        <AuditWorkbench preloadedInstitutionId={preloadedInstitutionId} />

        {/* Section 08: First Three Actions */}
        <section
          id="first-actions"
          aria-labelledby="actions-heading"
          className="border-t border-[#E5DFD3] bg-[#1C1917] py-20 text-[#FBF9F5] lg:py-24"
        >
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#D6CEBE]">
                Section 08 · From Aspiration to Reality
              </p>
              <h2
                id="actions-heading"
                className="mt-2 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              >
                The First Three Actions Starting Today
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#D6CEBE]">
                Nothing moves by manifestos alone. These three sequenced commitments convert
                the blueprint into lawful governance, empirical field listening, and one
                working Kenyan commons site within 180 days.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {FIRST_THREE_ACTIONS.map((action) => (
                <article
                  key={action.number}
                  className="border border-white/15 bg-white/[0.04] p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-[#D6CEBE]">
                      <span className="font-mono font-semibold text-emerald-300">
                        Action {action.number}
                      </span>
                      <span className="font-mono">{action.timeline}</span>
                    </div>

                    <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug text-white">
                      {action.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#A8A29E]">Owner: {action.owner}</p>

                    <p className="mt-4 text-sm leading-relaxed text-[#E7E5E4]">
                      {action.concreteDeliverable}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-white/15 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                      Falsifiable Check
                    </p>
                    <p className="mt-1.5 font-serif text-[15px] italic leading-relaxed text-[#F5F5F4]">
                      {action.falsifiableQuestion}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Institutional Footer */}
      <footer className="border-t border-[#E5DFD3] bg-[#FBF9F5] py-10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>
            <p className="font-serif text-lg font-semibold text-[#1C1917]">
              The Flourishing World
            </p>
            <p className="mt-1 font-serif text-sm italic text-[#57534E]">
              Setting hearts and minds above — building a world where every person,
              community, and all creation have room to flourish.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#57534E]">
            <a href="#foundation" className="hover:text-[#1C1917]">
              Foundation
            </a>
            <a href="#systems-map" className="hover:text-[#1C1917]">
              Systems Map
            </a>
            <a href="#institutions" className="hover:text-[#1C1917]">
              10 Institutions
            </a>
            <a href="#kenya-pilot" className="hover:text-[#1C1917]">
              Kenya Pilot
            </a>
            <a href="#audit-workbench" className="hover:text-[#1C1917]">
              Audit Workbench
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
