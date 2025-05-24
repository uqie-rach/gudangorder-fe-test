import React from 'react';

const Address = () => {
  return (
    <div className=" w-full max-w-6xl mx-auto">
      <div className="bg-white rounded-none shadow-xl p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Billing Address Section */}
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L5 10L12 3L19 10L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 12V19C5 19.5523 5.44772 20 6 20H9V16C9 15.4477 9.44772 15 10 15H14C14.5523 15 15 15.4477 15 16V20H18C18.5523 20 19 19.5523 19 19V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Billing Address</h2>
            </div>
            
            <div className="space-y-4 ml-1">
              <div>
                <span className="text-gray-500 font-medium">Street:</span>
                <span className="ml-2">3576 Glen Street</span>
              </div>
              
              <div>
                <span className="text-gray-500 font-medium">City:</span>
                <span className="ml-2">Summer Shade</span>
              </div>
              
              <div>
                <span className="text-gray-500 font-medium">State/province/area:</span>
                <span className="ml-2">Kentucky</span>
              </div>
              
              <div>
                <span className="text-gray-500 font-medium">Phone number:</span>
                <span className="ml-2">270-428-8378</span>
              </div>
              
              <div>
                <span className="text-gray-500 font-medium">Zip code:</span>
                <span className="ml-2">42166</span>
              </div>
              
              <div>
                <span className="text-gray-500 font-medium">Country calling code:</span>
                <span className="ml-2">+1</span>
              </div>
              
              <div>
                <span className="text-gray-500 font-medium">Country:</span>
                <span className="ml-2">United States</span>
              </div>
            </div>
          </div>
          
          {/* Shipping Address Section */}
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 18V6C14 5.44772 13.5523 5 13 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 8H17L21 12V18C21 18.5523 20.5523 19 20 19H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7" cy="19" r="2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17" cy="19" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Shipping Address</h2>
            </div>
            
            <div className="space-y-4 ml-1">
              <div>
                <span className="text-gray-500 font-medium">Street:</span>
                <span className="ml-2">3133 Lewis Street</span>
              </div>
              
              <div>
                <span className="text-gray-500 font-medium">City:</span>
                <span className="ml-2">Naperville</span>
              </div>
              
              <div>
                <span className="text-gray-500 font-medium">State/province/area:</span>
                <span className="ml-2">Illinois</span>
              </div>
              
              <div>
                <span className="text-gray-500 font-medium">Phone number:</span>
                <span className="ml-2">630-857-9127</span>
              </div>
              
              <div>
                <span className="text-gray-500 font-medium">Zip code:</span>
                <span className="ml-2">60563</span>
              </div>
              
              <div>
                <span className="text-gray-500 font-medium">Country calling code:</span>
                <span className="ml-2">+1</span>
              </div>
              
              <div>
                <span className="text-gray-500 font-medium">Country:</span>
                <span className="ml-2">United States</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;