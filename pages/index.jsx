import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title} >Hellooo Home Page</h1>
        <p className={styles.text} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nesciunt. Accusantium, quia eius ab obcaecati facilis nulla repudiandae tenetur eaque mollitia! Reiciendis dolorem, aspernatur enim aliquam vero totam nulla obcaecati?</p>
        <p className={styles.text} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nesciunt. Accusantium, quia eius ab obcaecati facilis nulla repudiandae tenetur eaque mollitia! Reiciendis dolorem, aspernatur enim aliquam vero totam nulla obcaecati?</p>

        <Link href="/ninjas">
          <a className={styles.btn} >See Ninja Listing</a>
        </Link>

      </div>
    </>
  )
}
