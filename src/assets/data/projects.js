import { v4 as uuidv4 } from 'uuid';
import Noods from '../images/noods.png';
import Booze from '../images/booze.png';
import Autumn from '../images/autumn.png';
import Bullington from '../images/bullington.png';
import Parks from '../images/parks.png';
import Myrtle from '../images/myrtle.png';
import Fitness from '../images/fitness.png';
import Employee from '../images/employee.png';
const projects = [

  {
    id: uuidv4(),
    name: 'Myrtle Hill Consulting',
    desc:
      'WordPress site for Myrtle Hill Consulting in Atlanta, GA.',
    img: Myrtle,
    link: 'https://www.myrtlehillconsulting.com/',
  },
  {
    id: uuidv4(),
    name: 'Autumn Landscape',
    desc:
      'WordPress site for Autumn Landscape Co. in Atlanta, GA.',
    img: Autumn,
    link:'https://autumnlandscape.com/'
  },
  {
    id: uuidv4(),
    name: 'Noods ATL',
    desc:
      'Shopify store for NoodsATL',
    img: Noods,
    link: 'https://noodsatl.com/',
  },
  {
    id: uuidv4(),
    name: "Bullington Clothing",
    desc:
      'Shopify store for Bullington CLothing at St. Simons Island, GA',
    img: Bullington,
    link: 'https://www.stevebullington.com/'
  },
  {
    id: uuidv4(),
    name: 'boozeMe',
    desc:
      'Drink recipe App using TheCocktailDB API | JavaScript',
    img: Booze,
    link: 'https://emilyjwilbur.github.io/boozeme/',
  },
  {
    id: uuidv4(),
    name: 'Parks&Parkas',
    desc:
      'An interactive app allowing users to search for a national park and is then provided with a correlating weekly weather forecast and park info. Uses Open Weather and National Park API, Bootstrap, jQuery frameworks and local storage.',
    img: Parks,
    link: 'https://ls-t.github.io/Parks-N-Parkas/'
  },

  {
    id: uuidv4(),
    name: 'Fitness Tracker',
    desc:
      'A Node application that utilizes Express, Mongoose, MongoDB Atlas database and is deployed on Heroku. Create workouts and track weekly minutes exercised and weight lifted via MongoDB aggregators.',
    img: Fitness,
    link:'https://sheltered-crag-20933.herokuapp.com/'
  },
  {
    id: uuidv4(),
    name: 'Employee Directory',
    desc:
      'A React app that leverages the Random User database to generate a list of random employees. This was an activity to get more familiar with setting state, mapping arrays and doing on-page sorting.',
    img: Employee,
    link: 'https://radiant-mountain-52951.herokuapp.com/'

  },

];

export default projects;