import './NewArrival.css';

const NewArrival = () => {
  return (
    <div className="new-arrival-section">
      {/* Destaque */}
      
      <div className='featured'>
            <span className='featured-tag'></span>
            <p>Featured</p>
        </div>
        <h2>New Arrival</h2>

      {/* Grid de Produtos */}
      <div className="product-grid">
        <div className="product-card large">
          <img src="https://via.placeholder.com/400x300" alt="PlayStation 5" />
          <div className="newarrival-product-info">
            <h2>PlayStation 5</h2>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="product-card medium">
          <img src="https://via.placeholder.com/400x300" alt="Women's Collection" />
          <div className="newarrival-product-info">
            <h2>Women&apos;s Collections</h2>
            <p>Featured women collections that give you another vibe.</p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="product-card small">
          <img src="https://via.placeholder.com/400x300" alt="Speakers" />
          <div className="newarrival-product-info">
            <h2>Speakers</h2>
            <p>Amazon wireless speakers.</p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="product-card small">
          <img src="https://via.placeholder.com/400x300" alt="Perfume" />
          <div className="newarrival-product-info">
            <h2>Gucci Perfume</h2>
            <p>Gucci Intense Oud.</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
