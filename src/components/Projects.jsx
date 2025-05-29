import React from 'react';
import ProjectCard from './ProjectCard';
import Navbar from './NavBar';

export default function Projects() {
  const projects = [
    {
      title: 'Project One',
      description:
        '• A web application built with React. • Styled with Tailwind CSS. • Focused on clean UI/UX.',
      techStack: ['React', 'Tailwind CSS', 'JavaScript'],
      link: '#',
    },
    {
      title: 'Project Two',
      description:
        '• Mobile-responsive dashboard. • Uses modern JavaScript features. • Includes real-time updates.',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      link: '#',
    },
    {
      title: 'Project Three',
      description:
        '• E-commerce platform. • Secure payment integration. • Admin dashboard included.',
      techStack: ['Next.js', 'Stripe', 'MongoDB'],
      link: '#',
    },
  ];

  return (
    <>
      <Navbar />
      <section id="projects" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
