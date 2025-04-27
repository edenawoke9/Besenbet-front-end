'use client';
import { signIn } from 'next-auth/react';
import React from 'react';
import {useState} from 'react';
import { useRouter } from 'next/navigation';
export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handlesumbit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const res=await signIn('credentials', { redirect: false, email, password});
      if (res?.error){
      console.log("error occured");
      console.log(res);}
      else{
        router.push('/dashboard');
      }
    } 
    
      catch (error) {
      console.log(error);
    }
    
  }
  
  return <div><form onSubmit={handlesumbit} className='flex flex-col gap-4 items-center justify-center bg-white text-black'>
    <input className="border-2 border-black" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
    <input className="border-2 border-black" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
    <button type="submit">Submit</button>
  </form></div>;
}
