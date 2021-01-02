import {createStore} from 'redux'

const ADD = "ADD"
const DEL = "DEL"

export const store = createStore(reducer);

const add = (content) =>{
    return {
        type:ADD,
        id:Date.now(),
        content:content,
    }
}

const del = (id) => {
    return {
        type: DEL,
        id : id,
    }
}

function reducer(state = [], action ){
    switch(action.type){
        case ADD:
            return [
                {
                    id : action.id,
                    content : action.content,
                },
                ...state,
            ];
           case DEL:
               return state.filter(obj => obj.id !== action.id);
               default:
                   return state
    }
}
        
export const actionCreator = {
    add,
    del,
}

