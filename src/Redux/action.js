import axios from "axios"
import * as types from "./action.types"


const getBooks = (params) => (dispatch) => {
  
   dispatch({type: types.GET_DATA_REQUEST})

   axios.get("/books",params)
   .then(r=>dispatch({type: types.GET_DATA_SUCCESS,payload:r.data}))
   .catch(e=>dispatch({type: types.GET_DATA_FAILURE}))

}


export {getBooks}