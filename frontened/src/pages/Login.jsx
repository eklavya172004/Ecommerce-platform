import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setname]  = useState('');
  const [currentstate,setstate] = useState('Login');
  const [confirmpassword,setconfirmpassword] = useState('');

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentstate === 'Signup'){
      if(password !== confirmpassword ){
        setError('Passwords didn\'t match')
      }else if(!email || !name){
        setError('All fields are required');
      }else{
        setError('');
        setstate('Login');
      }
    }else if(currentstate === 'Login'){
      if (email === 'user@example.com' && password === 'password123'){
        toast.success('Successfully Logged in!');
        navigate('/')
      }else{
        setError('Invalid email or password!');
      }
    }
  };

  return (
    <div className="flex items-center min-h-screen justify-center  md:p-10 p-3 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6"> {currentstate === 'Login' ? <p>Login</p> : <p>Sign-up</p> }</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className={`${currentstate === 'Login' ? ' hidden' : ''} mb-2`}>

          <label className="block  text-gray-700 font-medium mb-2" htmlFor="text">
              Name
            </label>
            <input
              type="text"
              id="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter your name"
              className="w-full md:px-4 px-2 py-2 md:py-2 border roboto-medium border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            </div>
            <label className="block  text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-2 md:px-4 py-2 border roboto-medium border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-2 md:px-4 py-2 border roboto-medium border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <a href='/' className={`${currentstate === 'Login'? '' : 'hidden'} text-blue-500 roboto-medium text-sm`}>Forgot password?</a>
            <div className={`${currentstate === 'Signup' ? '' : 'hidden'}`}>
            <label className="block text-gray-700 font-medium mt-3 mb-2" htmlFor="password">
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e.target.value)}
              placeholder="Enter-confirm password"
              className="w-full px-2 md:px-4 py-2 border roboto-medium border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            </div>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
             {currentstate === 'Login' ? <p>Login</p> : <p>Sign-up</p> }
          </button>
        </form>
        <p className={`${currentstate === 'Login' ? '' : 'hidden'} text-center text-gray-600 mt-4`}>
          Don't have an account?{' '}
          <p onClick={() => setstate('Signup')} className="text-blue-500 hover:cursor-pointer hover:underline ">
            Register here
          </p>
        </p>
      </div>
    </div>
  );
};

export default Login;
