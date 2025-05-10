"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { MainPanel } from "@/components/main-panel"
import { Resizable } from "@/components/resizable"

export default function PlaywrightUI() {
  const [selectedTest, setSelectedTest] = useState("example.spec.ts")
  const [selectedAction, setSelectedAction] = useState(0)

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Resizable direction="horizontal" defaultSize={300} minSize={200} maxSize={500}>
        <Sidebar selectedTest={selectedTest} onSelectTest={setSelectedTest} />
      </Resizable>

      <MainPanel testFile={selectedTest} selectedAction={selectedAction} onSelectAction={setSelectedAction} />
    </div>
  )
}
