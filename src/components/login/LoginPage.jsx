import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleLogin = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required.';
    if (!password) newErrors.password = 'Password is required.';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 6) return;
    // Handle login logic
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-black">
      <div className="bg-white p-10 rounded shadow w-full max-w-xs">
        <form onSubmit={handleLogin}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>}
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
          </div>
          <div className="mb-6 text-center">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
          </div>
          <div className="text-center">
            <a
              className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;