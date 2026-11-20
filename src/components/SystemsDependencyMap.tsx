import { useMemo, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, AlertTriangle, MapPin } from 'lucide-react';
import { SYSTEM_DOMAINS, type SystemDomain } from '../data/blueprintData';

type ThemeFilter = 'all' | 'moral' | 'eco-econ' | 'governance';

const RING_RADII: Record<SystemDomain['ring'], number> = {
  core: 78,
  social: 162,
  infrastructure: 238,
};

const CX = 280;
const CY = 280;

function polarToCartesian(radius: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
}

export function SystemsDependencyMap() {
  const [selectedCode, setSelectedCode] = useState<SystemDomain['code']>('G');
  const [themeFilter, setThemeFilter] = useState<ThemeFilter>('all');

  const nodePositions = useMemo(() => {
    const map = new Map<SystemDomain['code'], { x: number; y: number }>();
    for (const d of SYSTEM_DOMAINS) {
      map.set(d.code, polarToCartesian(RING_RADII[d.ring], d.angleDeg));
    }
    return map;
  }, []);

  const selectedDomain =
    SYSTEM_DOMAINS.find((d) => d.code === selectedCode) ?? SYSTEM_DOMAINS[0];

  const dependsCodes = useMemo(
    () => new Set(selectedDomain.dependsOn.map((item) => item.code)),
    [selectedDomain]
  );
  const reinforcesCodes = useMemo(
    () => new Set(selectedDomain.reinforces.map((item) => item.code)),
    [selectedDomain]
  );

  const visibleDomains = useMemo(() => {
    if (themeFilter === 'all') return new Set(SYSTEM_DOMAINS.map((d) => d.code));
    return new Set(
      SYSTEM_DOMAINS.filter(
        (d) => d.loopTheme === themeFilter || d.code === selectedCode
      ).map((d) => d.code)
    );
  }, [themeFilter, selectedCode]);

  return (
    <section
      id="systems-map"
      aria-labelledby="systems-map-heading"
      className="border-t border-[#E5DFD3] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#57534E]">
              Section 02 · Living Systems Architecture
            </p>
            <h2
              id="systems-map-heading"
              className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#1C1917] sm:text-4xl"
            >
              How Human, Ecological, Economic, and Civic Systems Reinforce One Another
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#57534E]">
              No domain can flourish in isolation. Select any node in the civilisational
              constellation to inspect what it depends on, what it strengthens, and where
              institutional trade-offs arise.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter system domains by causal loop"
            className="inline-flex flex-wrap items-center gap-1 border border-[#E5DFD3] bg-[#F3EFE7] p-1 self-start"
          >
            {(
              [
                { id: 'all', label: 'All 10 Domains' },
                { id: 'moral', label: 'Human & Moral' },
                { id: 'eco-econ', label: 'Ecological-Economic' },
                { id: 'governance', label: 'Trust & Governance' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={themeFilter === tab.id}
                onClick={() => setThemeFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D] ${
                  themeFilter === tab.id
                    ? 'bg-[#FFFFFF] text-[#1C1917] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Interactive SVG Constellation */}
          <div className="lg:col-span-6 border border-[#E5DFD3] bg-[#FFFFFF] p-5 sm:p-7">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#E5DFD3] pb-3 text-xs text-[#57534E]">
              <span>Interactive Causal Map · Click any domain</span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-[#1E3A8A]">
                  <ArrowDownRight className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Depends On</span>
                </span>
                <span className="flex items-center gap-1.5 text-[#14532D]">
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Reinforces</span>
                </span>
              </div>
            </div>

            <div className="mx-auto max-w-[540px]">
              <svg
                viewBox="0 0 560 560"
                className="h-auto w-full select-none"
                role="img"
                aria-label="Systems dependency diagram connecting domains A through J"
              >
                {/* Concentric Structural Rings */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={RING_RADII.infrastructure}
                  fill="none"
                  stroke="#E5DFD3"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                />
                <circle
                  cx={CX}
                  cy={CY}
                  r={RING_RADII.social}
                  fill="none"
                  stroke="#E5DFD3"
                  strokeWidth="1"
                />
                <circle
                  cx={CX}
                  cy={CY}
                  r={RING_RADII.core}
                  fill="#FBF9F5"
                  stroke="#D6CEBE"
                  strokeWidth="1"
                />

                {/* Subtle Ring Labels */}
                <text
                  x={CX}
                  y={CY - 4}
                  textAnchor="middle"
                  className="fill-[#78716C] text-[10px] uppercase tracking-[0.16em]"
                >
                  Moral Core
                </text>
                <text
                  x={CX}
                  y={CY + 10}
                  textAnchor="middle"
                  className="fill-[#A8A29E] text-[9px]"
                >
                  Person & Family
                </text>

                {/* Dependency Links for Selected Node */}
                {selectedDomain.dependsOn.map((dep) => {
                  const from = nodePositions.get(dep.code);
                  const to = nodePositions.get(selectedDomain.code);
                  if (!from || !to) return null;
                  return (
                    <line
                      key={`dep-${dep.code}`}
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      stroke="#1E3A8A"
                      strokeWidth="1.75"
                      strokeDasharray="5 4"
                      opacity={0.75}
                    />
                  );
                })}

                {selectedDomain.reinforces.map((reinf) => {
                  const from = nodePositions.get(selectedDomain.code);
                  const to = nodePositions.get(reinf.code);
                  if (!from || !to) return null;
                  return (
                    <line
                      key={`reinf-${reinf.code}`}
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      stroke="#14532D"
                      strokeWidth="2"
                      opacity={0.85}
                    />
                  );
                })}

                {/* Domain Nodes */}
                {SYSTEM_DOMAINS.map((domain) => {
                  const pos = nodePositions.get(domain.code);
                  if (!pos) return null;
                  const isSelected = domain.code === selectedDomain.code;
                  const isDep = dependsCodes.has(domain.code);
                  const isReinf = reinforcesCodes.has(domain.code);
                  const isDimmed = !visibleDomains.has(domain.code) && !isDep && !isReinf;

                  let fill = '#FBF9F5';
                  let stroke = '#D6CEBE';
                  let textColor = '#1C1917';

                  if (isSelected) {
                    fill = '#14532D';
                    stroke = '#14532D';
                    textColor = '#FFFFFF';
                  } else if (isReinf) {
                    fill = '#ECFDF5';
                    stroke = '#14532D';
                  } else if (isDep) {
                    fill = '#EFF6FF';
                    stroke = '#1E3A8A';
                  }

                  return (
                    <g
                      key={domain.code}
                      transform={`translate(${pos.x}, ${pos.y})`}
                      onClick={() => setSelectedCode(domain.code)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedCode(domain.code);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-pressed={isSelected}
                      aria-label={`Domain ${domain.code}: ${domain.name}`}
                      className="cursor-pointer outline-none focus-visible:opacity-100"
                      style={{ opacity: isDimmed ? 0.32 : 1, transition: 'opacity 180ms ease' }}
                    >
                      <circle
                        r={isSelected ? 26 : 22}
                        fill={fill}
                        stroke={stroke}
                        strokeWidth={isSelected ? 2 : 1.25}
                      />
                      <text
                        y="4"
                        textAnchor="middle"
                        fill={textColor}
                        className="font-mono text-[12px] font-semibold"
                      >
                        {domain.code}
                      </text>
                      <text
                        y={pos.y > CY ? 38 : -31}
                        textAnchor="middle"
                        className={`text-[10.5px] font-medium ${
                          isSelected ? 'fill-[#14532D] font-semibold' : 'fill-[#44403C]'
                        }`}
                      >
                        {domain.shortName}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Compact Domain Selector Strip */}
            <div className="mt-4 grid grid-cols-5 gap-1.5 border-t border-[#E5DFD3] pt-4 sm:grid-cols-10">
              {SYSTEM_DOMAINS.map((d) => {
                const active = d.code === selectedCode;
                return (
                  <button
                    key={d.code}
                    onClick={() => setSelectedCode(d.code)}
                    title={d.name}
                    className={`py-2 text-center font-mono text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#14532D] ${
                      active
                        ? 'bg-[#14532D] text-white font-semibold'
                        : 'bg-[#F3EFE7] text-[#44403C] hover:bg-[#E5DFD3] hover:text-[#1C1917]'
                    }`}
                  >
                    {d.code}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Domain Dependency Inspector */}
          <div className="lg:col-span-6 space-y-6">
            <div className="border border-[#E5DFD3] bg-[#FFFFFF] p-7">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E]">
                <span className="font-mono font-medium text-[#14532D]">
                  Domain {selectedDomain.code}
                </span>
                <span aria-hidden="true">·</span>
                <span className="capitalize">
                  {selectedDomain.ring === 'core'
                    ? 'Inner Moral Core'
                    : selectedDomain.ring === 'social'
                    ? 'Social & Ecological Fabric'
                    : 'Institutional & Cultural Infrastructure'}
                </span>
              </div>

              <h3 className="mt-2 font-serif text-2xl font-semibold text-[#1C1917] sm:text-3xl">
                {selectedDomain.name}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#44403C]">
                {selectedDomain.summary}
              </p>

              {/* Dependencies & Reinforcements */}
              <div className="mt-6 grid grid-cols-1 gap-6 border-t border-[#E5DFD3] pt-6 sm:grid-cols-2">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
                    <ArrowDownRight className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Depends On</span>
                  </div>
                  <ul className="mt-3 space-y-3">
                    {selectedDomain.dependsOn.map((dep) => {
                      const target = SYSTEM_DOMAINS.find((x) => x.code === dep.code);
                      return (
                        <li key={dep.code} className="text-sm leading-relaxed text-[#44403C]">
                          <button
                            onClick={() => setSelectedCode(dep.code)}
                            className="font-medium text-[#1C1917] underline decoration-[#D6CEBE] underline-offset-4 hover:text-[#1E3A8A]"
                          >
                            {dep.code}. {target?.shortName}
                          </button>
                          <p className="mt-0.5 text-xs leading-relaxed text-[#57534E]">
                            {dep.reason}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#14532D]">
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Reinforces</span>
                  </div>
                  <ul className="mt-3 space-y-3">
                    {selectedDomain.reinforces.map((reinf) => {
                      const target = SYSTEM_DOMAINS.find((x) => x.code === reinf.code);
                      return (
                        <li key={reinf.code} className="text-sm leading-relaxed text-[#44403C]">
                          <button
                            onClick={() => setSelectedCode(reinf.code)}
                            className="font-medium text-[#1C1917] underline decoration-[#D6CEBE] underline-offset-4 hover:text-[#14532D]"
                          >
                            {reinf.code}. {target?.shortName}
                          </button>
                          <p className="mt-0.5 text-xs leading-relaxed text-[#57534E]">
                            {reinf.reason}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Critical Trade-Off & Kenya Grounding */}
              <div className="mt-6 space-y-4 border-t border-[#E5DFD3] pt-6">
                <div className="bg-[#FBF9F5] p-4 border border-[#E5DFD3]">
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#78350F]">
                    <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Systemic Trade-Off & Failure Mode</span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#44403C]">
                    {selectedDomain.tradeOff}
                  </p>
                </div>

                <div className="bg-[#F3EFE7]/60 p-4 border border-[#E5DFD3]">
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#14532D]">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>East Africa & Kenya Grounding</span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#44403C]">
                    {selectedDomain.kenyaGrounding}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
