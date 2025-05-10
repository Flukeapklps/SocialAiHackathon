"use client"

export function NetworkPanel() {
  const requests = [
    {
      url: "https://example.com",
      method: "GET",
      status: 200,
      type: "document",
      size: "15.2 kB",
      time: "0.5s",
      duration: "450ms",
    },
    {
      url: "https://example.com/styles.css",
      method: "GET",
      status: 200,
      type: "stylesheet",
      size: "5.7 kB",
      time: "0.6s",
      duration: "120ms",
    },
    {
      url: "https://example.com/script.js",
      method: "GET",
      status: 200,
      type: "script",
      size: "10.3 kB",
      time: "0.7s",
      duration: "180ms",
    },
    {
      url: "https://example.com/api/login",
      method: "POST",
      status: 401,
      type: "fetch",
      size: "0.5 kB",
      time: "1.4s",
      duration: "210ms",
    },
  ]

  return (
    <div className="h-full overflow-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 sticky top-0">
          <tr>
            <th className="text-left p-3 font-medium text-gray-500">URL</th>
            <th className="text-left p-3 font-medium text-gray-500">Method</th>
            <th className="text-left p-3 font-medium text-gray-500">Status</th>
            <th className="text-left p-3 font-medium text-gray-500">Type</th>
            <th className="text-left p-3 font-medium text-gray-500">Size</th>
            <th className="text-left p-3 font-medium text-gray-500">Time</th>
            <th className="text-left p-3 font-medium text-gray-500">Duration</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-3 font-mono text-xs">{request.url}</td>
              <td className="p-3">{request.method}</td>
              <td
                className={`p-3 ${
                  request.status >= 400 ? "text-red-500" : request.status >= 300 ? "text-yellow-500" : "text-green-500"
                }`}
              >
                {request.status}
              </td>
              <td className="p-3">{request.type}</td>
              <td className="p-3">{request.size}</td>
              <td className="p-3">{request.time}</td>
              <td className="p-3">{request.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
