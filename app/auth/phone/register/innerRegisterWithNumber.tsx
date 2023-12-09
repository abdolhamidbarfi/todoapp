import { FormikProps } from "formik";
import { InnerRegisterWithNumberInterface } from "../../../contracts/auth";
import AuthForm from "../../../components/authForm";

const InnerRegisterWithNumber = (props : FormikProps<InnerRegisterWithNumberInterface>) => {
    return (
        <AuthForm 
        title="Register With Number"
        data={[
            {
                name : "name",
                id : "name",
                title: "Enter your Name",
                type: "text"
            },
            {
                name : "phone",
                id : "phone",
                title: "Enter your phone Number",
                type: "text"
            }
        ]}
        />
    )
}

export default InnerRegisterWithNumber