import AuthForm from "../../components/authForm"
import { InnerRegisterFormInterface } from "../../contracts/auth"
import { FormikProps } from 'formik'

const InnerRegisterForm = (props: FormikProps<InnerRegisterFormInterface>) => {
    return (
        <AuthForm
            title="Register and create Acount"
            data={[
                {
                    id: "name",
                    name: "name",
                    title: "Name",
                    type: "text"
                },
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

export default InnerRegisterForm