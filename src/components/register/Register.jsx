import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    //registration logic
  };

  return (

    <div className=" flex h-screen w-screen items-center justify-center bg-gray-100 py-12 px-4">
      <div className="  py-3 px-5 items-center justify-center rounded-md border-2 shadow-xl border-gray-100">
        <div className=' '>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md m-auto
           shadow-sm">
            <div>
              <label htmlFor="username" className='text-xl  text-gray-500 font-sm'> Enter your Username:</label>
              <br/>
              <input 
                id="username" 
                name="username" 
                type="text" 
                required 
                className=" relative block w-full px-4 py-3 mt-4 mb-4 border border-gray-300 shadow-black placeholder:font-semibold placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none   focus:ring-indigo-500 focus:border-indigo-500" 
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className=" text-xl  text-gray-500 font-sm">Email address</label>
              <input 
                id="email-address" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                className="relative block w-full px-4 py-3 mb-4 border border-gray-300 shadow-black placeholder:font-semibold placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 " 
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="text-xl  text-gray-500 font-sm ">Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                autoComplete="current-password" 
                required 
                className="relative block w-full px-4 py-3 mb-2 border border-gray-300 shadow-sm placeholder:font-semibold placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 " 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button 
              type="submit" 
              className="border-2 border-black text-white rounded-lg p-2 relative bottom-1 left-28  bg-indigo-600 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-2"
         >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
   
  );
};

export default Register;