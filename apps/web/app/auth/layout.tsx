import React, { PropsWithChildren } from 'react'

const AuthLayout = ({children}:PropsWithChildren ) => {
  return (
    <div className=' bg-gradient-to-br from-black to-cyan-400 h-screen flex items-center justify-center '> {children} </div>
  )
}

export default AuthLayout