import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="text-left px-6 max-w-4xl w-full mt-10 mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-gray-900">
            Crafting Clean Code & Scalable Solutions
          </h2>
          <ul className="text-lg text-gray-700 leading-relaxed mb-10 list-disc list-inside space-y-4">
            <li>
              Strong foundation in <span className="font-medium">Java, Python, C++, and SQL</span>.
            </li>
            <li>
              Backend experience with <span className="font-medium">Spring Boot</span>, building microservices and designing RESTful APIs with <span className="font-medium">OAuth2</span> and <span className="font-medium">OpenID Connect</span> security.
            </li>
            <li>
              Skilled in testing with <span className="font-medium">JUnit</span> and <span className="font-medium">Mockito</span>, version control with <span className="font-medium">Git</span>, and CI/CD pipelines using <span className="font-medium">Jenkins</span>.
            </li>
            <li>
              Worked with databases including <span className="font-medium">PostgreSQL</span> and <span className="font-medium">MySQL</span>. Familiar with <span className="font-medium">MongoDB</span> and <span className="font-medium">event-driven systems</span> using <span className="font-medium">RabbitMQ</span>.
            </li>
            <li>
              Experience in containerization and orchestration using <span className="font-medium">Docker</span>, <span className="font-medium">Kubernetes</span>, and <span className="font-medium">Helm</span>. Monitoring using <span className="font-medium">Prometheus</span>, <span className="font-medium">Grafana</span>, and <span className="font-medium">Loki</span>.
            </li>
            <li>
              Frontend development using <span className="font-medium">React</span>, <span className="font-medium">HTML</span>, <span className="font-medium">CSS</span>, and <span className="font-medium">JavaScript</span>.
            </li>
          </ul>

          <div className="flex justify-center">
            <Link
              to="/projects"
              className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition text-lg"
            >
              Explore My Work
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
