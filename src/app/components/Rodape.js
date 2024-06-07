import Link from 'next/link';
import styles from "../styles/footer.module.css";

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <h1 className={styles.p}>JULOCA.STORE</h1>
            <div className={styles.box}>
                <ul className={styles.ul}>
                    <Link className={styles.link} href="/suporte">
                        <li className={styles.li}>
                            Suporte
                        </li>
                    </Link>
                </ul>

                <h2 className={styles.jj}>Sobre nós</h2>
                <p className={styles.parag}>Lorem ipsum dolor sit amet, consectetur adipisci elit,
                    sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrum exercitationem ullam corporis suscipit laboriosam,
                    nisi ut aliquid ex ea commodi consequatur.
                    Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.</p>
            </div>
        </footer>
    );
}