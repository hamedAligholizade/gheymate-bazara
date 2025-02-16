export default function PriceCard({ 
  name, 
  value 
}: { 
  name: string
  value: string 
}) {
  const formattedValue = Number(value).toLocaleString('fa-IR')
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-xl text-gray-900">
        {formattedValue} <span className="text-sm text-gray-600">ریال</span>
      </p>
    </div>
  )
} 