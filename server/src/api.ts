import axios from "axios";
require('dotenv').config();

export const youtubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  timeout: 5000, 
  params: {
    key: process.env.YOUTUBE_KEY,
  },
});
