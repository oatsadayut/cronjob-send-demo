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
cron.schedule("*/3 * * * * *",() => new Promise(sendAllergyIntolerance())); // 3 วินาที
