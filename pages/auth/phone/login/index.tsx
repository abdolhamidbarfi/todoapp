import LoginWithNumber from "../../../../app/auth/phone/login/loginWithNumber";
import { useDispatch } from "react-redux";
import { NextPageWiteLayout } from "../../../_app";
import GuestLayout from "../../../../app/layouts/guest";

const Login : NextPageWiteLayout = () => {
   

    const dispatch = useDispatch()
    return (
        <LoginWithNumber onSetToken={dispatch}/>
    )
}

Login.getLayout = page => <GuestLayout>{page}</GuestLayout>


export default Login