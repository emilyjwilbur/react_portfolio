import { v4 as uuidv4 } from 'uuid';
import Noods from '../images/noods.png';
import Booze from '../images/booze.png';
import Autumn from '../images/autumn.png';
import Bullington from '../images/bullington.png';
import Parks from '../images/parks.png';
import Myrtle from '../images/myrtle.png'
const projects = [
  {
    id: uuidv4(),
    name: 'Noods ATL',
    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: Noods,
  },
  {
    id: uuidv4(),
    name: 'boozeMe',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: Booze,
  },
  {
    id: uuidv4(),
    name: 'Myrtle Hill Consulting',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: Myrtle,
  },
  {
    id: uuidv4(),
    name: 'Autumn Landscape',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: Autumn,
  },
  {
    id: uuidv4(),
    name: "Bullington Clothing",
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: Bullington,
  },
  {
    id: uuidv4(),
    name: 'Parks&Parkas',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: Parks,
  },

];

export default projects;