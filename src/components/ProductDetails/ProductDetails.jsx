import img1 from '../../assets/image 57.png';
import img2 from '../../assets/image 58.png';
import img3 from '../../assets/image 61.png';
import img4 from '../../assets/image 59.png';
import imgCentro from '../../assets/image 63.png';

import freeDelivery from '../../assets/icon-delivery.png';
import returnDelivery from '../../assets/Icon-return.png';

import './ProductDetails.modules.css';

import { useState } from 'react';

const ProductDetails = ({ productName, price, quantity, color }) => {
  let [imagemSelecionada, setImagemSelecionada] = useState(imgCentro);
  const [corSelecionada, setCorSelecionada] = useState(color);

  function handleBuyNow() {
    const productDetails = {
      productName: productName,
      price: price,
      quantity: quantity,
      color: corSelecionada,
    };

    console.log('Adicionando ao carrinho:', productDetails);
    // window.location.href = '/paginaCarrinho';
  }

  const selecionarCor = (cor) => {
    setCorSelecionada(cor);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-2 caixa-imagem-menor'>
          <img
            src={img1}
            onMouseEnter={() => setImagemSelecionada(img1)}
            onMouseLeave={() => setImagemSelecionada(imgCentro)}
            alt=''
          />
          <img
            src={img2}
            onMouseEnter={() => setImagemSelecionada(img2)}
            onMouseLeave={() => setImagemSelecionada(imgCentro)}
            alt=''
          />
          <img
            src={img3}
            onMouseEnter={() => setImagemSelecionada(img3)}
            onMouseLeave={() => setImagemSelecionada(imgCentro)}
            alt=''
          />
          <img
            src={img4}
            onMouseEnter={() => setImagemSelecionada(img4)}
            onMouseLeave={() => setImagemSelecionada(imgCentro)}
            alt=''
          />
        </div>
        <div className='col-md-6 caixa-imagem'>
          <img src={imagemSelecionada} alt='' />
        </div>
        <div className='col-md-4'>
          <h4>Havic HV G-92 Gamepad</h4>
          <div className='review'>
            <i className='fa-solid fa-star estrelaAmarela'></i>
            <i className='fa-solid fa-star estrelaAmarela'></i>
            <i className='fa-solid fa-star estrelaAmarela'></i>
            <i className='fa-solid fa-star estrelaAmarela'></i>
            <i className='fa-regular fa-star estrelaBranca'></i>
            <p id='numero-review'>(150 Reviews)</p>|
            <span id='title'> In Stock</span>
          </div>
          <h5>$ 192.00</h5>
          <p>
            PlayStation 5 Controller Skin High quality vinyl with air hannel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <hr />
          <div className='cores'>
            <h5>Colors:</h5>
            <div className='color-options'>
              <span
                className={`color-circle circuloCorBranca ${
                  corSelecionada === 'Branco' ? 'selected' : ''
                }`}
                onClick={() => selecionarCor('Branco')}
              ></span>
              <span
                className={`color-circle circuloCorPreta ${
                  corSelecionada === 'Preto' ? 'selected' : ''
                }`}
                onClick={() => selecionarCor('Preto')}
              ></span>
            </div>
          </div>
          <div className='secao-quantidade'>
            <div className='purchase-section'>
              <button className='buy-now' onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
          <div className='cardDelivery'>
            <div className='freeDelivery'>
              <img src={freeDelivery} alt='' />
              <div className='freeDeliveryText'>
                <h6>Free Delivery</h6>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className='returnDelivery'>
              <img src={returnDelivery} alt='' />
              <div className='returnDeliveryText'>
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
