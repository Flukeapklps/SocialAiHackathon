"use client"

import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { ChevronRight, Bell, Shield, Users, Phone, HelpCircle, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function SettingsContent() {
  const { t, language, setLanguage } = useLanguage()

  return (
    <div className="p-4 space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-medium">{t("settings.account")}</h2>
        <Card>
          <div className="divide-y">
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-medium">สท</span>
                </div>
                <div>
                  <p className="font-medium">สมทรง ดีใจ</p>
                  <p className="text-xs text-gray-500">somtong@example.com</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            <div className="p-3 flex items-center justify-between">
              <p>{t("settings.personalInfo")}</p>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            <div className="p-3 flex items-center justify-between">
              <p>{t("settings.healthInfo")}</p>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-medium">{t("settings.notifications")}</h2>
        <Card>
          <div className="divide-y">
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-gray-500" />
                <p>{t("settings.fallDetection")}</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-gray-500" />
                <p>{t("settings.inactivityAlerts")}</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-gray-500" />
                <p>{t("settings.achievementAlerts")}</p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-medium">{t("settings.sensitivity")}</h2>
        <Card className="p-4">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-sm">{t("settings.fallDetectionSensitivity")}</p>
                <p className="text-sm font-medium">{t("settings.medium")}</p>
              </div>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-sm">{t("settings.gaitAnalysisSensitivity")}</p>
                <p className="text-sm font-medium">{t("settings.high")}</p>
              </div>
              <Slider defaultValue={[75]} max={100} step={1} />
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-medium">{t("settings.language")}</h2>
        <Card className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-gray-500" />
              <p>{t("settings.language")}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={language === "en" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("en")}
                className={`text-sm ${language === "en" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
              >
                {t("settings.english")}
              </Button>
              <Button
                variant={language === "th" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("th")}
                className="text-sm"
              >
                {t("settings.thai")}
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-medium">{t("settings.support")}</h2>
        <Card>
          <div className="divide-y">
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-gray-500" />
                <p>{t("settings.privacySettings")}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-gray-500" />
                <p>{t("settings.caregiverAccess")}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-500" />
                <p>{t("settings.contactSupport")}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-gray-500" />
                <p>{t("settings.faq")}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </Card>
      </div>

      <div className="pt-4">
        <Button variant="outline" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50">
          {t("settings.logout")}
        </Button>
      </div>
    </div>
  )
}
