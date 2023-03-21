import styles from './style.module.css';
import { useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cartReducer/actions';
import { useDispatch } from 'react-redux';

function Cart() {
  const { cartProducts } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const totalPrice = cartProducts.reduce((accumelator, current) => accumelator + current.quantity * current.price, 0);

  function handleDecreaseQuantity(product) {
    dispatch(removeFromCart(product));
  }

  function handleIcreaseQuantitiy(product) {
    dispatch(addToCart(product));
  }
  return (
    <div className={styles.cartItemContainer}>
      <div className={styles.total}><p>Total Price : {totalPrice}$</p></div>
      {cartProducts.length !== 0 ? cartProducts.map((product) => {
        return (
          <div key={product?.id} className={styles.productCard}>
            <img src={product?.image_link} alt="image" />
            <p>{product?.name}</p>
            <div className={styles.quantityDiv}>
              <button onClick={() => handleIcreaseQuantitiy(product)}>+</button>
              <input type={'text'} placeholder={product?.quantity} />
              <button onClick={() => handleDecreaseQuantity(product)}>-</button>
            </div>
          </div>
        );
      }
      ) : <p className={styles.emptyText}>Your Cart Is Empty Now</p>}
    </div>
  );
}

export default Cart;
