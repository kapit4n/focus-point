import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Dashboard from './dashboard'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <Dashboard />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
