'use client';
import { useState, useEffect } from 'react';
import { NAV } from '@/lib/constants';
import { Hdr, Btn } from '@/components/ui/shared';

export default function Home() {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <nav className="w-64 border-r border-[var(--b0)] flex flex-col p-4 bg-[var(--bg1)]">
        <h1 className="text-2xl font-bold font-['Syne'] text-[var(--violet)] mb-8">WPX OS</h1>
        {NAV.map((item) => (
          <button 
            key={item.id}
            onClick={() => setActiveModule(item.id)}
            className={`flex items-center gap-3 p-3 rounded-lg mb-1 transition ${activeModule === item.id ? 'bg-[var(--b1)]' : 'hover:bg-[var(--s0)]'}`}
          >
            <span style={{ color: item.color }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      <main className="flex-1 flex flex-col overflow-hidden">
        <Hdr title={NAV.find(n => n.id === activeModule)?.label || ''} />
        <div className="flex-1 p-6 overflow-auto">
          <p>Module: {activeModule}</p>
        </div>
      </main>
    </div>
  );
}
