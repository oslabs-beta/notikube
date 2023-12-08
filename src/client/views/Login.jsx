import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LogInImage from '../../assets/NotiKubeLogin.svg';
import Logo from '../../assets/logo.svg';

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    //Use the alert snackbar here
    if (email == '' || password == '') {
      return;
    }
    const params = {
      username: email,
      password: password
    };

    const result = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(params),
      credentials: 'include'
    });

    if (result.status == 401) {
      console.log('unAuthorized');
      alert('Incorrect Email/Password');
    }
    else {
      await result.json();
      console.log(result);
      navigate('/dashboard');
    }

  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 w-full'>
      <div className='flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
          <div className='flex justify-center text-4xl font-bold text-center py-6 pr-8'>
            <img className='px-5' src={Logo} />
            <span>NotiKube</span>
          </div>
          <h3 className='text-2xl py-6'>Login</h3>
          <button>Github</button>
          <hr className='my-5' />
          <div className='flex flex-col py-2'>
            <label>Email</label>
            <input className='rounded' type='text' placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='flex flex-col py-2'>
            <label>Password</label>
            <input className='rounded' type='text' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <input className='rounded border w-full my-5 py-2 bg-NotikubeRed hover:bg-primary-300 cursor-pointer text-white' type='submit' onClick={(e) => submit(e)} value='Submit' />
          <p>Don't have an account yet? <Link className='text-NotikubeRed hover:text-primary-300' to='/signup'>Create an account</Link></p>
        </form>
      </div>
      <div className='hidden bg-gray-100 border-red-900 sm:block'>
        <img className='w-full h-screen border-red-5 p-6' src={LogInImage} />
      </div>
    </div>
  );
};

export default Login;