'use client';

import React, { useState } from 'react';

import ProfileSidebar from './components/ProfileSidebar';
import Profile from './components/Profile';
import Information from './components/Information';
import PasswordChange from './components/PasswordChange';
import Orders from './components/Orders';
import Notification from './components/Notification';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [isVisible, setIsVisible] = useState(true);

  const handleTabChange = (newTab: string) => {
    if (newTab !== activeTab) {
      setIsVisible(false);
      setTimeout(() => {
        setActiveTab(newTab);
        setIsVisible(true);
      }, 150);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <Information />;
      case 'password':
        return <PasswordChange />;
      case 'orders':
        return <Orders />;
      case 'notification':
        return <Notification />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-6 px-4 lg:px-0 relative">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-[300px] mr-4 top-24">
          <ProfileSidebar activeTab={activeTab} setActiveTab={handleTabChange} />
        </div>

        <div className="space-y-3 shadow-md py-4 px-4 md:px-8 w-full rounded-xl">
          <Profile />

          <br />

          <div className={`w-full transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
            <h2 className="text-xl font-bold mb-2 capitalize">{activeTab}</h2>
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
