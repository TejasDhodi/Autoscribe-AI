const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  scheduleName: String,
  frequency: { type: String, enum: ["daily", "weekly"], default: "daily" },
  time: String,
  selectedWeekday: String,
  emailList: [String],
  topic: String,
  blogContent: {
    title: String,
    body: String,
    author: String,
    image_url: String,
  },
  status: { type: String, enum: ["scheduled", "paused"], default: "scheduled" },
});
const schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = schedule;
