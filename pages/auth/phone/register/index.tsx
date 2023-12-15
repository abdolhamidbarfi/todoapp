import RegisterWithNumber from "../../../../app/auth/phone/register/registerWithNumber";
import GuestLayout from "../../../../app/layouts/guest";
import { NextPageWiteLayout } from "../../../_app";

const Register : NextPageWiteLayout = () => {
    return (
        <>
        <RegisterWithNumber />
        </>
    )
}

Register.getLayout = page => <GuestLayout>{page}</GuestLayout>


export default Register