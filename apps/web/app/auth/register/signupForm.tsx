import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SubmitButton from '@/components/ui/submitButton'
import React from 'react'

const SignUpForm = () => {
  return (
    <form>
        <div className='flex flex-col gap-2'>
            <div>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' name='name' placeholder='Mohamed Amine' />
            </div>
            <div>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' name='email' placeholder='mohamed@example.com' />
            </div>
            <div>
                <Label htmlFor='password'>Password</Label>
                <Input id='password' name='password' type='password' />
            </div>
            <SubmitButton>Register</SubmitButton>
        </div>
    </form>
  )
}

export default SignUpForm