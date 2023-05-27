import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const History = useHistory();
  const back = () => {
    return History.goBack();
  };
  useEffect(() => {
    fetch(`https://ecom-rest-apis.herokuapp.com/api/products/${params._id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, [params._id]);
  return (
    <div className="container mx-auto mt-12">
      <button className="mb-12 font-bold" onClick={back}>
        Back
      </button>
      <div className="flex">
        <img src={product.image} alt="pizza" />
        <div className="ml-16">
          <h1 className="text-xl font-bold">{product.name}</h1>
          <div className="text-md">small</div>
          <div className="font-bold mt-2">Rs 599</div>
          <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4 ">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
