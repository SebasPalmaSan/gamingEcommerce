import { Icon, Image, Dropdown } from 'semantic-ui-react';
import { map } from 'lodash';
import { fn } from '@/utils';
import { ENV } from '@/utils';
import { useCart } from '@/hooks';
import styles from './Basket.module.scss';

export function Basket(props) {
    const { games } = props;
  return (
    <div className={styles.basket}>
        <h2>Tu pedido:</h2>

        <div className={styles.block}>
            {map(games, (game) => (
                <div key={game.id} className={styles.product}>
                    <Image src={`${ENV.SERVER_HOST}${game.attributes.cover.data.attributes.url}`} />
                    <div>
                        <div className={styles.info}>
                            <div>
                                <p>{game.attributes.title}</p>
                                <p>{game.attributes.platform.data.attributes.title}</p>
                            </div>
                            <Icon name='trash alternate online' link />
                        </div>
                        <div className={styles.quantity}>
                            <Dropdown 
                                className='number' 
                                options={[]} 
                                selection 
                                value={null} 
                                compact 
                            />
                            <span>
                                ${fn.calcDiscountPrice(
                                    game.attributes.price, 
                                    game.attributes.discount
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
