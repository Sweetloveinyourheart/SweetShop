import {FETCH_DATA_API, DATA_TOGGLE} from './types';

export const ApiData = (data) => {
    return {
        type: FETCH_DATA_API,
        data
    }
}
export const DataToggle = data => {
    return {
        type: DATA_TOGGLE,
        data
    }
}