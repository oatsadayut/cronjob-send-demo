import cron from "node-cron";
import { sendAllergyIntolerance } from "./src/controllers/phrController.js";

            // # ┌────────────── second (optional)
            // # │ ┌──────────── minute
            // # │ │ ┌────────── hour
            // # │ │ │ ┌──────── day of month
            // # │ │ │ │ ┌────── month
            // # │ │ │ │ │ ┌──── day of week
            // # │ │ │ │ │ │
            // # │ │ │ │ │ │
            // # * * * * * *
cron.schedule("*/5 * * * * *",() => new Promise(sendAllergyIntolerance())); // 5 วินาที
