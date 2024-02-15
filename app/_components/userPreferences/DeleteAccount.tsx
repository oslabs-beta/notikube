'use client'

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from "next-auth/react";

const DeleteAccount = (props: {user_id: (string | undefined)}) => {

    const router = useRouter();

    function handleClick() {
        if (confirm('Deleting user account will remove all data associated with this account. This action cannot be undone. Do you wish to continue deleting your account?')) {
            fetch('/api/updateUser/removeAccount', {
                method: 'POST',
                body: JSON.stringify({user_id: props.user_id})
            })
            .then((res) => {
                return res.json();
            })
            .then((res) => console.log(res))
            signOut();
        }
    }


    return (
        <button onClick={handleClick} className="text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-40 mt-4 shadow-lg">Delete Account</button>
    )



}

export default DeleteAccount;