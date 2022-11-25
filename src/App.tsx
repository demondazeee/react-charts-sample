import { useContext } from "react"
import Dashboard from "./components/Dashboard/Dashboard"
import Login from "./components/Login/Login"
import { loginContext } from "./store/LoginStore"

const App = () => {
  const loginCtx = useContext(loginContext)
  console.log(loginCtx.isLogin)
  return (
    <>

        {!loginCtx.isLogin && <Login />} 
        {loginCtx.isLogin && <Dashboard />}
    </>
  )
}

export default App