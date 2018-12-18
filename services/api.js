import axios from 'axios'


const api = axios.create({
  baseURL: 'http://163.172.167.185:3000/v1'
})

const getPharmacies = () => {
  return api
    .get('/pharmacies')
    .then(res =>
      {
        return res.data
      })
}

export default {
    getPharmacies,
}