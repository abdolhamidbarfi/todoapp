import Cookies from "universal-cookie"



export const storeLoginToken = (token: string) => {
    const cookies = new Cookies
    cookies.set('login-token', token, {
        maxAge: 3600 * 20 * 30,
        domain: 'localhost',
        path: '/',
        sameSite: 'lax'
    })
}


export const removeLoginToken = () => {

}



