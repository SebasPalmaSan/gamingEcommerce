import Link from 'next/link';
import { Container, Image, Button } from 'semantic-ui-react';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <div className={styles.footer}>
        <Container>
            <div className={styles.columns}>
                <div>
                    <Link href='/'>
                        <Image src='images/logo.png' alt='Gaming' />
                    </Link>
                </div>

                <div>
                    <ul>
                        <Link href='#'>Términos y condiciones</Link>
                        <Link href='#'>Política de privacidad</Link>
                        <Link href='#'>Contácto</Link>
                        <Link href='#'>FAQs</Link>
                    </ul>
                </div>

                <div className={styles.social}>
                    <Button as="a" href='#' circular color='facebook' icon='facebook' />
                    <Button as="a" href='#' circular color='twitter' icon='twitter' />
                    <Button as="a" href='#' circular color='linkedin' icon='linkedin' />
                    <Button as="a" href='#' circular color='instagram' icon='instagram' />
                </div>
            </div>

            <div className={styles.copyright}>
                <span>Copyright © 2023 Sebastián Palma Sánchez - Todos los derechos reservados</span>
            </div>
        </Container>
    </div>
  )
}
