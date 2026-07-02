export const AGENTS = [
  { id: 'ORIGIN', role: 'Intent → Engineering mission', core: true },
  { id: 'NEXUS', role: 'Task decomposition', core: true },
  { id: 'ARCHITECT', role: 'System design', core: true },
  { id: 'KODE', role: 'Code generation', core: true },
  { id: 'TESTER', role: 'Validation & QA', core: false },
  { id: 'DEPLOYER', role: 'Deployment management', core: false },
  { id: 'ARIA', role: 'UX/UI design', core: false },
  { id: 'SAGE', role: 'Knowledge management', core: false },
  { id: 'SCRIBE', role: 'Documentation', core: false },
  { id: 'VISIONARY', role: 'Product vision', core: false },
  { id: 'ANALYST', role: 'Data analysis', core: false },
  { id: 'SECURITY', role: 'Security audit', core: false },
  { id: 'OPTIMIZER', role: 'Performance tuning', core: false },
  { id: 'COMMUNICATOR', role: 'Project updates', core: false },
  { id: 'RESEARCHER', role: 'Deep research', core: false },
  { id: 'STRATEGIST', role: 'Long-term planning', core: false },
  { id: 'CREATOR', role: 'Content generation', core: false },
  { id: 'DESIGNER', role: 'Visual assets', core: false },
  { id: 'TRANSLATOR', role: 'Multi-language support', core: false },
  { id: 'MONITOR', role: 'System health', core: false },
  { id: 'ENGINEER', role: 'Technical implementation', core: false }
];

export const CHAT_AGENTS = [
  { id: 'ARIA', name: 'Aria', color: '#a78bfa', sys: 'You are Aria, a creative UI/UX expert.' },
  { id: 'KODE', name: 'Kode', color: '#06b6d4', sys: 'You are Kode, a rigorous senior software engineer.' },
  { id: 'NEXUS', name: 'Nexus', color: '#10b981', sys: 'You are Nexus, a strategic system architect.' },
  { id: 'SAGE', name: 'Sage', color: '#f59e0b', sys: 'You are Sage, a knowledgeable research assistant.' }
];

export const NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: '⊞', color: '#7c3aed' },
  { id: 'chat', label: 'Chat', icon: '✉', color: '#ff80b5' },
  { id: 'agents', label: 'Agents', icon: '⚗', color: '#3b82f6' },
  { id: 'dev-tools', label: 'Dev Tools', icon: '🔧', color: '#f59e0b' },
  { id: 'content', label: 'Content', icon: '📄', color: '#10b981' },
  { id: 'data', label: 'Data', icon: '📊', color: '#06b6d4' },
  { id: 'specialized', label: 'Specialized', icon: '📦', color: '#d946ef' },
  { id: 'settings', label: 'Settings', icon: '⚙', color: '#f0f4ff' }
];
