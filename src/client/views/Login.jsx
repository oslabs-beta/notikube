import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
    <>
      <form>
        <label>Email</label>
        <input type='text' placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type='text' onChange={(e) => setPassword(e.target.value)} />
        <input type='submit' onClick={(e) => submit(e)} value='Submit' />
      </form>
      <h3>Register here: <Link to='/signup'>Sign up</Link></h3>
    </>
  );
};

export default Login;