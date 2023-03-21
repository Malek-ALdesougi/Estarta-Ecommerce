//spinner
import { CircleLoader } from 'react-spinners';
//style
import styles from './style.module.css'

const Spinner = () => {

  return (
    <div className={styles.spinnerContainer}>
      <CircleLoader color="#ff8500" loading={true} size={90} />
      <h3>Loading ...</h3>
    </div>
  )
}


export default Spinner;