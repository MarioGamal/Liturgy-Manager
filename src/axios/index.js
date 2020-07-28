import axios from 'axios';

export const axiosMessenger = axios.create({
    baseURL: `https://graph.facebook.com/v2.6/me/messages`
});
axiosMessenger.interceptors.request.use(config => {
    config.params = {
        access_token: process.env.FACEBOOK_PAGE_ACCESS_TOKEN
    };
    return config;
});