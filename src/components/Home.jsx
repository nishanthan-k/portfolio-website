import { HiOutlineArrowRight } from "react-icons/hi";
import Nishanthan from "../assets/images/nishanthan.jpg";
import { ImLinkedin, ImGithub } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";
import { Button } from "flowbite-react";

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
      className="flex w-screen flex-col items-center justify-center gap-6 p-4"
    >
      <div className="h-1/2 w-1/2">
        <img src={Nishanthan} className="rounded-full" />
      </div>
      <div className="flex flex-col-reverse">
        <div className="m-2 flex justify-center gap-6">
          {linkSet.map((obj) => (
            <button
              key={obj.link}
              className="text-2xl"
              onClick={() => window.open(obj.link)}
            >
              <obj.icon />
            </button>
          ))}
        </div>
        <div>
          <p className="text-center text-3xl font-medium">
            Nishanthan Karunakaran
          </p>
          <p className="mt-4">
            A passionate frontend developer with a keen eye for design and a
            love for crafting seamless user experiences.
          </p>
        </div>
      </div>
      <div className="flex w-screen justify-evenly">
        <button className="text-md rounded-full bg-pink-600 px-6 py-2 font-medium">
          Resume
        </button>
        <Button pill className="border-none bg-sky-600 px-2">
          {"Let's Talk"}
          <HiOutlineArrowRight className="m-auto ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Home;
