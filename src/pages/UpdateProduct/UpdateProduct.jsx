import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/ComponentFooter";
import styled from "styled-components";
import NavManage from "../../components/NavManageProduct/NavManage";
import { useParams } from "react-router-dom";
import { findProductById } from "../../services/ProductService";
import React, { useEffect, useState } from "react";
import CircularProgressBar from "../RegisterProduct/CircularProgressBar";
import PreviewProduct from "../RegisterProduct/PreviewProduct";

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 30px auto;
  padding: 30px;
  gap: 20px;
  transition: 0.3s;
`;

const WaitProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 100%;
    margin: auto;
`
const SidePreview = styled.div`
    padding: 0 10px;
`

const SideForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
    width: 100%;
    .title {
        text-align: center;
        margin-top: 20px;
    }
    form{
        text-align: center;
        width: 100%;
        label {
            margin-top: 10px;
        }
        .description {
            padding: 10px;
            width: 80%;
            height: 100px;
        }
        .button_submit {
            margin-top: 10px;
            input[type="submit"] {
            line-height: 100%;
         }
    }
    input {
    width: 80%;
    height: 35px;
    font-size: 20px;
    padding: 5px;
    /* margin: auto; */
    }
}
`

const InputArea = styled.div`
    display: flex;
    justify-content: center;
`


function UpdateProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState();

    const [nome, setNome] = useState();
    const [preco, setPreco] = useState(999.99);
    /* const [image, setImage] = useState([]); */
    const [cor, setCor] = useState('Preto');
    const [descricao, setDescricao] = useState();
    const [categoria, setCategoria] = useState();
    const [estoque, setEstoque] = useState();

    const getProduct = async (id) => {
        let product;
        try {
            product = await findProductById(id);
        } catch (error) {
            console.log(error);
            return;
        }
        return (product);
    }

    useEffect(() => {
        getProduct(id).then(result => {
            setNome(result.nome);
            setPreco(result.preco);
            setCor(result.cor);
            setDescricao(result.descricao);
            setEstoque(result.estoque);
            setCategoria(result.categoria);
            setProduct(result)
        });
        console.log(product);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    if (!product) {
        return (
            <>
                <Header />
                <NavManage />
                <Container>
                    <WaitProduct>
                        <CircularProgressBar size={80} />
                    </WaitProduct>
                </Container>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <NavManage />
            <Container>
                <SidePreview>
                    <PreviewProduct name={nome} price={preco} cover={product.images[0]} />
                </SidePreview>
                <SideForm>
                    <div className="title">
                        <h2>Update Product</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name:</label>
                            <br />
                            <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
                            {/* <input type="checkbox" /> */}
                        </div>
                        <div>
                            <label>Description:</label>
                            <br />
                            <textarea
                                className="description"
                                type="text"
                                value={descricao}
                                onChange={(event) => setDescricao(event.target.value)}
                            />
                            {/* <input type="checkbox" /> */}
                        </div>
                        {/* <div>
                    <label htmlFor="">Category:</label>
                    <br />
                    <select name="" id="" onChange={handleChangeCategory} value={category}>
                        {categories.map((cat, index) => (
                        <option key={index} value={cat.value} disabled={cat.disabled}>
                            {cat.label}
                        </option>
                        ))}
                    </select>
                    </div> */}
                        <div>
                            <label>Quantity:</label>
                            <br />
                            <input
                                type="number"
                                min={0}
                                placeholder="0"
                                value={estoque}
                                onChange={(event) => setEstoque(event.target.value)}
                            />
                            {/* <input type="checkbox" /> */}
                        </div>
                        <div>
                            <label >Value:</label>
                            <br />

                            <input
                                type="text"
                                placeholder="0,00"
                                value={preco}
                                onChange={(event) => setPreco(event.target.value)}
                            />
                        </div>
                        {/* <div>
                    <label>Cor</label>
                    <div className="inputColor">
                        <select value={corSelecionada} onChange={handleChangeColor}>
                        {opcoesDeCores.map((opcao, index) => (
                            <option key={index} value={opcao.valor}>
                            {opcao.nome}
                            </option>
                        ))}
                        </select>
                        <span
                        style={{
                            border: "2px solid black",
                            borderRadius: "5px",
                            padding: "15px",
                            marginLeft: "10px",
                            width: "20px",
                            height: "20px",
                            display: "inline-block",
                            backgroundColor: corSelecionada,
                        }}
                        ></span>
                    </div>
                    </div> */}
                        {/* <div>
                    <label htmlFor="">Cover Image:</label>
                    <br />
                    <input className="img-input" type="file" accept="image/*" onChange={handleFile} />
                    </div>
                    <div>
                    <label htmlFor="">Image Details:</label>
                    <br />
                    <input
                        className="img-input"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFiles}
                    />
                    </div> */}
                        <div className="button_submit">
                            <input type="submit" value={"Update"} />
                        </div>
                        {/* {progressBar && (
                    <Box sx={{ width: "100%", marginTop: "8px" }}>
                        <h5>Fazendo upload das imagens</h5>
                        <Root>
                        <CircularProgress />
                        </Root>
                    </Box>
                    )}
                    {progressInsertDB && (
                    <div className="loading_banco_de_dados">
                        <h5>Fazendo upload no banco de dados</h5>
                        <Root>
                        <CircularProgress />
                        </Root>
                    </div>
                    )} */}
                    </form>
                </SideForm>
            </Container>
            <Footer />
        </>
    );
}

export default UpdateProduct;