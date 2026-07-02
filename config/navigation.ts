import { LayoutDashboard, MessageSquare, Bot, Wrench, FileText, BarChart3, Package, Settings } from 'lucide-react';

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { id: 'chat', label: 'Chat', href: '/chat', icon: MessageSquare },
  { id: 'agents', label: 'Agents', href: '/agents', icon: Bot },
  { id: 'dev-tools', label: 'Dev Tools', href: '/dev-tools', icon: Wrench },
  { id: 'content', label: 'Content', href: '/content', icon: FileText },
  { id: 'data', label: 'Data', href: '/data', icon: BarChart3 },
  { id: 'specialized', label: 'Specialized', href: '/specialized', icon: Package },
  { id: 'settings', label: 'Settings', href: '/settings', icon: Settings },
];
