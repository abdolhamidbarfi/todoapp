import UserInfo from "../../app/components/panel/userInfo";
import LayoutPanel from "../../app/layouts/panel";
import { NextPageWiteLayout } from "../_app";


const Panel: NextPageWiteLayout = () => {
    
    return (
        <>
            <UserInfo />
        </>
    )
}

Panel.getLayout = page => <LayoutPanel>{page}</LayoutPanel>


export default Panel