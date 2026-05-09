'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  images: string[];
  title: string;
  gridClass: string;
  isAr: boolean;
};

export default function ProjectGallery({ images, title, gridClass, isAr }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = useCallback((i: number) => setLightboxIndex(i), []);
  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );

  const next = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') isAr ? next() : prev();
    if (e.key === 'ArrowRight') isAr ? prev() : next();
  }, [close, prev, next, isAr]);

  if (images.length === 0) {
    return (
      <div className="col-span-full rounded-3xl bg-white p-10 text-center text-wiser-gray border border-wiser-gray/10">
        {isAr ? 'لا توجد صور متاحة لهذا المشروع حالياً.' : 'No images are available for this project yet.'}
      </div>
    );
  }

  return (
    <>
      <div className={`${gridClass} mx-auto items-start gap-4 md:gap-6`}>
        {images.map((img, index) => (
          <button
            key={index}
            type="button"
            onClick={() => open(index)}
            className="relative self-start aspect-video w-full overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-xl transition-shadow duration-300 group cursor-zoom-in"
            aria-label={`${title} ${index + 1}`}
          >
            <Image
              src={img}
              alt={`${title} ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          {/* Image container — stops click propagation so clicking the image doesn't close */}
          <div
            className="relative flex items-center justify-center w-full h-full p-4 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`${title} ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/25 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Counter */}
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm tabular-nums">
            {lightboxIndex + 1} / {images.length}
          </span>

          {/* Prev */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); isAr ? next() : prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/25 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); isAr ? prev() : next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/25 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}
    </>
  );
}
