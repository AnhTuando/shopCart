import { useEffect, useState } from "react";
import Title from "../components/Tittle";
import Button from "../components/Button";
import { NavLink, generatePath } from "react-router-dom";
import ProductItem from "../components/ProductItem";

export default function Products() {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setData(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="products">
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 my-2">
            <div className="navigation">
              <div className="row">
                <div className="col-6">
                  <Title children={"Products"} />
                </div>
                <div className="col-6 d-flex justify-content-end ">
                  <NavLink to={"/"}>
                    <Button children={"Go to cart"} className={"gray"} />{" "}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="products">
              <div className="row">
                {data.map((item) => (
                  <ProductItem
                    key={item.id}
                    item={item}
                    img={item.thumbnail}
                    title={item.title}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
