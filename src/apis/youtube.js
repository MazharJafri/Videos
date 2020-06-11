import axios from 'axios';

const KEY = 'AIzaSyAIxi4w9eC8P4A9611A_Eji6nraPaz8s5Y';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});

