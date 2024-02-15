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
  // get userid from session 
  const session = useSession().data;
  const userId = session?.user?.userid;
  // set state of email slider
  const [checked, setChecked] = useState<boolean>();
  // set loading state
  const [loading, setLoading] = useState<boolean>(true);
  // set user details in state
  const [user, setUser] = useState<User>();
  // set state for default profile picture
  const [imageUrl, setImageUrl] = useState<string>("https://png2.cleanpng.com/sh/00663d74b8b97254f9a0df3226bae67f/L0KzQYm3V8IzN5R2kJH0aYP2gLBuTgV0baMyiOR4ZnnvdX65UME5NZpzReVyZ3j3Pcb6hgIua5Dzftd7ZX7mdX7smQBwNWZnTac9Y0C8SYjqgBUzNmY5TqUANUW0QYa6UsMyPmc9Sag7MUixgLBu/kisspng-user-profile-2018-in-sight-user-conference-expo-5b554c0997cce2.5463555115323166816218.png")

  // if user has uploaded a profile picture, overwrite default url in state
  if (user?.profile_picture_url) setImageUrl(user.profile_picture_url)

  // read month, day, year from timestamp of account creation and then reformat it to more readable version mm//dd/yyy
  let timeStamp = user?.account_created.slice(0,10)
  let month = user?.account_created.slice(5,7)
  let day = user?.account_created.slice(8,10)
  let year = user?.account_created.slice(0,4)
  timeStamp = month + '/' + day + '/' + year;

  // function to fetch user data and store it in state
  async function getStatus(user_id:(string | undefined)) {
    if (userId !== undefined) {
    let res = await fetch(`/api/getUser/${userId}`)
    const data: User = await res.json();
    setChecked(data.email_status)
    setUser(data)
    setLoading(false)
    }
  }
  // invoke function to get user data
  useEffect(() => {
    if (userId !== undefined) {
    getStatus(userId);
  }}, [userId])

  // Emmanuel, if you add your upload photo function here, then use the commented out setImageUrl function to set the response image url in state, that's all you need to do on this page
  function addImage(event: React.MouseEvent<HTMLButtonElement>){
    event.preventDefault()
    console.log('add image')
    // setImageUrl(urlFromResponse)
  }

  // while page is loading, display gray screen with loading circle
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
  // when page finishes loading, return profile page with email switch and delete button components
  return (
  <>
  <div className="flex justify-center">
    <div className="border-2 border-black shadow-2xl rounded-xl w-auto h-fit p-12">
      <div className="relative">
      <div className="flex justify-center h-60 object-scale-down p-8 hover:contrast-50 delay-50">
      <img className="" alt="default profile image" src={imageUrl}></img>
      <div className="absolute w-full h-full text-center align-middle text-black text-lg font-semibold opacity-0 hover:opacity-100 hover:contrast-100 delay-50 pt-20" onClick={addImage}>Upload Photo</div>
      </div>
      </div>
      <div className="flex justify-center">
      <h2 className="text-xl font-normal pb-4 pt-10 text-left">{user?.name}</h2>
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