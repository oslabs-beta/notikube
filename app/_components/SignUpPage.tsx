"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';;
import { useState, MouseEvent } from 'react';
// import { useNavigate } from 'react-router-dom';
import SignUpImage from '../../public/assets/NotiKubeSignUp.svg'
import Logo from '../../public/assets/logo.svg'
import { Toast } from 'flowbite-react';
import { HiExclamation} from 'react-icons/hi';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showFieldsError, setShowFieldsError] = useState(false)
  const [showUserExistsError, setShowUserExistsError] = useState(false)
  const [showUserCreated, setShowUserCreated] = useState(false)

  const router = useRouter()

  async function submit(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    if (fullName == "" || email == "" || password == "") {
      setShowFieldsError(true)
      return
    }
    const params = {
      fullName: fullName,
      email: email,
      password: password,
    };

    let res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(params),
    });

    const data = await res.json();
    if (data.newUser) {
      setShowUserCreated(true)
      }
    else {
      setShowUserExistsError(true)
    }
  }

  const RouteToLogin = () => {
    setShowUserCreated(false)
    router.push('/auth/login')
  }

  return (
    <>

        <Snackbar open={showFieldsError} autoHideDuration={6000} onClose={() => setShowFieldsError(false)} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
          <Alert
            onClose={() => setShowFieldsError(false)}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Please fill in all of the fields!
          </Alert>
      </Snackbar>

      <Snackbar open={showUserExistsError} autoHideDuration={6000} onClose={() => setShowUserExistsError(false)} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
          <Alert
            onClose={() => setShowUserExistsError(false)}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
          >
            User already exists!
          </Alert>
      </Snackbar>

      <Snackbar open={showUserCreated} autoHideDuration={6000} onClose={() => RouteToLogin()} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
          <Alert
            onClose={() => RouteToLogin()}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            New user created!
          </Alert>
      </Snackbar>

    <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
      <div className="flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <div className="flex justify-center text-4xl font-bold text-center py-6 pr-8">
            <Link href={"/"}>
              <Image className="px-5" src={Logo} alt="logo" width={55} />
            </Link>
            <span>NotiKube</span>
          </div>
          <h3 className="text-center text-2xl py-6">Sign Up</h3>
          <div className="flex flex-col py-2">
            <label>Full Name</label>
            <input
              className="rounded"
              type="text"
              placeholder="John Doe"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input
              className="rounded"
              type="text"
              placeholder="johndoe@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="rounded"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            className="rounded border w-full my-5 py-2 bg-NotikubeRed hover:bg-primary-300 cursor-pointer text-white"
            type="submit"
            value="Submit"
            onClick={(e: any) => submit(e)}
          />
          <p>
            Already have an account?{" "}
            <Link
              className="text-NotikubeRed hover:text-primary-300"
              href="/auth/login"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden bg-gray-100 sm:block">
        <Image
          className="w-full h-screen p-8"
          src={SignUpImage}
          alt="Sign Up"
        />
      </div>
    </div>
    </>
    
  );
};

export default Signup;
