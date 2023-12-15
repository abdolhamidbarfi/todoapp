import RegisterForm from "../../../app/auth/register/registerForm";
import GuestLayout from "../../../app/layouts/guest";
import { NextPageWiteLayout } from "../../_app";


const Register: NextPageWiteLayout = () => {

    return (
        <RegisterForm />
    )
}

Register.getLayout = page => <GuestLayout>{page}</GuestLayout>

export default Register