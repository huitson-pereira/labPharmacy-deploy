import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import style from "../styles/CadMedicamentos.module.css";

function CadMedicamentos() {
    const [medicamento, setMedicamento] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [dosagem, setDosagem] = useState("");
    const [tipo, setTipo] = useState("");
    const [precoUnitario, setPrecoUnitario] = useState("");
    const [descricao, setDescricao] = useState("");
    const [medicamentoList, setMedicamentoList] = useState([]);

    useEffect(() => {
        var listaDeMedicamentos = JSON.parse(localStorage.getItem("bd_medicamento")) || []
        
        if (listaDeMedicamentos.length > 0) {
            setMedicamentoList(listaDeMedicamentos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("bd_medicamento", JSON.stringify(medicamentoList));
    }, [medicamentoList]);

    const handleFormSubmit = (e) => {
        if(!medicamento || !logradouro || !dosagem || !tipo || !precoUnitario || !descricao){
            alert("Todos os campos devem ser preenchidos")
        }else{
            const novoMedicamento = {
                medicamento, 
                logradouro, 
                dosagem, 
                tipo, 
                precoUnitario, 
                descricao
            }        

            setMedicamentoList([...medicamentoList, novoMedicamento]);

            setMedicamento("");
            setLogradouro("");
            setDosagem("");
            setTipo("");
            setPrecoUnitario("");
            setDescricao("");
        };
        alert("Cadastrado com sucesso")
    };
    
    return(
        <Form className={style.cadMed__container} onSubmit={(e)=>e.preventDefault()}>
            <h1 className={style.cadMed__title}>Cadastro de medicamentos</h1>
            <Container id={style.cadMed__formgroup} className="row">
                <Form.Group className={`mb-3 col-7 ${style.cadMed__formgroup}`}>
                    <Form.Label>Medicamento</Form.Label>
                    <Form.Control 
                        className="form-control-sm" 
                        type="text" 
                        placeholder="Digite o medicamento"
                        value={medicamento}
                        required 
                        onChange={(e)=>setMedicamento(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className={`mb-3 col-5 ${style.cadMed__formgroup}`}>
                    <Form.Label>Logradouro</Form.Label>
                    <Form.Control 
                        className="form-control-sm" 
                        type="text" 
                        placeholder="Digite o logradouro" 
                        value={logradouro}
                        required
                        onChange={(e)=>setLogradouro(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className={`mb-3 col-6 ${style.cadMed__formgroup}`}>
                    <Form.Label>Dosagem</Form.Label>
                    <Form.Control 
                        className="form-control-sm" 
                        type="text" 
                        placeholder="Digite a dosagem"
                        value={dosagem}
                        required="true"
                        onChange={(e)=>setDosagem(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className={`mb-3 col-4 ${style.cadMed__formgroup}`}>
                    <Form.Label>Tipo</Form.Label>
                    <Form.Select size="sm" id="disabledSelect" value={tipo} onChange={(e)=>setTipo(e.target.value)}>
                        <option></option>
                        <option>Controlado</option>
                        <option>Comum</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className={`mb-3 col-2 ${style.cadMed__formgroup}`}>
                    <Form.Label>Preço unitário</Form.Label>
                    <Form.Control 
                        className="form-control-sm" 
                        type="number" 
                        placeholder="Digite o preço unitário"
                        value={precoUnitario}
                        required 
                        onChange={(e)=>setPrecoUnitario(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className={`mb-3 ${style.cadMed__formgroup}`}>
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control 
                        className="form-control-sm" 
                        as="textarea" 
                        rows={5} 
                        value={descricao}
                        required
                        onChange={(e)=>setDescricao(e.target.value)}
                    />
                </Form.Group>
            </Container>
            <Container className={style.cadMed__botao__container}>
                <Button className="btn-sm">Limpar</Button>
                <Button className="btn-sm" onClick={handleFormSubmit}>Salvar</Button>
            </Container>
        </Form>
    )
}

export default CadMedicamentos;