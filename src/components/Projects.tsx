import React from 'react';
import { projectData } from '../assets/json/projectData';
import { projectPropsType } from '../global/types/projectDataType';

interface ProjectCardProps {
  data: projectPropsType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <div className='w-72 flex flex-col gap-4 border border-gray-500 p-4 rounded-lg'>
      <img src={data.src} alt={data.description} className='w-full' />
      
      <div className='flex flex-col gap-4'>
        <p className='text-center text-xl font-semibold'>{data.name}</p>
        <p>{data.description}</p>
        <div className='flex flex-wrap gap-2'>
          {data.techStack.map((e) => (
            <div className='bg-slate-300 text-black text-center px-4 py-1 rounded-lg'>
              {e}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section className='flex flex-col items-center gap-6'>
      <p className="font-bold text-2xl">PROJECTS</p>
      
      <div className='flex flex-col gap-4'>
        {projectData.map((item, index) => (
          <ProjectCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
}
