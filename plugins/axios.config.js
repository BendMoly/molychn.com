import axios from 'axios'

const isProd = Object.is(process.env.NODE_ENV, 'production')
axios.defaults.baseURL = isProd ? 'http://molychn.com:12580/v1' : 'http://localhost:12580/v1'

export default axios
