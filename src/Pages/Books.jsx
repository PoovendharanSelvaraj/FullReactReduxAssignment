import React, { useEffect } from 'react'
import { getBooks } from '../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import BookLists from '../components/BookLists';
import FilterSort from '../components/FilterSort';
import styles from "styled-components";

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector(state=>state.books);
//   const loading = useSelector(state=>state.isLoading)
//   const err = useSelector(state=>state.isError)

  useEffect(()=>{
    dispatch(getBooks())
  },[dispatch])
  console.log(books)
  
  return (
    <div>
    <BookConatiner>
        <FilterSortWrapper>
        <FilterSort/>
        </FilterSortWrapper>
        <BooksListsWrapper>
        <BookLists books={books} />
        </BooksListsWrapper>
    </BookConatiner>
    </div>
  )
}

export default Books;


const BookConatiner = styles.div`
     display:flex;
     height:fit-content;
`;
const FilterSortWrapper = styles.div`
    width:300px;
    border: 1px solid red;
`;
const BooksListsWrapper = styles.div`
     width:70%;
     margin:auto;
     border:1px solid red;
     display:grid;
     grid-template-columns: repeat(auto-fit, minmax(310px, max-content));
     grid-gap:16px;
     justify-content: center;
     padding: ;
     `;