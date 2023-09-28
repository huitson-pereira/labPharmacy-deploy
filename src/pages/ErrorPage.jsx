import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import errorImage from "../image/erro404.jpg";
import style from "../styles/ErrorPage.module.css";
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navegate = useNavigate();
  return (
    <Container >
      <Row className={style.erro_container} >
        <Col className={style.erro_container_col}>
            <Image src={errorImage} className={style.col_image} fluid />
        </Col>
        <Col className={style.erro_container_col}>
          <span>Oops! algo deu errado</span>
          <br/>
          <Link to="/">Voltar para Home</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;