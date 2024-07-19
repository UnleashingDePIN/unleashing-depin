'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const popup = ({ handleShowModal }: { handleShowModal: () => void }) => {
  const [email, setEmail] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/pulsenotify', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ EMAIL: email })});
      if (response.ok) {alert('Subscription successful!');} else {alert('Subscription failed. Please try again.');}
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm" onClick={handleShowModal}>
      <div className="relative bg-white rounded-lg shadow py-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-3 right-2.5 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close" onClick={handleShowModal}>
          <svg aria-hidden="true" className="w-5 h-5" fill="#c6c7c7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
          <span className="sr-only">Close popup</span>
        </button>

        <div className="p-5">
          <div className="text-center">
            <p className="mb-10 text-2xl font-semibold leading-5 text-slate-900">Get Notified About DePIN Pulse</p>
          </div>
          <form className="w-full px-7" onSubmit={handleSubmit}>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" variant="default" className="w-full mt-2">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default popup;