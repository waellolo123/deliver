"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Register = () => {
 const [err, setError] = useState(false)
 const router = useRouter()

 const handleSubmit = async (e) => {
   e.preventDefault()
   const name = e.target[0].value
   const email = e.target[1].value
   const password = e.target[2].value

   try {
     const res = await fetch("/api/auth/register", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      })
     })
     res.status === 201 && router.push("/dashboard/login?success=Account has been registered")
   } catch (err) {
    setError(true) 
   }

 }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username' />
        <input type="email" placeholder='email' />
        <input type="text" placeholder='password' />
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register