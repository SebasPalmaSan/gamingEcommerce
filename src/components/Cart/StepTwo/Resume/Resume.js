import { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { forEach, map } from 'lodash';
import { useAuth, useCart } from '@/hooks';
import { Cart } from '@/api';
import { fn } from '@/utils';
import styles from './Resume.module.scss';

const cartCtrl = new Cart();

export function Resume(props) {
    const { games, addressSelected } = props;
    const [total, setTotal] = useState(null);
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        let totalTemp = 0;

        forEach(games, (game) => {
            const price = fn.calcDiscountPrice(
                game.attributes.price, 
                game.attributes.discount
            );
            totalTemp += price * game.quantity;
        });

        setTotal(totalTemp.toFixed(2));
    }, [games]);

    const onPay = async () => {
        setLoading(true);
        goToStepThree();

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const goToStepThree = () => {
        router.replace({query: { ...router.query, step: 3}})
    }

  return (
    <div className={styles.resume}>
        <h2>Resumen de tu compra</h2>

        <div className={styles.block}>
            <div className={styles.products}>
                {map(games, (game) => (
                    <div key={game.id} className={styles.product}>
                        <div>
                            <p>{game.attributes.title}</p>
                            <span>{game.attributes.platform.data.attributes.title}</span>
                        </div>
                        <span>
                            {game.quantity > 0 && `${game.quantity}x`}
                            $ {fn.calcDiscountPrice(
                                game.attributes.price, 
                                game.attributes.discount
                            )}
                        </span>
                    </div>
                ))}
            </div>
        </div>

        <div className={styles.blockTotal}>
            <div>
                <span>Total</span>
                <span>${total}</span>
            </div>

            <Button 
            primary 
            fluid 
            disabled={!addressSelected}
            onClick={onPay}
            loading={loading}
            >
                Pagar
            </Button>
        </div>
    </div>
  )
}
