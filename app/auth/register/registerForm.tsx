import { withFormik } from "formik";
import * as Yup from 'yup';
import { InnerRegisterFormInterface } from "../../contracts/auth";
import InnerRegisterForm from "./innerRegisterForm";

interface RegisterFormInterface {

}

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).max(255),
    email: Yup.string().required().email().min(3).max(255),
    password: Yup.string().required().min(3).max(255)
})


const RegisterForm = withFormik<RegisterFormInterface, InnerRegisterFormInterface>({
    mapPropsToValues: (props) => {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    validationSchema: validationSchema,
    handleSubmit: (props) => {
        console.log(props)
    }
})(InnerRegisterForm)


export default RegisterForm