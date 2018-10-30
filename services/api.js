import axios from 'axios'


const api = axios.create({
  baseURL: 'http://172.20.10.4:3000/v1'
})

const getPharmacies = () => {
  return api
    .get('/pharmacies')
    .then(res =>
      {
        console.log(res.data.response)
        return res.data.response
      })
}

export default {
    getPharmacies,
}