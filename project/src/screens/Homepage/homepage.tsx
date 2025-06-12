import { BellIcon, CalendarIcon, ClockIcon, LogOutIcon, MapPinIcon, UserIcon, UsersIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

interface HomepageProps {
  onLogout?: () => void;
}

export const Homepage = ({ onLogout }: HomepageProps): JSX.Element => {
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const timeString = currentDate.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <img
                src="/logo_aplikasi.png"
                alt="SiAP Logo"
                className="h-10 w-10 rounded-full"
              />
              <div>
                <h1 className="text-xl font-semibold text-gray-900">SiAP</h1>
                <p className="text-sm text-gray-500">Sistem Absensi Pintar</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <BellIcon className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <UserIcon className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Admin User</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onLogout}
                className="text-gray-500 hover:text-red-500"
                title="Keluar"
              >
                <LogOutIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Selamat Datang!</h2>
          <p className="text-gray-600">Kelola sistem absensi dengan mudah dan efisien</p>
        </div>

        {/* Date and Time Card */}
        <Card className="mb-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <CalendarIcon className="h-8 w-8" />
                <div>
                  <p className="text-lg font-semibold">{dateString}</p>
                  <p className="text-blue-100">Waktu saat ini</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-6 w-6" />
                <span className="text-2xl font-bold">{timeString}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Karyawan</p>
                  <p className="text-3xl font-bold text-gray-900">248</p>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <UsersIcon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm text-green-600 font-medium">+12% dari bulan lalu</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Hadir Hari Ini</p>
                  <p className="text-3xl font-bold text-gray-900">186</p>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <ClockIcon className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm text-gray-600">75% tingkat kehadiran</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Terlambat</p>
                  <p className="text-3xl font-bold text-gray-900">23</p>
                </div>
                <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <ClockIcon className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm text-yellow-600">-5% dari kemarin</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Tidak Hadir</p>
                  <p className="text-3xl font-bold text-gray-900">39</p>
                </div>
                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <UserIcon className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm text-red-600">+3% dari kemarin</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Aksi Cepat</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button className="h-20 flex flex-col items-center justify-center space-y-2 bg-blue-500 hover:bg-blue-600">
                  <ClockIcon className="h-6 w-6" />
                  <span className="text-sm">Absen Masuk</span>
                </Button>
                <Button className="h-20 flex flex-col items-center justify-center space-y-2 bg-green-500 hover:bg-green-600">
                  <ClockIcon className="h-6 w-6" />
                  <span className="text-sm">Absen Keluar</span>
                </Button>
                <Button className="h-20 flex flex-col items-center justify-center space-y-2 bg-purple-500 hover:bg-purple-600">
                  <UsersIcon className="h-6 w-6" />
                  <span className="text-sm">Kelola Karyawan</span>
                </Button>
                <Button className="h-20 flex flex-col items-center justify-center space-y-2 bg-orange-500 hover:bg-orange-600">
                  <CalendarIcon className="h-6 w-6" />
                  <span className="text-sm">Laporan</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Aktivitas Terbaru</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                    <ClockIcon className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">John Doe absen masuk</p>
                    <p className="text-xs text-gray-500">08:15 WIB</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <UserIcon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Karyawan baru ditambahkan</p>
                    <p className="text-xs text-gray-500">07:45 WIB</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="h-8 w-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <ClockIcon className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Jane Smith terlambat</p>
                    <p className="text-xs text-gray-500">08:35 WIB</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location Info */}
        <Card className="bg-gradient-to-r from-green-500 to-teal-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <MapPinIcon className="h-8 w-8" />
                <div>
                  <h3 className="text-lg font-semibold">Lokasi Kantor</h3>
                  <p className="text-green-100">Jl. Sudirman No. 123, Jakarta Pusat</p>
                </div>
              </div>
              <Button variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Lihat Peta
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};