import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'قیمت لحظه‌ای ارز و طلا',
  description: 'قیمت لحظه‌ای ارز، طلا، و سکه در بازار ایران',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-100">{children}</body>
    </html>
  )
} 