import React, { useState, useEffect } from "react";
import { Form, Card, Button, Row, Col, Modal } from "react-bootstrap";
import style from "../styles/MedicamentoCard.module.css"

function MedicamentoCard() {
  const [formDataList, setFormDataList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMedicamento, setSelectedMedicamento] = useState([]);

  useEffect(() => {
    const listaDeMedicamentos = JSON.parse(localStorage.getItem("bd_medicamento")) || [];
    if (listaDeMedicamentos.length > 0) {
      setFormDataList(listaDeMedicamentos);
    }
  }, []);

  const handleShowModal = (formData) => { 
    setSelectedMedicamento(formData);
    setShowModal(true);
  };

  return (
    <Form className={style.container}>
      <h2 className={style.h2}>Medicamentos Cadastrados</h2>
      <div className={style.cardContainer}>
        <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
          {formDataList.map((formData, index) => (
            <Col key={index}>              
              <Card bg="light" border="primary" style={{ width: "15rem"}} className={style.card}>                
                <Card.Img variant="top" src={formData.tipo === "Comum" ? "src/image/capsula.png" : "src/image/medicamento.png"} />                
                <Card.Body >                  
                  <Card.Title>{formData.medicamento}</Card.Title>
                  <Card.Text>
                    <strong>Descrição:</strong> {formData.descricao}
                    <br />
                  </Card.Text>
                </Card.Body>
                <Button variant="primary" onClick={() => handleShowModal(formData)}>Detalhe do medicamento</Button>
              </Card>
              <br />              
            </Col>                      
          ))}          
        </Row>         
      </div>
      <Modal size="lg" centered show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className={style.modal_title}>Detalhe do Medicamento</Modal.Title>
        </Modal.Header>
        <Modal.Body  className={style.modal_body}>
          {selectedMedicamento && ( 
            <>
              <strong>Medicamento:</strong> {selectedMedicamento.medicamento}
              <br />
              <strong>Logradouro:</strong> {selectedMedicamento.logradouro}
              <br />
              <strong>Dosagem:</strong> {selectedMedicamento.dosagem}
              <br />
              <strong>Tipo:</strong> {selectedMedicamento.tipo}
              <br />
              <strong>Preço unitário:</strong> {selectedMedicamento.precoUnitario}
              <br />
              <strong>Descrição:</strong> {selectedMedicamento.descricao}
              <br />
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}

export default MedicamentoCard;