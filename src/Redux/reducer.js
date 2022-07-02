


const iniitalState = {
    books:[],
    isLoading:false,
    isError:false,
}


export const reducer = (state=iniitalState, action )=>{
    const {type,payload} =action;
    switch (type){
        default:
            return state;
    }
}