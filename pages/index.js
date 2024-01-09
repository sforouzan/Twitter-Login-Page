import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Button1 from '@/components/Button1'
import Button2 from '@/components/Button2'
import Button3 from '@/components/Button3'
import Button4 from '@/components/Button4'
import Footer from '@/components/Footer'

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
          <Button2 />
        <div className={styles.linecontainer}>
          <div className={styles.line}>
          </div>
          or
          <div className={styles.line}>
          </div>
        </div>
        <Button3 />
        <div className={styles.textcontainer}>        
          <p className={styles.signuptext}>
          By signing up, you agree to the <span className={styles.bluetext}>Terms of Service</span> and <span className={styles.bluetext}>Privacy Policy</span>, including <span className={styles.bluetext}>Cookie Use.</span>
          </p>
          </div>
        <h5 className={styles.texth5}>Already have an account?</h5>
        <Button4 />
          </div>
        </div> 
      <Footer />
      </main>
    </>
  )
}

