import LoginForm from "../../../app/auth/login/loginForm";
import { useCookies } from "react-cookie";
import { NextPageWiteLayout } from "../../_app";
import GuestLayout from "../../../app/layouts/guest";


const Login: NextPageWiteLayout = () => {

    const [ cookies , setCookies ] = useCookies(["shopy-token"])

    return (
       <LoginForm onSetCookies={setCookies}/>
    )

}

Login.getLayout = page => <GuestLayout>{page}</GuestLayout>

export default Login