import { withFormik } from "formik";
import { InnerLoginWithNumberInterface } from "../../../contracts/auth";
import * as yup from 'yup'
import callApi from "../../../confige/callApi";
import InnerLoginWithNumber from "./innerLoginWithNumber";
import Router from "next/router";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { setToken } from "../../../store/slices/loginToken";

interface loginWithNumberInterface {
    onSetToken : Dispatch<AnyAction>
}

const validationSchema = yup.object().shape({
    phone: yup.string().required().min(11).max(11),
})

const LoginWithNumber = withFormik<loginWithNumberInterface, InnerLoginWithNumberInterface>({
    mapPropsToValues: (props) => {
        return {
            phone: ""
        }
    },
    handleSubmit: async (values , {props}) => {
        try {
            const res = await callApi().post('/auth/login', values)
            if (res.status === 200) {
                props.onSetToken(setToken(res.data.token))
                res.status === 200 && Router.push('/auth/phone/verify')
            }
        } catch (err) {
            console.log(err)
        }
    },
    validationSchema: validationSchema
})(InnerLoginWithNumber)

export default LoginWithNumber