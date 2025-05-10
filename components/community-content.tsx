import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function CommunityContent() {
  return (
    <div className="p-4 space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-medium">การเชื่อมต่อผู้ดูแล • Caregiver Connection</h2>
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Caregiver" />
              <AvatarFallback>สร</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-medium">สมรักษ์ จันทร์เพ็ญ</p>
              <p className="text-sm text-gray-500">ผู้ดูแลหลัก</p>
            </div>
            <Button variant="outline" size="sm">
              ส่งข้อความ
            </Button>
          </div>
        </Card>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-medium">กลุ่มสนับสนุน • Support Group</h2>
        <Card className="p-4">
          <div className="space-y-4">
            <p className="text-sm">เข้าร่วมกลุ่มสนับสนุนออนไลน์ประจำสัปดาห์สำหรับผู้สูงอายุที่เน้นเรื่องการเคลื่อนไหวและการป้องกันการหกล้ม</p>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">การประชุมครั้งต่อไป</p>
                <p className="text-sm text-gray-500">วันพฤหัสบดี, 14:00 น.</p>
              </div>
              <Button size="sm">เข้าร่วม</Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-medium">ความสำเร็จของชุมชน • Community Achievements</h2>
        <Card className="divide-y">
          {[
            { name: "สมชาย ม.", achievement: "เดินครบ 10,000 ก้าว", time: "2 ชั่วโมงที่แล้ว" },
            { name: "วิไล ว.", achievement: "เพิ่มคะแนนความมั่นคง 15%", time: "1 วันที่แล้ว" },
            { name: "ธนา ก.", achievement: "เดินต่อเนื่อง 30 วัน", time: "2 วันที่แล้ว" },
          ].map((item, index) => (
            <div key={index} className="p-3 flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">{item.achievement}</p>
              </div>
              <p className="text-xs text-gray-400">{item.time}</p>
            </div>
          ))}
        </Card>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-medium">กิจกรรมในชุมชน • Local Activities</h2>
        <Card className="p-4">
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-3">
              <p className="font-medium">ไทเก็กในสวนสาธารณะ</p>
              <p className="text-sm text-gray-500">ทุกเช้า 6:00 น. ที่สวนลุมพินี</p>
              <p className="text-xs text-gray-400 mt-1">กิจกรรมออกกำลังกายเบาๆ เหมาะสำหรับผู้สูงอายุทุกระดับ</p>
            </div>

            <div className="border-l-4 border-green-500 pl-3">
              <p className="font-medium">ชมรมผู้สูงอายุสุขภาพดี</p>
              <p className="text-sm text-gray-500">ทุกวันพุธ 9:00 น. ที่ศูนย์ชุมชน</p>
              <p className="text-xs text-gray-400 mt-1">พบปะพูดคุย แลกเปลี่ยนประสบการณ์ และทำกิจกรรมร่วมกัน</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-3">
              <p className="font-medium">ตรวจสุขภาพฟรีสำหรับผู้สูงอายุ</p>
              <p className="text-sm text-gray-500">วันที่ 15 ของทุกเดือน ที่โรงพยาบาลชุมชน</p>
              <p className="text-xs text-gray-400 mt-1">บริการตรวจสุขภาพเบื้องต้นและให้คำปรึกษาด้านสุขภาพ</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
