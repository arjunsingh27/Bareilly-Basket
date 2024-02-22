import instance from '../../axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [{ currentUser }, dispatch] = useStateValue();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
//
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await instance.post('/login', { username, password });

      if (response.data) {
        const { userId, username , basket ,orders} = response.data;
        dispatch({
          type: 'SET_CURRENT_USER',
          user: {
            userId,
            username,
            basket,
            orders
          }
        });
        navigate('/products');
        console.log('Logged in as:', username + ' with id:', userId , 'basket:', basket);
      } else {
        console.error('Invalid response:', response);
        setErrorMessage('Error logging in. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('Error logging in. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4 flex flex-col">
            <label htmlFor="username" className="text-sm font-medium text-gray-600 mr-100 text-left">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 border rounded-md"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 text-left">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Log in
          </button>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          <Link to="/register" className="mt-4 text-sm text-blue-500">
            Don't have an account? Register here.
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
