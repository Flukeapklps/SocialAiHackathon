"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "th"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.history": "History",
    "nav.community": "Community",
    "nav.settings": "Settings",

    // Home
    "home.upload": "Upload Walking Data",
    "home.activity": "Today's Activity",
    "home.steps": "Steps",
    "home.walkingTime": "Walking Time",
    "home.stabilityScore": "Stability Score",
    "home.fallRisk": "Fall Risk Assessment",
    "home.lowRisk": "Low",
    "home.lowRiskDesc": "Your walking pattern indicates a low risk of falling",
    "home.recentAlerts": "Recent Alerts",
    "home.noAlerts": "No recent alerts",
    "home.monitoring": "WalkSafe is monitoring your walking patterns",
    "home.tips": "Tips for Elderly",

    // AI Analysis
    "ai.analysis": "AI Analysis",
    "ai.analysisDesc": "AI system analyzes your walking pattern",
    "ai.analysisInfo":
      "Our AI can analyze your walking pattern to provide personalized recommendations and assess fall risk.",
    "ai.startAnalysis": "Start AI Analysis",
    "ai.analyzing": "Analyzing walking data...",
    "ai.balance": "Balance",
    "ai.consistency": "Consistency",
    "ai.areasToImprove": "Areas to Improve",
    "ai.recommendation": "AI Recommendation",
    "ai.analyzeAgain": "Analyze Again",

    // AI Prediction
    "ai.prediction": "AI Prediction",
    "ai.fallRiskNext3Months": "Fall risk in the next 3 months",
    "ai.decreasedFrom": "Decreased by 8% from previous assessment",
    "ai.muscleStrengthImprovement": "Chance of muscle strength improvement",
    "ai.increasedFrom": "Increased by 12% from previous assessment",
    "ai.personalizedRecommendations": "Personalized AI Recommendations",

    // Upload
    "upload.title": "Upload Walking Data",
    "upload.description": "Upload a video or sensor data file to analyze your walking pattern",
    "upload.dragDrop": "Click to upload or drag and drop",
    "upload.fileTypes": "MP4, MOV, or CSV (max 500MB)",
    "upload.uploading": "Uploading...",
    "upload.processing": "Processing with AI...",
    "upload.cancel": "Cancel",
    "upload.selectFile": "Select File",
    "upload.analysisComplete": "Analysis Complete",
    "upload.viewResults": "View Results",

    // User Guide
    "guide.title": "How to Use WalkSafe",
    "guide.subtitle": "Follow these steps to get the most out of WalkSafe",
    "guide.step1Title": "Upload Walking Data",
    "guide.step1Desc": "Record a video of yourself walking or upload sensor data",
    "guide.step2Title": "View AI Analysis",
    "guide.step2Desc": "Our AI will analyze your walking pattern and provide insights",
    "guide.step3Title": "Follow Recommendations",
    "guide.step3Desc": "Apply the personalized recommendations to improve stability",
    "guide.step4Title": "Track Progress",
    "guide.step4Desc": "Monitor your improvement over time in the History tab",
    "guide.getStarted": "Get Started",

    // Settings
    "settings.account": "Account",
    "settings.personalInfo": "Personal Information",
    "settings.healthInfo": "Health Information",
    "settings.notifications": "Notifications",
    "settings.fallDetection": "Fall Detection",
    "settings.inactivityAlerts": "Inactivity Alerts",
    "settings.achievementAlerts": "Achievement Alerts",
    "settings.sensitivity": "Sensitivity",
    "settings.fallDetectionSensitivity": "Fall detection sensitivity",
    "settings.gaitAnalysisSensitivity": "Gait analysis sensitivity",
    "settings.medium": "Medium",
    "settings.high": "High",
    "settings.language": "Language",
    "settings.english": "English",
    "settings.thai": "Thai",
    "settings.support": "Support",
    "settings.privacySettings": "Privacy Settings",
    "settings.caregiverAccess": "Caregiver Access",
    "settings.contactSupport": "Contact Support",
    "settings.faq": "FAQ",
    "settings.logout": "Logout",
    "settings.on": "On",
    "settings.off": "Off",
  },
  th: {
    // Navigation
    "nav.home": "หน้าหลัก",
    "nav.history": "ประวัติ",
    "nav.community": "ชุมชน",
    "nav.settings": "ตั้งค่า",

    // Home
    "home.upload": "อัพโหลดข้อมูลการเดิน",
    "home.activity": "กิจกรรมวันนี้",
    "home.steps": "ก้าว",
    "home.walkingTime": "เวลาเดิน",
    "home.stabilityScore": "คะแนนความมั่นคง",
    "home.fallRisk": "การประเมินความเสี่ยงการหกล้ม",
    "home.lowRisk": "ต่ำ",
    "home.lowRiskDesc": "รูปแบบการเดินของคุณแสดงถึงความเสี่ยงต่ำในการหกล้ม",
    "home.recentAlerts": "การแจ้งเตือนล่าสุด",
    "home.noAlerts": "ไม่พบการแจ้งเตือนล่าสุด",
    "home.monitoring": "WalkSafe กำลังตรวจสอบรูปแบบการเดินของคุณ",
    "home.tips": "คำแนะนำสำหรับผู้สูงอายุ",

    // AI Analysis
    "ai.analysis": "การวิเคราะห์ด้วย AI",
    "ai.analysisDesc": "ระบบ AI วิเคราะห์รูปแบบการเดินของคุณ",
    "ai.analysisInfo": "ระบบ AI ของเราสามารถวิเคราะห์รูปแบบการเดินของคุณเพื่อให้คำแนะนำที่เหมาะสมและประเมินความเสี่ยงในการหกล้ม",
    "ai.startAnalysis": "เริ่มการวิเคราะห์ด้วย AI",
    "ai.analyzing": "กำลังวิเคราะห์ข้อมูลการเดิน...",
    "ai.balance": "ความสมดุล",
    "ai.consistency": "ความสม่ำเสมอ",
    "ai.areasToImprove": "จุดที่ต้องปรับปรุง",
    "ai.recommendation": "คำแนะนำจาก AI",
    "ai.analyzeAgain": "วิเคราะห์อีกครั้ง",

    // AI Prediction
    "ai.prediction": "การคาดการณ์โดย AI",
    "ai.fallRiskNext3Months": "ความเสี่ยงในการหกล้มใน 3 เดือนข้างหน้า",
    "ai.decreasedFrom": "ลดลง 8% จากการประเมินครั้งก่อน",
    "ai.muscleStrengthImprovement": "โอกาสในการพัฒนาความแข็งแรงของกล้ามเนื้อ",
    "ai.increasedFrom": "เพิ่มขึ้น 12% จากการประเมินครั้งก่อน",
    "ai.personalizedRecommendations": "คำแนะนำเฉพาะบุคคลจาก AI",

    // Upload
    "upload.title": "อัพโหลดข้อมูลการเดิน",
    "upload.description": "อัพโหลดวิดีโอหรือไฟล์ข้อมูลเซนเซอร์เพื่อวิเคราะห์รูปแบบการเดิน",
    "upload.dragDrop": "คลิกเพื่ออัพโหลด หรือลากและวาง",
    "upload.fileTypes": "MP4, MOV, หรือ CSV (สูงสุด 500MB)",
    "upload.uploading": "กำลังอัพโหลด...",
    "upload.processing": "กำลังประมวลผลด้วย AI...",
    "upload.cancel": "ยกเลิก",
    "upload.selectFile": "เลือกไฟล์",
    "upload.analysisComplete": "การวิเคราะห์เสร็จสมบูรณ์",
    "upload.viewResults": "ดูผลลัพธ์",

    // User Guide
    "guide.title": "วิธีใช้ WalkSafe",
    "guide.subtitle": "ทำตามขั้นตอนเหล่านี้เพื่อใช้ประโยชน์สูงสุดจาก WalkSafe",
    "guide.step1Title": "อัพโหลดข้อมูลการเดิน",
    "guide.step1Desc": "บันทึกวิดีโอการเดินของคุณหรืออัพโหลดข้อมูลเซนเซอร์",
    "guide.step2Title": "ดูการวิเคราะห์ด้วย AI",
    "guide.step2Desc": "AI ของเราจะวิเคราะห์รูปแบบการเดินของคุณและให้ข้อมูลเชิงลึก",
    "guide.step3Title": "ทำตามคำแนะนำ",
    "guide.step3Desc": "ปฏิบัติตามคำแนะนำเฉพาะบุคคลเพื่อปรับปรุงความมั่นคง",
    "guide.step4Title": "ติดตามความก้าวหน้า",
    "guide.step4Desc": "ติดตามการพัฒนาของคุณในแท็บประวัติ",
    "guide.getStarted": "เริ่มต้นใช้งาน",

    // Settings
    "settings.account": "บัญชี",
    "settings.personalInfo": "ข้อมูลส่วนตัว",
    "settings.healthInfo": "ข้อมูลสุขภาพ",
    "settings.notifications": "การแจ้งเตือน",
    "settings.fallDetection": "แจ้งเตือนการหกล้ม",
    "settings.inactivityAlerts": "แจ้งเตือนการไม่เคลื่อนไหว",
    "settings.achievementAlerts": "แจ้งเตือนความสำเร็จ",
    "settings.sensitivity": "ความไว",
    "settings.fallDetectionSensitivity": "ความไวในการตรวจจับการหกล้ม",
    "settings.gaitAnalysisSensitivity": "การวิเคราะห์รูปแบบการเดิน",
    "settings.medium": "ปานกลาง",
    "settings.high": "สูง",
    "settings.language": "ภาษา",
    "settings.english": "อังกฤษ",
    "settings.thai": "ไทย",
    "settings.support": "การสนับสนุน",
    "settings.privacySettings": "การตั้งค่าความเป็นส่วนตัว",
    "settings.caregiverAccess": "การเข้าถึงของผู้ดูแล",
    "settings.contactSupport": "ติดต่อฝ่ายสนับสนุน",
    "settings.faq": "คำถามที่พบบ่อย",
    "settings.logout": "ออกจากระบบ",
    "settings.on": "เปิด",
    "settings.off": "ปิด",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Change the initial state to ensure English is the default
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("walksafe-language")
    if (savedLanguage === "th") {
      setLanguageState("th")
    } else {
      // Ensure English is the default by explicitly setting it
      setLanguageState("en")
      localStorage.setItem("walksafe-language", "en")
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("walksafe-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
