import Sidebar from '../components/Sidebar'
import { useQuery } from 'react-query'
import axios from 'axios'

export default function Dashboard() {
  const { data: clients, isLoading } = useQuery('clients', async () => {
    const res = await axios.get(`${process.env.prj_sf6Aenq3T1SZYt2h7q8B8W8AazSa}/clients`)
    return res.data
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr>
              <th className="p-2 border">Client Name</th>
              <th className="p-2 border">Business</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Plan</th>
              <th className="p-2 border">AI Posts</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(client => (
              <tr key={client._id} className="hover:bg-gray-100">
                <td className="p-2 border">{client.name}</td>
                <td className="p-2 border">{client.business}</td>
                <td className="p-2 border">{client.email}</td>
                <td className="p-2 border">{client.plan}</td>
                <td className="p-2 border">{client.aiPosts || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
