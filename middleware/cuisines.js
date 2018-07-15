import axios from '~/plugins/axios'

export default function ({params, store}) {
  return axios.get('/api/restaurants/cuisines').then(response => {
    store.commit('addCuisines', response.data)
  })
}
