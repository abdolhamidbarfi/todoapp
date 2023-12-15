import { FormikProps } from "formik";
import { InnerRegisterWithNumberInterface } from "../../../contracts/auth";
import AuthForm from "../../../components/authForm";

const InnerLoginWithNumber = (props : FormikProps<InnerRegisterWithNumberInterface>) => {
    return (
        <AuthForm 
        title="Enter Phone Number to Login"
        data={[
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

export default InnerLoginWithNumber