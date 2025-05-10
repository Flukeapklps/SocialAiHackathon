"use client"

export function ConsolePanel() {
  const logs = [
    { type: "info", source: "browser", message: "Navigation to https://example.com started", time: "0.1s" },
    { type: "info", source: "browser", message: "Navigation to https://example.com completed", time: "0.5s" },
    { type: "log", source: "test", message: "Clicking on username field", time: "0.6s" },
    { type: "log", source: "browser", message: "Form input detected", time: "0.8s" },
    { type: "log", source: "test", message: "Filling username field with 'testuser'", time: "0.9s" },
    { type: "log", source: "test", message: "Clicking on password field", time: "1.1s" },
    { type: "log", source: "test", message: "Filling password field with '********'", time: "1.2s" },
    { type: "log", source: "test", message: "Clicking login button", time: "1.3s" },
    { type: "error", source: "browser", message: "Failed to authenticate user", time: "1.4s" },
  ]

  return (
    <div className="h-full overflow-auto font-mono text-xs p-2">
      {logs.map((log, index) => (
        <div
          key={index}
          className={`py-1 border-b border-gray-100 flex items-start gap-2 ${
            log.type === "error" ? "text-red-500" : log.type === "warn" ? "text-yellow-500" : "text-gray-800"
          }`}
        >
          <div className="text-gray-400 w-10">{log.time}</div>
          <div
            className={`px-1 rounded ${
              log.source === "browser" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"
            }`}
          >
            {log.source}
          </div>
          <div className="flex-1">{log.message}</div>
        </div>
      ))}
    </div>
  )
}
