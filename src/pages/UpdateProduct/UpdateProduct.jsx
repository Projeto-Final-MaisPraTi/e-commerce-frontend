import Header from "../../components/Header/Header";
import Update from "./Update";
import Footer from "../../components/Footer/ComponentFooter";
import styled from "styled-components";
import NavManage from "../../components/NavManageProduct/NavManage";
import { useParams } from "react-router-dom";
import { findProductById } from "../../services/ProductService";
import React, {useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  width: 77%;
  margin: 30px auto;
  padding: 30px;
  box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
  gap: 20px;
  transition: 0.3s;
`;

function UpdateProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState();

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
        getProduct(id).then(result => setProduct(result));
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
                    <div>Loading...</div>
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
        <form onSubmit={handleSubmit}>
            <div>
            <label>Name:</label>
            <br />
            <input type="text" value={product.nome} />
            </div>
            <div>
            <label>Description:</label>
            <br />
            <textarea
                className="description"
                type="text"
                value={product.descricao}
            />
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
                value={product.estoque}
            />
            </div>
            <div>
            <label >Value:</label>
            <br />
            <input
                type="text"
                placeholder="0,00"
                value={product.preco}
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
            <input type="submit" value={"Enviar"} />
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
      </Container>
      <Footer />
    </>
  );
}

export default UpdateProduct;