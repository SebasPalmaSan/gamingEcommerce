import Link from 'next/link';
import { ENV } from '@/utils';
import { map } from 'lodash';
import { fn } from '@/utils';
import { Label } from '@/components/Shared';
import styles from './GridGames.module.scss';

export function GridGames(props) {
    const { games } = props;
    console.log(games);


  return (
    <div className={styles.gridGames}>
        {map(games, (game) => (
            <Link 
                key={game.id} 
                href={`/${game.attributes.slug}`} 
                className={styles.game}
            >
                <div>
                    <img src={`${ENV.SERVER_HOST}${game.attributes.cover.data.attributes.url}`} />
                    {game.attributes.discount > 0 && (
                        <Label.Discount className={styles.discount}>
                            {`-${game.attributes.discount}%`}
                        </Label.Discount>
                    )}
                </div>

                <div>
                    <span>{game.attributes.title}</span>
                    <span className={styles.price}>
                        ${fn.calcDiscountPrice(game.attributes.price, game.attributes.Discount)}
                    </span>
                </div>
            </Link>
        ))}
    </div>
  )
}
