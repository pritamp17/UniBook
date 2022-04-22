import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import Signup from '../components/Signup'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
   <Signup/>
   <Login/>
    </div>
  )
}
