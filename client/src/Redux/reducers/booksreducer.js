export const getAllBooks =(state ={books:[]},action)=>{
    switch(action.type){
        case 'GET_BOOKS_REQ':
            return {...state, loading:true, err:false}
        case 'GET_BOOKS_SUCC':
            return { books:action.payload, loading:false  }
        case 'GET_BOOKS_FAIL':
            return { error:action.payload, loading:false, err:true }
        default:
            return state
    }
}