import AdminBody from "../../app/components/admin/adminBody";
import AdminLayout from "../../app/layouts/admin";
import { NextPageWiteLayout } from "../_app";


const Products : NextPageWiteLayout = () => {

    return (
        <AdminBody title="Products Dashboard"/>
    )
}

Products.getLayout = page => <AdminLayout title="products">{page}</AdminLayout>

export default Products