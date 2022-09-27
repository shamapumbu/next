import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <p>Adipisicing exercitation est amet nisi cillum irure ullamco aliquip ullamco officia non cupidatat. Officia excepteur qui amet non esse exercitation quis. Amet excepteur non Lorem ut est. Veniam nostrud magna veniam duis occaecat mollit laborum consectetur ex et. Do nostrud enim ut enim cupidatat proident ut in laborum. Incididunt sit officia proident veniam sint minim nulla tempor consequat quis mollit.</p>
      <Link href="/ninjas"><a>See Ninja Listing!</a></Link>
      <Footer />
    </div>
    
  )
}
