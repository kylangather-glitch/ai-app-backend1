const express = require("express")
const router = express.Router()

const ai = require("../../../services/openaiService")

router.post("/post", async (req, res) => {

  const { topic } = req.body

  const caption = await ai.generatePost(topic)

  res.json({ caption })
})

router.post("/reply", async (req, res) => {

  const { comment } = req.body

  const reply = await ai.generateReply(comment)

  res.json({ reply })
})

router.post("/video-script", async (req, res) => {

  const { topic } = req.body

  const script = await ai.generateVideoScript(topic)

  res.json({ script })
})

module.exports = router