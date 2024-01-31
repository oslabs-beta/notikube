'use client'
import EmailSwitch from "../../_components/userPreferences/EmailSwitch";
import DeleteAcount from "../../_components/userPreferences/DeleteAccount";
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { User } from '../../../types/definitions';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Profile() {

  const session = useSession().data;
  const userId = session?.user?.userid;

  const [checked, setChecked] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User>();


  async function getStatus(user_id:(string | undefined)) {
    if (userId !== undefined) {
    let res = await fetch(`http://localhost:3000/api/getUser/${userId}`)
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
      <h1>Welcome, {user?.name}</h1>
      <br></br>
      <EmailSwitch user_id={userId} status={checked} />
      <br></br>
      <DeleteAcount user_id={userId} />
    </>
  );
}