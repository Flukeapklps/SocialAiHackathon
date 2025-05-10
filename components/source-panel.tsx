"use client"

import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SourcePanel() {
  const sourceCode = `import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://example.com');
  
  // Fill in the login form
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('testuser');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('password123');
  
  // Submit the form
  await page.locator('button:has-text("Login")').click();
  
  // Expect to be logged in
  await expect(page.locator('.welcome-message')).toBeVisible();
});`

  const lines = sourceCode.split("\n")

  return (
    <div className="h-full flex flex-col">
      <div className="p-2 flex justify-between items-center border-b border-gray-200">
        <span className="text-sm font-medium">tests/example.spec.ts</span>
        <Button variant="outline" size="sm" className="h-7 text-xs gap-1">
          <ExternalLink className="h-3 w-3" />
          Open in VSCode
        </Button>
      </div>
      <div className="flex-1 overflow-auto p-4 font-mono text-sm bg-gray-50">
        <pre>
          {lines.map((line, index) => (
            <div key={index} className={`py-0.5 px-2 rounded ${index === 12 ? "bg-blue-100" : ""}`}>
              <span className="text-gray-400 mr-4">{index + 1}</span>
              {line}
            </div>
          ))}
        </pre>
      </div>
    </div>
  )
}
