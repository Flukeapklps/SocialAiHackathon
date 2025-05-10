"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Upload, BarChart2, ListChecks, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function UserGuideButton() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className="w-full mt-4 border-dashed border-blue-300 text-blue-600 hover:bg-blue-50 text-sm sm:text-base"
      >
        {t("guide.title")}
      </Button>

      <UserGuideDialog open={open} onOpenChange={setOpen} />
    </>
  )
}

interface UserGuideDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UserGuideDialog({ open, onOpenChange }: UserGuideDialogProps) {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: t("guide.step1Title"),
      description: t("guide.step1Desc"),
      icon: <Upload className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />,
    },
    {
      title: t("guide.step2Title"),
      description: t("guide.step2Desc"),
      icon: <BarChart2 className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600" />,
    },
    {
      title: t("guide.step3Title"),
      description: t("guide.step3Desc"),
      icon: <ListChecks className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />,
    },
    {
      title: t("guide.step4Title"),
      description: t("guide.step4Desc"),
      icon: <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-amber-600" />,
    },
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onOpenChange(false)
      setCurrentStep(0)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(newOpen) => {
        onOpenChange(newOpen)
        if (!newOpen) setCurrentStep(0)
      }}
    >
      <DialogContent className="sm:max-w-md max-w-[90vw] w-full">
        <DialogHeader>
          <DialogTitle className="text-center">{t("guide.title")}</DialogTitle>
        </DialogHeader>

        <div className="py-4">
          <div className="flex justify-between mb-6">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 mx-1 rounded-full ${
                  index === currentStep ? "bg-blue-600" : index < currentStep ? "bg-blue-200" : "bg-gray-200"
                }`}
              />
            ))}
          </div>

          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">{steps[currentStep].icon}</div>
            <h3 className="text-base sm:text-lg font-medium mb-2">{steps[currentStep].title}</h3>
            <p className="text-xs sm:text-sm text-gray-500">{steps[currentStep].description}</p>
          </div>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              size="sm"
              className="text-xs sm:text-sm"
            >
              {t("upload.cancel")}
            </Button>
            <Button onClick={nextStep} size="sm" className="text-xs sm:text-sm">
              {currentStep === steps.length - 1 ? t("guide.getStarted") : "Next"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
