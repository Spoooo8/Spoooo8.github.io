import React from 'react';

function ProjectCard({ title, description, link,repo, techStack = [] }) {
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

{(link !== '#' || repo !== '#') && (
  <div className="flex space-x-4 mt-2">
    {link !== '#' && (
      <a
        href={link}
        className="text-gray-900 hover:underline font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    )}
    {repo !== '#' && (
      <a
        href={repo}
        className="text-gray-900 hover:underline font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Repo
      </a>
    )}
  </div>
)}

    </div>
  );
}

export default ProjectCard;
