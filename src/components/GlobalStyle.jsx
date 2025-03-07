import { createGlobalStyle } from 'styled-components';


const primaryColor = '#23d997'
const GlobalStyle = createGlobalStyle`
 *{
 margin : 0; 
 padding: 0;
 box-sizing : border-box
 }

 body{
    background: #1b1b1b;
    font-family : 'Inter', sans-serif;
 }
 button{
    font-weight :bold;
    font-size : 1.1rem;
    cursor: pointer;
    border : 3px solid ${primaryColor};
    background:transparent;
    color: #fff;
    padding: 1rem 2rem;
    transition : all 0.5s ease;
    font-family: "Atma", system-ui;
   

    &:hover{
     background-color: ${primaryColor};
     color: #fff;
      
    }
 }

 h2{
    font-weight : lighter;
    font-size : 4rem;
    color: #fff;
 }

 h3{
    color: #fff;
 }

 p{
    padding: 3rem 0;
    color: #ccc;
    font-size : 1.4rem;
    line-height: 150%;
 }

 h4{
    font-weight :bold;
    color:${primaryColor};
    font-size : 2rem;
 }
 a{
    font-size :1.1rem;
 } span{
    font-weight :bold;
    color:${primaryColor};
 }


`

export default GlobalStyle