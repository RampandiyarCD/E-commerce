// ProductCarousal.jsx
import { useState } from "react";
import "./ProductList.css";

function ProductList({ product }) {
  const [page, setPage] = useState(0);

  const visiblePage = 3;
  const totalPages = Math.ceil(product.length / visiblePage);

  const startIndex = page * visiblePage;
  const visibleProducts = product.slice(startIndex, startIndex + visiblePage);

  function handlePrev() {
    if (page > 0) setPage(page - 1);
  }

  function handleNext() {
    if (page < totalPages - 1) setPage(page + 1);
  }

  return (
    <div className="carousel">
      <h2>Products</h2>

      <div className="products">
        {visibleProducts.map((prod) => (
          <div key={prod.id} className="product-card">
            <img src={prod.image} alt={prod.name} />
            <h3>{prod.name}</h3>
            <p>{prod.price}</p>
            <p>{prod.description}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className="btn-arrow prev"
          aria-label="Previous"
        ></button>

        <div className="dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              onClick={() => setPage(i)}
              className={`dot${i === page ? " active" : ""}`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={page === totalPages - 1}
          className="btn-arrow next"
          aria-label="Next"
        ></button>
      </div>
    </div>
  );
}

export default ProductList;


