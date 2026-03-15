const mongoose = require("mongoose")

const ClientSchema = new mongoose.Schema({
  name: String,
  business: String,
  email: String,
  instagram: String,
  facebook: String,
  website: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Client", ClientSchema)