import React from 'react';
import type { TimelineItemData } from '../types';

interface TimelineItemProps {
  item: TimelineItemData;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item }) => (
  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 mb-12">
    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#F2EBEE] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={item.date}>{item.date}</header>
    <div className="z-10 sm:col-span-6">
      <h3 className="font-medium leading-snug text-[#4D1F3B]">
        <div>
          <span className="inline-block font-bold group-hover:text-[#AB3E6E] transition-colors">{item.title}</span>
          <span className="text-[#664E57]"> · {item.subtitle}</span>
        </div>
      </h3>
      <p className="mt-2 text-sm leading-normal text-[#664E57]">{item.description}</p>
      {item.skills && (
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {item.skills.map((skill, index) => (
            <li key={index} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-[#BA8CA0]/10 px-3 py-1 text-xs font-medium leading-5 text-[#AB3E6E] ">{skill}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default TimelineItem;
