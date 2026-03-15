const express = require("express")
const router = express.Router()

const Client = require("../Client")

router.post("/", async (req, res) => {

  const client = new Client(req.body)

  await client.save()

  res.json(client)
})

router.get("/", async (req, res) => {

  const clients = await Client.find()

  res.json(clients)
})

router.delete("/:id", async (req, res) => {

  await Client.findByIdAndDelete(req.params.id)

  res.json({ message: "Client deleted" })
})

module.exports = router
