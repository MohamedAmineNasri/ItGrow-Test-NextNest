'use client';
import React, { PropsWithChildren } from 'react'
import { Button } from './button'
import { useFormStatus } from 'react-dom'

const SubmitButton = ({children}:PropsWithChildren) => {

  const {pending} = useFormStatus()

  return (
    <Button type='submit' aria-disabled={pending}className="flex flex-row justify-center items-center px-[20px] w-full bg-[#6138BD] rounded-[5px] text-white font-jost font-medium text-[16px] leading-[20px] transition-colors hover:bg-[#502da1]"  variant="outline">
      {pending? 'Submitting...': children}
    </Button>
  )
}

export default SubmitButton