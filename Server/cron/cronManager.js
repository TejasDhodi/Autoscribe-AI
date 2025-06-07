const cron = require("node-cron");
const Schedule = require("../model/schedule.model");
const axios = require("axios");

const jobs = new Map();

const dayMap = {
  sunday: 0, monday: 1, tuesday: 2, wednesday: 3,
  thursday: 4, friday: 5, saturday: 6,
};

const scheduleBlogJob = (schedule) => {
  const [hour, minute] = schedule.time.split(":");

  let cronTime;
  if (schedule.frequency === "daily") {
    cronTime = `${minute} ${hour} * * *`;
  } else {
    cronTime = `${minute} ${hour} * * ${dayMap[schedule.selectedWeekday.toLowerCase()]}`;
  }

  const job = cron.schedule(cronTime, async () => {
    if (schedule.status !== "scheduled") return;

    const requestData = {
      email: schedule.emailList,
      blog_title: schedule.blogContent.title,
      date: new Date().toDateString(),
      author: schedule.blogContent.author,
      blog_body: schedule.blogContent.body,
      year: new Date().getFullYear(),
    };
    const boltic_connect = process.env.BOLTIC_EMAIL_URI
    console.log({requestData});
    try {
      await axios.post(boltic_connect, requestData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "xxxx-token",
        },
      });
      console.log(`✅ Blog sent for: ${schedule.scheduleName}`);
    } catch (err) {
      console.error("❌ Error sending blog:", err.message);
    }
  });

  job.start();
  jobs.set(schedule._id.toString(), job);
};

const stopSchedule = (scheduleId) => {
  const job = jobs.get(scheduleId);
  if (job) {
    job.stop();
    jobs.delete(scheduleId);
  }
};

const loadExistingSchedules = async () => {
  const schedules = await Schedule.find({ status: "scheduled" });
  for (const schedule of schedules) {
    scheduleBlogJob(schedule);
  }
  console.log(`🟢 ${schedules.length} jobs initialized`);
};

module.exports = {
  scheduleBlogJob,
  stopSchedule,
  loadExistingSchedules,
};
