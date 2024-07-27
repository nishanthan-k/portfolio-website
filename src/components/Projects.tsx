import React from 'react';
import { projectData } from '../assets/json/projectData';
import { projectPropsType } from '../global/types/projectDataType';

interface ProjectCardProps {
  data: projectPropsType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <div className='w-[300px] sm:w-80 flex flex-col gap-4 border border-gray-500 p-4 rounded-xl'>
      <div>
        <img src={data.src} alt={data.description} className='w-full' />
      </div>


      <div className='flex flex-col gap-4'>
        <p className='text-center text-xl font-semibold'>{data.name}</p>
        <p>{data.description}</p>
      </div>

      <div className='flex flex-col gap-4 mt-auto'>
        <div className='flex gap-4'>
          <a href={data.links.github} target='_blank'>
            <svg width="32px" height="32px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" fill-rule="evenodd" d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z" clip-rule="evenodd"></path></g></svg>
          </a>

          <a href={data.links.live} target='_blank'>
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.36328 12.0523C4.01081 11.5711 3.33457 11.3304 3.13309 10.9655C2.95849 10.6492 2.95032 10.2673 3.11124 9.94388C3.29694 9.57063 3.96228 9.30132 5.29295 8.76272L17.8356 3.68594C19.1461 3.15547 19.8014 2.89024 20.2154 3.02623C20.5747 3.14427 20.8565 3.42608 20.9746 3.7854C21.1106 4.19937 20.8453 4.85465 20.3149 6.16521L15.2381 18.7078C14.6995 20.0385 14.4302 20.7039 14.0569 20.8896C13.7335 21.0505 13.3516 21.0423 13.0353 20.8677C12.6704 20.6662 12.4297 19.99 11.9485 18.6375L10.4751 14.4967C10.3815 14.2336 10.3347 14.102 10.2582 13.9922C10.1905 13.8948 10.106 13.8103 10.0086 13.7426C9.89876 13.6661 9.76719 13.6193 9.50407 13.5257L5.36328 12.0523Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </a>
        </div>

        <div className='flex flex-wrap gap-2'>
          {data.techStack.map((e) => (
            <div className='bg-slate-300 text-black text-center text-sm px-2 py-1 rounded-lg'>
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
    <section className='flex flex-col items-center gap-6 md:gap-14'>
      <p className="font-bold text-2xl md:text-3xl">PROJECTS</p>

      <div className='flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-evenly md:gap-10'>
        {projectData.map((item, index) => (
          <ProjectCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
}
