import WalkSafeApp from "@/components/walksafe-app"
import { LanguageProvider } from "@/contexts/language-context"

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50 flex items-center justify-center w-full">
      <LanguageProvider>
        <WalkSafeApp />
      </LanguageProvider>
    </main>
  )
}
