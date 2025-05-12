// order/page.tsx 
"use client";

import React, { useState } from 'react';
import Newsletter from '../_components/newsletter';
import Breadcrumb from './_components/breadcrumb';

export default function OrderTrackingPage() {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');

  const handleTrack = () => {
    console.log('Tracking order:', { orderId, email });
  };

  return (
  <>
    <Breadcrumb />

    <div className="min-h-[70vh] bg-gray-50 flex items-center justify-center px-4 py-2">
      <div className="w-full max-w-3xl bg-white shadow-xl">
        <div className="p-6">
          <div>
            <div className="mb-4">
              <label htmlFor="orderId" className="block text-gray-700 font-normal text-base mb-2">
                Order ID <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                id="orderId"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter the order ID" 
                className="w-full px-3 py-2 border border-gray-300 focus:outline-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-normal text-base mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="w-full px-3 py-2 border border-gray-300 focus:outline-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <button 
              onClick={handleTrack}
              className="w-full bg-blue-700 text-white py-2 rounded-none text-lg hover:bg-blue-800 transition-colors"
            >
              Track
            </button>
          </div>
        </div>
      </div>
    </div>

    <Newsletter />
  </>
  );
}