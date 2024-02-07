import cron from "node-cron";
import { sendPatientData } from "./src/controllers/phrController.js";

            // # ┌────────────── second (optional)
            // # │ ┌──────────── minute
            // # │ │ ┌────────── hour
            // # │ │ │ ┌──────── day of month
            // # │ │ │ │ ┌────── month
            // # │ │ │ │ │ ┌──── day of week
            // # │ │ │ │ │ │
            // # │ │ │ │ │ │
            // # * * * * * *
cron.schedule("*/5 * * * * *", () => new Promise(sendPatientData())); // 5 วินาที
