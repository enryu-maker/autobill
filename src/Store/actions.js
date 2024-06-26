import axios from "axios";
import axiosIns, { baseURL } from "../Helper/Helper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Init = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("access");
      const profile = JSON.parse(localStorage.getItem("profile"));

      dispatch({
        type: "LOGIN",
        payload: token,
      });
      dispatch({
        type: "PROFILE",
        payload: profile,
      });
    } catch {
      dispatch({
        type: "LOGIN",
        payload: null,
      });
    }
  };
};

export const LoginAction = (setLoading, data, navigate) => {
  return async (dispatch) => {
    setLoading(true);
    try {
      let response = await axios.post(baseURL + "auth/login/", data);
      await localStorage.setItem("access", response.data.access);
      await localStorage.setItem("profile", JSON.stringify(response.data.user));

      console.log(response.data);
      dispatch({
        type: "LOGIN",
        payload: response.data.access,
      });
      dispatch({
        type: "PROFILE",
        payload: response.data.user,
      });
      setLoading(false);
      navigate("/dashboard");
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
  };
};

export const LogoutAction = () => {
  return async (dispatch) => {
    await localStorage.clear();
    dispatch({
      type: "LOGIN",
      payload: null,
    });
    dispatch({
      type: "PROFILE",
      payload: {},
    });
  };
};

export const addCustomers = (setLoading, data, setData) => {
  return async (dispatch) => {
    setLoading(true);
    try {
      let response = await axiosIns.post("customer/create/", data);
      let response2 = await axiosIns.get(
        `customer/search/?search=${response?.data?.vehicle_number}`,
        data
      );
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
  };
};

export const getCustomers = (setLoading, setData) => {
  return async (dispatch) => {
    setLoading(true);
    try {
      let response = await axiosIns.get("customer/list/");
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
  };
};

export const deleteService = (setLoading, setData, setDshow, id, current) => {
  return async (dispatch) => {
    setLoading(true);
    try {
      await axiosIns
        .delete(`customer/${id}/delete-service/${current}/`)
        .then(() => {
          getInfo(setLoading, setData, id);
          setDshow(false);
          setLoading(false);
          window.location.reload();
        });
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
  };
};

export const updateService = (
  setLoading,
  setData,
  setDshow,
  id,
  current,
  data
) => {
  return async (dispatch) => {
    setLoading(true);
    try {
      await axiosIns
        .patch(`customer/${id}/update-service/${current}/`, data)
        .then(() => {
          dispatch(getInfo(setLoading, setData, id));
          setDshow(false);
          setLoading(false);
          window.location.reload();
        });
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
  };
};

export const getInfo = (setLoading, setData, id) => {
  return async (dispatch) => {
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
  };
};

export const createService = (setLoading, data, id) => {
  return async (dispatch) => {
    setLoading(true);
    try {
      let response = await axiosIns.post(
        `customer/${id}/create-service/`,
        data
      );
      console.log(response.data);
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
  };
};

export const searchCustomers = (setLoading, query, setData) => {
  return async (dispatch) => {
    setLoading(true);
    try {
      let response = await axiosIns.get(`customer/search/?search=${query}`);
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
  };
};

export const getDashboard = (setLoading, setData) => {
  return async (dispatch) => {
    setLoading(true);
    try {
      let response = await axiosIns.get(`customer/dashboard/`);
      console.log(response?.data);
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
  };
};
