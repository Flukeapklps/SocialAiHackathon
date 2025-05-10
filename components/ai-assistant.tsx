"use client"

import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageSquare, Mic, Send } from "lucide-react"

type Message = {
  id: number
  text: string
  sender: "user" | "ai"
  timestamp: Date
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "สวัสดีค่ะ คุณลุง/คุณป้า มีอะไรให้ช่วยเหลือไหมคะ?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const aiResponses = [
    "ขอแนะนำให้คุณพยายามเดินอย่างน้อยวันละ 30 นาทีนะคะ จะช่วยเสริมสร้างกล้ามเนื้อและการทรงตัวได้ดีค่ะ",
    "ตามข้อมูลการเดินของคุณ ดิฉันแนะนำให้คุณเพิ่มการออกกำลังกายเพื่อเสริมความแข็งแรงของขาค่ะ",
    "ดิฉันได้แจ้งข้อมูลไปยังผู้ดูแลของคุณแล้วค่ะ คุณสมรักษ์จะติดต่อกลับมาในไม่ช้า",
    "ตามสถิติการเดินของคุณในสัปดาห์นี้ คุณมีพัฒนาการที่ดีขึ้น 15% เมื่อเทียบกับสัปดาห์ที่แล้วค่ะ ยอดเยี่ยมมากค่ะ",
    "อย่าลืมดื่มน้ำให้เพียงพอนะคะ โดยเฉพาะก่อนและหลังการเดินออกกำลังกาย",
  ]

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSend = () => {
    if (input.trim() === "") return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate AI thinking
    setTimeout(() => {
      // Random response from predefined list
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]

      const aiMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
    }, 1000)
  }

  const toggleVoiceInput = () => {
    setIsListening((prev) => !prev)

    if (!isListening) {
      // Simulate voice recognition
      setTimeout(() => {
        setInput("ช่วยแนะนำการออกกำลังกายสำหรับผู้สูงอายุหน่อยค่ะ")
        setIsListening(false)
      }, 2000)
    }
  }

  return (
    <>
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-4 h-12 w-12 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      ) : (
        <Card className="fixed bottom-20 right-4 w-80 h-96 shadow-lg flex flex-col">
          <div className="p-3 bg-purple-600 text-white rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 bg-white">
                <AvatarFallback className="text-purple-600">AI</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">ผู้ช่วย AI</p>
                <p className="text-xs opacity-80">พร้อมให้ความช่วยเหลือ</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 rounded-full p-0 text-white hover:bg-purple-700"
            >
              ✕
            </Button>
          </div>

          <div className="flex-1 overflow-auto p-3 space-y-3">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-2 ${
                    message.sender === "user" ? "bg-purple-100 text-purple-900" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className={`h-9 w-9 rounded-full ${isListening ? "bg-red-100 text-red-500" : ""}`}
                onClick={toggleVoiceInput}
              >
                <Mic className="h-4 w-4" />
              </Button>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="พิมพ์ข้อความ..."
                className="h-9"
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <Button size="icon" className="h-9 w-9 rounded-full" onClick={handleSend}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
            {isListening && (
              <div className="text-xs text-center mt-1 text-purple-600 animate-pulse">กำลังฟัง... พูดได้เลยค่ะ</div>
            )}
          </div>
        </Card>
      )}
    </>
  )
}
