import React from 'react';
import ProjectCard from './ProjectCard';
import Navbar from './NavBar';
import Footer from '../components/Footer';

export default function Projects() {
  const projects = [
    {
      title: 'Eruna Technologies India Pvt. Ltd',
      description:
        '• Microservice Architecture with Spring Boot: Contributed to the development and maintenance of microservices ensuring modularity and efficiency. • REST APIs: Designed and Developed efficient RESTful endpoints for seamless service communication.  •PostgreSQL: Managed database operations on a PostgreSQL instance hosted on Amazon RDS.',
      techStack: ['Jr Software Developer Intern - VRHR'],
      link: '#',
    },
    {
      title: 'Limendo India',
      description:
        '• Automate Extraction: Developed a system to automatically extract privacy policy texts from websites. • Scoring Model: Trained machine learning models to score privacy policies based on clarity, comprehensiveness,and compliance. • Result Presentation:: Creating an intuitive interface to present privacy scores and insights, aiding users inunderstanding and comparing website privacy practices.',
      techStack: [' Machine Learning Intern- Privacy Policy Score'],
      link: '#',
    },
    {
      title: 'Unilink',
      description:
        '• An integrated platform for project collaboration that offers a single space for students to create, host, and manage projects, while exploring and joining opportunities aligned with their skills and interests, simplifying access andenhancing engagement',
      techStack: ['React.js', 'SpringBoot', 'Postgres', 'Tomcat'],
      link: 'https://github.com/Spoooo8/unilink',
    },
    {
      title: 'Malaria Diagnosis',
      description:
        '• Developed an automated malaria diagnosis system using OpenCV. Applied image processing tecniques including Gaussian blur and edge detection for preprocessing, thresholding for binary segmentation, and contour detection to isolate malaria-infected cells. Utilized the TensorFlow dataset to enhance the accuracy of these methods.',
      techStack: ['OpenCV'],
      link: 'https://github.com/Spoooo8/Malaria-Diagnosis',
    },
  ];

  return (
      <div className="min-h-screen flex flex-col">
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
      <Footer />
    </div>
  );
}
