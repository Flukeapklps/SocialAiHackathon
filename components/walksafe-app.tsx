"use client"

import { useState } from "react"
import { Upload, Home, Clock, Users, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { HomeContent } from "@/components/home-content"
import { HistoryContent } from "@/components/history-content"
import { CommunityContent } from "@/components/community-content"
import { SettingsContent } from "@/components/settings-content"
import { UploadModal } from "@/components/upload-modal"
import { AIAnalysis } from "@/components/ai-analysis"
import { AIPrediction } from "@/components/ai-prediction"
import { AIGaitAnalysis } from "@/components/ai-gait-analysis"
import { AIAssistant } from "@/components/ai-assistant"
import { UserGuideButton } from "@/components/user-guide"
import { useLanguage } from "@/contexts/language-context"
import { WalkSafeLogo } from "@/components/walksafe-logo"

export default function WalkSafeApp() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState("home")
  const [uploadModalOpen, setUploadModalOpen] = useState(false)

  return (
    <div className="w-full max-w-md mx-auto min-h-screen flex flex-col bg-white shadow-lg">
      {/* Header */}
      <header className="p-3 sm:p-4 border-b">
        <h1 className="text-center text-lg sm:text-xl font-medium text-blue-800">
          {language === "en" ? "Main Menu" : "เมนูหลัก"}
        </h1>
      </header>

      {/* Logo Area */}
      <div className="flex items-center justify-center p-3 sm:p-4 border-b">
        <WalkSafeLogo />
      </div>

      {/* Content Area with conditional upload button */}
      <div className="flex-1 flex flex-col">
        {activeTab === "home" && (
          <div className="p-4 sm:p-6">
            <Card
              className="border-2 border-blue-600 p-6 sm:p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors"
              onClick={() => setUploadModalOpen(true)}
            >
              <p className="text-blue-600 font-medium mb-3 sm:mb-4 text-center">{t("home.upload")}</p>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-blue-600"
              >
                <Upload className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                <span className="sr-only">Upload</span>
              </Button>
            </Card>

            <UserGuideButton />
          </div>
        )}

        {/* Main Content Area */}
        <Tabs defaultValue="home" value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
          <TabsContent value="home" className="flex-1 overflow-auto m-0">
            <HomeContent />
            <div className="p-3 sm:p-4">
              <AIAnalysis />
            </div>
            <div className="p-3 sm:p-4 pt-0">
              <AIPrediction />
            </div>
          </TabsContent>
          <TabsContent value="history" className="flex-1 overflow-auto m-0">
            <HistoryContent />
            <div className="p-3 sm:p-4">
              <AIGaitAnalysis />
            </div>
          </TabsContent>
          <TabsContent value="community" className="flex-1 overflow-auto m-0">
            <CommunityContent />
          </TabsContent>
          <TabsContent value="settings" className="flex-1 overflow-auto m-0">
            <SettingsContent />
          </TabsContent>
        </Tabs>
      </div>

      {/* Navigation */}
      <div className="mt-auto p-3 sm:p-6 border-t">
        <div className="grid grid-cols-4 h-auto bg-transparent gap-1 sm:gap-2">
          <Button
            variant="ghost"
            className={`rounded-full h-14 w-14 sm:h-16 sm:w-16 p-0 border-2 ${
              activeTab === "home" ? "border-blue-600 bg-blue-100 text-blue-600" : "border-blue-300 text-blue-400"
            }`}
            onClick={() => setActiveTab("home")}
          >
            <div className="flex flex-col items-center justify-center">
              <Home className={`h-4 w-4 sm:h-5 sm:w-5 ${activeTab === "home" ? "text-blue-600" : "text-blue-400"}`} />
              <span className={`text-xs mt-1 ${activeTab === "home" ? "text-blue-600" : "text-blue-400"}`}>
                {t("nav.home")}
              </span>
            </div>
          </Button>
          <Button
            variant="ghost"
            className={`rounded-full h-14 w-14 sm:h-16 sm:w-16 p-0 border-2 ${
              activeTab === "history" ? "border-blue-600 bg-blue-100 text-blue-600" : "border-blue-300 text-blue-400"
            }`}
            onClick={() => setActiveTab("history")}
          >
            <div className="flex flex-col items-center justify-center">
              <Clock
                className={`h-4 w-4 sm:h-5 sm:w-5 ${activeTab === "history" ? "text-blue-600" : "text-blue-400"}`}
              />
              <span className={`text-xs mt-1 ${activeTab === "history" ? "text-blue-600" : "text-blue-400"}`}>
                {t("nav.history")}
              </span>
            </div>
          </Button>
          <Button
            variant="ghost"
            className={`rounded-full h-14 w-14 sm:h-16 sm:w-16 p-0 border-2 ${
              activeTab === "community" ? "border-blue-600 bg-blue-100 text-blue-600" : "border-blue-300 text-blue-400"
            }`}
            onClick={() => setActiveTab("community")}
          >
            <div className="flex flex-col items-center justify-center">
              <Users
                className={`h-4 w-4 sm:h-5 sm:w-5 ${activeTab === "community" ? "text-blue-600" : "text-blue-400"}`}
              />
              <span className={`text-xs mt-1 ${activeTab === "community" ? "text-blue-600" : "text-blue-400"}`}>
                {t("nav.community")}
              </span>
            </div>
          </Button>
          <Button
            variant="ghost"
            className={`rounded-full h-14 w-14 sm:h-16 sm:w-16 p-0 border-2 ${
              activeTab === "settings" ? "border-blue-600 bg-blue-100 text-blue-600" : "border-blue-300 text-blue-400"
            }`}
            onClick={() => setActiveTab("settings")}
          >
            <div className="flex flex-col items-center justify-center">
              <Settings
                className={`h-4 w-4 sm:h-5 sm:w-5 ${activeTab === "settings" ? "text-blue-600" : "text-blue-400"}`}
              />
              <span className={`text-xs mt-1 ${activeTab === "settings" ? "text-blue-600" : "text-blue-400"}`}>
                {t("nav.settings")}
              </span>
            </div>
          </Button>
        </div>
      </div>

      {/* Upload Modal */}
      <UploadModal open={uploadModalOpen} onOpenChange={setUploadModalOpen} />

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  )
}
