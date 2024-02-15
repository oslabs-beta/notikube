"use client"
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';



export default function AddMemberClient() {

  const router = useRouter();

  async function addMember(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    const formData = new FormData(event.currentTarget);
    let body:{email?: string} = {}

    body.email = formData.get('email')?.toString();

    const response = await fetch('/api/addMember/send-invite', {
      method: 'POST',
      body: JSON.stringify(body),
    })
    const res = await response.json();
    console.log(res);
    alert(`Invitation sent to ${body.email}`);
    window.location.reload();
  }


  return (
    <div className='AddMember'>
      <h3 className='font-semibold text-sm'>Invite other users to join this cluster:</h3>
      <form className="space-x-1" onSubmit={addMember}>
        <input className="h-10 shadow-sm max-w-64 align-middle inline-flex items-center" name='email' type='email' required placeholder='example@email.com' style={{width: 350}} ></input>
        <button className="text-black bg-slate-200 border-black hover:border-black hover:bg-slate-500 hover:text-white focus:ring-white focus:outline-none font-medium rounded-md text-sm px-5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 shadow-lg max-w-18 h-10 align-middle inline-flex items-center" type="submit">Submit</button>
      </form>
    </div>
  )
}