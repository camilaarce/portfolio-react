import React, { useState, useEffect, useRef } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from './components/icons';
import Section from './components/Section';
import TimelineItem from './components/TimelineItem';
import PublicationCard from './components/PublicationCard';
import { education, experience, publications, skills, about, name, title, bio, socialLinks } from './data';
import type { PublicationData, TimelineItemData } from './types';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('about');
    const observer = useRef<IntersectionObserver | null>(null);

    // Fix: Updated ref types from HTMLDivElement to HTMLElement as they now refer to <section> elements.
    const sectionRefs = {
        about: useRef<HTMLElement>(null),
        skills: useRef<HTMLElement>(null),
        experience: useRef<HTMLElement>(null),
        education: useRef<HTMLElement>(null),
        publications: useRef<HTMLElement>(null),
    };

    useEffect(() => {
        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        observer.current = new IntersectionObserver(handleIntersect, {
            rootMargin: '-30% 0px -70% 0px',
        });

        const refs = Object.values(sectionRefs);
        refs.forEach(ref => {
            if (ref.current) {
                observer.current?.observe(ref.current);
            }
        });

        return () => {
            refs.forEach(ref => {
                if (ref.current) {
                    observer.current?.unobserve(ref.current);
                }
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const navItems = [
        { id: 'about', label: 'Acerca de' },
        { id: 'skills', label: 'Habilidades' },
        { id: 'experience', label: 'Experiencia' },
        { id: 'education', label: 'Educación' },
        { id: 'publications', label: 'Publicaciones' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = new URL(href).hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
            });
            // Update the URL hash without a full page reload.
            window.history.pushState(null, '', `#${targetId}`);
        }
    };

    return (
        <div className="mx-auto px-10 py-12 font-sans md:px-12 md:py-20 lg:px-64 lg:py-0 bg-[#FFFAFD]">
            <div className="lg:flex lg:justify-between lg:gap-4">
                <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                    <div>
                        <img src="/profile.png" className="w-full sm:w-80 mb-10 rounded-full border-[#BA8CA0] border-8 shadow-xl" alt="" />
                        <h1 className="text-4xl font-bold tracking-tight text-[#664E57] sm:text-5xl">{name}</h1>
                        <h2 className="mt-3 text-lg font-medium tracking-tight text-[#664E57] sm:text-xl">{title}</h2>
                        <p className="mt-4 max-w-xs leading-normal text-slate-400">{bio}</p>
                        <nav className="nav hidden lg:block" aria-label="In-page jump links">
                            <ul className="mt-16 w-max">
                                {navItems.map((item) => (
                                    <li key={item.id}>
                                        <a className="group flex items-center py-3" href={`#${item.id}`} onClick={handleNavClick}>
                                            <span className={`nav-indicator mr-4 h-px w-8 bg-[#BA8CA0] transition-all group-hover:w-16 group-hover:bg-[#AB3E6E] motion-reduce:transition-none ${activeSection === item.id ? 'w-16 bg-[#AB3E6E]' : ''}`}></span>
                                            <span className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-[#664E57] ${activeSection === item.id ? 'text-[#AB3E6E]' : ''}`}>{item.label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                        <li className="mr-5 shrink-0"><a href={socialLinks.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub"><GithubIcon className="h-6 w-6 text-slate-500 hover:text-[#AB3E6E] transition-colors" /></a></li>
                        <li className="mr-5 shrink-0"><a href={socialLinks.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn"><LinkedinIcon className="h-6 w-6 text-slate-500 hover:text-[#AB3E6E] transition-colors" /></a></li>
                        <li className="mr-5 shrink-0"><a href={`mailto:${socialLinks.email}`} aria-label="Email"><MailIcon className="h-6 w-6 text-slate-500 hover:text-[#AB3E6E] transition-colors" /></a></li>
                    </ul>
                </header>

                <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
                    {/* Fix: Pass id and ref to Section component and remove wrapper div to fix missing prop errors. */}
                    <Section ref={sectionRefs.about} id="about" title="Acerca de">
                        <p className="text-[#664E57] leading-relaxed">{about}</p>
                    </Section>
                    {/* Fix: Pass id and ref to Section component and remove wrapper div to fix missing prop errors. */}
                    <Section ref={sectionRefs.skills} id="skills" title="Habilidades">
                        <ul className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <li key={skill}>
                                    <div className="flex items-center rounded-full bg-[#BA8CA0]/10 px-3 py-1 text-sm font-medium leading-5 text-[#AB3E6E]">{skill}</div>
                                </li>
                            ))}
                        </ul>
                    </Section>
                    {/* Fix: Pass id and ref to Section component and remove wrapper div to fix missing prop errors. */}
                    <Section ref={sectionRefs.experience} id="experience" title="Experiencia">
                        <div className="group/list">
                            {experience.map((item: TimelineItemData, index) => <TimelineItem key={index} item={item} />)}
                        </div>
                    </Section>
                    {/* Fix: Pass id and ref to Section component and remove wrapper div to fix missing prop errors. */}
                    <Section ref={sectionRefs.education} id="education" title="Educación">
                        <div className="group/list">
                            {education.map((item: TimelineItemData, index) => <TimelineItem key={index} item={item} />)}
                        </div>
                    </Section>
                    {/* Fix: Pass id and ref to Section component and remove wrapper div to fix missing prop errors. */}
                    <Section ref={sectionRefs.publications} id="publications" title="Publicaciones">
                        <div className="group/list">
                            {publications.map((item: PublicationData, index) => <PublicationCard key={index} publication={item} />)}
                        </div>
                    </Section>
                </main>
            </div>
        </div>
    );
};

export default App;