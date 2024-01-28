import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form>
          <div className="mb-4 flex flex-col">
            <label htmlFor="username" className="text-sm font-medium text-gray-600 mr-100 text-left">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 border rounded-md"
              placeholder="Enter your username"
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
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Log in
          </button>
          <Link to="../register" className="mb-4 flex flex-col">
                <label htmlFor="username" className="text-sm font-medium text-gray-600 mr-100 text-right mt-5">
                Register
            </label>
            </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
