const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*------------------
    GOALIE SCHEMA
------------------*/
const goalieSchema = new Schema({
  rotation: { type: String, required: true },
  description: String,
  assigned: String,
  staff: [String]
});

module.exports = mongoose.model('Goalie', goalieSchema);