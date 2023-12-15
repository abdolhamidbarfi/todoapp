import { isAuth } from "../../confige/isAuth"

const UserInfo = () => {
    const {user} = isAuth()
    return (
        <>
        <span>Name: </span>
        <span>{user?.name}</span>
        </>
    )
}

export default UserInfo