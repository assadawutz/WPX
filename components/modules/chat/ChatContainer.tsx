'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useChatStore } from '@/lib/store/chatStore'
import { cn } from '@/lib/utils/cn'
import { Send, Search, MoreHorizontal } from 'lucide-react'

export function ChatContainer() {
  const {
    sessions,
    currentSessionId,
    addMessage,
    setCurrentSession,
    createSession,
    deleteSession,
  } = useChatStore()

  const currentSession = sessions.find(s => s.id === currentSessionId)
  const messages = currentSession?.messages || []
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || !currentSessionId) return
    const content = input
    setInput('')
    addMessage(currentSessionId, { role: 'user', content })

    setIsStreaming(true)
    // ... API call logic similar to prompt
    setTimeout(() => {
        addMessage(currentSessionId, {
            role: 'assistant',
            content: "This is a simulated production response for " + content,
            isStreaming: false
        })
        setIsStreaming(false)
    }, 1000)
  }

  return (
    <div className="flex h-full flex-col gap-4 p-4 glass">
      <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
        <h2 className="text-xl font-bold font-syne">Chat</h2>
        <div className="flex gap-2">
            <button className="p-2 rounded-lg hover:bg-[var(--border-hover)]"><Search className="h-4 w-4" /></button>
            <button className="p-2 rounded-lg hover:bg-[var(--border-hover)]"><MoreHorizontal className="h-4 w-4" /></button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4" ref={scrollRef}>
          {messages.map((msg, index) => (
            <div key={index} className={cn("p-4 rounded-xl max-w-[80%]", msg.role === 'user' ? 'bg-primary text-white self-end' : 'bg-[var(--bg-2)] border border-[var(--border)] self-start')}>
                {msg.content}
            </div>
          ))}
      </div>

      <div className="p-4 border-t border-[var(--border)] flex gap-2">
        <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-[var(--bg-2)] border border-[var(--border)] rounded-lg px-4 py-2"
            placeholder="Message AI..."
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className="p-2 bg-[var(--violet)] rounded-lg text-white">
            <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
