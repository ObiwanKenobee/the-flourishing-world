import { useEffect, useState } from 'react';
import { Check, Copy, Download, RotateCcw, ShieldAlert, Terminal } from 'lucide-react';
import {
  FOUNDATIONAL_INSTITUTIONS,
  OPERATING_PRINCIPLES,
} from '../data/blueprintData';
import { COUNCIL_CRITIQUES } from '../data/pilotAndTrajectoryData';

type PrincipleRating = 'verified' | 'guardrail' | 'unaddressed';

interface AuditWorkbenchProps {
  preloadedInstitutionId: string | null;
}

interface ProposalDraft {
  title: string;
  humanNeed: string;
  evidenceStatus: string;
  economicModel: string;
  governanceAndRisks: string;
}

const DEFAULT_DRAFT: ProposalDraft = {
  title: 'Upper Tana Sub-Catchment Watershed & Cold-Chain Commons',
  humanNeed:
    'Smallholder farming households facing dry-season stream siltation, post-harvest vegetable spoilage, and high informal credit costs.',
  evidenceStatus:
    'Established Context: WRUAs exist under Kenya Water Act 2016. Hypothesis Requiring Test: Solar cold-chain fees cover 100% of pavilion and lab upkeep by Month 18.',
  economicModel:
    'Seed capital funds public-good pavilion and gauges only; ongoing operations rely on per-kg cold-room tariffs, soil diagnostics, and county catchment contracts.',
  governanceAndRisks:
    'Co-governed by WRUA and SACCO general assemblies with rotating cross-ward grievance panel. Primary risk: elite loan capture or upstream resentment.',
};

export function AuditWorkbench({ preloadedInstitutionId }: AuditWorkbenchProps) {
  const [activeTab, setActiveTab] = useState<'tester' | 'critique' | 'build-guide'>(
    'tester'
  );
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  const [draft, setDraft] = useState<ProposalDraft>(DEFAULT_DRAFT);
  const [ratings, setRatings] = useState<Record<number, PrincipleRating>>(() => {
    const initial: Record<number, PrincipleRating> = {};
    for (const p of OPERATING_PRINCIPLES) {
      initial[p.number] = p.number <= 4 ? 'verified' : 'guardrail';
    }
    return initial;
  });
  const [exportedNote, setExportedNote] = useState<string>('');

  useEffect(() => {
    if (!preloadedInstitutionId) return;
    const found = FOUNDATIONAL_INSTITUTIONS.find((i) => i.id === preloadedInstitutionId);
    if (found) {
      setActiveTab('tester');
      setDraft({
        title: found.name,
        humanNeed: found.humanNeed,
        evidenceStatus: `Established: ${found.evidenceAndUncertainty.established} | Uncertain: ${found.evidenceAndUncertainty.uncertain}`,
        economicModel: found.economicModel,
        governanceAndRisks: `Governance: ${found.governanceModel} | Key Risk: ${found.risks}`,
      });
      setExportedNote(`Loaded dossier "${found.name}" into workbench.`);
    }
  }, [preloadedInstitutionId]);

  const handleLoadInstitution = (id: string) => {
    if (id === 'kenya-pilot') {
      setDraft(DEFAULT_DRAFT);
      setExportedNote('Loaded Kenya Sub-Catchment Pilot baseline.');
      return;
    }
    const found = FOUNDATIONAL_INSTITUTIONS.find((i) => i.id === id);
    if (!found) return;
    setDraft({
      title: found.name,
      humanNeed: found.humanNeed,
      evidenceStatus: `Established: ${found.evidenceAndUncertainty.established} | Uncertain: ${found.evidenceAndUncertainty.uncertain}`,
      economicModel: found.economicModel,
      governanceAndRisks: `Governance: ${found.governanceModel} | Key Risk: ${found.risks}`,
    });
    setExportedNote(`Loaded "${found.name}" into workbench.`);
  };

  const setPrincipleRating = (num: number, rating: PrincipleRating) => {
    setRatings((prev) => ({ ...prev, [num]: rating }));
  };

  const handleReset = () => {
    setDraft({
      title: '',
      humanNeed: '',
      evidenceStatus: '',
      economicModel: '',
      governanceAndRisks: '',
    });
    const cleared: Record<number, PrincipleRating> = {};
    for (const p of OPERATING_PRINCIPLES) {
      cleared[p.number] = 'unaddressed';
    }
    setRatings(cleared);
    setExportedNote('Cleared workbench for custom initiative drafting.');
  };

  const handleExportMarkdown = () => {
    const principleLines = OPERATING_PRINCIPLES.map((p) => {
      const r = ratings[p.number] ?? 'unaddressed';
      const label =
        r === 'verified'
          ? 'Structurally Verified'
          : r === 'guardrail'
          ? 'Needs Explicit Guardrail'
          : 'Unaddressed Gap';
      return `- **${p.number}. ${p.name}** — *${label}*\n  - Test: ${p.testQuestion}\n  - Failure Mode Watched: ${p.failureMode}`;
    }).join('\n');

    const md = `# Strategic Stress-Test Brief: ${draft.title || 'Untitled Initiative'}
*Evaluated under The Flourishing World Operating Principles*

## 1. Human Need & Who Benefits
${draft.humanNeed || 'Not yet specified.'}

## 2. Epistemic Status (Evidence vs. Hypothesis)
${draft.evidenceStatus || 'Not yet specified.'}

## 3. Economic Sustainability & Operating Model
${draft.economicModel || 'Not yet specified.'}

## 4. Governance, Accountability & Key Risks
${draft.governanceAndRisks || 'Not yet specified.'}

## 5. Twelve-Principle Stress Test
${principleLines}
`;

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(draft.title || 'flourishing-proposal')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')}-audit.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setExportedNote('Downloaded Markdown strategic stress-test brief.');
  };

  const handleCopyCommand = async (cmd: string) => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopiedCmd(cmd);
      window.setTimeout(() => setCopiedCmd(null), 1800);
    } catch {
      setCopiedCmd(null);
    }
  };

  const counts = OPERATING_PRINCIPLES.reduce(
    (acc, p) => {
      const r = ratings[p.number] ?? 'unaddressed';
      acc[r] += 1;
      return acc;
    },
    { verified: 0, guardrail: 0, unaddressed: 0 }
  );

  return (
    <section
      id="audit-workbench"
      aria-labelledby="workbench-heading"
      className="border-t border-[#E5DFD3] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#57534E]">
              Section 07 · Intellectual Rigour & Self-Critique
            </p>
            <h2
              id="workbench-heading"
              className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#1C1917] sm:text-4xl"
            >
              Stress-Testing Proposals & Challenging Our Own Blind Spots
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#44403C]">
              Do not confuse inspiring language with a durable institution. Audit any
              proposal against the 12 Operating Principles or inspect six structural
              tensions inside this blueprint itself.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Workbench mode"
            className="inline-flex items-center gap-1 border border-[#E5DFD3] bg-[#F3EFE7] p-1 self-start"
          >
            <button
              role="tab"
              aria-selected={activeTab === 'tester'}
              onClick={() => setActiveTab('tester')}
              className={`px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'tester'
                  ? 'bg-[#FFFFFF] text-[#1C1917] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              12-Principle Proposal Audit
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'critique'}
              onClick={() => setActiveTab('critique')}
              className={`px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'critique'
                  ? 'bg-[#FFFFFF] text-[#1C1917] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Blueprint Blind-Spot Critique
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'build-guide'}
              onClick={() => setActiveTab('build-guide')}
              className={`px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'build-guide'
                  ? 'bg-[#FFFFFF] text-[#1C1917] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Build & ERESOLVE Guide
            </button>
          </div>
        </div>

        {activeTab === 'tester' ? (
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            {/* Left: Proposal Input & Preset Loader */}
            <div className="lg:col-span-5 border border-[#E5DFD3] bg-[#FFFFFF] p-6 sm:p-7 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5DFD3] pb-4">
                <label
                  htmlFor="preset-loader"
                  className="text-xs font-semibold uppercase tracking-wider text-[#57534E]"
                >
                  Load Reference or Draft Custom
                </label>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#57534E] hover:text-[#1C1917]"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Clear Draft</span>
                </button>
              </div>

              <select
                id="preset-loader"
                onChange={(e) => handleLoadInstitution(e.target.value)}
                defaultValue="kenya-pilot"
                className="w-full border border-[#D6CEBE] bg-[#FBF9F5] px-3 py-2 text-sm text-[#1C1917] focus:border-[#14532D] focus:outline-none"
              >
                <option value="kenya-pilot">
                  Kenya Pilot: Highland Sub-Catchment & Cold-Chain Commons
                </option>
                {FOUNDATIONAL_INSTITUTIONS.map((inst) => (
                  <option key={inst.id} value={inst.id}>
                    Institution {inst.index}: {inst.name}
                  </option>
                ))}
              </select>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="prop-title"
                    className="block text-xs font-medium text-[#44403C]"
                  >
                    Initiative Name
                  </label>
                  <input
                    id="prop-title"
                    type="text"
                    value={draft.title}
                    onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                    placeholder="Name the institution, pilot, or infrastructure..."
                    className="mt-1 w-full border border-[#D6CEBE] bg-[#FFFFFF] px-3 py-2 text-sm text-[#1C1917] focus:border-[#14532D] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="prop-need"
                    className="block text-xs font-medium text-[#44403C]"
                  >
                    Human Need & Who Is Easiest to Overlook
                  </label>
                  <textarea
                    id="prop-need"
                    rows={2}
                    value={draft.humanNeed}
                    onChange={(e) => setDraft({ ...draft, humanNeed: e.target.value })}
                    placeholder="Whose dignity or livelihood improves?"
                    className="mt-1 w-full border border-[#D6CEBE] bg-[#FFFFFF] px-3 py-2 text-sm leading-relaxed text-[#1C1917] focus:border-[#14532D] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="prop-evidence"
                    className="block text-xs font-medium text-[#44403C]"
                  >
                    Established Facts vs. Untested Hypotheses
                  </label>
                  <textarea
                    id="prop-evidence"
                    rows={2}
                    value={draft.evidenceStatus}
                    onChange={(e) => setDraft({ ...draft, evidenceStatus: e.target.value })}
                    placeholder="Separate known context from claims needing testing..."
                    className="mt-1 w-full border border-[#D6CEBE] bg-[#FFFFFF] px-3 py-2 text-sm leading-relaxed text-[#1C1917] focus:border-[#14532D] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="prop-econ"
                    className="block text-xs font-medium text-[#44403C]"
                  >
                    Economic Model & Maintenance Financing
                  </label>
                  <textarea
                    id="prop-econ"
                    rows={2}
                    value={draft.economicModel}
                    onChange={(e) => setDraft({ ...draft, economicModel: e.target.value })}
                    placeholder="How will maintenance be funded once initial grants end?"
                    className="mt-1 w-full border border-[#D6CEBE] bg-[#FFFFFF] px-3 py-2 text-sm leading-relaxed text-[#1C1917] focus:border-[#14532D] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="prop-gov"
                    className="block text-xs font-medium text-[#44403C]"
                  >
                    Governance, Anti-Capture & Primary Risk
                  </label>
                  <textarea
                    id="prop-gov"
                    rows={2}
                    value={draft.governanceAndRisks}
                    onChange={(e) =>
                      setDraft({ ...draft, governanceAndRisks: e.target.value })
                    }
                    placeholder="What happens if leadership fails or local elites capture assets?"
                    className="mt-1 w-full border border-[#D6CEBE] bg-[#FFFFFF] px-3 py-2 text-sm leading-relaxed text-[#1C1917] focus:border-[#14532D] focus:outline-none"
                  />
                </div>
              </div>

              <div className="border-t border-[#E5DFD3] pt-4 flex flex-col gap-2">
                <button
                  onClick={handleExportMarkdown}
                  className="inline-flex w-full items-center justify-center gap-2 bg-[#14532D] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#166534] whitespace-nowrap"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Download Strategic Audit Brief (.md)</span>
                </button>
                {exportedNote && (
                  <p className="text-xs text-[#57534E]" role="status">
                    {exportedNote}
                  </p>
                )}
              </div>
            </div>

            {/* Right: 12-Principle Checklist Matrix */}
            <div className="lg:col-span-7 border border-[#E5DFD3] bg-[#FFFFFF]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5DFD3] px-6 py-4">
                <h3 className="font-serif text-xl font-semibold text-[#1C1917]">
                  Twelve Operating Principles Checklist
                </h3>
                <div className="flex items-center gap-4 font-mono text-xs tabular-nums">
                  <span className="text-[#14532D]">
                    Verified: {counts.verified}
                  </span>
                  <span className="text-[#78350F]">
                    Guardrail: {counts.guardrail}
                  </span>
                  <span className="text-[#57534E]">
                    Gap: {counts.unaddressed}
                  </span>
                </div>
              </div>

              <div className="divide-y divide-[#E5DFD3]">
                {OPERATING_PRINCIPLES.map((p) => {
                  const status = ratings[p.number] ?? 'unaddressed';
                  return (
                    <div
                      key={p.number}
                      className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-start sm:justify-between"
                    >
                      <div className="max-w-lg">
                        <div className="flex items-baseline gap-2">
                          <span className="font-mono text-xs text-[#78716C] tabular-nums">
                            {String(p.number).padStart(2, '0')}
                          </span>
                          <h4 className="text-sm font-semibold text-[#1C1917]">{p.name}</h4>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-[#44403C]">
                          {p.testQuestion}
                        </p>
                        <p className="mt-1 text-[11px] leading-relaxed text-[#78716C]">
                          Failure mode: {p.failureMode}
                        </p>
                      </div>

                      <div
                        className="inline-flex shrink-0 items-center border border-[#E5DFD3] bg-[#FBF9F5] p-0.5 self-start"
                        role="group"
                        aria-label={`Audit rating for ${p.name}`}
                      >
                        {(
                          [
                            { id: 'verified', label: 'Verified' },
                            { id: 'guardrail', label: 'Guardrail' },
                            { id: 'unaddressed', label: 'Gap' },
                          ] as const
                        ).map((opt) => {
                          const active = status === opt.id;
                          return (
                            <button
                              key={opt.id}
                              onClick={() => setPrincipleRating(p.number, opt.id)}
                              className={`px-2.5 py-1 text-[11px] font-medium transition-colors whitespace-nowrap ${
                                active
                                  ? opt.id === 'verified'
                                    ? 'bg-[#14532D] text-white'
                                    : opt.id === 'guardrail'
                                    ? 'bg-[#78350F] text-white'
                                    : 'bg-[#1C1917] text-white'
                                  : 'text-[#57534E] hover:text-[#1C1917]'
                              }`}
                            >
                              {opt.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : activeTab === 'critique' ? (
          /* Council Self-Critique Grid */
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {COUNCIL_CRITIQUES.map((item) => (
              <article
                key={item.id}
                className="border border-[#E5DFD3] bg-[#FFFFFF] p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#78350F]">
                    <ShieldAlert className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Structural Tension</span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-[#1C1917]">
                    {item.tension}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#44403C]">
                    {item.critique}
                  </p>
                </div>

                <div className="mt-5 border-t border-[#E5DFD3] pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#14532D]">
                    Institutional Design Response
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#292524]">
                    {item.mitigation}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Developer Build & ERESOLVE Resolution Guide */
          <div className="mt-10 space-y-8">
            {/* Root Cause Summary */}
            <div className="border border-[#E5DFD3] bg-[#FFFFFF] p-7 sm:p-9">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E]">
                <Terminal className="h-3.5 w-3.5 text-[#14532D]" aria-hidden="true" />
                <span className="font-mono font-semibold text-[#14532D]">
                  Developer Runbook
                </span>
                <span aria-hidden="true">·</span>
                <span>npm install Peer Dependency Resolution</span>
              </div>

              <h3 className="mt-2 font-serif text-2xl font-semibold text-[#1C1917] sm:text-3xl">
                Resolving the npm install ERESOLVE Dependency Conflict
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#44403C]">
                When deploying or installing with npm (including Vercel CI builds where{' '}
                <code className="font-mono text-xs bg-[#F3EFE7] px-1.5 py-0.5 text-[#1C1917]">
                  package-lock.json
                </code>{' '}
                is absent),{' '}
                <code className="font-mono text-xs bg-[#F3EFE7] px-1.5 py-0.5 text-[#1C1917]">
                  npm install
                </code>{' '}
                halts with{' '}
                <code className="font-mono text-xs bg-[#F3EFE7] px-1.5 py-0.5 text-[#78350F]">
                  npm error code ERESOLVE
                </code>{' '}
                if the root{' '}
                <code className="font-mono text-xs bg-[#F3EFE7] px-1.5 py-0.5 text-[#1C1917]">
                  devDependencies
                </code>{' '}
                pins{' '}
                <code className="font-mono text-xs bg-[#F3EFE7] px-1.5 py-0.5 text-[#1C1917]">
                  esbuild@^0.25.0
                </code>{' '}
                while{' '}
                <code className="font-mono text-xs bg-[#F3EFE7] px-1.5 py-0.5 text-[#1C1917]">
                  vite@^8.3.0
                </code>{' '}
                (8.3.8) requires{' '}
                <code className="font-mono text-xs bg-[#F3EFE7] px-1.5 py-0.5 text-[#1C1917]">
                  peerOptional esbuild@"^0.27.0 || ^0.28.0"
                </code>
                .
              </p>

              {/* Package Compatibility Matrix */}
              <div className="mt-6 overflow-x-auto border border-[#E5DFD3]">
                <table className="w-full min-w-[600px] border-collapse text-left text-xs">
                  <thead>
                    <tr className="border-b border-[#E5DFD3] bg-[#F3EFE7]/70 font-semibold uppercase tracking-wider text-[#57534E]">
                      <th className="px-4 py-3">Package</th>
                      <th className="px-4 py-3">Conflicting Specifier</th>
                      <th className="px-4 py-3">Required / Compatible Range</th>
                      <th className="px-4 py-3">Clean Resolution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5DFD3] font-mono tabular-nums">
                    <tr>
                      <td className="px-4 py-3 font-medium text-[#1C1917]">vite</td>
                      <td className="px-4 py-3 text-[#57534E]">^8.3.0 (8.3.8)</td>
                      <td className="px-4 py-3 text-[#44403C]">
                        esbuild@^0.27.0 || ^0.28.0
                      </td>
                      <td className="px-4 py-3 text-[#14532D]">deduped esbuild@0.28.2</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-[#1C1917]">tsx</td>
                      <td className="px-4 py-3 text-[#57534E]">^4.21.0 (4.23.15)</td>
                      <td className="px-4 py-3 text-[#44403C]">esbuild@^0.28.0</td>
                      <td className="px-4 py-3 text-[#14532D]">deduped esbuild@0.28.2</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-[#1C1917]">esbuild</td>
                      <td className="px-4 py-3 text-[#78350F]">^0.25.0 (0.25.12)</td>
                      <td className="px-4 py-3 text-[#14532D]">^0.28.0</td>
                      <td className="px-4 py-3 text-[#14532D]">Update devDependencies</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Step-by-Step Resolution Guide */}
            <div className="divide-y divide-[#E5DFD3] border border-[#E5DFD3] bg-[#FFFFFF]">
              {[
                {
                  step: '01',
                  title: 'Inspect the Active Dependency Tree',
                  explanation:
                    'Check which root or transitive packages conflict on esbuild before making edits. npm ls highlights invalid peer ranges immediately.',
                  command: 'npm ls esbuild vite tsx',
                },
                {
                  step: '02',
                  title: 'Align esbuild in package.json devDependencies',
                  explanation:
                    'Update "esbuild": "^0.25.0" to "esbuild": "^0.28.0" in package.json so the root specifier satisfies both vite@8.3.x and tsx@4.23.x without forcing nested duplicates.',
                  command:
                    'npm pkg set devDependencies.esbuild="^0.28.0"',
                },
                {
                  step: '03',
                  title: 'Perform a Clean Install and Confirm Deduplication',
                  explanation:
                    'Remove stale node_modules (if present locally) and run a clean npm install so npm resolves a single deduped esbuild@0.28.x across vite and tsx.',
                  command: 'rm -rf node_modules && npm install && npm ls esbuild vite tsx',
                },
                {
                  step: '04',
                  title: 'Verify TypeScript Lint and Vite Production Build',
                  explanation:
                    'Confirm both typechecking and Vite bundling succeed cleanly before pushing to main or triggering Vercel.',
                  command: 'npm run lint && npm run build',
                },
                {
                  step: '05',
                  title: 'Commit package.json (and Note CI Fallback Discipline)',
                  explanation:
                    'Push the updated package.json to your deployment branch. Avoid relying on --legacy-peer-deps in production CI unless temporarily unblocking an upstream library release.',
                  command: 'git add package.json && git commit -m "fix(deps): align esbuild to ^0.28.0 for vite 8"',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-6 sm:p-7 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-center"
                >
                  <div className="lg:col-span-6 space-y-1.5">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-mono text-xs font-semibold text-[#14532D] tabular-nums">
                        Step {item.step}
                      </span>
                      <h4 className="text-base font-semibold text-[#1C1917]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-[#44403C]">
                      {item.explanation}
                    </p>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="flex items-center justify-between gap-3 border border-[#E5DFD3] bg-[#FBF9F5] px-4 py-3">
                      <code className="font-mono text-xs text-[#1C1917] overflow-x-auto whitespace-nowrap">
                        {item.command}
                      </code>
                      <button
                        type="button"
                        onClick={() => handleCopyCommand(item.command)}
                        aria-label={`Copy command for Step ${item.step}`}
                        className="inline-flex items-center gap-1.5 border border-[#D6CEBE] bg-[#FFFFFF] px-2.5 py-1 text-[11px] font-medium text-[#1C1917] transition-colors hover:bg-[#F3EFE7] whitespace-nowrap shrink-0"
                      >
                        {copiedCmd === item.command ? (
                          <>
                            <Check className="h-3 w-3 text-[#14532D]" aria-hidden="true" />
                            <span className="text-[#14532D]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3 text-[#57534E]" aria-hidden="true" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
