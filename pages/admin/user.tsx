import AdminBody from "../../app/components/admin/adminBody";
import AdminLayout from "../../app/layouts/admin";
import { NextPageWiteLayout } from "../_app";


const User : NextPageWiteLayout = () => {

    return (
        <AdminBody title="User Dashboard"/>
    )
}

User.getLayout = page => <AdminLayout title="user">{page}</AdminLayout>

export default User