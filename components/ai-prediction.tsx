import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function AIPrediction() {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-medium mb-3">การคาดการณ์โดย AI • AI Prediction</h3>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm">ความเสี่ยงในการหกล้มใน 3 เดือนข้างหน้า</span>
            <span className="text-sm font-medium text-amber-600">22%</span>
          </div>
          <Progress value={22} className="h-2 bg-gray-100" indicatorColor="bg-amber-500" />
          <p className="text-xs text-gray-500 mt-1">ลดลง 8% จากการประเมินครั้งก่อน</p>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm">โอกาสในการพัฒนาความแข็งแรงของกล้ามเนื้อ</span>
            <span className="text-sm font-medium text-green-600">78%</span>
          </div>
          <Progress value={78} className="h-2 bg-gray-100" indicatorColor="bg-green-500" />
          <p className="text-xs text-gray-500 mt-1">เพิ่มขึ้น 12% จากการประเมินครั้งก่อน</p>
        </div>

        <div className="border rounded-lg p-3 bg-blue-50">
          <h4 className="text-sm font-medium mb-2">คำแนะนำเฉพาะบุคคลจาก AI</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-start gap-2">
              <span className="bg-blue-200 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                1
              </span>
              <span>ควรเพิ่มการเดินในพื้นที่ราบอย่างน้อย 20 นาทีต่อวัน</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-blue-200 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                2
              </span>
              <span>ฝึกการทรงตัวโดยการยืนขาเดียวขณะแปรงฟัน</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-blue-200 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                3
              </span>
              <span>ควรใช้รองเท้าที่มีพื้นยางกันลื่นเมื่อเดินออกนอกบ้าน</span>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  )
}
