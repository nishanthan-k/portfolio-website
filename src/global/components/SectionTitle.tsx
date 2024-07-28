interface SectionTiltleProps {
  title: string,
}


export default function SectionTitle(props: SectionTiltleProps) {
  return (
    <p className="font-bold text-2xl md:text-3xl">{props.title}</p>
  )
}
