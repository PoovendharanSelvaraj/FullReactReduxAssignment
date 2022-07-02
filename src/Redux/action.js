import * as types from "./action.types"

const getDataSuccess = (payload)=>{
    return {type: types.GET_DATA_SUCCESS,payload}
}
const getDataRequest = ()=>{
    return {type: types.GET_DATA_REQUEST}
}
const getDataFailure = ()=>{
    return {type: types.GET_DATA_FAILURE}
}

const dataFilterSuccess = (payload)=>{
    return {type: types.DATA_FILTER_SUCCESS,payload}
}
const dataFilterRequest = ()=>{
    return {type: types.DATA_FILTER_REQUEST}
}
const dataFilterFailure = ()=>{
    return{type: types.DATA_FILTER_FAILURE}
}

const dataSortSuccess =(payload)=>{
    return {type: types.DATA_SORT_SUCCESS, payload}
}
const dataSortRequest = ()=>{
    return {type: types.DATA_SORT_REQUEST}
}
const dataSortFailure = ()=>{
    return {type: types.DATA_SORT_FAILURE}
}