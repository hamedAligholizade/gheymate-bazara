import PriceGrid from '@/components/PriceGrid'
import { Vazirmatn } from 'next/font/google'

const vazir = Vazirmatn({ subsets: ['arabic'] })

export default function Home() {
  return (
    <main className={`min-h-screen p-4 ${vazir.className}`}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-right mb-6">قیمت‌های لحظه‌ای بازار</h1>
        <PriceGrid />
      </div>
    </main>
  )
} 