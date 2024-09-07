import axios from "axios"
export const Axios=axios.create({
    baseURL: "base-endoint",
    headers: {
        "Content-Type":"application/json"
    }
}) 