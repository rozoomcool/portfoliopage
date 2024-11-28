import { loadEnvConfig } from "@next/env";
import axios from "axios";

// const projectDir = process.cwd()
// loadEnvConfig(projectDir)

const baseUrl = process.env.API_HOST;
console.log(baseUrl)
export const $api = axios.create({
    baseURL: `/api/`
})