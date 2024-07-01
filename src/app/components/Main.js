"use client"
import Link from 'next/link';
import Image from 'next/image';
import styles from "../styles/main.module.css";
import { useEffect, useState } from 'react';
import Spinner from "./Spinner"
import ErrorFetch from './ErrorFatch';

export default function Main() {
  const [listProduct, setProduct] = useState([]);
  const [listComplete, setListComplet] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const resposta = await fetch("https://fakestoreapi.com/products/")
        const data = await resposta.json();
        setProduct(data)
        setListComplet(data)
      }
      catch {
        setIsError(true)
      }
    }
    getProduct()
  }, [])


  const orderAz = () => {
    const listAux = [...listProduct].sort((a, b) => a.title.localeCompare(b.title));

    setProduct(listAux);
  }

  const orderZa = () => {
    const listAux = [...listProduct].reverse((a, b) => b.title.localeCompare(a.title));
    setProduct(listAux);
  }

  const orderPrecoMenor = () => {
    const listPre = [...listProduct].sort((a, b) => a.price - b.price);

    setProduct(listPre);
  }

  const orderPrecoMaior = () => {
    const listPre = [...listProduct].reverse((a, b) => b.price - a.price);

    setProduct(listPre);
  }
  
  const search = (text) => {
    setTextSearch(text)
    if (text.trim() == "") {
      setProduct(listComplete);
      return
    }
    const novaLista = listProduct.filter((product) => product.title.toUpperCase().trim().includes(textSearch.toUpperCase().trim()))
    setProduct(novaLista);
  }

if(isError == true){
  return <ErrorFetch/>
}

  if (listComplete[0] == null) {
    return <Spinner />
  }

  return (
    <>
      <div className={styles.filters}>
        <div>
          <input type="text" value={textSearch}
            placeholder="Faça uma Pesquisa de Algum Produto"
            onChange={(event) => search(event.target.value)} />
          <button onClick={orderAz} className={styles.btn}>A - Z</button>
          <button onClick={orderZa} className={styles.btn}>Z - A</button>

          <button onClick={orderPrecoMaior} className={styles.btn}>Preço Maior</button>
          <button onClick={orderPrecoMenor} className={styles.btn}>Preço Menor</button>
        </div>
      </div>



      <main className={styles.main}>
        {listProduct.map((products) =>
          <div className={styles.card} key={products.id}>
            <h1>{products.title.slice(0, 16) + "..."}</h1>
            <Image
              width={300}
              height={300}
              src={products.image}
            />
            <h3>{products.price}</h3>
            <p>{products.description.slice(0, 25) + "..."}</p>
            <p>{products.category}</p>


          </div>
        )}
      </main>
    </>
  )
}