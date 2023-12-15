import { withFormik } from "formik";
import { InnerRegisterWithNumberInterface } from "../../../contracts/auth";
import InnerRegisterWithNumber from "./innerRegisterWithNumber";
import * as yup from 'yup'
import callApi from "../../../confige/callApi";
import Router from "next/router";
interface RegisterWithNubmerInterface {

}

const validationSchema = yup.object().shape({
    name: yup.string().required().min(3).max(255),
    phone: yup.string().required().min(11).max(11)
})

const RegisterWithNumber = withFormik<RegisterWithNubmerInterface, InnerRegisterWithNumberInterface>({
    mapPropsToValues: (props) => {
        return {
            name: "",
            phone: ""
        }
    },
    handleSubmit: async (values) => {
        try {
            const res = await callApi().post('/auth/register', values)
            res.status === 201 && Router.push('/auth/phone/login')
        } catch (err) {
            console.log(err)
        }
    },
    validationSchema: validationSchema
})(InnerRegisterWithNumber)

export default RegisterWithNumber