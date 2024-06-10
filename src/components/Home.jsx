import { HiOutlineArrowRight } from "react-icons/hi";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";
import Nishanthan from "../assets/images/nishanthan1.jpg";

const Home = () => {
  const linkSet = [
    {
      icon: ImLinkedin,
      link: "https://www.linkedin.com/in/nishanthan-karunakaran-21355b220/",
    },
    { icon: ImGithub, link: "https://github.com/nishanthan-k" },
    { icon: RiTwitterXFill, link: "https://x.com/NishanthanKrn" },
  ];

  return (
    <div
      id="home"
      className="flex w-full flex-col items-center justify-center gap-6 py-10 sm:px-10 md:px-20 lg:flex-row-reverse lg:justify-evenly lg:px-10 lg:py-10"
    >
      <div className="">
        <img
          src={Nishanthan}
          className="h-56 w-56 rounded-full object-cover md:h-64 md:w-64 lg:h-72 lg:w-72 "
        />
      </div>
      <div className="flex flex-col-reverse gap-2">
        <div className="mt-6 flex flex-col gap-8 ">
          <div className="flex justify-center gap-10">
            {linkSet.map((obj) => (
              <button
                key={obj.link}
                className="text-3xl"
                onClick={() => window.open(obj.link)}
              >
                <obj.icon />
              </button>
            ))}
          </div>
          <div className="flex w-full justify-evenly md:justify-center md:gap-8">
            <button className="text-md rounded-full bg-pink-600 px-6 py-2 font-medium">
              Resume
            </button>
            <button className="text-md flex rounded-full bg-sky-600 px-6 py-2 font-medium">
              {"Let's Talk"}
              <HiOutlineArrowRight className="m-auto ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="">
          <p className="text-center text-3xl  font-medium">
            Nishanthan Karunakaran
          </p>
          <p className="mt-4 block text-center lg:hidden lg:px-20">
            A passionate frontend developer with a keen eye for design and a
            love for crafting seamless user experiences.
          </p>
          <p className="mt-4 hidden text-center text-xl lg:block lg:px-20">
            Software Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
