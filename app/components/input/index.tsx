import { InputInterface } from "../../contracts/components"
import {Field, ErrorMessage} from 'formik'


const Input: React.FC<InputInterface> = ({ id, name, type, title, className }) => {
    return (
        <>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                {title}
            </label>
            <div className="mt-2">
                <Field className={`${className ?? ""} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    id={id}
                    name={name}
                    type={type}
                />
                <ErrorMessage name={name} className="text-red-500 text-sm" component={"span"}/>
            </div>
        </>
    )
}

export default Input