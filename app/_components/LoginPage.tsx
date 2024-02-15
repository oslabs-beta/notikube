"use client";

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LogInImage from "../../public/assets/NotiKubeLogin.svg";
import { SignInResponse, signIn } from "next-auth/react";
import Logo from "../../public/assets/logo.svg"
import githubLogo from "../../public/assets/github-mark.svg"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showFieldsError, setShowFieldsError] = useState(false)
  const [showUserNotFound, setShowUserNotFound] = useState(false)

  async function submit(e: React.MouseEvent) {
    e.preventDefault();
    if (email == "" || password == "") {
      setShowFieldsError(true)
      return;
    }
    const params = {
      username: email,
      password: password,
    };

    try {
      const res: any = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      if (res.error) {
        console.log(res.error)
        setShowUserNotFound(true)
        return;
      }
      router.replace('/dashboard')
    }
    catch(e) {
      console.log(e)
    }
  }

  const handleGithubLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    signIn('github')
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

    <Snackbar open={showUserNotFound} autoHideDuration={6000} onClose={() => setShowUserNotFound(false)} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
          <Alert
            onClose={() => setShowUserNotFound(false)}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
          >
            User not found!
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
          <div className="flex flex-col justify-center">
            <h3 className="text-center text-2xl py-6">Login</h3>
            <button className="flex justify-center" onClick={handleGithubLogin}>
              <Image src={githubLogo} alt="Github" width={25} />
              <p className='text-lg px-3'>Github</p>
            </button>
          </div>
          <hr className="my-5" />
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input
              className="rounded"
              name='username'
              type="text"
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="rounded"
              name='password'
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            className="rounded border w-full my-5 py-2 bg-NotikubeRed hover:bg-primary-300 cursor-pointer text-white"
            type="submit"
            name='Submit'
            onClick={(e) => submit(e)}
            value="Submit"
          />
          <p>
            Don&apos;t have an account?{" "}
            <Link
              className="text-NotikubeRed hover:text-primary-300"
              href="/auth/signup"
            >
              Create an account here
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden bg-gray-100 sm:block">
        <Image className="w-full h-screen p-6" src={LogInImage} alt="Login" />
      </div>
    </div>
    </>
  );
};

export default LoginPage;
