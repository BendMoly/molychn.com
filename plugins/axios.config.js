import axios from 'axios'

axios.defaults.baseURL = 'http://molychn.com:12580/v1'
// axios.defaults.baseURL = 'http://localhost:12580/v1'


export default {
  get: (url, params) => {
    return axios({
      url,
      method: 'GET',
      params
    }).then(res => {
      return res
    }).catch(err => {
      return reject(err)
    })
  },
  post: (url, data) => {
    return axios({
      url,
      method: 'POST',
      data
    }).then(res => {
      return res
    }).catch(err => {
      return reject(err)
    })
  }
}
// export default axios
