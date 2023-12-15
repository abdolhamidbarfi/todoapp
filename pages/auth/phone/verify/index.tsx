import { NextPage } from "next";
import VerifyNumber from "../../../../app/auth/phone/verify/verifyNumber";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import Router from "next/router";
import { useEffect } from "react";
import { setToken } from "../../../../app/store/slices/loginToken";
import { NextPageWiteLayout } from "../../../_app";
import GuestLayout from "../../../../app/layouts/guest";


const Verify: NextPageWiteLayout = () => {

    const loginToken = useAppSelector(state => state.loginToken)
    const dispatch = useAppDispatch()

    const clearToken = () => {
        dispatch(setToken(""))
    }

    // useEffect(() => {
    //     Router.beforePopState(() => {
    //         dispatch(setToken(""))
    //         Router.push('/auth/phone/login')
    //         return true
    //     })
    //     loginToken.token ? "" : Router.push('/auth/phone/login')
    // }, [loginToken.token])

    return (
        <VerifyNumber token={loginToken.token} onClearToken={clearToken} />
    )
}

Verify.getLayout = page => <GuestLayout>{page}</GuestLayout>
export default Verify