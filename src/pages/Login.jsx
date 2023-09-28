import { Button, Container, Form } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import style from "../styles/Login.module.css";
import React, { useContext } from "react";
import { PharmacyContext } from "../contexts/PharmacyContext";

const Login = () => {
    const {
        setUserEmail,
        setUserSenha,
        userEmail,
        userSenha,
    } = useContext(PharmacyContext);
  
    const navegate = useNavigate();
    
    const validarCampos = () => {
        if (!userEmail) {
            alert("Por favor, preencha o campo de Email.");
            return false;
        }
        if (userSenha.length < 8) {
            alert("A senha deve ter pelo menos 8 caracteres.");
            return false;
        }
        return true;
    };

    const chamarPagina = () => {
        if (validarCampos()) {
            navegate("/lista-farmacia");
            setUserEmail("");
            setUserSenha("")
        }
    }

    return(
        <Container className={style.container}>
        <h1>LabPharmacy System</h1>
        <Form className={style.login__container}>
            <h2 className={style.login__title}>Login</h2>
            <Container className="row">
                <Form.Group className="mb-3 col-12" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Digite o email"
                        required
                        onChange={(e)=>setUserEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3 col-12" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Digite a senha"
                        required
                        onChange={(e)=>setUserSenha(e.target.value)}/>
                </Form.Group>
            </Container>
            <Container className={style.botao__container}>
                <Button 
                    className={style.botao} 
                    variant="primary" 
                    type="submit" 
                    onClick={chamarPagina}>
                    Acessar
                </Button>
                <Button className={style.botao} variant="primary" type="submit" >
                    Cadastrar
                </Button>
            </Container>
        </Form>
        </Container>
    )           
}

export default Login;