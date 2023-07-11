import { useState } from 'react';
import { Separator } from '@/components/Shared';
import { Addresses } from './Addresses';
import styles from './StepTwo.module.scss';

export function StepTwo(props) {
    const { games } = props;
    const [addressSelected, setAddressSelected] = useState(null);
  
  return (
    <div className={styles.stepTwo}>
        <div className={styles.center}>
            <Addresses 
                addressSelected={addressSelected}
                setAddressSelected={setAddressSelected}
            />
            <Separator height={50} />
            {addressSelected && <p>Métodos de pago</p>}
            
        </div>

        <div className={styles.right}>
            <p>Resúmen</p>
        </div>
    </div>
  )
}
