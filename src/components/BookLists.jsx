import React from 'react'
import BookCard from './BookCard'
import styles from "styled-components";

const BookLists = ({books}) => {

  return (
    <BooksRack>
      
       {books.length > 0 && 
       books.map((d) => {
         return (
            <BookCardWrapped key={d.id}>
                <BookCard bookData={d}/>
            </BookCardWrapped>
         )
       })}
   
    </BooksRack>
  )
}

export default BookLists

const BookCardWrapped = styles.div`
   border:1px solid black;
   padding:5px ;
   
`;
const BooksRack=styles.div`
display:grid;
grid-template-columns:repeat(4,22%);
grid-gap:16px;
`;