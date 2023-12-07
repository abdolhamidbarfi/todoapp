import AuthForm from "../../components/authForm"
import { InnerRegisterFormInterface } from "../../contracts/auth"

const InnerRegisterForm = (props: InnerRegisterFormInterface) => {
    return (
        <AuthForm
            title="Register and create Acount"
            name={
                {
                    id: "name",
                    name: "name",
                    title: "Name",
                    type: "text"
                }
            }
            email={
                {
                    id: "email",
                    name: "email",
                    title: "Email Address",
                    type: "email"
                }
            }
            password={
                {
                    id: "password",
                    name: "password",
                    title: "Password",
                    type: "password"
                }
            }
        />
    )

}

export default InnerRegisterForm