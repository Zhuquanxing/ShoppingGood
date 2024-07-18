import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:4523/m1/4822015-4476827-default',
  timeout: 10000
})
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }, {
    }).then((response) => {
      resolve(response)
    }, err => {
      reject(err)
    })
  })
}

export const post = (url, date = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, date, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response)
    }, err => {
      reject(err)
    })
  })
}
