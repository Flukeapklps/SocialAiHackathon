"use client"

import { Check, Clock } from "lucide-react"

interface ActionsPanelProps {
  selectedAction: number
}

export function ActionsPanel({ selectedAction }: ActionsPanelProps) {
  const actions = [
    {
      name: "Go to https://example.com",
      duration: "500ms",
      locator: "page.goto('https://example.com')",
      status: "completed",
    },
    {
      name: 'Click input[name="username"]',
      duration: "100ms",
      locator: "page.locator('input[name=\"username\"]').click()",
      status: "completed",
    },
    {
      name: 'Fill input[name="username"]',
      duration: "200ms",
      locator: "page.locator('input[name=\"username\"]').fill('testuser')",
      status: "completed",
    },
    {
      name: 'Click input[name="password"]',
      duration: "300ms",
      locator: "page.locator('input[name=\"password\"]').click()",
      status: "completed",
    },
    {
      name: 'Fill input[name="password"]',
      duration: "150ms",
      locator: "page.locator('input[name=\"password\"]').fill('password123')",
      status: "completed",
    },
    {
      name: 'Click button:has-text("Login")',
      duration: "120ms",
      locator: "page.locator('button:has-text(\"Login\")').click()",
      status: "completed",
    },
  ]

  return (
    <div className="h-full overflow-auto">
      {actions.map((action, index) => (
        <div
          key={index}
          className={`p-3 border-b border-gray-200 cursor-pointer ${
            selectedAction === index ? "bg-blue-50" : "hover:bg-gray-50"
          }`}
          onClick={() => {}}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {action.status === "completed" ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Clock className="h-4 w-4 text-yellow-500" />
              )}
              <span className="text-sm font-medium">{action.name}</span>
            </div>
            <span className="text-xs text-gray-500">{action.duration}</span>
          </div>
          <div className="mt-1 text-xs text-gray-500 ml-6">{action.locator}</div>
        </div>
      ))}
    </div>
  )
}
