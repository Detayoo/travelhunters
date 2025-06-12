import axios from "axios";

import { CONFIG } from "@/config";

export const baseApi = axios.create({
  baseURL: CONFIG.SERVER_URL,

  headers: {
    "ngrok-skip-browser-warning": "any",
    "Content-Type": "application/json",
  },
});
