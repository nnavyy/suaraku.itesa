import React from 'react';
import { Home, ClipboardList, Settings, Bell } from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: <ClipboardList size={20} />, active: true },
  { icon: <Home size={20} />, active: false },
  { icon: <Settings size={20} />, active: false },
];

export default function AdminSidebar() {
  return (
    <aside className="h-screen w-16 md:w-20 bg-white border-r flex flex-col items-center py-4 gap-6 shadow-sm">
      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
        <ClipboardList className="text-blue-500" size={18} />
      </div>
      <nav className="flex flex-col items-center gap-6">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              'w-10 h-10 rounded-full flex items-center justify-center cursor-pointer',
              item.active ? 'bg-blue-100 text-blue-600 shadow' : 'text-gray-400 hover:text-blue-500'
            )}
          >
            {item.icon}
          </div>
        ))}
      </nav>
      <div className="mt-auto flex flex-col items-center gap-4">
        <Bell className="text-gray-400 hover:text-blue-500 cursor-pointer" size={20} />
        <Avatar>
          <AvatarImage src="/avatar.jpg" alt="Admin" />
        </Avatar>
      </div>
    </aside>
  );
}
