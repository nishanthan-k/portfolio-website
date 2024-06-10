import ReactImg from "../assets/images/skills/react.png";
import JsImg from "../assets/images/skills/js.png";
import ReduxImg from "../assets/images/skills/redux.png";
import TailwindImg from "../assets/images/skills/tailwind-css.png";
import SassImg from "../assets/images/skills/sass.png";
import LessImg from "../assets/images/skills/less.png";
import GitImg from "../assets/images/skills/git.png";
import MysqlImg from "../assets/images/skills/mysql.png";
import PostgresqlImg from "../assets/images/skills/postgresql.png";
import { Card } from "flowbite-react";

const About = () => {
  const skills = [
    { img: ReactImg, name: "React" },
    { img: JsImg, name: "Javascript" },
    { img: ReduxImg, name: "Redux" },
    { img: TailwindImg, name: "Tailwind" },
    { img: SassImg, name: "Sass" },
    { img: LessImg, name: "Less" },
    { img: GitImg, name: "Git" },
    { img: MysqlImg, name: "Mysql" },
    { img: PostgresqlImg, name: "Postgresql" },
  ];

  return (
    <div id="about" className="flex w-full flex-col gap-4 p-4">
      <p className="text-2xl font-medium md:text-3xl">About me</p>
      <p>
        {"I'm"} Nishanthan Karunakaran, a Frontend Developer from Coimbatore,
        blending AI expertise with a passion for crafting seamless web
        experiences. With a background in AI and Data Science, I thrive on
        solving complex problems through code. Specializing in React and Redux,{" "}
        {"I'm"} dedicated to optimizing performance and user interface design.
        Outside coding, I enjoy exploring the intersection of technology and
        creativity.
      </p>
      <div>
        <p className="text-center text-xl font-medium md:text-3xl">
          My Top Skills
        </p>
        <div className="mt-4 flex flex-col items-center gap-4 rounded-2xl md:flex-row md:flex-wrap md:justify-center md:gap-8">
          {skills.map((obj, index) => (
            <Card key={index}>
              <img
                alt={obj.name}
                src={obj.img}
                className="h-56 w-60 object-contain p-4 pb-0 shadow-lg"
              />
              <p className="text-center text-xl font-medium">{obj.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
