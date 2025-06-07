const express = require("express");
const router = express.Router();
const { createSchedule, getAllSchedules, updateStatus } = require("../controller/schedule.controller");

router.post("/cron/create", createSchedule);
router.get("/cron", getAllSchedules);
router.patch("/cron/:id/status", updateStatus);

module.exports = router;
