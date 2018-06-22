import {TOGGLE_MENU} from "../constants";

// START STATE
const initialState = {
    toggleMenu: window.innerWidth > 767
};

// REDUCERS
export const toggleMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return {...state, toggleMenu: !state.toggleMenu};
        default:
            return {...state};
    }
};
