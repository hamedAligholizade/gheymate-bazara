'use client'

import { useEffect, useState } from 'react'
import PriceCard from './PriceCard'

interface Currency {
  name: string
  nameFa: string
  rate: string
}

interface ApiResponse {
  updatedAt: string
  currencies: Currency[]
}

export default function PriceGrid() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://65.109.198.133:5000/currencies')
        const json = await response.json()
        setData(json)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 30000) // Refresh every 30 seconds

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return <div className="text-center">در حال بارگذاری...</div>
  }

  const importantCurrencies = [
    'usd_buy', 'usd_sell', 'eur_buy', 'eur_sell', 
    'gbp_buy', 'gbp_sell', 'aed', 'sekkeh', 
    'abshodeh', 'btc', 'eth'
  ]

  const filteredCurrencies = data?.currencies.filter(
    currency => importantCurrencies.includes(currency.name)
  ) || []

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rtl">
      {filteredCurrencies.map((currency) => (
        <PriceCard
          key={currency.name}
          name={currency.nameFa}
          value={currency.rate}
        />
      ))}
    </div>
  )
} 