import { createGlobalStyle } from 'styled-components';



const Typography = createGlobalStyle`
  @font-face {
    font-family: 'RobotoMono Regular';
   
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    
    font-style: normal;
  }
  html{
    font-family: 'RobotoMono Regular';
    color: var(--gray-1);
  }
  *{
    font-family: 'RobotoMono Regular';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat SemiBold'
  }
`;

export default Typography;