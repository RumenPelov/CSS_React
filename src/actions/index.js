
import { SEARCH_RESULT } from "./types";

export function lookUp(values, callback) {
    const request = {};
    
    callback();

    return {
        type: SEARCH_RESULT,
        payload: request
    }
}