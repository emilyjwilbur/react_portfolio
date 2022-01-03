import { createGlobalStyle } from 'styled-components';



const Typography = createGlobalStyle`
  @font-face {
    font-family: 'helvetica';
   
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    
    font-style: normal;
  }
  @font-face {
    font-family: 'helvetica';
    
    font-style: normal;
  }
  html{
    font-family: 'helvetica';
    color: var(--gray-1);
  }
  *{
    font-family: 'helvetica';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'helvetica';
  }
`;

export default Typography;