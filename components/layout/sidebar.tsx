'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import { NAV_ITEMS } from '@/config/navigation'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-16 border-r bg-[rgba(3,4,10,0.95)] backdrop-blur-[40px] border-[rgba(255,255,255,0.07)] flex flex-col items-center py-4 transition-all duration-300 hover:w-48">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#ff2d6b]">
          <span className="font-syne text-lg font-bold text-white">Ω</span>
        </div>
        <span className="font-syne text-lg font-bold text-white hidden hover:block group-hover:block transition-all">WPX</span>
      </div>

      <nav className="flex flex-col items-center gap-1 w-full px-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
          const Icon = item.icon
          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                'group flex h-10 w-full items-center justify-start gap-3 rounded-lg p-2 transition-all',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-[var(--text-3)] hover:bg-[rgba(255,255,255,0.05)] hover:text-[var(--text)]'
              )}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              <span className="hidden group-hover:block font-medium whitespace-nowrap">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="sidebar-indicator"
                  className="absolute left-0 h-6 w-0.5 rounded-full bg-[#7c3aed]"
                />
              )}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
