import 'dotenv/config'
import OpenAI from 'openai'
export const openai = new OpenAI({ apiKey: process.OPENAI_API_KEY })
