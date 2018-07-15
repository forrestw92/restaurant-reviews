<template>
    <section class="container">
        <filter-bar/>
        <GmapMap
                :center="{lat: 40.725000, lng:-73.987501}"
                :zoom="12"
                role="presentation"
                aria-hidden="true"
        >
            <GmapMarker
                    v-for="(restaurant, index) in restaurants"
                    :key="index"
                    :icon='{url:"marker.png"}'
                    :position="restaurant.latlng"
                    :clickable="true"
                    :title="restaurant.name"
                    :animation=2
            ></GmapMarker>
        </GmapMap>
        <restaurants/>
    </section>
</template>

<script>
  import NavBar from '~/components/NavBar.vue'
  import FilterBar from '../components/FilterBar'
  import Restaurants from '../components/Restaurants'

  export default {
    components: {
      Restaurants,
      FilterBar,
      NavBar
    },
    beforeMount () {
      this.$store.state.restaurant = ''
    },
    data () {
      return {
        cuisines: {}, neighborhoods: {}
      }
    },
    middleware: ['neighborhoods', 'cuisines'],
    computed: {
      restaurants: function () {
        return this.$store.state.restaurants
      }
    }
  }
</script>

<style scoped>
    .container {
        min-height: 100%;
        min-width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

    .vue-map-container {
        width: 100%;
        height: 400px;
        margin-bottom: 2rem;
    }
</style>
