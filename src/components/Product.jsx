const Product = (props) => {
  const { product } = props;
  //object destructing by taking props input and assigning to products
  return (
    <>
      <div>
        <img src={product.image} alt="" />
        <div className="text-center">
          <h2 className="text-lg font-bold py-2">{product.name}</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4 text-black">
            {product.size}
          </span>
        </div>
        <div className=" flex  justify-between items-center mt-4">
          <span>₹ {product.price}</span>
          <button className="py-1 px-4 rounded-full font-bold bg-yellow-500 hover:bg-yellow-600">
            ADD
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
