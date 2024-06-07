import Link from 'next/link';
import Image from 'next/image';
import styles from "../styles/cabecalho.module.css";

export default function Cabecalho() {
  return (

    <header className={styles.menu}>
      <Image
        width={100}
        height={100}
        src={"https://cdn-icons-png.flaticon.com/128/7878/7878683.png"}
      />
      <nav>
        <h1 className={styles.titulo}>Juloca store</h1>
        <ul className={styles.lista}>
          <Link className={styles.link} href="/carrinho">
            <li className={styles.li}>
              Carrinho 🛒
            </li>
          </Link>

          <Link className={styles.link} href="/contato">
            <li className={styles.li}>
              Contato ☎
            </li>
          </Link>

        </ul>
        <input className={styles.input}></input>
        <button className={styles.botao}>Adicionar um Novo Produto</button>
      </nav>
    </header>

  )
}