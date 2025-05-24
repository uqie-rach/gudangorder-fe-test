'use client';

import React, { useState } from 'react';
import { CheckCheck, Package2, ShoppingBag } from 'lucide-react';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

type User = {
  name?: string;
  email?: string;
  address?: string;
  city?: string;
  zipCode?: string;
};

type ProfileProps = {
  user?: User;
};

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const dashboardItems = [
    { id: 'products', label: 'products', icon: <ShoppingBag className="w-10 h-10" />, count: 2 },
    { id: 'orders', label: 'Orders', icon: <Package2 className="w-10 h-10" />, count: 5 },
    { id: 'sold', label: 'Sold', icon: <CheckCheck className="w-10 h-10" />, count: 5 },
  ];

  const handleItemClick = (itemId: string) => {
    setSelectedItem(selectedItem === itemId ? null : itemId);
  };

  return (
    <div>
      <div className="bg-white mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="flex items-center">
          <Avatar className="h-20 w-20 mr-4 border-4 border-teal-200">
            <AvatarImage src="/avatar-placeholder.jpg" alt="User Avatar" />
            <AvatarFallback className="bg-teal-500 text-white">
              {user?.name?.charAt(0) || 'A'}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Welcome Mr. Admin!</h1>
            <div className="flex items-center text-base sm:text-lg">
              <span className="text-gray-600">You have</span>
              <Badge className="mx-1 bg-blue-500 hover:bg-blue-600">08</Badge>
              <span className="text-gray-600">notifications</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {dashboardItems.map((item) => (
          <Card
            key={item.id}
            className={`border shadow-none transition-shadow rounded-none cursor-pointer ${selectedItem === item.id ? 'ring-2 ring-blue-400' : ''
              }`}
            onClick={() => handleItemClick(item.id)}
          >
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <div className="relative mb-2">
                {item.icon}
                <Badge className="absolute -top-2 -right-2 bg-blue-500 hover:bg-blue-600 rounded-full h-6 w-6 flex items-center justify-center">
                  {item.count}
                </Badge>
              </div>
              <h3 className="font-semibold text-lg text-center capitalize">{item.label}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  );
};

export default Profile;
