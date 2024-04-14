import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";



interface QuestionsProps {
  setLoggedIn: Dispatch<SetStateAction<boolean>>
  setShowLoginModal:Dispatch<SetStateAction<boolean>>
}


const Login:React.FC<QuestionsProps> = ({ setLoggedIn,setShowLoginModal }) => {

    // State variables for modal
    // const [loggedIn, setLoggedIn] = useState(false);
    // const [showLoginModal, setShowLoginModal] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const handleLogin = () => {
        
      if (username === process.env.NEXT_PUBLIC_USERNAME && password ===process.env.NEXT_PUBLIC_PASSWORD) {
          setLoggedIn(true);
          setShowLoginModal(false);
       

          localStorage.setItem('logged in ','true')
      } else {
          alert('Invalid username or password. Please try again.');
      }
  };

  


  return (

<div className="dark:bg-slate-500 bg-slate-300 p-8 rounded-lg">
    <h1 className="dark:text-white text-black  font-bold italic text-center">Master login</h1>
 <label htmlFor="username" className="block mb-2 text-lg font-semibold text-gray-800">
    Username
 </label>
 <input
    id="username"
    type="text"
    className="w-full p-2 mb-4 border border-gray-300 rounded-md dark:bg-slate-600 dark:text-white dark:border-gray-500 focus:outline-none focus:border-blue-500"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
 />

 <label htmlFor="password" className="block mb-2 mt-2 text-lg font-semibold text-gray-800">
    Password
 </label>
 <input
    id="password"
    type="password"
    className="w-full p-2 mb-4 border border-gray-300 rounded-md dark:bg-slate-600 dark:text-white dark:border-gray-500 focus:outline-none focus:border-blue-500"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
 />

 <button
    onClick={handleLogin}
    className="w-full p-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
 >
    Login
 </button>
</div>






  )
}
export default Login