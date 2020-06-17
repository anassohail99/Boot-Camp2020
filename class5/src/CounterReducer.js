const counterReducer = (state,action) =>{
    switch(action){
        case 'Increament':
         return state + 1
    }
}
export default counterReducer