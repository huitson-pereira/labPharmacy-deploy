import React, { useState, useEffect } from "react";
import { Form, Table } from "react-bootstrap";
import styles from "../styles/ListaFarmacias.module.css";

function ListaFarmacias() {
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    const listaDeFarmacias = JSON.parse(localStorage.getItem("bd_farmacias")) || [];
    if (listaDeFarmacias.length > 0) {
      setFormDataList(listaDeFarmacias);
    }
  }, []);

  return (
    <Form className={styles.container} >
      <h2 className={styles.heading}>Farmácias Cadastradas</h2>
      <div className={styles.tableContainer}>
      <Table className={`${styles.Table} ${styles.customTable}`} striped bordered hover responsive>
        <thead className={styles.stickyHeader}>
          <tr>
            <th>Razão Social</th>
            <th>CNPJ</th>
            <th>Nome Fantasia</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Celular</th>
            <th>CEP</th>
            <th>Endereço</th>
            <th>Número</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Complemento</th>
          </tr>
        </thead>
        <tbody>
          {formDataList.map((formData, index) => (
            <tr key={index}>
              <td className={styles.largura__th__td}>{formData.razaoSocial}</td>
              <td>{formData.cnpj}</td>
              <td>{formData.nomeFantasia}</td>
              <td>{formData.email}</td>
              <td>{formData.telefone}</td>
              <td>{formData.celular}</td>
              <td>{formData.cep}</td>
              <td>{formData.logradouro}</td>
              <td>{formData.numero}</td>
              <td>{formData.bairro}</td>
              <td>{formData.cidade}</td>
              <td>{formData.estado}</td>
              <td>{formData.complemento}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </Form>
  );
}

export default ListaFarmacias;