import javascript from '../images/skills/javascript.png';
import typescript from '../images/skills/typescript.png';
import react from '../images/skills/react.png';
import mysql from '../images/skills/mysql.png';
import postgresql from '../images/skills/postgresql.png';
import mongodb from '../images/skills/javascript.png';
import express from '../images/skills/express.png';
import nodejs from '../images/skills/nodejs.png';
import less from '../images/skills/less.png';
import scss from '../images/skills/scss.png';
import tailwind from '../images/skills/tailwind.png';
import redux from '../images/skills/redux.png';


interface skillProps {
  name: string,
  img: string,
}

const skillsData: skillProps[] = [
  {
    name: 'Javascript',
    img: javascript,
  },
  {
    name: 'Typescript',
    img: typescript,
  },
  {
    name: 'React',
    img: react,
  },
  {
    name: 'Redux',
    img: redux,
  },
  {
    name: 'Tailwind',
    img: tailwind,
  },
  {
    name: 'Scss',
    img: scss,
  },
  {
    name: 'Less',
    img: less,
  },
  {
    name: 'Mysql',
    img: mysql,
  },
  {
    name: 'Postgresql',
    img: postgresql,
  },
  {
    name: 'Mongodb',
    img: mongodb,
  },
  {
    name: 'Express',
    img: express,
  },
  {
    name: 'Node',
    img: nodejs,
  },
];

export default skillsData;
