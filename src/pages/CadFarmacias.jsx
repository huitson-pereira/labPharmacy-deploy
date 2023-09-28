import { Form, Button, Container } from "react-bootstrap";
import style from "../styles/CadFarmacias.module.css"
import { useEffect, useState } from "react";

function CadFarmacias() {
    const [razaoSocial, setRazaoSocial] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [nomeFantasia, setNomeFantasia] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [celular, setCelular] = useState("");
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [complemento, setComplemento] = useState("");
    const [farmaciaList, setFarmaciaList] = useState([]);

    useEffect(() => {
        const listaDeFarmacias = JSON.parse(localStorage.getItem("bd_farmacias")) || []
        if (listaDeFarmacias.length > 0){
            setFarmaciaList(listaDeFarmacias);
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem("bd_farmacias", JSON.stringify(farmaciaList));
    }, [farmaciaList]);

    const buscarEnderecoPorCep = (cep) => {
        return fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao buscar endereço por CEP");
                }
                return response.json();
            });
    }

    const handleCepChange = (event) => {
        const cep = event.target.value;
        setCep(cep);
    
        buscarEnderecoPorCep(cep)
            .then(data => {
        
            setLogradouro(data.logradouro);
            setBairro(data.bairro);
            setCidade(data.localidade);
            setEstado(data.uf);
            
            })
            .catch(error => {
                console.error("Erro ao buscar endereço por CEP:", error);
            });
    }

    const handleFormSubmit = () => {
        if(!razaoSocial || !cnpj || !nomeFantasia || !email || !telefone || !celular || !cep || !logradouro || !numero || !bairro || !cidade || !estado || !complemento){
            alert("Todos os campos devem ser preenchidos")
        }else{
            const novaFarmacia = {
                razaoSocial, 
                cnpj, 
                nomeFantasia, 
                email, 
                telefone, 
                celular,
                cep,
                logradouro,
                numero,
                bairro,
                cidade,
                estado,
                complemento
            }
                
            setFarmaciaList([...farmaciaList, novaFarmacia]);
    
            
            setRazaoSocial(""), 
            setCnpj(""); 
            setNomeFantasia(""); 
            setEmail(""); 
            setTelefone("");
            setCelular("");
            setCep("");
            setLogradouro("");
            setNumero("");
            setBairro("");
            setCidade("");
            setEstado("");
            setComplemento("");
        };
        alert("Cadastrado com sucesso")
    };

    const limparCampos = () =>{
        setRazaoSocial(""), 
            setCnpj(""); 
            setNomeFantasia(""); 
            setEmail(""); 
            setTelefone("");
            setCelular("");
            setCep("");
            setLogradouro("");
            setNumero("");
            setBairro("");
            setCidade("");
            setEstado("");
            setComplemento("");
    }

    return(
        <Form className={style.cadFar__container} onSubmit={(e)=>{e.preventDefault()}}>
            <h1 className={style.cadfar__title}>Cadastro de farmacias</h1>
            <Container className="row" id={style.cadfar__formgroup}>
                <Form.Group className={`mb-3 col-4 ${style.cadfar__formgroup}`}>
                    <Form.Label>Razão social</Form.Label>
                    <Form.Control 
                        className="form-control-sm" 
                        type="text" 
                        placeholder="Digite a razão social" 
                        value={razaoSocial}
                        onChange={(e)=>setRazaoSocial(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className={`mb-3 col-4 ${style.cadfar__formgroup}`}>
                    <Form.Label>Cnpj</Form.Label>
                    <Form.Control 
                        className="form-control-sm" 
                        type="text" 
                        placeholder="Digite o Cnpj" 
                        value={cnpj}
                        onChange={(e)=>setCnpj(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className={`mb-3 col-4 ${style.cadfar__formgroup}`}>
                    <Form.Label>Nome fantasia</Form.Label>
                    <Form.Control 
                        className="form-control-sm" 
                        type="text" 
                        placeholder="Digite o nome fantasia" 
                        value={nomeFantasia}
                        onChange={(e)=>setNomeFantasia(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className={`mb-3 col-4 ${style.cadfar__formgroup}`}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        className="form-control-sm" 
                        type="email" 
                        placeholder="Digite o Email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className={`mb-3 col-4 ${style.cadfar__formgroup}`}>
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control 
                        className="form-control-sm" 
                        type="text" 
                        placeholder="Digite o telefone" 
                        value={telefone}
                        onChange={(e)=>setTelefone(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className={`mb-3 col-4 ${style.cadfar__formgroup}`}>
                    <Form.Label>Celular</Form.Label>
                    <Form.Control 
                        className="form-control-sm" 
                        type="text" 
                        placeholder="Digite o Celular" 
                        value={celular}
                        onChange={(e)=>setCelular(e.target.value)}
                    />
                </Form.Group>
            </Container>
            <Container className="row" id={style.cadfar__formgroup}>
                <Form.Group className={`col-3 ${style.cadfar__formgroup}`}>
                    <Form.Label>Cep</Form.Label>
                    <Form.Control 
                        className="form-control-sm" 
                        type="text" 
                        placeholder="Digite o Cep" 
                        value={cep}
                        onChange={handleCepChange}
                    />
                </Form.Group>
                <Form.Group className={`col-6 ${style.cadfar__formgroup}`}>
                    <Form.Label>Logradouro/Endereço</Form.Label>
                    <Form.Control 
                        className="form-control-sm" 
                        type="text" 
                        value={logradouro}
                        onChange={(e)=>setLogradouro(e.target.value)}
                        readOnly={true}
                    />
                </Form.Group>
                <Form.Group className={`mb-3 col-3 ${style.cadfar__formgroup}`}>
                    <Form.Label>Número</Form.Label>
                    <Form.Control 
                        className="form-control-sm" 
                        type="number" 
                        placeholder="Digite o número" 
                        value={numero}
                        onChange={(e)=>setNumero(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className={`mb-3 col-4 ${style.cadfar__formgroup}`}>
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control 
                        className="form-control-sm" 
                        type="text" 
                        value={bairro}
                        onChange={(e)=>setBairro(e.target.value)}
                        readOnly={true}
                    />
                </Form.Group>
                <Form.Group className={`col-4 ${style.cadfar__formgroup}`}>
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control 
                        className="form-control-sm" 
                        type="text"
                        value={cidade}
                        onChange={(e)=>setCidade(e.target.value)}
                        readOnly={true}
                    />
                </Form.Group>
                <Form.Group className={`col-4 ${style.cadfar__formgroup}`}>
                    <Form.Label>Estado</Form.Label>
                    <Form.Control 
                        className="form-control-sm" 
                        type="text"
                        value={estado}
                        onChange={(e)=>setEstado(e.target.value)}
                        readOnly={true}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control 
                        className="form-control-sm" 
                        type="text"
                        value={complemento}
                        onChange={(e)=>setComplemento(e.target.value)}
                    />
                </Form.Group>
            </Container>

            <Container className={style.cadfar__botao__container}>
                <Button className="btn-sm" variant="primary" type="submit" onClick={limparCampos}>
                    Limpar
                </Button>
                <Button onClick={handleFormSubmit} className="btn-sm" variant="primary" >
                    Salvar
                </Button>
            </Container>
        </Form>
    )
}

export default CadFarmacias;