import {createStore} from "redux";

const reducers = (state, action) => {
    switch(action.type){
        case 'INCREAMENT':
            return {
                counter: state.counter + 1
            }
            
        case 'DECREAMENT':
            return {
                counter: state.counter - 1
            }

        default:
            return state;
    }
}

const initialState = {
    counter: 2
}

export default createStore(reducers, initialState);