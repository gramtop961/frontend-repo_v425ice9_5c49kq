import React from 'react';
import { Home, BarChart2, Users, Settings } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: Home },
  { label: 'Analytics', icon: BarChart2 },
  { label: 'Members', icon: Users },
  { label: 'Settings', icon: Settings },
];

export default function SidebarNav() {
  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-[#0B0B0B] to-[#1A1A1A] border-r border-white/10">
      <div className="h-16 flex items-center px-6 border-b border-white/10">
        <div className="text-white font-bold tracking-wide text-lg">ObsidianFit</div>
      </div>
      <nav className="py-4">
        {navItems.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="w-full group flex items-center gap-3 px-6 py-3 text-sm text-white/70 hover:text-white transition-colors"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 border border-white/10 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 transition-colors">
              <Icon className="h-5 w-5" />
            </span>
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <p className="text-white/70 text-xs leading-relaxed">
            Strength through simplicity. Control every metric with clarity.
          </p>
        </div>
      </div>
    </aside>
  );
}
