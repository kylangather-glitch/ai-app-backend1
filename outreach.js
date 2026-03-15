const express = require("express")
const router = express.Router()

let leads = []

// Add a business lead
router.post("/lead", (req, res) => {

  const { business, phone, website } = req.body

  const lead = {
    id: Date.now(),
    business,
    phone,
    website,
    contacted: false
  }

  leads.push(lead)

  res.json(lead)
})


// Get all leads
router.get("/leads", (req, res) => {

  res.json(leads)

})


// Mark a lead as contacted
router.post("/contacted/:id", (req, res) => {

  const id = parseInt(req.params.id)

  const lead = leads.find(l => l.id === id)

  if (!lead) {
    return res.status(404).json({error:"Lead not found"})
  }

  lead.contacted = true

  res.json(lead)

})

module.exports = router