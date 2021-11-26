import React from "react";

import Card from "../../componets/Card";
import { Container, FlexRow } from "../../componets/CommonComponents";
import Yoru from "../../componets/yoru.png";
import harryImg from "../../shared/harry_potter.jpg";
const Catalog = () => {
   const book = {
      name: "Harry Potter",
      author: "J K Rowling",
      description:
         "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling.",
      imgsrc: harryImg,
   };

   const books = [];
   for (let i = 0; i < 4; i++) {
      books.push(book);
   }
   return (
      <Container>
         <FlexRow>
            {books.map((element) => (
               <Card
                  name={element.name}
                  author={element.author}
                  description={element.description}
                  imgSrc={element.imgsrc}
               />
            ))}
         </FlexRow>
         <FlexRow>
            {books.map((element) => (
               <Card
                  name={element.name}
                  author={element.author}
                  description={element.description}
                  imgSrc={Yoru}
               />
            ))}
         </FlexRow>
      </Container>
   );
};

export default Catalog;
