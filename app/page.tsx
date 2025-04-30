import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Clock, PenToolIcon as Tool, ShoppingBag, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Tool className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">VST Power Tiller Service</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#products" className="text-sm font-medium hover:text-primary">
              Products
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Link href="#contact">
            <Button size="sm" className="hidden md:flex">
              <Phone className="mr-2 h-4 w-4" /> Contact Us
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative bg-gradient-to-r from-accent/50 to-secondary/30">
          <div className="container flex flex-col items-center justify-center gap-4 py-12 text-center md:py-24">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Expert VST Power Tiller Service & Sales
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Professional maintenance, repair, and sales of VST power tillers and engines. Trusted service by
              experienced mechanics.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="#contact">Contact Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-24 relative bg-gradient-to-r from-accent/50 to-secondary/30">
          <div className="container space-y-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                We provide comprehensive services for all your VST power tiller needs
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center gap-2 rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Sales</h3>
                <p className="text-muted-foreground">
                  New and used VST power tillers and engines. Authorized dealer for genuine parts and accessories.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                  <Tool className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Repair & Service</h3>
                <p className="text-muted-foreground">
                  Expert repair and maintenance services for all VST power tiller models. Quick turnaround time.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Regular Check-ups</h3>
                <p className="text-muted-foreground">
                  Preventive maintenance and regular check-ups to ensure optimal performance and longevity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="relative bg-gradient-to-r from-accent/50 to-secondary/30">
          <div className="container space-y-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                We specialize in VST power tillers and engines, offering the best models for your agricultural needs
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-lg border-2 border-accent bg-card shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative h-60 w-full">
                  <Image
                    src="/power1.png?height=240&width=500"
                    alt="VST 12HP Power Tiller"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">VST 12HP Power Tiller</h3>
                  <div className="mt-2 space-y-2">
                    <p className="text-muted-foreground">
                      Powerful 12HP engine for efficient tilling of large agricultural lands.
                    </p>
                    <ul className="grid gap-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" /> 12HP Diesel Engine
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" /> Water-cooled system
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" /> Heavy-duty transmission
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" /> Multiple attachments available
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-4" asChild>
                    <Link href="#contact">Inquire Now</Link>
                  </Button>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border-2 border-accent bg-card shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative h-60 w-full">
                  <Image
                    src="/power2.webp?height=240&width=500"
                    alt="VST 10HP Power Tiller"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">VST 10HP Power Tiller</h3>
                  <div className="mt-2 space-y-2">
                    <p className="text-muted-foreground">
                      Versatile 10HP engine perfect for medium-sized farms and various agricultural tasks.
                    </p>
                    <ul className="grid gap-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" /> 10HP Diesel Engine
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" /> Fuel efficient design
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" /> Easy maintenance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" /> Durable construction
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-4" asChild>
                    <Link href="#contact">Inquire Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 relative bg-gradient-to-r from-accent/50 to-secondary/30">
          <div className="container space-y-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Reach out to us for all your VST power tiller needs
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold">Get In Touch</h3>
                  <p className="text-muted-foreground">
                    We're here to help with all your VST power tiller needs. Contact us today!
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 9944572340</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        52, MAIN STREET, Periya Semmandam Palayam, Tamil Nadu 638154
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-semibold">Owner</h4>
                  <p className="text-muted-foreground">Mr. Kulandhaivel</p>
                </div>
              </div>
              <div className="h-[400px] overflow-hidden rounded-lg border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.0731456310473!2d77.85634087465761!3d11.159563688887946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba97fcb42f7631f%3A0x37c0a8e93e463c79!2s52%2C%20MAIN%20STREET%2C%20Periya%20Semmandam%20Palayam%2C%20Tamil%20Nadu%20638154!5e0!3m2!1sen!2sin!4v1714499143811!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VST Power Tiller Service Center Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t relative bg-gradient-to-r from-accent/50 to-secondary/30">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-4">
            <Tool className="h-6 w-6" />
            <p className="text-center text-sm leading-loose md:text-left">
              &copy; {new Date().getFullYear()} VST Power Tiller Service. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-center text-sm md:text-left">
              Designed with <span className="text-red-500">❤</span> for better farming
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
