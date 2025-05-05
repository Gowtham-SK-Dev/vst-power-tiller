"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const phoneNumber = "919944572340" // Format without + for WhatsApp API
  const message = "Hello! I'm interested in your VST Power Tiller services."

  // Show button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-lg transition-all duration-300 hover:bg-green-600 ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="ml-2 hidden md:inline">Chat with us</span>
    </button>
  )
}
