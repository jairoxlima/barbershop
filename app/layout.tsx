import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "sonner"
import Footer from "./_components/footer"
// import { SessionProvider } from "next-auth/react"
import AuthProvider from "./_provides/auth"

export const metadata: Metadata = {
  title: "FSW Barber",
  description: "Site da Barbearia FSW",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="global-styles">
        <AuthProvider>
          {children}

          <Toaster />

          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
