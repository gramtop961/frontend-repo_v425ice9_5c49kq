import React from 'react';
import { Users, Dumbbell, DollarSign } from 'lucide-react';

const cards = [
  {
    label: 'Active Members',
    value: '1,284',
    change: '+3.2% this week',
    icon: Users,
    accent: 'cyan',
  },
  {
    label: 'Total Sessions',
    value: '5,930',
    change: '+8.1% this month',
    icon: Dumbbell,
    accent: 'red',
  },
  {
    label: 'Revenue',
    value: '$72,410',
    change: '+12.4% QoQ',
    icon: DollarSign,
    accent: 'gray',
  },
];

const accentMap = {
  cyan: 'from-cyan-500/30 to-cyan-400/10 border-cyan-400/30',
  red: 'from-red-500/30 to-red-400/10 border-red-400/30',
  gray: 'from-zinc-500/30 to-zinc-400/10 border-zinc-400/30',
};

export default function SummaryCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map(({ label, value, change, icon: Icon, accent }) => (
        <div
          key={label}
          className={`relative overflow-hidden rounded-xl border bg-white/[0.03] border-white/10 p-5`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${accentMap[accent]} opacity-30`} />
          <div className="relative flex items-start justify-between">
            <div>
              <p className="text-white/70 text-xs uppercase tracking-wider">{label}</p>
              <h3 className="text-white font-bold text-2xl md:text-3xl mt-1">{value}</h3>
              <p className="text-white/60 text-xs mt-2">{change}</p>
            </div>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/10">
              <Icon className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
