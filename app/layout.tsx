import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "VST Power Tiller Service & Sales - Expert Mechanic Shop in Erode",
  description:
    "Professional VST power tiller sales, service, and repairs at 52, MAIN STREET, Periya Semmandam Palayam. Specialized in 12HP and 10HP models. Contact Kulandhaivel at 9944572340 for all your power tiller needs.",
  keywords:
    "VST power tiller, tiller repair, tiller service, agricultural equipment, farm machinery, 12HP tiller, 10HP tiller, mechanic shop, Periya Semmandam Palayam, Erode, Tamil Nadu",


    other: {
      "google-site-verification": "K8-zobq8oN6f-5GgFNVaBuGk6chDEMM2cItIoEBTb_U",
    }, 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
