import Vuex from 'vuex'
import axios from '~/plugins/axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      menuIsActive: false,
      restaurant: {},
      restaurants: {},
      allRestaurants: {},
      neighborhoods: [],
      cuisines: [],
      selectedNeighborhood: 'all',
      selectedCuisine: 'all'
    },
    getters: {
      getSelectedNeighborhood (state) {
        return state.selectedNeighborhood
      },
      getSelectedCuisine (state) {
        return state.selectedCuisine
      }
    },

    mutations: {
      addRestaurant (state, payload) {
        state.restaurant = payload
      },
      addCuisines (state, payload) {
        state.cuisines = payload
      },
      addNeighborhoods (state, payload) {
        state.neighborhoods = payload
      },
      updateRestaurants (state) {
        axios
          .get(`api/restaurants/neighborhood/cuisine/${state.selectedNeighborhood}/${state.selectedCuisine}`)
          .then(response => {
            state.restaurants = response.data
            state.allRestaurants = response.data
          })
      },
      updateFilteredResults (state, payload) {
        state.selectedCuisine = payload.cuisine
        state.selectedNeighborhood = payload.neighborhood
        state.restaurants = (function () {
          if (payload.cuisine !== 'all') {
            if (payload.neighborhood !== 'all') {
              return state.allRestaurants.filter(r => r.neighborhood === payload.neighborhood && r.cuisine_type === payload.cuisine)
            }
            return state.allRestaurants.filter(r => r.cuisine_type === payload.cuisine)
          } else if (payload.neighborhood !== 'all') {
            return state.allRestaurants.filter(r => r.neighborhood === payload.neighborhood)
          }
          return state.allRestaurants
        })()
      }
    }
  }
  )
}
export default createStore
