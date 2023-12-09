import { withFormik } from "formik";
import * as Yup from 'yup';
import { InnerRegisterFormInterface } from "../../contracts/auth";
import InnerRegisterForm from "./innerRegisterForm";
import callApi from "../../confige/callApi";
import Router from "next/router";

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
    handleSubmit:  async (values) => {
        try {
            const res = await callApi().post('/auth/register', values)
            res.status === 201 && Router.push('/auth/login')
            
        } catch (e) {
            console.log(e)
        }
    }
})(InnerRegisterForm)


export default RegisterForm