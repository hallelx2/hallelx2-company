import React from 'react';
import { PublicationTag } from './PublicationTag';
import { ArrowCTAButton } from './ArrowCTAButton';

export interface NewsArticleCardProps {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  imageAlt?: string;
  href?: string;
  className?: string;
}

export const NewsArticleCard: React.FC<NewsArticleCardProps> = ({
  category,
  date,
  title,
  excerpt,
  imageUrl,
  imageAlt = 'Scientific research image',
  href = '#',
  className = '',
}) => {
  return (
    <article
      className={`bg-[var(--color-paper)] rounded-[20px] md:rounded-[40px] p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${className}`}
    >
      {/* Left half: dark scientific image */}
      <div className="w-full h-full min-h-[260px] max-h-[400px] bg-[var(--color-abyssal-ink)] rounded-[16px] overflow-hidden flex items-center justify-center relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover rounded-[16px]"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--color-abyssal-ink)] to-[#151d1e] flex items-center justify-center p-6 text-[var(--color-graphite)] font-mono text-sm border border-[var(--color-graphite)]/30 rounded-[16px]">
            [ Scientific Visual / Render ]
          </div>
        )}
      </div>

      {/* Right half: content */}
      <div className="flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <PublicationTag label={category} onLightCanvas={true} />
            <span className="font-mono text-[13px] text-[var(--color-graphite)] tracking-[-0.26px]">
              {date}
            </span>
          </div>

          <h3 className="text-heading-sm font-sans font-normal text-[var(--color-abyssal-ink)] leading-[1.2] tracking-[-0.22px]">
            {title}
          </h3>

          <p className="text-body font-sans text-[var(--color-graphite)] leading-[1.3] tracking-[-0.018px]">
            {excerpt}
          </p>
        </div>

        <div className="pt-4 flex items-center justify-between border-t border-[var(--color-lichen)]">
          <a
            href={href}
            className="font-mono text-[13px] text-[var(--color-abyssal-ink)] tracking-[-0.26px] uppercase hover:underline"
          >
            Read Article
          </a>
          <ArrowCTAButton href={href} ariaLabel={`Read ${title}`} />
        </div>
      </div>
    </article>
  );
};
