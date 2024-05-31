import Link from 'next/link';
import styles from "../styles/footer.module.css";
export default function Rodape(){
    return (
        <footer className={styles.rodape}>
            <ul className={styles.lista}>
        <Link className={styles.link} href="/intagram">
        <li className={styles.li}>
          Instagram
          </li>
          </Link>
          </ul>
          </footer>
    );
}