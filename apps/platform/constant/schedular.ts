const schedules = [
  {
    id: 1,
    name: "Daily Tech News",
    frequency: "Daily",
    time: "09:00 AM",
    emailList: "Newsletter Subscribers",
    status: "Active",
    nextRun: "2024-01-21 09:00",
  },
  {
    id: 2,
    name: "Weekly AI Insights",
    frequency: "Weekly",
    time: "Monday 10:00 AM",
    emailList: "Premium Users",
    status: "Active",
    nextRun: "2024-01-22 10:00",
  },
  {
    id: 3,
    name: "Monthly Roundup",
    frequency: "Monthly",
    time: "1st of month 08:00 AM",
    emailList: "All Subscribers",
    status: "Paused",
    nextRun: "2024-02-01 08:00",
  },
];

const weekdays = [
  { value: "monday", label: "Monday" },
  { value: "tuesday", label: "Tuesday" },
  { value: "wednesday", label: "Wednesday" },
  { value: "thursday", label: "Thursday" },
  { value: "friday", label: "Friday" },
  { value: "saturday", label: "Saturday" },
  { value: "sunday", label: "Sunday" },
];

export { schedules, weekdays };
