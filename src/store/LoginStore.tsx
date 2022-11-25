import {createContext, ReactNode, useState} from 'react'
import { Nodes } from '../types/Nodes'

export const loginContext = createContext({
    isLogin: false,
    loginHandler: () => {}
})

const LoginContext = (props: Nodes) => {
    const [isLogin, setIsLogin] = useState(false)


    const loginHandler = () =>{
        setIsLogin(prev => !prev)
    }
    console.log(isLogin)
    const defaultValues = {
        isLogin,
        loginHandler
    }

    return (
        <>
            <loginContext.Provider value={defaultValues}>
                {props.children}
            </loginContext.Provider>
        </>
    )
}

export default LoginContext