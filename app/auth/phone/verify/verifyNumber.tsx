import { withFormik } from "formik";
import { InnerVerifyNumberInterface } from "../../../contracts/auth";
import * as yup from 'yup'
import InnerVerifyNumber from "./innerVerifyNumber";
import callApi from "../../../confige/callApi";
import Router from "next/router";
import { storeLoginToken } from "../../../confige/token";

interface VerifyNumberInterface {
    token: string
    onClearToken: () => void
}

const validationSchema = yup.object().shape({
    code: yup.string().required().min(6).max(6),
    token: yup.string().required(),

})

const VerifyNumber = withFormik<VerifyNumberInterface, InnerVerifyNumberInterface>({
    mapPropsToValues: (props) => {
        return {
            code: "",
            token: props.token
        }
    },
    handleSubmit: async (values, { props }) => {
        try {
            const res = await callApi().post('/auth/login/verify-phone', values)
            if (res.status === 200) {
                await storeLoginToken(res.data?.user?.token)
                props.onClearToken()
                setTimeout(() => {
                    Router.push('/panel')
                }, 2000)
            }
        } catch (err) {
            console.log(err)
        }
    },
    validationSchema: validationSchema
})(InnerVerifyNumber)

export default VerifyNumber