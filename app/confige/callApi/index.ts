import axios from "axios";
import ValidationErrors from "../../exeptions/validationErrors";

const callApi = () => {
    const instanceAxios = axios.create({
        baseURL: 'http://localhost:5000/api',

    });

    instanceAxios.interceptors.request.use(
        (value) => {

            return value
        },
        (error) => {
            return Promise.reject(error);
        })

    instanceAxios.interceptors.response.use(
        (value) => {

            return value
        },
        (error) => {
            throw new ValidationErrors(error?.response?.data?.errors)
        })

    return instanceAxios

}


export default callApi