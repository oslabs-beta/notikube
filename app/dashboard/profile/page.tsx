'use client'
import EmailSwitch from "../../_components/userPreferences/EmailSwitch";
import DeleteAcount from "../../_components/userPreferences/DeleteAccount";
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { User } from '../../../types/definitions';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

export default function Profile() {

  const session = useSession().data;
  const userId = session?.user?.userid;

  const [checked, setChecked] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User>();

  let timeStamp = user?.account_created.slice(0,10)
  let month = user?.account_created.slice(5,7)
  let day = user?.account_created.slice(8,10)
  let year = user?.account_created.slice(0,4)

  timeStamp = month + '/' + day + '/' + year;

  console.log('user', user)


  async function getStatus(user_id:(string | undefined)) {
    if (userId !== undefined) {
    let res = await fetch(`/api/getUser/${userId}`)
    const data: User = await res.json();
    console.log('data', data)
    setChecked(data.email_status)
    setUser(data)
    setLoading(false)
    }
  }

  useEffect(() => {
    if (userId !== undefined) {
    getStatus(userId);
  }}, [userId])


  while (loading) {
    return ( 
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )}

  return (
  <>
  <div className="flex justify-center">
    <div className="border-2 border-black shadow-xl rounded-xl w-auto h-fit p-12">
      <div className="flex justify-center h-60 object-scale-down p-8">
      <img alt="default profile image" src="https://png2.cleanpng.com/sh/00663d74b8b97254f9a0df3226bae67f/L0KzQYm3V8IzN5R2kJH0aYP2gLBuTgV0baMyiOR4ZnnvdX65UME5NZpzReVyZ3j3Pcb6hgIua5Dzftd7ZX7mdX7smQBwNWZnTac9Y0C8SYjqgBUzNmY5TqUANUW0QYa6UsMyPmc9Sag7MUixgLBu/kisspng-user-profile-2018-in-sight-user-conference-expo-5b554c0997cce2.5463555115323166816218.png"></img>
      </div>
      <div className="flex justify-center">
      <h2 className="text-xl font-normal pb-4 text-left">{user?.name}</h2>
      </div>
      <div className="flex justify-center">
      <h2 className="text-xl font-normal pb-4 text-left">{user?.email}</h2>
      </div>
      <div className="flex justify-center">
      <h2 className="text-xl font-normal text-left">Account created: {timeStamp}</h2>
      </div>
      </div>
      </div>
      <br></br>
      <div className="flex justify-center">
      <EmailSwitch user_id={userId} status={checked} />
      </div>
      <div className="flex justify-center">
      <DeleteAcount user_id={userId} />
      </div>
  </>
  );
}