'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="relative h-screen">
      <Header />
      <div className="p-5 min-h-[60px] text-white bg-[#006a44] flex flex-col">
        <h1 className="text-[28px]">Welcome back!</h1>
        <p className='text-base'>To log in, enter your user ID and password below.</p>
      </div>
      <div className="bg-[white] p-4">
        <div className="mt-3">{error && <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>

        <div className="bg-white mx-auto py-7">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6 p-5">
              <div className="flex flex-col gap-3">
                <label htmlFor="Username" className="text-[#000000] font-[600] text-[16px]">
                  User ID
                </label>
                <input type="text" value={username} className="p-4 rounded text-[#000000] bg-transparent border border-gray-400 outline-none" onChange={e => setUsername(e.target.value)} />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="password" className="text-[#000000] font-[600] text-[16px]">
                  Password
                </label>
                <input type="password" value={password} className="p-4 rounded text-[#000000] bg-transparent border border-gray-400 outline-none" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="flex flex-col w-full items-center justify-between gap-2 mt-6">
                <button type="submit" className="p-4 bg-[#d93d00] w-full text-white font-semibold rounded-md">
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full min-h-[70px] absolute bottom-0 z-50 flex bg-[#22262A] px-[10px] p-[20px]">
        <p className="text-sm text-[#CCCCCC] text-center">©2025 Citizens Financial Group, Inc. All rights reserved. Citizens is a brand name of Citizens Bank, N.A.. Member FDIC.</p>
      </div>
    </div>
  );
}
