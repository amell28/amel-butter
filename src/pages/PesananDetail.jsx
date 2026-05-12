import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import dataPesanan from "../data/pesanan.json"

export default function OrderDetail() {
  const { id } = useParams()
  const [order, setOrder] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const foundOrder = dataPesanan.find((item) => String(item.id) === id)
    if (!foundOrder) {
      setError("Pesanan tidak ditemukan")
      return
    }
    setOrder(foundOrder)
  }, [id])

  if (error) return <div className="text-red-600 p-4">{error}</div>
  if (!order) return <div className="p-4">Loading...</div>

  const imageSrc = order.image || "/img/logo.png"

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg max-w-lg mx-auto mt-6">
      <Link to="/pesanan" className="text-emerald-400 hover:text-emerald-500 mb-4 inline-block">
        Kembali ke daftar pesanan
      </Link>
      <img
        src={imageSrc}
        alt={order.title}
        className="w-full h-72 object-cover rounded-2xl mb-6"
        loading="lazy"
      />
      <h2 className="text-2xl font-bold mb-2">{order.title}</h2>
      <p className="text-gray-600 mb-1">Code: {order.code}</p>
      <p className="text-gray-600 mb-1">Kategori: {order.category}</p>
      <p className="text-gray-600 mb-1">Brand: {order.brand}</p>
      <p className="text-gray-800 font-semibold text-lg">
        Harga: Rp {order.price.toLocaleString()}
      </p>
      <p className="text-gray-600">Stock: {order.stock}</p>
    </div>
  )
}
