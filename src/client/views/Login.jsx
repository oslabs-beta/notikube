import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function submit(e) {
    e.preventDefault()
    //Use the alert snackbar here
    if (email == '' || password == '') {
      return
    }
    const params = {
      email: email,
      password: password
    }

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(params)
    })
      .then(res => res.json())
      .then(data => console.log(data))

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
  )
}

export default Login