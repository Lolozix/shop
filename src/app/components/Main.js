"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from "../styles/main.module.css";

export default function Main() {
  const [listProduct, setProduct] = useState([]);
  
  useEffect(() => {
    const getProduct = async() => {
      const response = await fetch('https://fakestoreapi.com/products/')
      const data = await response.json();
      setProduct(data);
    }
    getProduct();
  }, [])

    const orderAZ = () => {
      const listAux = [...listProduct].sort((a,b) =>
        a.title.localCompare(b.title) );
      setProduct(listAux);
    }

    const orderAZ = () => {
      let listAux.reverse();
      setProduct(listAux);
    }

    if( listProduct[0] == null){
      return <Spinner/>
    }

  return (
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

  )
}