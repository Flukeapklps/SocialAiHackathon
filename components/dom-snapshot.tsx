"use client"

interface DomSnapshotProps {
  actionIndex: number
}

export function DomSnapshot({ actionIndex }: DomSnapshotProps) {
  // This would be a real DOM snapshot in a real implementation
  // For this demo, we'll just show a placeholder

  return (
    <div className="p-4">
      <div className="border border-gray-200 rounded-md p-4 bg-white">
        <div className="text-lg font-bold mb-4">Example Website</div>
        <div className="mb-4">
          <div className="text-sm font-medium mb-1">Username</div>
          <div className="h-10 border border-gray-300 rounded-md px-3 flex items-center">
            {actionIndex >= 2 ? "testuser" : ""}
          </div>
        </div>
        <div className="mb-4">
          <div className="text-sm font-medium mb-1">Password</div>
          <div className="h-10 border border-gray-300 rounded-md px-3 flex items-center">
            {actionIndex >= 4 ? "••••••••" : ""}
          </div>
        </div>
        <button
          className={`px-4 py-2 rounded-md ${actionIndex >= 5 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          Login
        </button>
        {actionIndex === 5 && <div className="mt-4 text-red-500 text-sm">Invalid username or password</div>}
      </div>
    </div>
  )
}
