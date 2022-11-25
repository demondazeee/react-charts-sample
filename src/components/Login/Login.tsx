import { useContext } from "react"
import styled from "styled-components"
import { loginContext } from "../../store/LoginStore"
import { Button } from "../UI/Buttons"
import { Card } from "../Layout/Card"
import { Container } from "../Layout/Container"
import { Form } from "../UI/Form"
import { H2 } from "../UI/Headings"
import { Input } from "../UI/Inputs" 

const FormContainer = styled(Card)`
    max-width: 400px;
    margin: auto;
    margin-top: 50px;
`

const LoginForm = styled(Form)`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    gap: 3rem;
`

const LoginInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const LoginButton = styled(Button)`

`

const Login = () => {
    const loginCtx = useContext(loginContext)


    return (
        <>
            <Container>
                <FormContainer>
                    <H2>Login</H2>
                    <LoginForm onSubmit={(e) =>{
                            e.preventDefault()

                            loginCtx.loginHandler()
                        }}>
                        <LoginInputs>
                            <Input placeholder="Username" type="text" />
                            <Input placeholder="Password" type="password" />
                        </LoginInputs>
                        <LoginButton type="submit">Login</LoginButton>
                    </LoginForm>
                </FormContainer>
            </Container>
        </>
    )
}

export default Login