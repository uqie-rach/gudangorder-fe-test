'use client';

import React from 'react';
import { FileText, Bell, KeyRound, UserCog } from 'lucide-react';

type ProfileSidebarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ activeTab, setActiveTab }) => {
  const sidebarItems = [
    { id: 'profile', label: 'Profile', icon: <UserCog className="w-5 h-5 mr-2" /> },
    { id: 'orders', label: 'My Orders', icon: <FileText className="w-5 h-5 mr-2" /> },
    { id: 'notification', label: 'Notification', icon: <Bell className="w-5 h-5 mr-2" /> },
    { id: 'password', label: 'Change Password', icon: <KeyRound className="w-5 h-5 mr-2" /> },
  ];

  return (
    <div className="bg-white rounded-xl md:rounded-2xl sticky top-24">
      <div className="space-y-0">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            className={`flex items-center w-full p-3 text-left rounded-none ${activeTab === item.id ? 'bg-blue-50 text-blue-600 font-medium text-lg' : 'text-gray-600 hover:bg-gray-100 font-medium text-lg'
              }`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileSidebar;
