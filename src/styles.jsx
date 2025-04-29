import styled from "styled-components";


export const BasicLayout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;

  @media screen and (max-width:1355px){
    flex-direction: column;
    align-items: flex-start;
    padding: 4rem 7.5rem
}

@media screen and (max-width:1154px){
    align-items: center;
}

//breakpoint for mobiles
@media screen and (max-width: 480px) { 
    padding: 2rem;
}

 
`

export const Description = styled.div`
    flex: 1;
    z-index: 2;

     h2{
        font-weight :lighter;
    }
    p{
        font-weight: lighter;
    }

//media query 
 @media screen and (max-width:1562px) {
   h2{
      font-size : 2.5rem;   }
 }
 @media screen and (max-width:1534px) {
   p{
      font-size : 0.95rem;   }
 };

 @media screen and (max-width:1355px){
    display: block;
    h2{
    font-size: 3.7rem;
    
   }

   p{
    font-size : 1.4rem;
   
   }
   
};




@media screen and (max-width:1154px){
    text-align : center
}

@media screen and (max-width:1006px){
    h2{
        font-size : 3rem;
    }
    p{
        font-size: 1.1rem;
    }
}

@media screen and (max-width: 861px){
    h2{
        font-size : 2.4rem
    }
};

//standard breakpoint for tabs
@media screen and (max-width: 768px) { 
    h2{
        font-size: 1.7rem;
    }
}

//breakpoints for mobile
@media screen and (max-width: 480px) {

   
    h2{
        font-size : 1.4rem;
    }
    p{
        font-size: 1rem;
    }
 }

 
`
export const Image = styled.div`
flex : 1;
overflow: hidden;
z-index: 2;

img{
    width: 85%;
    height: 65vh;
    object-fit :cover;
    margin-left: 20px;
    border-radius :50%;
    
}
@media screen and (max-width:1534px){
    img{
        height:55vh;
    }
};

@media screen and (max-width:1355px){
    img{
       display: none;
    }
}
    
`
export const Hide = styled.div`
    overflow: hidden;
`
export const StyledIcon = styled.img`
    width: 50px;
    height: 45px;
`;


export const ImageWrap = styled.div`
   
    display: none;

    img{
      width: 235px;
      height: 250px;
      border-radius: 50%;
      
 
    }

    @media screen and (max-width:1355px){
    display: flex;
    justify-content: center;
    width: 357px;
    height: 350px;
    /* background-color: #23d997; */
    border-radius: 50%;
   
   
};


//standard breakpoint for tabs
@media screen and (max-width: 768px) { 
    width: 240px;
    height: 230px;
    align-items: center;
    justify-content: center;
    margin-bottom : 70px;

    img{
        width: 165px;
        height: 170px; 
    }
    
}

`