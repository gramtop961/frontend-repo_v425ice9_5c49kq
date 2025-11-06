import React from 'react';

function ScheduleChart() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const series = [50, 72, 65, 90, 110, 80, 70];
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-white font-semibold">Workout Sessions</h4>
        <span className="text-white/60 text-xs">Last 7 days</span>
      </div>
      <div className="h-36 grid grid-cols-7 gap-2 items-end">
        {series.map((v, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div
              className="w-full rounded-md bg-gradient-to-t from-[#1A1A1A] to-[#0B0B0B] border border-white/10"
              style={{ height: `${Math.max(8, v)}px` }}
            >
              <div className="h-full w-full bg-cyan-400/30" />
            </div>
            <span className="text-white/50 text-[10px]">{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function UsersTable() {
  const rows = [
    { name: 'Ava Carter', status: 'Active', plan: 'Pro', sessions: 38 },
    { name: 'Liam Johnson', status: 'Paused', plan: 'Basic', sessions: 12 },
    { name: 'Mia Chen', status: 'Active', plan: 'Elite', sessions: 54 },
    { name: 'Noah Smith', status: 'Active', plan: 'Pro', sessions: 29 },
  ];
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b border-white/10">
        <h4 className="text-white font-semibold">User Management</h4>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-sm rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/30 transition-colors">
            Add User
          </button>
          <button className="px-3 py-1.5 text-sm rounded-md bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors">
            Export
          </button>
        </div>
      </div>
      <div className="divide-y divide-white/10">
        <div className="grid grid-cols-4 px-5 py-2 text-xs uppercase tracking-wider text-white/50">
          <div>Name</div>
          <div>Status</div>
          <div>Plan</div>
          <div className="text-right">Sessions</div>
        </div>
        {rows.map((r) => (
          <div key={r.name} className="grid grid-cols-4 px-5 py-3 text-sm text-white/80 hover:bg-white/[0.04]">
            <div className="font-medium text-white">{r.name}</div>
            <div>
              <span className={`px-2 py-0.5 rounded-md text-xs border ${
                r.status === 'Active'
                  ? 'border-cyan-400/40 text-cyan-300 bg-cyan-500/10'
                  : 'border-zinc-400/40 text-zinc-300 bg-zinc-500/10'
              }`}>
                {r.status}
              </span>
            </div>
            <div className="text-white/80">{r.plan}</div>
            <div className="text-right text-white/80">{r.sessions}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AnalyticsAndUsers() {
  return (
    <div className="grid lg:grid-cols-5 gap-4">
      <div className="lg:col-span-2">
        <ScheduleChart />
      </div>
      <div className="lg:col-span-3">
        <UsersTable />
      </div>
    </div>
  );
}
