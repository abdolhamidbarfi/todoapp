export interface InnerRegisterFormInterface {
    name: string,
    email: string,
    password: string
}

export interface InnerLoginFormInterface {
    email: string,
    password: string
}

export interface InnerRegisterWithNumberInterface {
    name: string,
    phone: string
}

export interface InnerLoginWithNumberInterface {
    phone: string
}


export interface InnerVerifyNumberInterface {
    code: string,
    token: string
}
