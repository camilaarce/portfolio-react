import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

// Fix: Converted to a forwardRef component to allow passing a ref to the underlying <section> element.
const Section = React.forwardRef<HTMLElement, SectionProps>(({ id, title, children }, ref) => {
  return (
    <section ref={ref} id={id} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <h2 className="sticky top-0 z-20 -mx-6 w-screen bg-slate-50/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:static lg:mx-0 lg:w-full lg:px-0 lg:bg-transparent lg:backdrop-blur-none lg:mb-8">
        <span className="text-xl font-bold tracking-tight title sm:text-2xl">{title}</span>
      </h2>
      <div className="lg:hidden h-4¿"></div>
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;