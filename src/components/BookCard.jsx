import React from 'react'
import styles from "styled-components"


const BookCard = ({bookData}) => {

  return (
     <div>
        <div>
            <ImgDiv>
            <img src="https://toppng.com/uploads/preview/book-11549420966kupbnxvyyl.png" alt="" />
            </ImgDiv>
            <div>{bookData.book_name}</div>
            <div>{bookData.release_year}</div>
            <div>{bookData.category}</div>
        </div>
    </div>
  )
}

export default BookCard;

const ImgDiv=styles.div`
  
 img{
    width:50%;
}
`;