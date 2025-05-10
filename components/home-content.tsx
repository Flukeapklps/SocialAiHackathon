"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/contexts/language-context"

export function HomeContent() {
  const { t } = useLanguage()

  return (
    <div className="space-y-4 sm:space-y-6 p-3 sm:p-4">
      <div className="space-y-2">
        <h2 className="text-base sm:text-lg font-medium">{t("home.activity")}</h2>
        <Card className="p-3 sm:p-4">
          <div className="space-y-3 sm:space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-xs sm:text-sm font-medium">{t("home.steps")}</span>
                <span className="text-xs sm:text-sm font-medium">3,542 / 5,000</span>
              </div>
              <Progress value={70} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-xs sm:text-sm font-medium">{t("home.walkingTime")}</span>
                <span className="text-xs sm:text-sm font-medium">45 min</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-xs sm:text-sm font-medium">{t("home.stabilityScore")}</span>
                <span className="text-xs sm:text-sm font-medium">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-2">
        <h2 className="text-base sm:text-lg font-medium">{t("home.fallRisk")}</h2>
        <Card className="p-3 sm:p-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-green-100 mb-2">
              <span className="text-green-600 text-xl sm:text-2xl font-bold">{t("home.lowRisk")}</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500">{t("home.lowRiskDesc")}</p>
          </div>
        </Card>
      </div>

      <div className="space-y-2">
        <h2 className="text-base sm:text-lg font-medium">{t("home.recentAlerts")}</h2>
        <Card className="p-3 sm:p-4">
          <div className="space-y-2">
            <p className="text-xs sm:text-sm">{t("home.noAlerts")}</p>
            <p className="text-xs text-gray-500">{t("home.monitoring")}</p>
          </div>
        </Card>
      </div>

      <div className="space-y-2">
        <h2 className="text-base sm:text-lg font-medium">{t("home.tips")}</h2>
        <Card className="p-3 sm:p-4">
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-xs sm:text-sm">1</span>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium">Stay hydrated</p>
                <p className="text-xs text-gray-500">Drink at least 8 glasses of water daily to prevent dehydration</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-xs sm:text-sm">2</span>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium">Light exercise daily</p>
                <p className="text-xs text-gray-500">Walking or light exercise helps maintain muscle strength</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-xs sm:text-sm">3</span>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium">Check your environment</p>
                <p className="text-xs text-gray-500">Remove obstacles and ensure adequate lighting to prevent falls</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
