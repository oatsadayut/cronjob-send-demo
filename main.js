import cron from "node-cron";
import { sendData } from "./src/controllers/phr.js";

            // # ┌────────────── second (optional)
            // # │ ┌──────────── minute
            // # │ │ ┌────────── hour
            // # │ │ │ ┌──────── day of month
            // # │ │ │ │ ┌────── month
            // # │ │ │ │ │ ┌──── day of week
            // # │ │ │ │ │ │
            // # │ │ │ │ │ │
            // # * * * * * *
cron.schedule("*/3 * * * * *",() => new Promise(sendData())); // 3 วินาที
