import { useRouter } from "next/router"
import { ReactNode, useState } from "react"

import { isAuth } from "../../confige/isAuth"
import NavigationBar from "../../components/admin/navigationBar"
import SideBar from "../../components/admin/sidebar"



interface Props {
    children: ReactNode
    title: string
}

const AdminLayout = ({ children , title }: Props) => {
    const router = useRouter();
    const { user, error, loading } = isAuth();

    if (loading) return <h1>Loading ...</h1>

    if (error) {
        // show error
        router.push('/auth/login')
        return <></>;
    }

    return (
        <>
            <div>
                <SideBar  title={title}/>
                <div className="flex flex-col md:pr-64">
                    <NavigationBar />
                    {children}
                </div>
            </div>
        </>
    )
}


export default AdminLayout;