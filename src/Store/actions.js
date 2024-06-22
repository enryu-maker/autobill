import axios from "axios";
import axiosIns, { baseURL } from "../Helper/Helper";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Init = () => {
    return async dispatch => {
        try {
            const token = localStorage.getItem("access");
            dispatch({
                type: 'LOGIN',
                payload: token,
            })
        }
        catch {
            dispatch({
                type: 'LOGIN',
                payload: null,
            })
        
        }
    }
}