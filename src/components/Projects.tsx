import { useRef, useState } from 'react';
import SectionTitle from '../global/components/SectionTitle';
import ProjectSlider from "./ProjectSlider"
import Slider from 'react-slick';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const PROJECT_LENGTH = 4; // refer projectData.tsx

export default function Projects() {
  const sliderRef = useRef<Slider | null>(null);
  const [currSlide, setCurrentSlide] = useState(0);

  const updateSlider = (direction: string) => {
    if (sliderRef.current) {
      if (direction === 'left') {
        const newSlide = currSlide > 0 ? currSlide - 1 : PROJECT_LENGTH - 1;
        setCurrentSlide(newSlide);
        sliderRef.current.slickGoTo(newSlide);
      } else {
        const newSlide = currSlide < PROJECT_LENGTH - 1 ? currSlide + 1 : 0;
        setCurrentSlide(newSlide);
        sliderRef.current.slickGoTo(newSlide);
      }
    }
  };

  return (
    <section className='w-full lg:w-1/2 flex flex-col items-center gap-6 mt-10 md:gap-10'>
      <SectionTitle title='PROJECTS'/>

      <div className='flex gap-4 self-end sm:mr-4'>
        <button 
          className='bg-sky-900 p-1 rounded-full'
          onClick={() => updateSlider('left')}
        >
          <MdKeyboardArrowLeft size={30} />
        </button>
        <button
          className='bg-sky-900 p-1 rounded-full'
          onClick={() => updateSlider('right')}
        >
          <MdKeyboardArrowRight size={30} />
        </button>
      </div>
      
      <ProjectSlider sliderRef={sliderRef} currSlide={currSlide} />
    </section>
  );
}
