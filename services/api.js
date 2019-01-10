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

const getPharmaciesByDrug = drugId => {
  return api
    .get(`/pharmacies/drugs/${drugId}`)
    .then(res =>
      {
        return res.data
      })
}

const getDrugs = label => {
  return api
    .get(`/drugs/label/${label}`)
    .then(res =>
      {
        return res.data
      })
}

export default {
    getPharmacies,
    getPharmaciesByDrug,
    getDrugs,
}