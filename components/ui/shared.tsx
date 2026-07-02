'use client';
import { useState, useEffect } from 'react';

export const Btn = ({ onClick, children, className = '' }: { onClick: () => void, children: React.ReactNode, className?: string }) => (
  <button 
    onClick={onClick}
    className={`px-4 py-2 rounded-lg bg-[var(--b0)] hover:bg-[var(--b1)] transition ${className}`}
  >
    {children}
  </button>
);

export const Hdr = ({ title, children }: { title: string, children?: React.ReactNode }) => (
  <header className="flex items-center justify-between p-4 border-b border-[var(--b0)]">
    <h2 className="text-xl font-bold font-['Syne']">{title}</h2>
    {children}
  </header>
);

export const Tag = ({ color, children }: { color: string, children: React.ReactNode }) => (
  <span className="px-2 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: color }}>
    {children}
  </span>
);
