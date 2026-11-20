import { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { FOUNDATIONAL_INSTITUTIONS } from '../data/blueprintData';
import { EditorialImage } from './EditorialImage';

interface InstitutionsArchiveProps {
  onSendToWorkbench: (institutionId: string) => void;
}

export function InstitutionsArchive({ onSendToWorkbench }: InstitutionsArchiveProps) {
  const [selectedId, setSelectedId] = useState<string>(FOUNDATIONAL_INSTITUTIONS[0].id);

  const active =
    FOUNDATIONAL_INSTITUTIONS.find((inst) => inst.id === selectedId) ??
    FOUNDATIONAL_INSTITUTIONS[0];

  return (
    <section
      id="institutions"
      aria-labelledby="institutions-heading"
      className="border-t border-[#E5DFD3] bg-[#F3EFE7]/45 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        {/* Curatorial Intro Split */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#57534E]">
              Section 03 · Ten Foundational Institutions
            </p>
            <h2
              id="institutions-heading"
              className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#1C1917] sm:text-4xl"
            >
              Goodness Requires Durable Institutions, Not Temporary Campaigns
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#44403C]">
              Values evaporate without institutional vessels. Below are ten realistic,
              non-utopian institutions designed to work within existing legal systems,
              local economies, and human fallibility. Each dossier separates established
              evidence from open hypotheses requiring field proof.
            </p>
          </div>
          <div className="lg:col-span-5">
            <EditorialImage
              src="/src/assets/images/institutional_library_commons_1795174051747.jpg"
              alt="Sunlit stone and timber community library and craft commons with botanical books and architectural plans"
              figureNumber="Fig. 2"
              caption="Study hall and craft workshop prototype: shared knowledge, applied inquiry, and regional material dignity."
              aspectClass="aspect-[4/3]"
            />
          </div>
        </div>

        {/* Master-Detail Archive */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Index List */}
          <div
            className="lg:col-span-5 border border-[#E5DFD3] bg-[#FFFFFF]"
            role="tablist"
            aria-label="Ten Foundational Institutions"
          >
            <div className="border-b border-[#E5DFD3] px-5 py-3.5 text-xs font-medium uppercase tracking-[0.12em] text-[#57534E]">
              Institutional Index (01 – 10)
            </div>
            <div className="divide-y divide-[#E5DFD3]">
              {FOUNDATIONAL_INSTITUTIONS.map((inst) => {
                const isSelected = inst.id === active.id;
                return (
                  <button
                    key={inst.id}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedId(inst.id)}
                    className={`w-full px-5 py-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#14532D] ${
                      isSelected
                        ? 'bg-[#F3EFE7] text-[#1C1917]'
                        : 'bg-[#FFFFFF] text-[#44403C] hover:bg-[#FBF9F5]'
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <div className="flex items-baseline gap-3 min-w-0">
                        <span
                          className={`font-mono text-xs tabular-nums shrink-0 ${
                            isSelected ? 'font-semibold text-[#14532D]' : 'text-[#78716C]'
                          }`}
                        >
                          {inst.index}
                        </span>
                        <span
                          className={`text-sm leading-snug ${
                            isSelected ? 'font-semibold text-[#1C1917]' : 'font-medium'
                          }`}
                        >
                          {inst.name}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-[#78716C] shrink-0 whitespace-nowrap">
                        {inst.horizon}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 11-Point Strategic Dossier */}
          <div className="lg:col-span-7 border border-[#E5DFD3] bg-[#FFFFFF] p-7 sm:p-9">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5DFD3] pb-5">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E]">
                  <span className="font-mono font-medium text-[#14532D]">
                    Institution {active.index}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Domains {active.domainCodes.join(' / ')}</span>
                  <span aria-hidden="true">·</span>
                  <span>{active.horizon}</span>
                </div>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-[#1C1917] sm:text-3xl">
                  {active.name}
                </h3>
              </div>

              <button
                onClick={() => onSendToWorkbench(active.id)}
                className="inline-flex items-center gap-2 border border-[#14532D] px-3.5 py-2 text-xs font-medium text-[#14532D] transition-colors hover:bg-[#14532D] hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D]"
              >
                <span>Stress-Test in Workbench</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-5 font-serif text-lg italic leading-relaxed text-[#292524]">
              {active.oneLineMandate}
            </p>

            {/* Structured Dossier Grid */}
            <dl className="mt-7 divide-y divide-[#E5DFD3] border-t border-[#E5DFD3]">
              <div className="py-4 grid grid-cols-1 gap-2 sm:grid-cols-12">
                <dt className="sm:col-span-4 text-xs font-semibold uppercase tracking-wider text-[#57534E]">
                  Vision & Human Need
                </dt>
                <dd className="sm:col-span-8 space-y-2 text-sm leading-relaxed text-[#292524]">
                  <p>{active.vision}</p>
                  <p className="text-[#57534E]">
                    <strong className="font-medium text-[#1C1917]">Who it serves: </strong>
                    {active.humanNeed}
                  </p>
                </dd>
              </div>

              <div className="py-4 grid grid-cols-1 gap-2 sm:grid-cols-12">
                <dt className="sm:col-span-4 text-xs font-semibold uppercase tracking-wider text-[#57534E]">
                  Philosophical Foundation
                </dt>
                <dd className="sm:col-span-8 text-sm leading-relaxed text-[#292524]">
                  {active.philosophicalFoundation}
                </dd>
              </div>

              <div className="py-4 grid grid-cols-1 gap-2 sm:grid-cols-12">
                <dt className="sm:col-span-4 text-xs font-semibold uppercase tracking-wider text-[#57534E]">
                  Evidence & Uncertainty
                </dt>
                <dd className="sm:col-span-8 space-y-2.5 text-sm leading-relaxed">
                  <div className="flex items-start gap-2 text-[#14532D]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    <p className="text-[#292524]">
                      <span className="font-medium text-[#14532D]">Established context: </span>
                      {active.evidenceAndUncertainty.established}
                    </p>
                  </div>
                  <div className="flex items-start gap-2 text-[#78350F]">
                    <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    <p className="text-[#292524]">
                      <span className="font-medium text-[#78350F]">Requires testing: </span>
                      {active.evidenceAndUncertainty.uncertain}
                    </p>
                  </div>
                </dd>
              </div>

              <div className="py-4 grid grid-cols-1 gap-2 sm:grid-cols-12">
                <dt className="sm:col-span-4 text-xs font-semibold uppercase tracking-wider text-[#57534E]">
                  System Design & Pilot
                </dt>
                <dd className="sm:col-span-8 space-y-2 text-sm leading-relaxed text-[#292524]">
                  <p>{active.systemDesign}</p>
                  <p className="text-[#57534E]">
                    <strong className="font-medium text-[#1C1917]">First build: </strong>
                    {active.realisticImplementation}
                  </p>
                </dd>
              </div>

              <div className="py-4 grid grid-cols-1 gap-2 sm:grid-cols-12">
                <dt className="sm:col-span-4 text-xs font-semibold uppercase tracking-wider text-[#57534E]">
                  Economic & Governance Model
                </dt>
                <dd className="sm:col-span-8 space-y-2 text-sm leading-relaxed text-[#292524]">
                  <p>
                    <strong className="font-medium text-[#1C1917]">Financing: </strong>
                    {active.economicModel}
                  </p>
                  <p>
                    <strong className="font-medium text-[#1C1917]">Accountability: </strong>
                    {active.governanceModel}
                  </p>
                </dd>
              </div>

              <div className="py-4 grid grid-cols-1 gap-2 sm:grid-cols-12">
                <dt className="sm:col-span-4 text-xs font-semibold uppercase tracking-wider text-[#78350F]">
                  Failure Risks & Impact
                </dt>
                <dd className="sm:col-span-8 space-y-2 text-sm leading-relaxed text-[#292524]">
                  <p>
                    <strong className="font-medium text-[#78350F]">Key risk: </strong>
                    {active.risks}
                  </p>
                  <p className="text-[#57534E]">
                    <strong className="font-medium text-[#1C1917]">Measures: </strong>
                    {active.impactMeasures}
                  </p>
                </dd>
              </div>

              <div className="pt-4 grid grid-cols-1 gap-2 sm:grid-cols-12">
                <dt className="sm:col-span-4 text-xs font-semibold uppercase tracking-wider text-[#14532D]">
                  Immediate Next Actions
                </dt>
                <dd className="sm:col-span-8">
                  <ol className="space-y-1.5 text-sm leading-relaxed text-[#292524]">
                    {active.nextActions.map((step, idx) => (
                      <li key={idx} className="flex items-baseline gap-2.5">
                        <span className="font-mono text-xs text-[#14532D] tabular-nums">
                          {idx + 1}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
