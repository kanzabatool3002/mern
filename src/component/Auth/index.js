import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Home from "../Home";

function Auth(props) {
    const [isAuth, setAuth] = useState(false);
    const navigate = useNavigate();
    const getUsers = async () => {
        if (localStorage.getItem("users")) {
            setAuth(true)
        } else {
            navigate('/')
        }
    };
    useEffect(() => {
        getUsers();
    }, []);


    return (
        <>
            {!isAuth ? (
                <Home />
            ) :
                props.children
            }
        </>
    );
};

export default Auth;



