import "./NewArrival.css";

const NewArrival = () => {
  return (
    <section className="new-arrival">
      <div className="featured">
        <span className="featured-indicator"></span>
        <h2 className="featured-title">Featured</h2>
      </div>
      <h1 className="main-title">New Arrival</h1>

      <div className="products-grid">
        <div className="product large" ></div>
        <div className="product medium" ></div>
        <div className="product small" ></div>
        <div className="product smaller" ></div>
      </div>
    </section>
  );
};

export default NewArrival;
