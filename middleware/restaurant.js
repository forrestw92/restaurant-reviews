import axios from '~/plugins/axios'

export default function ({params, store}) {
  return axios.get('/api/restaurants/id/' + params.id).then(response => {
    store.commit('addRestaurant', response.data)
  })
}
