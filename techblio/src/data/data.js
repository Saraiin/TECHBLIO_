import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import sql from '../assets/sql.png';
import tailwind from '../assets/tailwind.png';

import js from './cheatsheet/javascript-cs.pdf';
import js2 from './roadmap/javascript-rm.pdf';
import html1 from "./cheatsheet/html-cs.pdf";
import html2 from "./roadmap/html-rm.pdf";
import css1 from "./cheatsheet/css-cs.pdf";
import css2 from "./roadmap/css-rm.pdf";
import python1 from "./cheatsheet/python-cs.pdf";
import tailwind1 from "./cheatsheet/tailwind-cs.pdf";
import react1 from "./cheatsheet/react-cs.pdf";
import sql1 from "./cheatsheet/sql-cs.pdf";
import sql2 from "./roadmap/sql-rm.pdf";
import react2 from "./roadmap/react-rm.pdf";
import python2 from "./roadmap/python-rm.pdf";
import tailwind2 from "./roadmap/tailwind-rm.pdf";


//website data: books, Roadmap, Cheatsheet
export const data = [
    /*BOOKS*/
    {
      id: 1,
      name: 'JS RoadMap',
      category: 'JAVASCRIPT',
      image: javascript,
      guide: 'RoadMap',
      url: js2,
    },
    {
      id: 2,
      name: 'HTML-Beginners guide',
      category: 'HTML/CSS',
      image: html,
      guide: 'Book',
      url:'https://www.snggdcg.ac.in/pdf/study-material/computer-science/0071611436%20HTML.pdf',
    },
    {
      id: 3,
      name: 'Complete reference Html-css',
      category: 'HTML/CSS',
      image: css,
      guide: 'Book',
      url:'https://www.dcpehvpm.org/E-Content/BCA/BCA-II/Web%20Technology/the-complete-reference-html-css-fifth-edition.pdf',
    },
    {
      id: 4,
      name: 'JavaScript for impatient programmers',
      category: 'JAVASCRIPT',
      image: javascript,
      guide: 'Book',
      url:'https://exploringjs.com/impatient-js/downloads/impatient-js-preview-book.pdf',
    },
    {
      id: 5,
      name: 'Beginning ReactJS Foundations',
      category: 'REACT',
      image:react,
      guide: 'Book',
      url:'https://dl.ebooksworld.ir/books/Beginning.ReactJS.Foundations.Chris.Minnick.Wiley.9781119685548.EBooksWorld.ir.pdf',
    },
    {
      id: 6,
      name: 'SQL-The Complete Reference',
      category: 'SQL',
      image:sql,
      guide: 'Book',
      url:'http://160592857366.free.fr/joe/ebooks/ShareData/SQL%20-%20The%20Complete%20Reference.pdf',
    },
    {
      id: 7,
      name: 'Learning SQL',
      category: 'SQL',
      image:sql,
      guide: 'Book',
      url:'http://160592857366.free.fr/joe/ebooks/ShareData/SQL%20-%20The%20Complete%20Reference.pdf',
    },
    {
      id: 8,
      name: 'React Up and Running',
      category: 'REACT',
      image:react,
      guide: 'Book',
      url:'https://dl.ebooksworld.ir/books/React.Up.and.Running.2nd.Edition.Stoyan.Stefanov.OReilly.9781492051466.EBooksWorld.ir.pdf',
    },
    {
      id: 9,
      name: 'React router',
      category: 'REACT',
      image:react,
      guide: 'Book',
      url:'https://riptutorial.com/Download/react-router.pdf',
    },
    {
      id: 10,
      name: 'Learning Python',
      category: 'PYTHON',
      image:python,
      guide: 'Book',
      url:'https://cfm.ehu.es/ricardo/docs/python/Learning_Python.pdf',
    },
    /*Cheat sheet*/
    {
      id: 11,
      name: 'HTML CheatSheet',
      category: 'HTML/CSS',
      image:html,
      guide: 'CheatSheet',
      url: html1,
    },
    {
      id: 12,
      name: 'CSS CheatSheet',
      category: 'HTML/CSS',
      image:css,
      guide: 'CheatSheet',
      url: css1,
    },
    {
      id: 13,
      name: 'Javascript CheatSheet',
      category: 'JAVASCRIPT',
      image:javascript,
      guide: 'CheatSheet',
      url: js,
    },
    {
      id: 14,
      name: 'SQL CheatSheet',
      category: 'SQL',
      image:sql,
      guide: 'CheatSheet',
      url: sql1,
    },
    {
      id: 15,
      name: 'TAILWIND CheatSheet',
      category: 'TAILWIND',
      image:tailwind,
      guide: 'CheatSheet',
      url: react1,
    },
    {
      id: 16,
      name: 'REACT CheatSheet',
      category: 'REACT',
      image:react,
      guide: 'CheatSheet',
      url: react1,
    },
    {
      id: 17,
      name: 'Python CheatSheet',
      category: 'PYTHON',
      image:python,
      guide: 'CheatSheet',
      url: python1,
    },
    
    /*Roadmap*/
    {
      id: 18,
      name: 'Python Roadmap',
      category: 'PYTHON',
      image:python,
      guide: 'RoadMap',
      url: python2,
    },
    {
      id: 19,
      name: 'SQL Roadmap',
      category: 'SQL',
      image:sql,
      guide: 'RoadMap',
      url: sql2,
    },
    {
      id: 20,
      name: 'JavaScript RM ',
      category: 'JAVASCRIPT',
      image:javascript,
      guide: 'RoadMap',
      url: js2,
    },
    {
      id: 21,
      name: 'REACT Roadmap',
      category: 'REACT',
      image:react,
      guide: 'RoadMap',
      url: react2,
    },
    {
      id: 22,
      name: 'TAILWIND Roadmap',
      category: 'TAILWIND',
      image:tailwind,
      guide: 'RoadMap',
      url: tailwind2,
    },
    {
      id: 23,
      name: 'TAILWIND Cheatsheet',
      category: 'TAILWIND',
      image:tailwind,
      guide: 'CheatSheet',
      url: tailwind1,
    },
    {
      id: 24,
      name: 'HTML Roadmap',
      category: 'HTML/CSS',
      image:html,
      guide: 'RoadMap',
      url: html2,
    },
    {
      id: 25,
      name: 'CSS Roadmap',
      category: 'HTML/CSS',
      image:css,
      guide: 'RoadMap',
      url: css2,
    },
  ];

/* Categories: website where user can practice */
  export const categories = [
    {
      id: 1,
      name: 'Free Code Camp',
      url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
    },
    {
      id: 2,
      name: 'Front end Mentor',
      url: 'https://www.frontendmentor.io/',
    },
    {
      id: 3,
      name: 'Leet Code',
      url: 'https://leetcode.com/',
    },
    {
      id: 4,
      name: 'W3Schools',
      url: 'https://leetcode.com/',
    },
  ];
