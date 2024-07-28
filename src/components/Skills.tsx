import SectionTitle from "../global/components/SectionTitle";
import skillsData from "../assets/json/skillsData";

export default function Skills() {

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <SectionTitle title="SKILLS" />

       <div className="w-[360px] md:w-5/6 lg:w-1/2 flex flex-wrap justify-center gap-4">
        {skillsData.map((skill) => (
          <div className="flex gap-2 items-center rounded-md border border-slate-300 px-2 py-1 md:px-3 md:py-2 hover:scale-110 hover:border-slate-500 ">
            <img src={skill.img} className="w-6" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
