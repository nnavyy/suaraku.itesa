'use client';
import React, { useState } from 'react';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Bell, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Complaint {
  title: string;
  status: 'pending' | 'diproses' | 'selesai';
  date: string;
  description: string;
}

const complaints: Complaint[] = [
  {
    title: 'Ruangan Lembab',
    status: 'pending',
    date: '07/13/25',
    description: 'Ruangan terasa lembab dan dinding basah.',
  },
  {
    title: 'Ruangan Berbau',
    status: 'pending',
    date: '07/13/25',
    description: 'Bau tidak sedap tercium dari sudut ruangan.',
  },
  {
    title: 'Soket Listrik Tidak Berfungsi',
    status: 'diproses',
    date: '07/13/25',
    description: 'Beberapa soket tidak berfungsi saat digunakan.',
  },
  {
    title: 'Parkiran Selalu Penuh',
    status: 'selesai',
    date: '07/13/25',
    description: 'Tidak tersedia lahan parkir di jam sibuk.',
  },
];

const statusColor = {
  pending: 'text-gray-400',
  diproses: 'text-orange-500',
  selesai: 'text-green-500',
};

export default function AdminDashboard() {
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 p-6 md:p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome, Arya (Admin)</h1>
          <p className="text-sm text-gray-500">Tue, 07 June 2022</p>
        </div>
        <div className="flex items-center gap-4">
          <Input placeholder="Search" className="w-[200px]" />
          <Bell className="text-gray-500" />
          <Avatar>
            <AvatarImage src="/avatar.jpg" alt="avatar" />
          </Avatar>
        </div>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-4 mb-6">
        <Button variant="outline" className="bg-white border-blue-300 text-blue-600 shadow">
          Show All
        </Button>
        <Button variant="outline">Category</Button>
        <Button variant="outline">Status</Button>
        <Button variant="outline">Date</Button>
      </div>

      {/* List Laporan */}
      <ScrollArea className="h-[60vh] pr-2">
        <div className="space-y-4">
          {complaints.map((item, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <Card
                  onClick={() => setSelectedComplaint(item)}
                  className="rounded-xl shadow hover:bg-gray-100 transition cursor-pointer"
                >
                  <CardContent className="flex justify-between items-center py-4 px-6">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-blue-100">
                        <Mail className="text-blue-500" size={20} />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-800">{item.title}</p>
                        <div className="flex gap-2 text-sm text-gray-600">
                          <span className="text-green-500">ruang lingkup</span>
                          <span className={cn(statusColor[item.status])}>{item.status}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-gray-500">{item.date}</span>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{selectedComplaint?.title}</DialogTitle>
                </DialogHeader>
                <div className="text-sm space-y-2 text-gray-700">
                  <p><strong>Status:</strong> {selectedComplaint?.status}</p>
                  <p><strong>Tanggal:</strong> {selectedComplaint?.date}</p>
                  <p><strong>Ruang Lingkup:</strong> ruang lingkup</p>
                  <p><strong>Deskripsi:</strong> {selectedComplaint?.description}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
