import { INIT_DRAFT, SEARCH_RESULT} from '../actions/types';

export function fetchSearchReducer (state = {}, action) {
    switch (action.type) {
        case SEARCH_RESULT:
            return {...state, [action.payload.res]: action.payload};// this is just a sample
        
        default:
            return state;
    }
}

export function fetchInitReducer (state = {}, action) {
    switch (action.type) {
        case INIT_DRAFT:
            return action.payload;
        
        default:
            return state;
    }
}