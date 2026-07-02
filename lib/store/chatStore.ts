import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { nanoid } from 'nanoid'

export interface Message {
  role: 'user' | 'assistant'
  content: string
  agentId?: string
  isStreaming?: boolean
}

export interface Session {
  id: string
  title: string
  messages: Message[]
  agentId: string
  createdAt: number
}

interface ChatState {
  sessions: Session[]
  currentSessionId: string | null
  currentAgentId: string
  addMessage: (sessionId: string, message: Message) => void
  createSession: (agentId?: string) => string
  deleteSession: (sessionId: string) => void
  setCurrentSession: (sessionId: string) => void
  setCurrentAgent: (agentId: string) => void
}

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      sessions: [],
      currentSessionId: null,
      currentAgentId: 'ARIA',

      addMessage: (sessionId, message) => {
        set((state) => ({
          sessions: state.sessions.map((s) =>
            s.id === sessionId
              ? { ...s, messages: [...s.messages, message] }
              : s
          ),
        }))
      },

      createSession: (agentId = 'ARIA') => {
        const id = nanoid()
        const title = `Chat ${get().sessions.length + 1}`
        set((state) => ({
          sessions: [
            ...state.sessions,
            { id, title, messages: [], agentId, createdAt: Date.now() },
          ],
          currentSessionId: id,
        }))
        return id
      },

      deleteSession: (sessionId) => {
        set((state) => ({
          sessions: state.sessions.filter((s) => s.id !== sessionId),
          currentSessionId:
            state.currentSessionId === sessionId
              ? state.sessions[0]?.id || null
              : state.currentSessionId,
        }))
      },

      setCurrentSession: (sessionId) => {
        set({ currentSessionId: sessionId })
      },

      setCurrentAgent: (agentId) => {
        set({ currentAgentId: agentId })
      },
    }),
    {
      name: 'wpx-chat',
    }
  )
)
