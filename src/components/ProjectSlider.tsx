import { RefObject } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { projectData } from "../assets/json/projectData";
import ProjectCard from "./ProjectCard";
import "./styles/projectSlider.css";

interface ProjectSliderProps {
  sliderRef: RefObject<Slider>,
  currSlide?: number,
}

export default function ProjectSlider({ sliderRef }: ProjectSliderProps) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    reponsive: [
      {
        breakpoint: 480,
        centerMode: true,
        className: 'center'
      }
    ]
  };

  return (
    <div className="slider">
      <Slider ref={sliderRef} {...settings}>
        {projectData.map((item, index) => (
          <ProjectCard key={index} data={item} />
        ))}
      </Slider>
    </div>
  );
}
