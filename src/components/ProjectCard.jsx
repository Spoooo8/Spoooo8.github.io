import React from 'react';

function ProjectCard({ title, description, link, techStack = [] }) {
  // Convert the description into bullet points
  const points = description.split('•').map(p => p.trim()).filter(Boolean);

  return (
    <div className="bg-white p-6 rounded-md border border-gray-200 hover:shadow-md transition w-full">
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>

      {techStack.length > 0 && (
        <p className="text-sm text-gray-500 mb-3">
          {techStack.join(', ')}
        </p>
      )}

      <ul className="list-disc list-inside text-gray-700 mb-4 leading-relaxed space-y-1">
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>

      <a href={link} className="text-gray-900 hover:underline font-medium">
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
