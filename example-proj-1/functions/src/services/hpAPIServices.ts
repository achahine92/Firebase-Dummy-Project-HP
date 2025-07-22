import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

const HP_BASE_URL = "https://potterapi-fedeperin.vercel.app/en"

export const getAllCharacters = async () => {
    const url = `${HP_BASE_URL}/characters`
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error: any) {
        console.log("HP API Error (getAllCharacters): ", error)
    }
}