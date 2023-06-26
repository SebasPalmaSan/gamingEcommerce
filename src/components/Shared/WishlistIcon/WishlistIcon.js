import { Icon } from 'semantic-ui-react';
import classNames from 'classnames';
import styles from './WishlistIcon.module.scss';

export function WishlistIcon(props) {
    const { gameId, className } = props;

  return (
    <Icon name='heart' className={classNames(styles.wishlistIcon, {
        [className]: className,
    })} 
    />
  )
}
