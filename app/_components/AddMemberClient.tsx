"use client"
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';



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
    alert(`Invitation sent to ${body.email}`)
    window.location.reload();
  }


  return (
    <div className='AddMember'>
      <h3 className='font-semibold text-sm'>Invite other users to join this cluster:</h3>
      <form className="space-x-1" onSubmit={addMember}>
        <input className="h-10 shadow-sm max-w-64" name='email' type='email' required placeholder='example@email.com' style={{width: 350}} ></input>
        <button className="border-1 border-black bg-gray-300 text-black shadow-md rounded-md max-w-18 h-10 text-center align-middle inline-flex items-center" type="submit">Submit</button>
      </form>
    </div>
  )
}