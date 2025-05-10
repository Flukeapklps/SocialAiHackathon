"use client"

import { useState } from "react"
import { Search, Filter, Play, Eye, ChevronDown, ChevronRight, FileText } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface SidebarProps {
  selectedTest: string
  onSelectTest: (test: string) => void
}

export function Sidebar({ selectedTest, onSelectTest }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    tests: true,
    "tests/example.spec.ts": true,
  })

  const testFiles = [
    {
      name: "example.spec.ts",
      path: "tests/example.spec.ts",
      tests: [
        { name: "should navigate to the homepage", status: "passed" },
        { name: "should have the correct title", status: "passed" },
        { name: "should display the login form", status: "failed" },
      ],
    },
    {
      name: "auth.spec.ts",
      path: "tests/auth.spec.ts",
      tests: [
        { name: "should login successfully", status: "passed" },
        { name: "should show error for invalid credentials", status: "skipped" },
      ],
    },
  ]

  const toggleExpand = (path: string) => {
    setExpanded((prev) => ({
      ...prev,
      [path]: !prev[path],
    }))
  }

  return (
    <div className="h-full flex flex-col border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <Input
            placeholder="Filter"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-8"
            prefix={<Search className="h-4 w-4 text-gray-500" />}
          />
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-3 h-8">
            <TabsTrigger value="all" className="text-xs">
              All
            </TabsTrigger>
            <TabsTrigger value="passed" className="text-xs">
              Passed
            </TabsTrigger>
            <TabsTrigger value="failed" className="text-xs">
              Failed
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="p-1">
          <div className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer">
            <div className="flex items-center gap-1" onClick={() => toggleExpand("tests")}>
              {expanded["tests"] ? (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-500" />
              )}
              <span className="text-sm font-medium">tests</span>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Play className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Eye className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {expanded["tests"] &&
            testFiles.map((file) => (
              <div key={file.path} className="ml-4">
                <div
                  className={`flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer ${
                    selectedTest === file.name ? "bg-gray-100" : ""
                  }`}
                >
                  <div className="flex items-center gap-1" onClick={() => toggleExpand(file.path)}>
                    {expanded[file.path] ? (
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-gray-500" />
                    )}
                    <FileText className="h-4 w-4 text-gray-500" />
                    <span className="text-sm" onClick={() => onSelectTest(file.name)}>
                      {file.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Play className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Eye className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                {expanded[file.path] &&
                  file.tests.map((test, index) => (
                    <div
                      key={index}
                      className="ml-4 flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                    >
                      <div className="flex items-center gap-1">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            test.status === "passed"
                              ? "bg-green-500"
                              : test.status === "failed"
                                ? "bg-red-500"
                                : "bg-gray-400"
                          }`}
                        />
                        <span className="text-sm">{test.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Play className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Eye className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
