import styles from './style.module.css';
import { addToCart } from '../../redux/cartReducer/actions';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sound from '../../assets/success-1-6297.mp3';

function SingleProduct({ products }) {
  const dispatch = useDispatch();
  const notify = () =>
    toast.success('Product Added Successfully !!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  function handleAddToCart(item) {
    dispatch(addToCart(item));
    notify();
    alert('Please Turn On Your Speakers');
    playSound();
  }

  function playSound() {
    const audio = new Audio(sound).play();
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ToastContainer />
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
