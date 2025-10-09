import type { Metadata } from "next"
import "./globals.css"

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
    <html lang="pt-br" className="global-styles dark">
      <body className="global-styles">{children}</body>
    </html>
  )
}
