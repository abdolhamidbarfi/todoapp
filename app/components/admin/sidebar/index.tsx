import SidebarDesktop from "./desktop"
import SidebarMobile from "./mobile"
import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

interface Props {
    title: string
}

const SideBar: React.FC<Props> = ({title}) => {

    const navigation = [
        { name: 'Dashboard', href: '/admin', icon: HomeIcon, current: title === "dashboard" },
        { name: 'User', href: '/admin/user', icon: UsersIcon, current: title === "user" },
        { name: 'Products', href: '/admin/products', icon: FolderIcon, current: title === "products" }
    ]

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            <SidebarMobile navigation={navigation} classNames={classNames}/>
            <SidebarDesktop navigation={navigation} classNames={classNames}/>
        </>
    )
}

export default SideBar