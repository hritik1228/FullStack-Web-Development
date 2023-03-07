
import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import { useDispatch,useSelector } from 'react-redux'
import { productList } from '../redux/productAction';
import '../css/Main.css'
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component", data);

  useEffect(()=>{
    dispatch(productList())
  },[])

  return (
    <div>
      {/* <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button> */}
      {/* <button onClick={() => dispatch(removeFromCart(product.name))}>Remove from Cart</button> */}
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      {/* <button onClick={() => dispatch(productList())}>Call Product List</button> */}
      <div className='product-container'>
        {
          data.map((item)=>{
            return <div className='product-item' key={item.id}>
              <img src={item.photo} width="300px"/>
                    <div>Name: {item.name}</div>
                    <div>Color:{item.color}</div>
                    <div>Price: {item.price}</div>
                    <div>Category: {item.category}</div>
                    <div>Brand: {item.brand}</div>
                    <div>
                      <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
                      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove from Cart</button>
                    </div>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default Main;