const INITIAL_STATE = {
    description: '' ,
    list: []
}


export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'HANDLE_CHANGE': 
            return { ...state, description: action.data }             
        case 'HANDLE_SEARCH': 
            return { ...state, list: action.payload }   
        case 'HANDLE_CLEAR': 
           return { ...state, description:''}   
        default:
            return state
    }
}



