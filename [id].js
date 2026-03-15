import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import axios from 'axios'
import Sidebar from '../../components/Sidebar'

export default function ClientDetail() {
  const router = useRouter()
  const { id } = router.query

  const { data: client, isLoading } = useQuery(
    ['client', id],
    async () => {
      const res = await axios.get(`${process.env.prj_sf6Aenq3T1SZYt2h7q8B8W8AazSa}/clients/${id}`)
      return res.data
    },
    { enabled: !!id }
  )

  const generatePost = async () => {
    const res = await axios.post(`${process.env.prj_sf6Aenq3T1SZYt2h7q8B8W8AazSa}/ai/post`, { clientId: id, topic: client.business })
    alert('Post generated: ' + res.data.post)
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">{client.name} ({client.business})</h1>
        <p>Email: {client.email}</p>
        <p>Phone: {client.phone}</p>
        <p>Website: {client.website}</p>
        <p>Plan: {client.plan}</p>
        <p>AI Posts Generated: {client.aiPosts || 0}</p>
        <button onClick={generatePost} className="mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Generate AI Post
        </button>
      </div>
    </div>
  )
}
