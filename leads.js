import Sidebar from '../components/Sidebar'
import { useState } from 'react'
import axios from 'axios'

export default function Leads() {
  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [revenue, setRevenue] = useState('')

  const handleCreatePaymentLink = async () => {
    const res = await axios.post(`${process.env.prj_sf6Aenq3T1SZYt2h7q8B8W8AazSa}/payments/create-link`, {
      name,
      business,
      email,
      phone,
      website,
      annualRevenue: revenue
    })
    window.open(res.data.url, '_blank')
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Add Lead / Generate Payment</h1>
        <div className="grid grid-cols-2 gap-4 max-w-lg">
          <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="p-2 border rounded"/>
          <input placeholder="Business" value={business} onChange={e => setBusiness(e.target.value)} className="p-2 border rounded"/>
          <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="p-2 border rounded"/>
          <input placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} className="p-2 border rounded"/>
          <input placeholder="Website" value={website} onChange={e => setWebsite(e.target.value)} className="p-2 border rounded"/>
          <input placeholder="Annual Revenue" value={revenue} onChange={e => setRevenue(e.target.value)} className="p-2 border rounded"/>
        </div>
        <button onClick={handleCreatePaymentLink} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Generate Stripe Link
        </button>
      </div>
    </div>
  )
}
