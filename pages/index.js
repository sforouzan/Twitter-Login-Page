import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Button1 from '@/components/Button1'

export default function Home() {
  return (
    <>
    <Head>
      <title>X. It's what's happening / X</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <main className={styles.main}>
        <div className={styles.largecontainer}>
          <div className={styles.logocontainer}>
        <Image className={styles.logoimage} src={'/images/xlogo.svg'} alt="x logo" width={100} height={100}/>
          </div>
          
          <div className={styles.assetscontainer}>
          <h1 className={styles.texth1}>Happening now</h1>
          <h3 className={styles.texth3}>Join today.</h3>
          <Button1 />
          </div>
        </div> 
      </main>
    </>
  )
}

