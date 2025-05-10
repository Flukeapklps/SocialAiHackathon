"use client"

interface TimelineProps {
  selectedAction: number
  onSelectAction: (index: number) => void
}

export function Timeline({ selectedAction, onSelectAction }: TimelineProps) {
  const actions = [
    { type: "navigation", duration: 500 },
    { type: "action", duration: 100 },
    { type: "action", duration: 200 },
    { type: "navigation", duration: 300 },
    { type: "action", duration: 150 },
    { type: "action", duration: 120 },
  ]

  const totalDuration = actions.reduce((sum, action) => sum + action.duration, 0)

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 mb-1">
        <div className="text-xs text-gray-500">Timeline:</div>
        <div className="text-xs font-medium">1.37s</div>
      </div>
      <div className="h-6 flex items-center bg-gray-100 rounded-md overflow-hidden">
        {actions.map((action, index) => {
          const width = (action.duration / totalDuration) * 100
          const color = action.type === "navigation" ? "bg-blue-400" : "bg-green-400"

          return (
            <div
              key={index}
              className={`h-full ${color} cursor-pointer ${selectedAction === index ? "ring-2 ring-offset-1 ring-blue-500" : ""}`}
              style={{ width: `${width}%` }}
              onClick={() => onSelectAction(index)}
            />
          )
        })}
      </div>
      <div className="flex justify-between mt-1">
        <div className="text-xs text-gray-500">0s</div>
        <div className="text-xs text-gray-500">1.37s</div>
      </div>
    </div>
  )
}
