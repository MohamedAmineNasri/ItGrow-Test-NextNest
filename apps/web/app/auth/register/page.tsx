import Link from 'next/link'
import React from 'react'
import SignUpForm from './signupForm'

const RegisterPage = () => {
  return (
    <div className=' bg-white p-8 rounded-lg shadow-lg w-96 flex-col justify-center items-center '>
        <h1 className=' text-center text-2xl font-bold mb-4 '>Register Page</h1>
        <SignUpForm />
        <div className=' flex justify-betweem text-sm '>
            <p>Already have an account?</p>
        </div>
        <Link className='underline' href={'/auth/signin'}>
            Sign In
        </Link>
    </div>
  )
}

export default RegisterPage