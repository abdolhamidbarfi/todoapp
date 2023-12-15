import { FormikProps } from "formik";
import { InnerVerifyNumberInterface } from "../../../contracts/auth";
import AuthForm from "../../../components/authForm";

const InnerVerifyNumber = (props: FormikProps<InnerVerifyNumberInterface>) => {
    return (
        <AuthForm
            title="Verify your phone number"
            data={[
                {
                    name: "code",
                    id: "code",
                    title: "Enter Confirmation Code",
                    type: "text"
                }
            ]}
        />
    )
}

export default InnerVerifyNumber