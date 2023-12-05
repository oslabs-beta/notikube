import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();

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
          navigate('/login');
        }
        else {
          alert('User already exists');
        }
      });

  }

  return (
    <>
      <form>
        <label>Full Name</label>
        <input type="text" placeholder="John Doe" onChange={(e) => setFullName(e.target.value)} />
        <label>Email</label>
        <input type="text" placeholder='johndoe@gmail.com' onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type='text' onChange={(e) => setPassword(e.target.value)} />
        <input type='submit' value='Submit' onClick={(e) => submit(e)} />
      </form>
      <h3>Already have an account? <Link to='/'>Log in</Link></h3>
    </>
  );
};

export default Signup;