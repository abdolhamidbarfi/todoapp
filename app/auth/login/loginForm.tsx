import { withFormik } from "formik";
import * as Yup from 'yup';
import { InnerLoginFormInterface } from "../../contracts/auth";
import InnerLoginForm from "./innerLoginForm";
import callApi from "../../confige/callApi";
import ValidationErrors from "../../exeptions/validationErrors";

interface LoginFormInterface {
    onSetCookies: any
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
    handleSubmit: async (values, { props, setFieldError }) => {
        try {
            const res = await callApi().post('/auth/login', values)
            props.onSetCookies('shopy-token', res.data.token, {
                'maxAge': 3600 * 20 * 30,
                'domin': 'localhost',
                'path': '/',
                'sameSite': 'lax'
            })
        } catch (error) {
            if (error instanceof ValidationErrors) {
                Object.entries(error.message)
                .forEach(([key, value]) => setFieldError(key, value as string))
            }
        }
    }
})(InnerLoginForm)


export default LoginForm