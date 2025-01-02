import Link from 'next/link';
import React from 'react'

const Auth = () => {
  return (
    <div className='log-auth-page'>
      <Link href={"/dashboard"}>Go Home{"->"}</Link>
    </div>
  )
}

export default Auth;