import axios from "axios";
import "dotenv/config";


const API_SERVICE = process.env.API_SERVICE; 
const AUTH_TOKEN = process.env.TOKEN;

const http = axios.create({
  baseURL: API_SERVICE,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${AUTH_TOKEN}`,
    timeout: 8000,

    // ... Other configurations
  },
});

export { http };
