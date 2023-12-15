import { ReactNode } from "react";
import { isAuth } from "../../confige/isAuth";
import Router from "next/router";

interface Props {
    children: ReactNode
}

const LayoutPanel: React.FC<Props> = ({ children }) => {

    const { user, error, loading } = isAuth()


    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        Router.push('/auth/phone/login')
        return <></>
    }

    return (
        <div>
            <h1 className="text-2xl bg-gray-100 text-center p-5">User Panel</h1>
            {children}
        </div>
    )
}

export default LayoutPanel