<template>
    <section class="filter-restaurants">
        <h2>Filter Restaurants</h2>
        <label for="select-neighborhood">Restaurants
            <select id="select-neighborhood" v-model="selNeighborhood" @change="filterRestaurants"
                    aria-label="Filter by neighborhood">
                <option value="all" aria-selected="true" selected="selected">All Neighborhoods</option>
                <option v-for="(neighborhood,index) in neighborhoods" :key="index" :value="neighborhood"
                        aria-selected="false">
                    {{neighborhood}}
                </option>
            </select>
        </label>
        <label for="select-cuisine">Cuisines
            <select id="select-cuisine" v-model="selCuisine" @change="filterRestaurants"
                    aria-label="Filter by cuisines">
                <option value="all" aria-selected="true">All Cuisines</option>
                <option v-for="(cuisine,index) in cuisines" :key="index" :value="cuisine" aria-selected="false">
                    {{cuisine}}
                </option>
            </select>
        </label>
    </section>
</template>

<script>
  export default {
    data () {
      return {
        selNeighborhood: this.$store.state.selectedNeighborhood,
        selCuisine: this.$store.state.selectedCuisine
      }
    },
    middleware: ['neighborhoods', 'cuisines'],
    methods: {
      filterRestaurants () {
        this.$store.commit('updateFilteredResults', {cuisine: this.selCuisine, neighborhood: this.selNeighborhood})
      }
    },
    computed: {
      neighborhoods: function () {
        return this.$store.state.neighborhoods
      },
      cuisines: function () {
        return this.$store.state.cuisines
      }
    }
  }
</script>
<style scoped>
    .filter-restaurants {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
    }

    .filter-restaurants h2 {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    label {
        display: flex;
        flex-direction: column;
        text-align: center;
        background-color: #2c2246;
        color: white;
        padding: 0.5rem;
        margin: 1rem;
        -webkit-border-radius: 0.5rem;
        -moz-border-radius: 0.5rem;
        border-radius: 0.5rem;
        -webkit-box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.25);
        box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.25);
    }

    #select-cuisine,
    #select-neighborhood {
        border-radius: 0.25rem;
        padding: 0.25rem;
        margin-top: 0.5rem;
    }

    @media only screen and (max-width: 355px) {
        label {
            margin: 0.25rem 0.25rem 1rem 0.25rem;
        }
    }
</style>
