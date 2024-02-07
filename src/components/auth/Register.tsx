import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegistration = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const registrationSuccess = await registerUser(username, password);
      if (registrationSuccess) {
        setResponse('Registration successful');
        console.log('Registration successful');
      } else {
        console.log('user exists')
        setResponse( 'User exists plese login ');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setErrorMessage('User exists plese login'); 
    }
  };

  const registerUser = async (username: string, password: string): Promise<boolean> => {
    try {
      // Perform user registration
      await axios.post('https://bareillybasket.onrender.com/register', { username, password });
      return true;
    } catch (error) {
      console.error('Error registering user:', error);
      return false;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Register</h2>
        <form onSubmit={handleRegistration}>
          <div className="mb-4 flex flex-col">
            <label htmlFor="username" className="text-sm font-medium text-gray-600 mr-4">
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
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
            Register
          </button>
          {response && <p className="text-green-500 mt-2">{response}</p>}
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          <Link to="/login" className="mt-4 text-sm text-blue-500">
            Already have an account? Login here.
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
