// import { fetchProducts } from '../../redux/productsReducer/actions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/productsReducer/actions';
import { useEffect } from 'react';

function Products() {
  const { products, loading } = useSelector((state) => state.procuctReducder);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(products);

  return (
    <>
      {products?.map((item) => {
        return (
          <div key={item.id}>
            <p style={{ color: 'red' }}>{item?.name}</p>
            <p>{item?.rate}</p>
          </div>
        );
      })}
    </>
  );
}

export default Products;
