import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
   e.preventDefault();

    const authObject = { 'Project-ID': 'b80043f0-63bd-4596-85ad-fd1a54a6c013', 'User-Name': username, 'User-Secret': password }
   
   try {
    await axios.get('https://api.chatengine.io/chats', { headers: authObject });
    
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    window.location.reload();
   } catch(err) {
    setError('Wrong username or password. Double check!')
   }

   //username | password => chatengine -> giver messages
   //works out -> logged in
   //error -> try with new username
  }

  return (
    <div className='wrapper'>
      <div className='form'>
        <h1 className='title'>Panda</h1>
        <form onSubmit={handleSubmit}>
        <input 
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='input'
          placeholder='Username' 
          required
        />
        <input 
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='input'
          placeholder='Password' 
          required
        />
         <div align='center'>
           <button type='submit' className='button'>
             <span>login</span>
           </button>
         </div>
         <h2 className='error'>{error}</h2>
        </form>
      </div>    
    </div>
  )
}

export default Login;