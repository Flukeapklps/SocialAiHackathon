"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AIGaitAnalysis() {
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null)

  const gaitData = [
    { x: 0, y: 50 },
    { x: 10, y: 60 },
    { x: 20, y: 40 },
    { x: 30, y: 65 },
    { x: 40, y: 55 },
    { x: 50, y: 70 },
    { x: 60, y: 45 },
    { x: 70, y: 60 },
    { x: 80, y: 50 },
    { x: 90, y: 65 },
    { x: 100, y: 55 },
  ]

  const maxY = Math.max(...gaitData.map((point) => point.y))
  const minY = Math.min(...gaitData.map((point) => point.y))

  const normalizeY = (y: number) => {
    return 100 - (((y - minY) / (maxY - minY)) * 80 + 10)
  }

  const getPathData = () => {
    return gaitData
      .map((point, i) => {
        return `${i === 0 ? "M" : "L"} ${point.x} ${normalizeY(point.y)}`
      })
      .join(" ")
  }

  const getPointsData = () => {
    return gaitData.map((point, i) => ({
      cx: point.x,
      cy: normalizeY(point.y),
      index: i,
    }))
  }

  const handlePointClick = (index: number) => {
    setSelectedPoint(index === selectedPoint ? null : index)
  }

  const getAnalysisForPoint = (index: number) => {
    const analyses = [
      "จังหวะการเดินสม่ำเสมอดี",
      "มีการเอียงตัวเล็กน้อยไปทางขวา",
      "ความยาวของก้าวสั้นกว่าค่าเฉลี่ย",
      "การทรงตัวดีมาก",
      "มีการลงน้ำหนักที่ส้นเท้ามากเกินไป",
      "จังหวะการเดินเร็วกว่าค่าเฉลี่ย",
      "มีการเอียงตัวเล็กน้อยไปทางซ้าย",
      "ความยาวของก้าวดี",
      "การทรงตัวต้องปรับปรุง",
      "การลงน้ำหนักที่เท้าสมดุลดี",
      "จังหวะการเดินช้ากว่าค่าเฉลี่ย",
    ]

    return analyses[index]
  }

  return (
    <Card className="p-4">
      <h3 className="text-lg font-medium mb-3">การวิเคราะห์การเดินด้วย AI • AI Gait Analysis</h3>

      <Tabs defaultValue="pattern">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pattern">รูปแบบการเดิน</TabsTrigger>
          <TabsTrigger value="pressure">การลงน้ำหนัก</TabsTrigger>
        </TabsList>

        <TabsContent value="pattern" className="mt-4">
          <div className="relative h-60 w-full border rounded-lg p-4">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Grid lines */}
              <line x1="0" y1="25" x2="100" y2="25" stroke="#e5e7eb" strokeWidth="0.5" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="#e5e7eb" strokeWidth="0.5" />
              <line x1="0" y1="75" x2="100" y2="75" stroke="#e5e7eb" strokeWidth="0.5" />

              {/* X and Y axis */}
              <line x1="0" y1="100" x2="100" y2="100" stroke="#9ca3af" strokeWidth="0.5" />
              <line x1="0" y1="0" x2="0" y2="100" stroke="#9ca3af" strokeWidth="0.5" />

              {/* Gait pattern line */}
              <path d={getPathData()} fill="none" stroke="#8b5cf6" strokeWidth="2" />

              {/* Data points */}
              {getPointsData().map((point) => (
                <circle
                  key={point.index}
                  cx={point.cx}
                  cy={point.cy}
                  r={selectedPoint === point.index ? "3" : "2"}
                  fill={selectedPoint === point.index ? "#6d28d9" : "#8b5cf6"}
                  stroke="#ffffff"
                  strokeWidth="1"
                  onClick={() => handlePointClick(point.index)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </svg>

            <div className="absolute bottom-0 left-0 w-full flex justify-between px-4 text-xs text-gray-500">
              <span>0s</span>
              <span>เวลา</span>
              <span>5s</span>
            </div>

            <div className="absolute top-0 left-0 h-full flex flex-col justify-between py-4 text-xs text-gray-500">
              <span>สูง</span>
              <span>ความสมดุล</span>
              <span>ต่ำ</span>
            </div>
          </div>

          {selectedPoint !== null && (
            <div className="mt-3 p-3 bg-purple-50 rounded-lg">
              <p className="text-sm">
                <span className="font-medium">จุดที่ {selectedPoint + 1}:</span> {getAnalysisForPoint(selectedPoint)}
              </p>
            </div>
          )}

          <div className="mt-3 text-xs text-gray-500">
            <p>คลิกที่จุดบนกราฟเพื่อดูการวิเคราะห์โดยละเอียด</p>
          </div>
        </TabsContent>

        <TabsContent value="pressure" className="mt-4">
          <div className="flex justify-center">
            <div className="relative w-40 h-64">
              {/* Foot outline */}
              <svg viewBox="0 0 100 160" className="w-full h-full">
                <path
                  d="M30,10 C10,30 5,60 5,90 C5,120 15,140 30,150 C45,160 55,160 70,150 C85,140 95,120 95,90 C95,60 90,30 70,10 C60,0 40,0 30,10 Z"
                  fill="#f3f4f6"
                  stroke="#d1d5db"
                  strokeWidth="1"
                />

                {/* Pressure points - heel */}
                <circle cx="50" cy="140" r="20" fill="rgba(239, 68, 68, 0.7)" />

                {/* Pressure points - outside edge */}
                <circle cx="80" cy="100" r="12" fill="rgba(245, 158, 11, 0.5)" />

                {/* Pressure points - ball of foot */}
                <circle cx="35" cy="60" r="15" fill="rgba(16, 185, 129, 0.6)" />
                <circle cx="65" cy="60" r="15" fill="rgba(16, 185, 129, 0.6)" />

                {/* Pressure points - toes */}
                <circle cx="40" cy="25" r="10" fill="rgba(59, 130, 246, 0.4)" />
                <circle cx="60" cy="25" r="10" fill="rgba(59, 130, 246, 0.4)" />
              </svg>

              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-gray-500">
                นิ้วเท้า
              </div>

              <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-xs text-gray-500">
                ด้านใน
              </div>

              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-xs text-gray-500">ด้านนอก</div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">ส้นเท้า</div>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-sm">แรงกดสูง - ควรลดการลงน้ำหนักที่ส้นเท้า</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <span className="text-sm">แรงกดปานกลาง - ปกติ</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm">แรงกดพอดี - สมดุลดี</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm">แรงกดต่ำ - ปกติ</span>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
