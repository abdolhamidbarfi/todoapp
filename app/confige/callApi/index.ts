import axios from "axios";
import ValidationErrors from "../../exeptions/validationErrors";

const callApi = () => {
    const instanceAxios = axios.create({
        baseURL: 'http://localhost:5000/api',

    });

    instanceAxios.interceptors.request.use(
        (config) => {
            config.withCredentials = true
            return config
        },
        (error) => {throw error}
    )

    instanceAxios.interceptors.response.use(
        (value) => {

            return value
        },
        (error) => {
            const res = error?.response
            if (res) {
                if (res.status === 422) {
                    throw new ValidationErrors(res?.data?.errors)
                }
            }

            throw error
        })

    return instanceAxios

}


export default callApi