import { NextPage } from "next";
import LoginForm from "../../../app/auth/login/loginForm";
import { useCookies } from "react-cookie";


const Login: NextPage = () => {

    const [ cookies , setCookies ] = useCookies(["shopy-token"])

    return (
       <LoginForm onSetCookies={setCookies}/>
    )
}

export default Login