import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {CartContext} from '../context/CartContext';
import {ProductContext} from '../context/ProductContext';

function ProductDetail() {
  const {id} = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);

  // get the single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  })
  // if prodcut is not found
  if (!product) {
     return <section>
      Lading...
     </section>
  }
  const {title, price, description, image } = product;
  return (
    <div className="mx-auto max-w-sm md:max-w-xl items-center justify-center flex flex-col md:flex-row mt-36 mb-36" key={id}>
      <img className=" max-w-[200px]" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
          ${price}
        </span>
        <p className="text-gray-700 text-base">
          {description}
        </p>
        <button 
          className='bg-gray-900 text-white p-1 mt-2'
          onClick={()=>addToCart(product, product.id)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;

