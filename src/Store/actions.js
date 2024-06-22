import axios from "axios";
import axiosIns, { baseURL } from "../Helper/Helper";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Init = () => {
    return async dispatch => {
        try {
            const token = localStorage.getItem("access");
            const profile = JSON.parse(localStorage.getItem("profile"));

            dispatch({
                type: 'LOGIN',
                payload: token,
            })
            dispatch({
                type: 'PROFILE',
                payload: profile,
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

export const LoginAction = (setLoading, data, navigate) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axios.post(baseURL + 'auth/login/', data);
            await localStorage.setItem('access', response.data.access);
            await localStorage.setItem('profile', JSON.stringify(response.data.user));

            console.log(response.data)
            dispatch({
                type: 'LOGIN',
                payload: response.data.access,
            })
            dispatch({
                type: 'PROFILE',
                payload: response.data.user,
            })
            setLoading(false);
            navigate("/dashboard")
        } catch (error) {
            toast.error(error.response.data, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false);
        }
    }
}

export const addCustomers = (setLoading, data, setData) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axiosIns.post('customer/create/', data);
            console.log(response.data)
            let response2 = await axiosIns.post(`customer/search/?search=${response?.data?.vehicle_number}`, data);
            setData(response2?.data?.results);
            setLoading(false);
        } catch (error) {
            toast.error(error.response.data, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false);
        }
    }
}

export const getCustomers = (setLoading, setData) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axiosIns.get('customer/list/');
            setData(response?.data?.results);
            setLoading(false);
        } catch (error) {
            toast.error(error.response.data, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false);
        }
    }
}

export const getInfo = (setLoading, setData, id) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axiosIns.get(`customer/${id}/`);
            setData(response?.data);
            setLoading(false);
        } catch (error) {
            toast.error(error.response.data, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false);
        }
    }
}

export const createService = (setLoading, data, id) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axiosIns.post(`customer/${id}/create-service/`,data);
            console.log(response.data)
            setLoading(false);
        } catch (error) {
            toast.error(error.response.data, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false);
        }
    }
}

export const searchCustomers = (setLoading, query, setData) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axiosIns.get(`customer/search/?search=${query}`);
            setData(response?.data?.results)
            setLoading(false);
        } catch (error) {
            toast.error(error.response.data, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false);
        }
    }
}