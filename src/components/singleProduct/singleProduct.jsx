import styles from './style.module.css';
import { addToCart } from '../../redux/cartReducer/actions';
import { useDispatch } from 'react-redux';

function SingleProduct({ products }) {


  const dispatch = useDispatch();

  function handleAddToCart(item) {
    dispatch(addToCart(item));
  }

  return (
    <>
      {products?.map((item) => {
        return (
          <div key={item?.id} className={styles.details}>
            <img src={item?.image_link} alt="" />
            <p>{item?.name}</p>
            <p>{item?.price}$</p>
            {Array(item?.rating)
              .fill()
              .map((item, index) => (
                <span key={index}>⭐</span>
              ))}
            <div>
              <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default SingleProduct;
