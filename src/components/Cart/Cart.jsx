import styles from './style.module.css';
import { useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cartReducer/actions';
import { useDispatch } from 'react-redux';

function Cart() {
  const { cartProducts } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();


  function handleDecreaseQuantity(product){
    dispatch(removeFromCart(product));
  }

  function handleIcreaseQuantitiy(product) {
    dispatch(addToCart(product));
  }
  return (
    <div className={styles.cartItemContainer}>
      {cartProducts?.map((product) => {
        return (
          <div key={product?.id} className={styles.productCard}>
            <img src={product?.image_link} alt="image" />
            <p>{product?.name}</p>
            <div className={styles.quantityDiv}>
              <button onClick={() => handleIcreaseQuantitiy(product)}>+</button>
              <input type={'text'} placeholder={product?.quantity}/>
              <button onClick={() => handleDecreaseQuantity(product)}>-</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
