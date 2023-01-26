import React from "react";
import { getProviders, signIn, getSession } from "next-auth/react"
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/pleaseLogin.module.css'

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

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}

    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}