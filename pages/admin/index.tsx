import AdminBody from "../../app/components/admin/adminBody";
import AdminLayout from "../../app/layouts/admin";
import { NextPageWiteLayout } from "../_app";

const Admin : NextPageWiteLayout = () => {

    return (
        <AdminBody title="Main Dashboard"/>
    )
}

Admin.getLayout = page => <AdminLayout title="dashboard">{page}</AdminLayout>

export default Admin