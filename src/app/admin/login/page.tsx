'use client';
import { useActionState } from 'react';
import { loginAction } from './../actions';

const initialState = { error: '' };

export default function AdminLogin() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin ASBJ</h1>
          <p className="text-gray-500 mt-2">Login ke dashboard panel (Default: admin / admin123)</p>
        </div>
        
        {state?.error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md text-sm">{state.error}</div>}
        
        <form action={formAction} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input name="username" type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input name="password" type="password" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 outline-none" />
          </div>
          <button type="submit" disabled={pending} className="w-full bg-black text-white font-bold py-3 px-4 rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50">
            {pending ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
