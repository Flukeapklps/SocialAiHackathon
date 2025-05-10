"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Timeline } from "@/components/timeline"
import { DomSnapshot } from "@/components/dom-snapshot"
import { ActionsPanel } from "@/components/actions-panel"
import { ConsolePanel } from "@/components/console-panel"
import { NetworkPanel } from "@/components/network-panel"
import { SourcePanel } from "@/components/source-panel"
import { Resizable } from "@/components/resizable"
import { Button } from "@/components/ui/button"
import { ExternalLink, Maximize2 } from "lucide-react"

interface MainPanelProps {
  testFile: string
  selectedAction: number
  onSelectAction: (index: number) => void
}

export function MainPanel({ testFile, selectedAction, onSelectAction }: MainPanelProps) {
  const [activeTab, setActiveTab] = useState("actions")

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-lg font-semibold">{testFile}</h1>
        <Timeline selectedAction={selectedAction} onSelectAction={onSelectAction} />
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
            <TabsList className="px-4 border-b border-gray-200 bg-white">
              <TabsTrigger value="actions" className="text-sm">
                Actions
              </TabsTrigger>
              <TabsTrigger value="console" className="text-sm">
                Console
              </TabsTrigger>
              <TabsTrigger value="network" className="text-sm">
                Network
              </TabsTrigger>
              <TabsTrigger value="source" className="text-sm">
                Source
              </TabsTrigger>
              <TabsTrigger value="errors" className="text-sm">
                Errors
              </TabsTrigger>
              <TabsTrigger value="attachments" className="text-sm">
                Attachments
              </TabsTrigger>
              <TabsTrigger value="metadata" className="text-sm">
                Metadata
              </TabsTrigger>
            </TabsList>

            <div className="flex-1 overflow-hidden">
              <TabsContent value="actions" className="h-full m-0">
                <ActionsPanel selectedAction={selectedAction} />
              </TabsContent>
              <TabsContent value="console" className="h-full m-0">
                <ConsolePanel />
              </TabsContent>
              <TabsContent value="network" className="h-full m-0">
                <NetworkPanel />
              </TabsContent>
              <TabsContent value="source" className="h-full m-0">
                <SourcePanel />
              </TabsContent>
              <TabsContent value="errors" className="h-full m-0">
                <div className="p-4">No errors found</div>
              </TabsContent>
              <TabsContent value="attachments" className="h-full m-0">
                <div className="p-4">No attachments</div>
              </TabsContent>
              <TabsContent value="metadata" className="h-full m-0">
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm font-medium">Browser</div>
                    <div className="text-sm">Chromium</div>
                    <div className="text-sm font-medium">Viewport</div>
                    <div className="text-sm">1280 × 720</div>
                    <div className="text-sm font-medium">Test Duration</div>
                    <div className="text-sm">1.2s</div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <Resizable direction="horizontal" defaultSize={500} minSize={300} maxSize={800}>
          <div className="h-full flex flex-col border-l border-gray-200">
            <div className="p-2 flex justify-between items-center border-b border-gray-200">
              <span className="text-sm font-medium">DOM Snapshot</span>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Maximize2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 overflow-auto">
              <DomSnapshot actionIndex={selectedAction} />
            </div>
          </div>
        </Resizable>
      </div>
    </div>
  )
}
