import * as types from "./action.types";


const iniitalState = {
    books:[],
    isLoading:false,
    isError:false,
}


export const reducer = (state=iniitalState, action )=>{
    const {type,payload} =action;
    switch (type){
        case types.GET_DATA_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false,
            }
        case types.GET_DATA_SUCCESS:
            return {
                ...state,
                books: payload,
                isLoading:false,
                isError:false,
            } 
        case types.GET_DATA_FAILURE:
             return {
                    ...state,
                    isLoading:false,
                    isError:true,
                }   
        default:
            return state;
    }
}