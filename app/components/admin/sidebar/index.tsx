import { useRouter } from "next/router"
import SidebarDesktop from "./desktop"
import SidebarMobile from "./mobile"
import {
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'

interface Props {
}

const SideBar: React.FC<Props> = () => {

    const router = useRouter()

    const navigation = [
        { name: 'Dashboard', href: '/admin', icon: HomeIcon },
        { name: 'User', href: '/admin/user', icon: UsersIcon },
        { name: 'Products', href: '/admin/products', icon: FolderIcon }
    ]

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            <SidebarMobile navigation={navigation} classNames={classNames} path={router.asPath} />
            <SidebarDesktop navigation={navigation} classNames={classNames} path={router.asPath} />
        </>
    )
}

export default SideBar