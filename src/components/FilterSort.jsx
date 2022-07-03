
import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import {useSearchParams} from "react-router-dom";
import { getBooks } from '../Redux/action';


const FilterSort = () => {

    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const urlCategory = searchParams.getAll('category');
    const urlSort = searchParams.get('sortBy')
    const [category, setCategory] = useState(urlCategory || []);
    const [sortBy, setSortBy] = useState( urlSort || '');


    const handleCheckbox=(e)=>{
         const option = e.target.value;

         let newCategory = [...category];
         if(category.includes(option)){
            newCategory.splice(newCategory.indexOf(option),1)
         }
         else{
            newCategory.push(option)
         }
         setCategory(newCategory)
    }
 
    const handleSort = (e)=>{
        setSortBy(e.target.value)
    }


   useEffect(()=>{
    if(category){
        setSearchParams({ category});
        dispatch(getBooks({params: {category}}))
    }
   },[category,setSearchParams,dispatch])

   useEffect(()=>{
     if(sortBy){
        const params={
            category: searchParams.getAll("category"),
            sortBy,
        }
      
        setSearchParams(params);
     }
   },[setSearchParams,sortBy,searchParams])
   console.log(urlSort,urlCategory);
  return (
    <div>
        <h2>Filters</h2>
        <div>
            <input  value="novel" onChange={handleCheckbox} defaultChecked={category.includes("novel")} type="checkbox"/>
            <label>Novel</label>
        </div>
        <div>
            <input type="checkbox" onChange={handleCheckbox} value="Science_Fiction" defaultChecked={category.includes("Science_Fiction")} />
            <label>Science_Fiction</label>
        </div>
        <div>
            <input type="checkbox" onChange={handleCheckbox} value="Motivation" defaultChecked={category.includes("Motivation")} />
            <label>Motivation</label>
        </div>
        <div>
            <input type="checkbox" onChange={handleCheckbox} value="thriller" defaultChecked={category.includes("thriller")} />
            <label>Thriller</label>
        </div>

        <h2>Sort</h2>
        <div onChange={handleSort} >
            <input type="radio" name="sortBy" value="asc" defaultChecked={sortBy ==='asc'} />Ascending
            {" "}
            <input type="radio" name="sortBy" value="desc" defaultChecked={sortBy === 'desc'} />Descending
        </div>
    </div>
  )
}

export default FilterSort