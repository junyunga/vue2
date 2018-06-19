import axios from 'axios'

const api = axios.create({
    baseURL: 'https://my-first-project-8745.firebaseio.com',
    params : {
        'auth': 'FB8OOtJR4qzA1mrroXxQIFeINMgO7IspTWPufYCG'
    },

    timeout: 1000,
    
   
})
export default api