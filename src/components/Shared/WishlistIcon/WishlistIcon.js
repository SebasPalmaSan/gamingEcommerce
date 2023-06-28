import { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import classNames from 'classnames';
import { Wishlist } from '@/api';
import { useAuth } from '@/hooks';
import styles from './WishlistIcon.module.scss';

const wishlistCtrl = new Wishlist();

export function WishlistIcon(props) {

    const { gameId, className, removeCallback } = props;
    const [hasWishList, setHasWishList] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
      (async() => {
        try {
          const response = await wishlistCtrl.check(user.id, gameId);
          setHasWishList(response);
        } catch (error) {
          setHasWishList(false);
          console.error(error);
        }
      })()
    }, [gameId]);

    const addWishList = async () => {
      const response =  await wishlistCtrl.add(user.id, gameId)
      setHasWishList(response);
    }

    const deleteWishList = async () => {
      try {
        await wishlistCtrl.delete(hasWishList.id);
        setHasWishList(false);
        if (removeCallback) {
          removeCallback();
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (hasWishList === null) return null;

  return (
    <Icon 
      name={hasWishList ? 'heart' : 'heart outline'}
      onClick={hasWishList ? deleteWishList : addWishList}
      className={classNames(styles.wishlistIcon, {
        [className]: className,
    })} 
    />
  )
}
