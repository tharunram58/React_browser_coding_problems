import { useEffect, useState } from "react";
import './styles.css';

export default function LoadData() {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [disabled, setDisabled] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      let response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      let productsData = await response.json();
      if (
        productsData &&
        productsData.products &&
        productsData.products.length
      ) {
        setproducts((prev) => [...prev, ...productsData.products]);
        setLoading(false);
      }
      console.log(productsData);
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length === 100) setDisabled(true);
  }, [products]);

  if (loading) <div>Loading data...</div>;
  if (errorMsg !== null) <div>Error msg ${errorMsg}</div>;

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.thumbnail} alt={product.thumbnail} />
                <p>{product.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disabled} onClick={() => setCount(count + 1)}>
          Load More...
        </button>
        {disabled ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}
