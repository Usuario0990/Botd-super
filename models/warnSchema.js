const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const req5 = {
  type: String,
  required: true,
}

const warnSchema = new Schema({
  guildId: req5,

  userId: req5,

  coins: {
    type: Number,
    default: 0,
  },

  warns: {
    type: Number,
    default: 0,
  },
})

module.exports = mongoose.model("warnings", warnSchema);