import { withFormik } from "formik";
import { InnerRegisterWithNumberInterface } from "../../../contracts/auth";
import InnerRegisterWithNumber from "./innerRegisterWithNumber";
import * as yup from 'yup'
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
    handleSubmit: (props) => {
        console.log(props)
    },
    validationSchema: validationSchema
})(InnerRegisterWithNumber)

export default RegisterWithNumber