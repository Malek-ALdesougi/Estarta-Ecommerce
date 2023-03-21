// import { fetchProducts } from '../../redux/productsReducer/actions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/productsReducer/actions';
import { useEffect } from 'react';
import styles from './style.module.css';
import Spinner from '../Spinner/Spinner';

//component
import SingleProduct from '../singleProduct/singleProduct';

function Products() {
  const { products, loading } = useSelector((state) => state.procuctReducder);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length == 0) {
      dispatch(fetchProducts());
    }
  }, []);

  if (loading) return <Spinner />

  return (
    <>
      <div className={styles.productContainer}>
        <SingleProduct products={products} />
      </div>
    </>
  );
}

export default Products;
