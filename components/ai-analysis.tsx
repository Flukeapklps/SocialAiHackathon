"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, BarChart2, TrendingUp, AlertTriangle, Zap } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function AIAnalysis() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [progress, setProgress] = useState(0)

  const startAnalysis = () => {
    setIsAnalyzing(true)
    setProgress(0)
    setAnalysisComplete(false)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsAnalyzing(false)
          setAnalysisComplete(true)
          return 100
        }
        return prev + 5
      })
    }, 100)
  }

  return (
    <Card className="p-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
          <Brain className="h-5 w-5 text-purple-600" />
        </div>
        <div>
          <h3 className="font-medium">การวิเคราะห์ด้วย AI</h3>
          <p className="text-sm text-gray-500">ระบบ AI วิเคราะห์รูปแบบการเดินของคุณ</p>
        </div>
      </div>

      {!isAnalyzing && !analysisComplete ? (
        <div className="space-y-4">
          <p className="text-sm">
            ระบบ AI ของเราสามารถวิเคราะห์รูปแบบการเดินของคุณเพื่อให้คำแนะนำที่เหมาะสมและประเมินความเสี่ยงในการหกล้ม
          </p>
          <Button onClick={startAnalysis} className="w-full bg-purple-600 hover:bg-purple-700">
            เริ่มการวิเคราะห์ด้วย AI
          </Button>
        </div>
      ) : isAnalyzing ? (
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>กำลังวิเคราะห์ข้อมูลการเดิน...</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          <div className="text-xs text-gray-500 animate-pulse">กำลังประมวลผลด้วย AI โปรดรอสักครู่...</div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="border rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <BarChart2 className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium">ความสมดุล</span>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-xl font-bold">82%</span>
                <span className="text-xs text-green-600 mb-1">+5%</span>
              </div>
            </div>
            <div className="border rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium">ความสม่ำเสมอ</span>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-xl font-bold">78%</span>
                <span className="text-xs text-green-600 mb-1">+3%</span>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <span className="text-sm font-medium">จุดที่ต้องปรับปรุง</span>
            </div>
            <ul className="text-sm space-y-1 ml-6 list-disc">
              <li>ความยาวของก้าวไม่สม่ำเสมอเล็กน้อย</li>
              <li>มีแนวโน้มที่จะเอียงไปทางด้านขวา</li>
            </ul>
          </div>

          <div className="border rounded-lg p-3 bg-purple-50">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium">คำแนะนำจาก AI</span>
            </div>
            <p className="text-sm">
              ควรทำการบริหารกล้ามเนื้อขาเพื่อเพิ่มความแข็งแรง และฝึกการทรงตัวด้วยการยืนขาเดียวเป็นเวลา 30 วินาทีต่อข้าง วันละ 3 ครั้ง
            </p>
          </div>

          <Button onClick={startAnalysis} variant="outline" className="w-full">
            วิเคราะห์อีกครั้ง
          </Button>
        </div>
      )}
    </Card>
  )
}
