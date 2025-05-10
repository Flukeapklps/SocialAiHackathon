import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function HistoryContent() {
  return (
    <div className="p-4 space-y-4">
      <Tabs defaultValue="week">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="week">สัปดาห์</TabsTrigger>
          <TabsTrigger value="month">เดือน</TabsTrigger>
          <TabsTrigger value="year">ปี</TabsTrigger>
        </TabsList>

        <TabsContent value="week" className="mt-4">
          <Card className="p-4">
            <div className="space-y-4">
              <div className="h-40 flex items-end justify-between gap-1">
                {[65, 45, 80, 70, 90, 60, 75].map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full bg-blue-500 rounded-t-sm" style={{ height: `${value}%` }}></div>
                    <span className="text-xs">{["จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"][index]}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">ก้าวเฉลี่ย</p>
                    <p className="text-lg font-medium">4,286</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">ความมั่นคงเฉลี่ย</p>
                    <p className="text-lg font-medium">82%</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="month" className="mt-4">
          <Card className="p-4">
            <div className="h-40 flex items-center justify-center text-gray-500">ข้อมูลรายเดือน</div>
          </Card>
        </TabsContent>

        <TabsContent value="year" className="mt-4">
          <Card className="p-4">
            <div className="h-40 flex items-center justify-center text-gray-500">ข้อมูลรายปี</div>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="space-y-2">
        <h2 className="text-lg font-medium">ช่วงเวลาการเดิน • Walking Sessions</h2>
        <Card className="divide-y">
          {[
            { date: "วันนี้", time: "10:30 น.", duration: "15 นาที", steps: 1250, stability: "ดี" },
            { date: "วันนี้", time: "15:45 น.", duration: "25 นาที", steps: 2100, stability: "ดีมาก" },
            { date: "เมื่อวาน", time: "9:15 น.", duration: "20 นาที", steps: 1800, stability: "ดี" },
          ].map((session, index) => (
            <div key={index} className="p-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">
                    {session.date} - {session.time}
                  </p>
                  <p className="text-sm text-gray-500">
                    {session.duration} · {session.steps} ก้าว
                  </p>
                </div>
                <div className="text-sm font-medium text-green-600">{session.stability}</div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  )
}
