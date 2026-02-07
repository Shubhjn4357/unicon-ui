"use client"

import { AnimatePresence, motion } from "framer-motion"
import { AlertCircle, CheckCircle, Info, X } from "lucide-react"
import type React from "react"
import { createContext, useCallback, useContext, useEffect, useState } from "react"

export type ToastType = "success" | "error" | "info" | "default"

export interface Toast {
  id: string
  title?: string
  description?: string
  type?: ToastType
  duration?: number
}

interface ToastContextType {
  addToast: (toast: Omit<Toast, "id">) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback(
    ({ title, description, type = "default", duration = 3000 }: Omit<Toast, "id">) => {
      const id = Math.random().toString(36).substr(2, 9)
      setToasts((prev) => [...prev, { id, title, description, type, duration }])

      if (duration > 0) {
        setTimeout(() => {
          removeToast(id)
        }, duration)
      }
    },
    []
  )

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  )
}

function ToastContainer({
  toasts,
  removeToast,
}: { toasts: Toast[]; removeToast: (id: string) => void }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 w-full max-w-sm pointer-events-none p-4">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
        ))}
      </AnimatePresence>
    </div>
  )
}

function ToastItem({ toast, onClose }: { toast: Toast; onClose: () => void }) {
  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    error: <AlertCircle className="w-5 h-5 text-red-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />,
    default: null,
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      className="pointer-events-auto w-full bg-card border border-border rounded-xl shadow-lg p-4 flex items-start gap-3"
    >
      {icons[toast.type || "default"]}
      <div className="flex-1">
        {toast.title && (
          <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            {toast.title}
          </h4>
        )}
        {toast.description && (
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{toast.description}</p>
        )}
      </div>
      <button
        type="button"
        onClick={onClose}
        className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  )
}
