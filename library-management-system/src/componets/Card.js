import styled from "styled-components";

import { FlexRow } from "./CommonComponents";

const Body = styled.div`
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
   transition: 0.3ms;
   width: 20%;
   height: 560px;
   border-radius: 10px;
   margin: 20px;
   padding: 10px;
   :hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
   }
`;

const Img = styled.img`
   border-radius: 10px 10px 0 0;
   width: 100%;
   height: 300px;
`;

const Container = styled.div`
   padding: 10px;
`;

const Button = styled.button`
   padding: 5px;
   width: 50%;
   font-size: 15px;
   font-weight: bold;
   background-color: rgba(0,0,200,0.7);
   color: white;
   border-color: rgba(0,0,200,0.7);
   border-radius: 8px;
`;

const Card = ({ name, author, description, imgSrc }) => {
   return (
      <Body>
         <Img src={imgSrc} alt="img" />
         <Container>
            <h3 style={{ textAlign: "center" }}>{name}</h3>
            <h4>Author : {author}</h4>
            <p>{description}</p>
            <FlexRow>
               <Button>Read more</Button>
            </FlexRow>
         </Container>
      </Body>
   );
};

export default Card;
