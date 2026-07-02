'use client';

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold font-['Syne']">Dashboard</h1>
      <p className="text-muted-foreground mt-2">Welcome to WPX OS.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <div className="p-6 rounded-xl border bg-card">
          <h3 className="font-semibold">Modules</h3>
          <p className="text-2xl font-bold mt-2">8</p>
        </div>
        <div className="p-6 rounded-xl border bg-card">
          <h3 className="font-semibold">Active Agents</h3>
          <p className="text-2xl font-bold mt-2">21</p>
        </div>
        <div className="p-6 rounded-xl border bg-card">
          <h3 className="font-semibold">System Status</h3>
          <p className="text-2xl font-bold mt-2 text-emerald-500">Online</p>
        </div>
      </div>
    </div>
  );
}
