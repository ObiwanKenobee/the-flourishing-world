import { useState } from 'react';
import { Compass } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  figureNumber: string;
  caption: string;
  aspectClass?: string;
  className?: string;
}

export function EditorialImage({
  src,
  alt,
  figureNumber,
  caption,
  aspectClass = 'aspect-[4/3]',
  className = '',
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`flex flex-col ${className}`}>
      <div
        className={`relative w-full overflow-hidden border border-[#E5DFD3] bg-[#F3EFE7] ${aspectClass}`}
      >
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.015]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-[#F3EFE7] p-8 text-center">
            <Compass className="mb-3 h-7 w-7 text-[#14532D]/60" strokeWidth={1.5} />
            <p className="font-serif text-lg font-medium text-[#1C1917]">{figureNumber}</p>
            <p className="mt-1 max-w-xs text-xs leading-relaxed text-[#57534E]">{caption}</p>
          </div>
        )}
      </div>
      <figcaption className="mt-2.5 flex items-baseline gap-2 text-xs leading-relaxed text-[#57534E]">
        <span className="font-mono text-[11px] uppercase tracking-wider text-[#1C1917] shrink-0">
          {figureNumber}
        </span>
        <span aria-hidden="true">·</span>
        <span className="font-serif italic text-[13px]">{caption}</span>
      </figcaption>
    </figure>
  );
}
