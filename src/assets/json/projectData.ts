import erSketcher from '../images/projects/er-sketcher.png';
import hrPortal from '../images/projects/hr-portal.png';
import blogApp from '../images/projects/blog-app.png';
import toDoNet from '../images/projects/to-do-net.png';
import { projectPropsType } from '../../global/types/projectDataType';

export const projectData: projectPropsType[] = [
  {
    id: 1,
    name: 'ER Sketcher',
    src: erSketcher,
    description: 'An platform to practice and communicate entity relationships in database',
    links: {
      github: 'https:github.com/nishanthan-k/er-sketcher',
      live: 'https:github.com/nishanthan-k/er-sketcher',
    },
    techStack: ['React', 'Tailwind css', 'Scss', 'Joint js' ]
  },
  {
    id: 2,
    name: 'HR Portal',
    src: hrPortal,
    description: 'An single place for the HR\'s and management people to handle the project and employee details',
    links: {
      github: 'https:github.com/nishanthan-k/hr-portal',
      live: 'https:github.com/nishanthan-k/hr-portal',
    },
    techStack: ['React', 'Scss', 'Semantic ui', 'Formik']
  },
  {
    id: 3,
    name: 'Blog App',
    src: blogApp,
    description: 'Blog app with add, modify, delete and reaction features',
    links: {
      github: 'https:github.com/nishanthan-k/react-redux-blog',
      live: 'https:github.com/nishanthan-k/react-redux-blog',
    },
    techStack: ['React', 'Tailwind css', 'Redux']
  },
  {
    id: 4,
    name: 'To Do Net',
    src: toDoNet,
    description: 'An efficient way to handle the tasks, tasks are stored at local storage',
    links: {
      github: 'https:github.com/nishanthan-k/recoil-to-do-app',
      live: 'https:github.com/nishanthan-k/recoil-to-do-app',
    },
    techStack: ['React', 'Tailwind css', 'Recoil', ]
  },
]