const { scheduleBlogJob } = require("../cron/cronManager");
const Schedule = require("../model/schedule.model");

const createSchedule = async (req, res) => {
  try {
    const schedule = new Schedule(req.body);

    await schedule.save();

    scheduleBlogJob(schedule);

    res.status(201).json({ message: "Schedule created", schedule });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.status(200).json(schedules);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const schedule = await Schedule.findById(id);
  if (!schedule) return res.status(404).json({ error: "Not found" });

  schedule.status = status;
  await schedule.save();

  if (status === "paused") stopSchedule(id);
  else scheduleBlogJob(schedule);

  res.json({ message: "Status updated", schedule });
};

module.exports = {
  createSchedule,
  getAllSchedules,
  updateStatus
};
