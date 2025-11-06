import React from 'react';
import SidebarNav from './components/SidebarNav';
import HeroCover from './components/HeroCover';
import SummaryCards from './components/SummaryCards';
import AnalyticsAndUsers from './components/AnalyticsAndUsers';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] to-[#1A1A1A] text-white">
      <SidebarNav />
      <main className="pl-64">
        <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
          <HeroCover />
          <SummaryCards />
          <AnalyticsAndUsers />
        </div>
      </main>
    </div>
  );
}
