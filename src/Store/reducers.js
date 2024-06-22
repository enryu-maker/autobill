import { toast } from 'react-toastify';
const initialState = {
    access: null,
    profile: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                access: action.payload,
            }
        case "PROFILE":
            return {
                ...state,
                profile: action.payload,
            }
        default:
            return state;
    }
};