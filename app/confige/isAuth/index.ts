import useSWR from "swr"
import Cookies from "universal-cookie"
import callApi from "../callApi"


export const isAuth = () => {
    const {data , error} = useSWR('user_me' , () => {
        return callApi().get('/user')
    })

    return {user : data?.data?.user , error , loading: !data && !error}
}

