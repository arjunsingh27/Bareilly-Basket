import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegistration = async (event: React.FormEvent) => {
    event.preventDefault();

    // Check if the user already exists (this is a simplified example)
    const userExists = await checkUserExists(username);

    if (userExists) {
      setErrorMessage('User already exists');
    } else {
      // Register the user (this is a simplified example)
      const registrationSuccess = await registerUser(username, password);

      if (registrationSuccess) {
        // Redirect or handle successful registration
      } else {
        setErrorMessage('Registration failed. Please try again.');
      }
    }
  };

  const checkUserExists = async (username: string): Promise<boolean> => {
    // Implement a function to check user existence on the server
    // You might make an API request to your backend here
    // Example: const response = await fetch(`/api/checkUser/${username}`);
    // The server should respond with a boolean indicating whether the user exists
    // const data = await response.json();
    // return data.exists;
    // For the sake of simplicity, we'll assume user exists if username is 'existingUser'
    return username === 'existingUser';
  };

  const registerUser = async (username: string, password: string): Promise<boolean> => {
    // Implement a function to register the user on the server
    // You might make an API request to your backend here
    // Example: const response = await fetch('/api/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ username, password }),
    // });
    // The server should respond with a boolean indicating whether the registration was successful
    // const data = await response.json();
    // return data.success;
    // For the sake of simplicity, we'll assume registration is successful if username is not 'errorUser'
    return username !== 'errorUser';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Register</h2>
        <form onSubmit={handleRegistration}>
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
            Register
          </button>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          <Link to="../login" className="mt-4 text-sm text-blue-500">
            Already have an account? Login here.
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
