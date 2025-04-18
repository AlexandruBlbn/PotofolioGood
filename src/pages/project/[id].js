import React from 'react';
import { useRouter } from 'next/router';
import projectsData from '../../data/projects';

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projectsData.find((proj) => proj.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <p className="mt-4">{project.description}</p>
      <div className="tags mt-2">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded mr-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;