import { withFormik } from "formik";
import * as Yup from 'yup';
import { InnerLoginFormInterface } from "../../contracts/auth";
import InnerLoginForm from "./innerLoginForm";

interface LoginFormInterface {

}

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().min(3).max(255),
    password: Yup.string().required().min(3).max(255)
})


const LoginForm = withFormik<LoginFormInterface, InnerLoginFormInterface>({
    mapPropsToValues: (props) => {
        return {
            email: "",
            password: ""
        }
    },
    validationSchema: validationSchema,
    handleSubmit: (props) => {
        console.log(props)
    }
})(InnerLoginForm)


export default LoginForm