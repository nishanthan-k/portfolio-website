export type projectPropsType = {
  id: number,
  name: string,
  src: string,
  description: string,
  links: {
    github: string,
    live: string,
  },
  techStack: string[],
}