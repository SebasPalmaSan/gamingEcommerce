import { useState, useEffect } from 'react';
import { Container, Image } from 'semantic-ui-react';
import { DateTime } from 'luxon';
import Link from 'next/link';
import { ENV } from '@/utils';
import { Game } from '@/api'; 
import { fn } from '@/utils';
import { Label } from '@/components/Shared';
import styles from './BannerLastGamePublished.module.scss';

const gameCtrl = new Game()

export function BannerLastGamePublished() {
    const [game, setGame] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await gameCtrl.getLastPublished();
                setGame(response.data[0]);
            } catch (error) {
               console.error(error); 
            }
        })()
    }, [])

    if (!game) return null;

    const wallpaper = game.attributes.wallpaper;
    const enlaceurlServer=`${ENV.SERVER_HOST}`;
    const releaseDate = new Date(game.attributes.releaseDate).toISOString();
    const price = fn.calcDiscountPrice(
        game.attributes.price, 
        game.attributes.discount
    );


  return (
    <div className={styles.container}>
        <Image src={`${enlaceurlServer}${wallpaper.data.attributes.url}`} className={styles.wallpaper} />

        <Link className={styles.infoContainer} href={game.attributes.slug}>
            <Container>
                <span className={styles.date}>
                    {DateTime.fromISO(releaseDate).minus({days: 1}).toRelative()}
                </span>
                <h2>{game.attributes.title}</h2>
                <p className={styles.price}></p>
                <Label.Discount>-{game.attributes.discount}%</Label.Discount>
                <span className={styles.finalPrice}>${price}</span>
            </Container>
        </Link>
    </div>
  )
}
