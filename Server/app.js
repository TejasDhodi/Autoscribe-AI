require('dotenv').config({path: './.env'})
const express = require("express");
const app = express();
const cors = require("cors");
const database = require("./database/databse");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const emailRoutes = require("./routes/emails.routes");
const scheduleRoutes = require("./routes/schedule.routes");
const blogRoutes = require("./routes/blog.routes")
const { loadExistingSchedules } = require("./cron/cronManager");

app.use("/api/v1", emailRoutes);
app.use("/api/v1", scheduleRoutes);
app.use("/api/v1", blogRoutes);

database()
  .then(() => {
    app.listen(8000, async () => {
      console.log("Jay Shree Ram");
      await loadExistingSchedules();
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });
