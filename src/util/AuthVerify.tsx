import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import jwtDecode from "jwt-decode";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";

type Props = {
    logOut: () => any;
}
const AuthVerify = (props:Props) => {
    const {token} = useSelector((state: RootState) => state.auth)
    let location = useLocation();
    const dispatch = useDispatch<any>();

    //     if (decodedJwt.exp * 1000 < Date.now()) {
    //         dispatch(userLogout())
    //     }
    // }
    useEffect(() => {

        if (token) {
            const decodedJwt:any = jwtDecode(token);
            if (decodedJwt.exp * 1000 < Date.now()) {
                props.logOut();
            }
        }
    }, [location]);

    return <></>;
};

export default AuthVerify;
