import styles from './style.module.css';

function SingleProduct({ products }) {
  //   console.log(products);
  return (
    <>
      {products?.map((item) => {
        return (
          <div key={item?.id} className={styles.details}>
            <img src={item?.image_link} alt="" />
            <p>{item?.name}</p>
            <p>{item?.price}$</p>
            {Array(item?.rating).fill().map((item, index) => (
                <span key={index}>⭐</span>
              ))}
          </div>
        );
      })}
    </>
  );
}

export default SingleProduct;
