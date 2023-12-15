import Cookies from "universal-cookie"



export const storeLoginToken = async (token: string) => {

    await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
    })

    // const cookies = new Cookies
    // cookies.set('login-token', token, {
    //     maxAge: 3600 * 20 * 30,
    //     domain: 'localhost',
    //     path: '/',
    //     sameSite: 'lax'
    // })
}


export const removeLoginToken = () => {
    fetch('/api/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}



