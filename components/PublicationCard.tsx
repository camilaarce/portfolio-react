import React from 'react';
import type { PublicationData } from '../types';
import { ArrowUpRightIcon } from './icons';

interface PublicationCardProps {
  publication: PublicationData;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => (
  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 mb-12">
    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#F2EBEE] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
    <div className="z-10 sm:col-span-2">
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{publication.year}</p>
    </div>
    <div className="z-10 sm:col-span-6">
      <h3 className="font-medium leading-snug text-slate-800">
        <a href={publication.link} target="_blank" rel="noreferrer noopener" className="inline-flex items-baseline font-bold leading-tight text-[#4D1F3B] hover:text-[#AB3E6E] focus-visible:text-[#AB3E6E] group/link text-base transition-colors">
          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
          <span>{publication.title} <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" /></span>
        </a>
      </h3>
      <p className="mt-2 text-sm leading-normal text-[#664E57]">{publication.authors}</p>
      <p className="mt-1 text-xs italic text-slate-500">{publication.journal}</p>
    </div>
  </div>
);

export default PublicationCard;
