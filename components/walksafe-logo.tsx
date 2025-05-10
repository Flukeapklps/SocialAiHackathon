"use client"

import { useLanguage } from "@/contexts/language-context"

export function WalkSafeLogo() {
  const { language } = useLanguage()

  return (
    <div className="flex items-center justify-center gap-3">
      <div className="relative">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md">
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>

          {/* New shoe-themed logo */}
          <svg
            width="70%"
            height="70%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative"
          >
            {/* Shoe outline */}
            <path
              d="M3 14.25C3 14.25 5 15.5 8.5 15.5C11 15.5 12.5 14.25 14.5 14.25C16.5 14.25 18 15 20 15C20.5 15 21 14.75 21 14.25C21 13.75 21 12.5 21 12C21 11.5 20.5 11 20 11C18 11 16.5 12 14.5 12C13.5 12 12.5 11.5 11.5 11.5C10.5 11.5 10 12 8.5 12C6 12 3 10.5 3 8.5C3 7.5 3.5 6.5 4.5 6C5.5 5.5 7 5 8.5 5C10 5 11 5.5 12 6.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Shoe laces */}
            <path d="M7 8.5L10 8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6.5 10L9.5 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

            {/* Motion lines */}
            <path
              d="M16 8C16.5 7 17.5 6.5 18.5 7C19.5 7.5 19.5 9 18.5 9.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div>
        <div className="text-blue-700 font-bold text-lg sm:text-xl md:text-2xl">WalkSafe</div>
        <div className="text-xs sm:text-sm text-blue-500">
          {language === "en" ? "Walking Detection for Elderly" : "ระบบตรวจจับการเดินสำหรับผู้สูงอายุ"}
        </div>
      </div>
    </div>
  )
}
