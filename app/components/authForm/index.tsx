import { InputInterface } from "../../contracts/components"
import { Form } from 'formik'
import Button from "../button"
import Input from "../input"

interface AuthFormInterface {
    title: string,
    name?: InputInterface
    email?: InputInterface
    password?: InputInterface
}


const AuthForm: React.FC<AuthFormInterface> = ({ title, email, password, name }) => {


    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    {title}
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                <Form className="space-y-6" >

                    {name ? <Input id={name.id} name={name.name} title={name.title} type={name.type} /> : ""}

                    {email ? <Input id={email.id} name={email.name} title={email.title} type={email.type} /> : ""}

                    {password ? <Input id={password.id} name={password.name} title={password.title} type={password.type} /> : ""}
                    
                    <Button title="Register" type="submit" />

                </Form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Start a 14 day free trial
                    </a>
                </p>
            </div>
        </div>
    )
}

export default AuthForm