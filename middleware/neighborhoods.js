import axios from '~/plugins/axios'

export default function ({params, store}) {
  return axios.get('/api/restaurants/neighborhoods').then(response => {
    store.commit('addNeighborhoods', response.data)
  })
}
