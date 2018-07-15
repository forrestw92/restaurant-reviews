<template>
    <div class="restaurants">
        <div class="restaurant"
             v-if="!restaurants.error"
             v-for="restaurant in restaurants"
             :key="restaurant.id"
             :tabindex="0">
            <div class="restaurant-img">
                <img v-lazy="'img/'+restaurant.photograph"
                     :alt="'Image of '+ restaurant.name">
            </div>
            <div class="restaurant-name">
                <h3 aria-hidden="true">{{restaurant.name}}</h3>
            </div>
            <div class="restaurant-neighborhood" aria-label="Neighborhood" tabindex="0">
                {{restaurant.neighborhood}}
            </div>
            <div class="restaurant-address">
                <address aria-label="Address" tabindex="0">
                    <a :href="'https://maps.google.com/?q='+restaurant.address">{{restaurant.address}}</a>
                </address>
            </div>
            <div class="restaurant-link">
                <nuxt-link :to="'restaurant/'+restaurant.id">View Details</nuxt-link>
            </div>
        </div>
        <div v-else>
            <h1>{{restaurants.error}}</h1>
        </div>
    </div>
</template>
<script>
  export default {
    beforeCreate () {
      this.$store.commit('updateRestaurants')
    },

    computed: {
      restaurants: function () {
        return this.$store.state.restaurants
      }
    }
  }
</script>
<style scoped>
    .restaurants {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        width: 100%;
        height: 100%;
    }

    .restaurant {
        background-color: white;
        width: 20%;
        margin: 2rem;
        padding: 1rem;
        min-width: 500px;

        align-self: stretch;
        -webkit-box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
    }

    .restaurant-img {
        margin-top: -3rem;
        margin-bottom: 1rem;
    }

    .restaurant-img img {
        width: 100%;
        height: 100%;
        -webkit-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.25);
    }

    .restaurant-name {
        text-align: center;
        color: #2c2246;
        margin-bottom: 1rem;
    }

    .restaurant-neighborhood,
    .restaurant-address {
        margin-left: 2rem;
    }

    .restaurant-link {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }

    .restaurant-link a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 40px;
        background-color: #2a40a7;
        border-radius: 0.5rem;
        color: white;
        text-decoration: none;
        -webkit-box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.25);
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.25);
    }

    .restaurant-link a:hover,
    .restaurant-link a:focus {
        background-color: #d1d4e4;
        color: black;
    }

    @media only screen and (max-width: 564px) {
        .restaurant {
            width: 100%;
            min-width: 256px;
        }
    }
</style>
