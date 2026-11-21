import { useState } from 'react';
import {
  DEVELOPMENT_TRAJECTORY,
  FLOURISHING_DIMENSIONS,
} from '../data/pilotAndTrajectoryData';

export function TrajectoryAndFrameworkSection() {
  const [selectedHorizonId, setSelectedHorizonId] =
    useState<(typeof DEVELOPMENT_TRAJECTORY)[number]['id']>('1yr');

  const horizon =
    DEVELOPMENT_TRAJECTORY.find((h) => h.id === selectedHorizonId) ??
    DEVELOPMENT_TRAJECTORY[0];

  return (
    <section
      id="trajectory-framework"
      aria-labelledby="trajectory-heading"
      className="border-t border-[#E5DFD3] bg-[#F3EFE7]/45 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        {/* Part A: Trajectory Timeline */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#57534E]">
              Section 05 · Temporal Discipline
            </p>
            <h2
              id="trajectory-heading"
              className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#1C1917] sm:text-4xl"
            >
              From Year-One Groundwork to Multigenerational Inheritance
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#44403C]">
              Civilisational work moves at the speed of ecological recovery and institutional
              trust. Each horizon gates expansion behind demonstrated local competence rather
              than arbitrary scale targets.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Development trajectory horizons"
            className="inline-flex flex-wrap items-center gap-1 border border-[#E5DFD3] bg-[#FFFFFF] p-1 self-start"
          >
            {DEVELOPMENT_TRAJECTORY.map((item) => {
              const active = item.id === selectedHorizonId;
              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedHorizonId(item.id)}
                  className={`px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D] ${
                    active
                      ? 'bg-[#14532D] text-white'
                      : 'text-[#57534E] hover:bg-[#F3EFE7] hover:text-[#1C1917]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Horizon Dossier */}
        <div className="mt-10 border border-[#E5DFD3] bg-[#FFFFFF] p-7 sm:p-9">
          <div className="border-b border-[#E5DFD3] pb-5">
            <p className="font-mono text-xs text-[#14532D]">{horizon.timeframe}</p>
            <h3 className="mt-1.5 font-serif text-2xl font-semibold text-[#1C1917] sm:text-3xl">
              {horizon.theme}
            </h3>
            <p className="mt-2.5 max-w-3xl text-[15px] leading-relaxed text-[#44403C]">
              {horizon.primaryObjective}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#57534E]">
                Institutional State
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#292524]">
                {horizon.institutionalState}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#57534E]">
                Economic Sustainability
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#292524]">
                {horizon.economicState}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#57534E]">
                Governance Evolution
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#292524]">
                {horizon.governanceEvolution}
              </p>
            </div>
            <div className="bg-[#FBF9F5] p-4 border border-[#E5DFD3]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#78350F]">
                Discipline Guardrail
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#292524]">
                {horizon.keyGuardrail}
              </p>
            </div>
          </div>

          <div className="mt-6 border-t border-[#E5DFD3] pt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#14532D]">
              Concrete Horizon Milestones
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {horizon.milestones.map((m, idx) => (
                <li
                  key={idx}
                  className="flex items-baseline gap-2.5 text-sm leading-relaxed text-[#292524]"
                >
                  <span className="font-mono text-xs text-[#14532D] tabular-nums">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Part B: 9-Dimension Flourishing Framework */}
        <div id="flourishing-framework" className="mt-20 scroll-mt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#57534E]">
              Section 06 · Multidimensional Evaluation
            </p>
            <h3 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#1C1917]">
              Measuring Flourishing Without Reducing Life to a Single Score
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#44403C]">
              Aggregate metrics routinely conceal ecological depletion or marginalisation of
              the vulnerable. Every initiative is evaluated across nine irreducible
              dimensions, pairing quantitative measurement with lived qualitative testimony,
              independent verification, and explicit monitoring for metric-gaming.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto border border-[#E5DFD3] bg-[#FFFFFF]">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#E5DFD3] bg-[#F3EFE7]/70 text-xs font-semibold uppercase tracking-wider text-[#57534E]">
                  <th className="px-5 py-3.5 w-[22%]">Dimension & Domains</th>
                  <th className="px-5 py-3.5 w-[22%]">Quantitative Indicators</th>
                  <th className="px-5 py-3.5 w-[22%]">Lived Qualitative Evidence</th>
                  <th className="px-5 py-3.5 w-[18%]">Verification Method</th>
                  <th className="px-5 py-3.5 w-[16%] text-[#78350F]">Gaming Risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DFD3]">
                {FLOURISHING_DIMENSIONS.map((row) => (
                  <tr key={row.dimension} className="align-top hover:bg-[#FBF9F5]">
                    <td className="px-5 py-4">
                      <p className="font-semibold text-[#1C1917]">{row.dimension}</p>
                      <p className="mt-1 font-mono text-[11px] text-[#14532D]">
                        Domains {row.domainCode}
                      </p>
                    </td>
                    <td className="px-5 py-4 text-xs leading-relaxed text-[#44403C]">
                      {row.quantitativeIndicators}
                    </td>
                    <td className="px-5 py-4 text-xs leading-relaxed text-[#44403C]">
                      {row.qualitativeEvidence}
                    </td>
                    <td className="px-5 py-4 text-xs leading-relaxed text-[#44403C]">
                      {row.verificationMethod}
                    </td>
                    <td className="px-5 py-4 text-xs leading-relaxed text-[#78350F]">
                      {row.gamingRisk}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
