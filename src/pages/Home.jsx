import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "../styles/Home.module.css";
import logo from "../image/logo.png";
import imgHome from "../image/img-section-container.jpg"

export const Home = () => {
  const navegate = useNavigate()

  const goToLogin = () => {
    navegate("/login");
  };

    return(
        <Container className={style.container} >
            <nav className={style.cabecalho}>
                <div>
                    <img height={100} src={logo} alt="Logo da empresa" />
                    <span className={style.titulo}>LabPharmacy System</span>
                </div>
            </nav>
            <section className={style.section_container}>                
                <p className={style.titulo_p}>Bem-vido ao sistema</p>               
                <img src={imgHome} alt="Imagem de remédio" />
            </section>
            <section>
                <Button className={style.botao} type="button" onClick={goToLogin}>Logar no sistema</Button>
            </section>
        </Container>
    )
}