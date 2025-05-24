'use client';

import React, { useState } from 'react';

type SettingKey = 'likesFollows' | 'postCommentsReplies' | 'newProduct' | 'productOnSale' | 'payment';

const Notification = () => {
  const [settings, setSettings] = useState({
    likesFollows: true,
    postCommentsReplies: true,
    newProduct: true,
    productOnSale: true,
    payment: true
  });

  const toggleSetting = (key: SettingKey) => {
    setSettings({
      ...settings,
      [key]: !settings[key]
    });
  };

  const ToggleSwitch: React.FC<{ isOn: boolean; onToggle: () => void; label: string }> = ({ isOn, onToggle, label }) => (
    <div className="flex items-center space-x-3">
      <div
        className={`w-12 h-6 ${isOn ? 'bg-blue-500 shadow-blue-200' : 'bg-gray-300 shadow-gray-200'
          } rounded-full relative transition-all duration-500 ease-in-out cursor-pointer shadow-md hover:shadow-lg transform hover:scale-105`}
        onClick={onToggle}
      >
        <div
          className={`absolute w-5 h-5 bg-white rounded-full top-0.5 shadow-md transition-all duration-500 ease-in-out transform ${isOn ? 'translate-x-6 bg-white' : 'translate-x-0.5 bg-gray-50'
            } hover:shadow-lg`}
        ></div>

        <div
          className={`absolute inset-0 rounded-full transition-all duration-300 ${isOn ? 'bg-blue-100 opacity-20' : 'bg-gray-100 opacity-0'
            }`}
        ></div>
      </div>
      <div className={`font-medium transition-colors duration-300 ${isOn ? 'text-gray-900' : 'text-gray-600'
        }`}>
        {label}
      </div>
    </div>
  );

  return (
    <div>

      <div>
        <p className="text-gray-600 mb-8">
          Stay up to date with notification on activity that involves you including mentions, messages, replies to your bids, new items, sale and administrative updates
        </p>

        <div className="space-y-6">
          <ToggleSwitch
            isOn={settings.likesFollows}
            onToggle={() => toggleSetting('likesFollows')}
            label="Like & Follows Notifications"
          />

          <ToggleSwitch
            isOn={settings.postCommentsReplies}
            onToggle={() => toggleSetting('postCommentsReplies')}
            label="Post, Comments & Replies Notifications"
          />

          <ToggleSwitch
            isOn={settings.newProduct}
            onToggle={() => toggleSetting('newProduct')}
            label="New Product Notifications"
          />

          <ToggleSwitch
            isOn={settings.productOnSale}
            onToggle={() => toggleSetting('productOnSale')}
            label="Product on sale Notifications"
          />

          <ToggleSwitch
            isOn={settings.payment}
            onToggle={() => toggleSetting('payment')}
            label="Payment Notifications"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
