import { Basket } from './Basket';
import styles from './StepOne.module.scss';

export function StepOne(props) {
    const { games } = props;

  return (
    <div className={styles.stepOne}>
        <div className={styles.center}>
            <Basket games={games} />
        </div>
        <div className={styles.right}>
            <p>Resúmen de tu compra</p>
        </div>
    </div>
  )
}
