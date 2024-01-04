'use client';

import Link from 'next/link';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import SignUpImage from '../../assets/NotiKubeSignUp.svg'
// import Logo from '../../assets/logo.svg'

const Signup = () => {

  // const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit(e) {
    e.preventDefault();
    if (fullName == '' || email == '' || password == '') {
      return;
    }
    const params = {
      fullName: fullName,
      email: email,
      password: password
    };

    fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(params)
    })
      .then(res => res.json())
      .then(data => {
        if (data.newUser) {
          alert('Account created!');
          // navigate('/login');
        }
        else {
          alert('User already exists');
        }
      });

  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 w-full'>
      <div className='flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
          <div className='flex justify-center text-4xl font-bold text-center py-6 pr-8'>
            <img className='px-5' src={Logo} />
            <span>NotiKube</span>
          </div>
          <h3 className='text-2xl py-6'>Sign Up</h3>
          <div className='flex flex-col py-2'>
            <label>Full Name</label>
            <input className='rounded' type="text" placeholder="John Doe" onChange={(e) => setFullName(e.target.value)} />
          </div>
          <div className='flex flex-col py-2'>
            <label>Email</label>
            <input className='rounded' type="text" placeholder='johndoe@gmail.com' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='flex flex-col py-2'>
            <label>Password</label>
            <input className='rounded' type='text' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <input className='rounded border w-full my-5 py-2 bg-NotikubeRed hover:text-primary-300' type='submit' value='Submit' onClick={(e) => submit(e)} />
          <p>Already have an account? <Link className='text-NotikubeRed hover:text-primary-300' to='/login'>Log in</Link></p>
        </form>
      </div>
      <div className='hidden bg-gray-100 sm:block'>
        <img className='w-full h-screen p-8' src={SignUpImage} />
      </div>
    </div>
  );
};

export default Signup;