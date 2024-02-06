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
cron.schedule("*/50 * * * * *",() => new Promise(sendAllergyIntolerance())); // 50 วินาที
