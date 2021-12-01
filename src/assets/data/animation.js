import { v4 as uuidv4 } from 'uuid';
import Ball from '../images/ball.png';
import Letter from '../images/youis.png';

const animations = [

    {
      id: uuidv4(),
      name: '3D CSS Animation',
      desc:
        '3D cube and ball animation with a perspective scene using HTML & CSS',
      img: Ball,
      link: 'https://emilyjwilbur.github.io/3DCSS/',
    },
    {
        id: uuidv4(),
        name: 'Letter Animation',
        desc:
          'Letter animation using HTML, CSS, JavaScript and a lot of love.',
        img: Letter,
        link: 'https://emilyjwilbur.github.io/Letter-Animation/',
      },
  
  ];
  
  export default animations;