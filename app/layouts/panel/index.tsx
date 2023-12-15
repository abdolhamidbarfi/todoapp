import { ReactNode } from "react";
import { isAuth } from "../../confige/isAuth";
import Router, { useRouter } from "next/router";
import { removeLoginToken } from "../../confige/token";

interface Props {
    children: ReactNode
}

const LayoutPanel: React.FC<Props> = ({ children }) => {
    const router = useRouter()
    const { user, error, loading } = isAuth()

    const logout = () => {
        removeLoginToken()
        router.push('/')
    }

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
            <span onClick={logout}>Logout</span>
        </div>
    )
}

export default LayoutPanel