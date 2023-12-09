import AuthForm from "../../components/authForm"
import { InnerLoginFormInterface } from "../../contracts/auth"
import { FormikProps } from 'formik'

const InnerLoginForm = (props: FormikProps<InnerLoginFormInterface>) => {
    return (
        <AuthForm
            title="Login in your account"
            data={[
                {
                    id: "email",
                    name: "email",
                    title: "Email Address",
                    type: "email"
                },

                {
                    id: "password",
                    name: "password",
                    title: "Password",
                    type: "password"
                }
            ]}
        />
    )

}

export default InnerLoginForm