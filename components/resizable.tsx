"use client"

import type React from "react"

import { useState, useRef, useEffect, type ReactNode } from "react"

interface ResizableProps {
  children: ReactNode
  direction: "horizontal" | "vertical"
  defaultSize: number
  minSize?: number
  maxSize?: number
}

export function Resizable({ children, direction, defaultSize, minSize = 100, maxSize = 1000 }: ResizableProps) {
  const [size, setSize] = useState(defaultSize)
  const [isResizing, setIsResizing] = useState(false)
  const resizableRef = useRef<HTMLDivElement>(null)
  const startPosRef = useRef(0)
  const startSizeRef = useRef(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    startPosRef.current = direction === "horizontal" ? e.clientX : e.clientY
    startSizeRef.current = size
    setIsResizing(true)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return

      const currentPos = direction === "horizontal" ? e.clientX : e.clientY
      const delta = currentPos - startPosRef.current
      const newSize = Math.max(minSize, Math.min(maxSize, startSizeRef.current + delta))

      setSize(newSize)
    }

    const handleMouseUp = () => {
      setIsResizing(false)
    }

    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isResizing, direction, minSize, maxSize])

  return (
    <div
      ref={resizableRef}
      className="relative flex-shrink-0"
      style={{
        [direction === "horizontal" ? "width" : "height"]: `${size}px`,
      }}
    >
      {children}
      <div
        className={`absolute ${
          direction === "horizontal"
            ? "right-0 top-0 w-1 h-full cursor-col-resize"
            : "bottom-0 left-0 h-1 w-full cursor-row-resize"
        } bg-transparent hover:bg-gray-300 z-10`}
        onMouseDown={handleMouseDown}
      />
    </div>
  )
}
