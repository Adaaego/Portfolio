import styled from "styled-components";


export const BasicLayout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;

 
`

export const Description = styled.div`
    flex: 1;
    z-index: 2;

     h2{
        font-weight :lighter;
    }

//media query 
 @media screen and (max-width:1562px) {
   h2{
      font-size : 2.5rem;   }
 }
 @media screen and (max-width:1534px) {
   p{
      font-size : 0.95rem;   }
 }
 
`
export const Image = styled.div`
flex : 1;
overflow: hidden;
z-index: 2;

img{
    width: 85%;
    height: 70vh;
    object-fit :cover;
    margin-left: 20px;
    border-radius :50%;
    
}
@media screen and (max-width:1534px){
    img{
        height:55vh;
    }
}
    
`
export const Hide = styled.div`
    overflow: hidden;
`
export const StyledIcon = styled.img`
    width: 50px;
    height: 45px;
`
