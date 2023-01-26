import React from "react";
import { getProviders, signIn, getSession } from "next-auth/react"
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/pleaseLogin.module.css'
import { FaGoogle } from "react-icons/fa";
import { SiAuth0 } from "react-icons/si"

export default function SignIn({ providers }) {
  const router = useRouter()

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.push('/dashboard')
      }
    })
  }, []) // Run this effect only on initial render

  return (
    <div className={styles.body}>
      <div className={styles.buttonsContainer}>
      {Object.values(providers).map((provider) => (
      
        <div key={provider.name}>{  console.log(provider)}
          <button className={styles.socialsButtons} onClick={() => signIn(provider.id)}>
          {provider.name==='Google' ? (<div><FaGoogle className={styles.icon} /></div>) : (<div> <SiAuth0 className={styles.icon}/></div>)}Sign in with {provider.name}
          </button>
        </div>
      ))}</div>
      

      <div className={styles.context}>

      
       
            <h1 className={styles.signInHeader}>I M A G I N E R I U M</h1>
           
         </div>

         <div className={styles.area}>
           <ul className={styles.circles}>
             <li></li>
             <li></li>
             <li></li>
             <li></li>
             <li></li>
             <li></li>
             <li></li>
             <li></li>
             <li></li>
             <li></li>
           </ul>
         </div>

    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}