import "./NewArrival.css";

const NewArrival = () => {
  return (
    <div className="new-arrival-section">
      {/* Destaque */}

      <div className="featured">
        <span className="featured-tag"></span>
        <p>Featured</p>
      </div>
      <h2>New Arrival</h2>

      {/* Grid de Produtos */}
      <div className="grid-container">
        <div className="box box1">
          <img src="https://placehold.co/570x600" alt="PlayStation 5" />
          <div className="product-info">
            <h2>PlayStation 5</h2>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <button className="shop-button">Shop Now</button>
          </div>
        </div>
        <div className="box box2">
          <img src="https://placehold.co/570x184" alt="Women's Collection" />
          <div className="product-info">
            <h2>Women&apos;s Collections</h2>
            <p>Featured women collections that give you another vibe.</p>
            <button className="shop-button">Shop Now</button>
          </div>
        </div>
        <div className="box box3">
          <img src="https://placehold.co/270x184" alt="Speakers" />
          <div className="product-info">
            <h2>Speakers</h2>
            <p>Amazon wireless speakers.</p>
            <button className="shop-button">Shop Now</button>
          </div>
        </div>
        <div className="box box4">
          <img src="https://placehold.co/270x184" alt="Gucci Perfume" />
          <div className="product-info">
            <h2>Gucci Perfume</h2>
            <p>Gucci Intense Oud.</p>
            <button className="shop-button">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
