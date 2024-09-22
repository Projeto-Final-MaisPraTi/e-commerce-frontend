import img1 from "../../assets/image 57.png";
import img2 from "../../assets/image 58.png";
import img3 from "../../assets/image 61.png";
import img4 from "../../assets/image 59.png";
import imgCentro from "../../assets/image 63.png";

import freeDelivery from "../../assets/icon-delivery.png";
import returnDelivery from "../../assets/Icon-return.png";
import heartFavorite from "../../assets/icon-heart-favorite.png";

import "./ProductDetails.css";

import { useState } from "react";

const ProductDetails = () => {
  let [contadorQuantidade, setContadorQuantidade] = useState(0);

  function aumentaQuantidadeProduto() {
    setContadorQuantidade(contadorQuantidade + 1);
  }

  function diminuiQuantidadeProduto() {
    if (contadorQuantidade <= 0) {
      contadorQuantidade = 0;
    } else {
      setContadorQuantidade(contadorQuantidade - 1);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 caixa-imagem-menor">
          <img className="img" src={img1} alt="" />
          <img className="img" src={img2} alt="" />
          <img className="img" src={img3} alt="" />
          <img className="img" src={img4} alt="" />
        </div>
        <div className="col-md-6 caixa-imagem">
          <img className="img" src={imgCentro} alt="" />
        </div>
        <div className="col-md-4">
          <h4>Havic HV G-92 Gamepad</h4>
          <div className="review">
            <i className="fa-solid fa-star estrelaAmarela"></i>
            <i className="fa-solid fa-star estrelaAmarela"></i>
            <i className="fa-solid fa-star estrelaAmarela"></i>
            <i className="fa-solid fa-star estrelaAmarela"></i>
            <i className="fa-regular fa-star estrelaBranca"></i>
            <p id="numero-review">(150 Reviews)</p>|<span id="title"> In Stock</span>
          </div>
          <h5>$ 192.00</h5>
          <p>
            PlayStation 5 Controller Skin High quality vinyl with air hannel adhesive for easy
            bubble free install & mess free removal Pressure sensitive.
          </p>
          <hr />
          <div className="cores">
            <h5>Colors:</h5>
            <div className="color-options">
              <span className="color-circle circuloCorCinza"></span>
              <span className="color-circle circuloCorVermelho"></span>
            </div>
          </div>
          <div className="tamanhos">
            <h5>Size:</h5>
            <div className="size-options">
              <span>XS</span>
              <span>S</span>
              <span className="selected">M</span>
              <span>L</span>
              <span>XL</span>
            </div>
          </div>
          <div className="secao-quantidade">
            <div className="quantity">
              <button id="botaoMenos" onClick={diminuiQuantidadeProduto}>
                -
              </button>
              <input type="text" value={contadorQuantidade} />
              <button id="botaoMais" onClick={aumentaQuantidadeProduto}>
                +
              </button>
            </div>

            <div className="purchase-section">
              <button className="buy-now">Buy Now</button>
              <img
                className="favorite-icon img"
                id="favorite-icon"
                src={heartFavorite}
                alt="Favorite"
              />
            </div>
          </div>
          <div className="cardDelivery">
            <div className="freeDelivery">
              <img className="img" src={freeDelivery} alt="" />
              <div className="freeDeliveryText">
                <h6>Free Delivery</h6>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="returnDelivery">
              <img className="img" src={returnDelivery} alt="" />
              <div className="returnDeliveryText">
                <h6>Return Delivery</h6>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
