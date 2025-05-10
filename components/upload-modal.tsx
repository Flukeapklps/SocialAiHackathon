"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Upload, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/contexts/language-context"

interface UploadModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UploadModal({ open, onOpenChange }: UploadModalProps) {
  const { t } = useLanguage()
  const [dragActive, setDragActive] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [complete, setComplete] = useState(false)
  const [progress, setProgress] = useState(0)
  const [processingProgress, setProcessingProgress] = useState(0)

  // Reset state when modal is opened
  useEffect(() => {
    if (open) {
      setDragActive(false)
      setUploading(false)
      setProcessing(false)
      setComplete(false)
      setProgress(0)
      setProcessingProgress(0)
    }
  }, [open])

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    // Simulate upload
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      simulateUpload()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    // Simulate upload
    if (e.target.files && e.target.files[0]) {
      simulateUpload()
    }
  }

  const simulateUpload = () => {
    setUploading(true)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          // Start processing after upload completes
          startProcessing()
          return 100
        }
        return prev + 5
      })
    }, 100)
  }

  const startProcessing = () => {
    setUploading(false)
    setProcessing(true)
    setProcessingProgress(0)

    const interval = setInterval(() => {
      setProcessingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setProcessing(false)
          setComplete(true)
          return 100
        }
        return prev + 2 // Slower progress for "AI processing"
      })
    }, 100)
  }

  const handleViewResults = () => {
    onOpenChange(false)
    // Reset for next time
    setTimeout(() => {
      setComplete(false)
    }, 500)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-w-[90vw] w-full">
        <DialogHeader>
          <DialogTitle className="text-base sm:text-lg">{t("upload.title")}</DialogTitle>
          <DialogDescription className="text-xs sm:text-sm">{t("upload.description")}</DialogDescription>
        </DialogHeader>

        {!uploading && !processing && !complete ? (
          <div
            className={`mt-2 flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 sm:p-12 transition-colors ${
              dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center justify-center text-center">
              <Upload className="h-8 w-8 sm:h-10 sm:w-10 text-gray-400 mb-2" />
              <p className="mb-2 text-xs sm:text-sm font-semibold">
                <span className="font-semibold">{t("upload.dragDrop")}</span>
              </p>
              <p className="text-xs text-gray-500">{t("upload.fileTypes")}</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" accept=".mp4,.mov,.csv" onChange={handleChange} />
          </div>
        ) : uploading ? (
          <div className="mt-2 p-4 sm:p-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span>{t("upload.uploading")}</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        ) : processing ? (
          <div className="mt-2 p-4 sm:p-6">
            <div className="space-y-4">
              <div className="flex justify-between text-xs sm:text-sm">
                <span>{t("upload.processing")}</span>
                <span>{processingProgress}%</span>
              </div>
              <Progress value={processingProgress} className="h-2" />

              <div className="flex flex-col items-center justify-center py-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-t-blue-600 border-blue-200 rounded-full animate-spin mb-4"></div>
                <p className="text-xs sm:text-sm text-gray-500 animate-pulse">{t("ai.analyzing")}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-2 p-4 sm:p-6">
            <div className="flex flex-col items-center justify-center py-4">
              <CheckCircle2 className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 mb-4" />
              <p className="text-base sm:text-lg font-medium text-center mb-2">{t("upload.analysisComplete")}</p>
              <p className="text-xs sm:text-sm text-gray-500 text-center">
                Your walking data has been successfully analyzed by our AI.
              </p>
            </div>
          </div>
        )}

        <DialogFooter className="sm:justify-between">
          {!complete ? (
            <>
              <Button
                type="button"
                variant="secondary"
                onClick={() => onOpenChange(false)}
                disabled={uploading || processing}
                size="sm"
                className="text-xs sm:text-sm"
              >
                {t("upload.cancel")}
              </Button>
              {!uploading && !processing && (
                <label htmlFor="dropzone-file">
                  <Button type="button" size="sm" className="text-xs sm:text-sm">
                    {t("upload.selectFile")}
                  </Button>
                </label>
              )}
            </>
          ) : (
            <Button type="button" className="w-full text-xs sm:text-sm" onClick={handleViewResults}>
              {t("upload.viewResults")}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
