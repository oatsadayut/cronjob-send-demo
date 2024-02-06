import axios from "axios";
import 'dotenv/config'

const API_SERVICE = process.env.API;
const AUTH_TOKEN = process.env.TOKEN;

const http = axios.create({
  baseURL: API_SERVICE,
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
});

export { http };
