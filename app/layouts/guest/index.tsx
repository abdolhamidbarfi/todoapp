import { ReactNode } from "react"
import { isAuth } from "../../confige/isAuth"
import Router from "next/router"


interface Props {
    children : ReactNode
}

const GuestLayout : React.FC<Props> = ({children}) => {

    const {user} = isAuth()

    if (user) Router.push('/panel')

    return (
        <>
        {children}
        </>
    )
}

export default GuestLayout