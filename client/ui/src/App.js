import { useEffect, useState } from 'react';
import { isUserLoggedIn, login, logout } from './api';
import { AppList } from './components/AppList';

function App() {
  const [username, setUsername] = useState('');
  const [isUserExists, setIsUserExists] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!username?.length) return;
        await isUserLoggedIn(username);
        setIsUserExists(true);
      } catch (error) {
        setIsUserExists(false);
      }
    };

    fetchData();
  }, [username])
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('formData', e.target.username.value); 
    await login(e.target.username.value);
    setUsername(e.target.username.value);
  }

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout(username);
    setIsUserExists(false);
    setUsername('');
  }
  return (
    <div className='bg-gray-300 h-screen'>
      <div className='flex items-center justify-center w-full'>
        <div className='w-full mt-10 flex justify-center'>
          {
            !isUserExists && <form className='w-full flex justify-center' onSubmit={handleFormSubmit}>
            <input name='username' className='rounded w-2/6 outline-transparent p-0.5 center-center ml-10' required type='text' placeholder='Please enter username'/>
            <button type='submit' className='bg-green-500 hover:bg-green-700 text-white font-bold p-1 rounded ml-1'>Login</button>
          </form>
          }
          {
            isUserExists && 
            <div className='flex items-center w-full justify-center'>
              <p className='text-green-900'>Logged in user: <span className='underline green'>{username}</span></p>
              <button onClick={handleLogout} type='submit' className='bg-green-900 hover:bg-green-700 text-white font-bold rounded p-1 ml-2'>Logout</button>
            </div>
          }
        </div>
      </div>
      {isUserExists && <AppList/>}
    </div>
  );
}

export default App;
