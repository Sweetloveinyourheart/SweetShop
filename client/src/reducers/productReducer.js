import { FETCH_DATA_API, DATA_TOGGLE } from './../actions/types';

export const AllData = (state=[], actions) => {
    switch (actions.type) {
        case FETCH_DATA_API:
            return actions.data          
        default: return state           
    }
};
export const DataToggle = (state=[], actions) => {
    switch (actions.type) {
        case DATA_TOGGLE:           
            return actions.data
        default:
            return state
    }
}