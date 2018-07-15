<template>
    <section class="single">
        <div class="restaurant-info">
            <section>
                <div class="restaurant-img">
                    <img :src="require('~/assets/img/'+restaurant.photograph)"
                         tabindex="-1"
                         :alt="'Image of '+ restaurant.name">
                </div>
                <div class="tag">
                    <h3 class="title">Location</h3>
                    <div class="info">
                        <div class="restaurant-neighborhood">{{restaurant.neighborhood}}</div>
                        <div class="restaurant-address">
                            <address>
                                <a :href="'https://maps.google.com/?q='+restaurant.address">View in Maps</a>
                            </address>
                        </div>
                    </div>
                </div>
            </section>
            <section aria-labelledby="hours">
                <h3 class="tag" id="hours">Store Hours</h3>
                <div class="restaurant-hours tag" tabindex="0">
                    <div class='selection-day' v-for="(hours,day) in restaurant.operating_hours" :key="day">
                        <div class="day">
                            <time>{{day}}</time>
                        </div>
                        <div class="hours">
                            <time v-html="hours.replace(',','</br>')"></time>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="container">
            <GmapMap :zoom="12" :center='restaurant.latlng'>
                <GmapMarker
                        :position="restaurant.latlng"
                        :clickable="true"
                        :title="restaurant.name"
                />
            </GmapMap>
            <section aria-labelledby="reviews" tabindex="0">
                <div class="restaurant-reviews">
                    <div class="tag">
                        <h1 class="title" id="reviews">Reviews</h1>
                    </div>
                    <div class="review" v-for="(review,index) in restaurant.reviews" :key='index' tabindex="0">
                        <article role="article">
                            <div class="review-name">
                                {{review.name}}
                            </div>
                            <div class="review-date">
                                <time>{{review.date}}</time>
                            </div>
                            <div class="review-rating" :aria-label="review.rating + ' stars'">
                                <svg v-for='i in review.rating' :key="i"
                                     xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24"
                                     viewBox="0 0 24 24"
                                     fill="gold"
                                     stroke="gold"
                                     stroke-width="2"
                                     stroke-linecap="round"
                                     stroke-linejoin="round">
                                    <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02
                                                    12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                    </polygon>
                                </svg>
                            </div>
                            <div class="review-comment">
                                {{review.comments}}
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>

    </section>
</template>
<script>
  import NavBar from '@/components/NavBar'

  export default {
    components: {NavBar},
    middleware: 'restaurant',
    computed: {
      restaurant: function () {
        return this.$store.state.restaurant
      }
    }
  }
</script>
<style scoped>
    .single {
        display: flex;
        flex-flow: row wrap;
        max-width: 1000px;
        margin: auto;
        padding: 1rem;
    }

    .container {
        display: flex;
        width: 50%;
        height: 100%;
        flex-flow: row wrap;
        padding-left: 2rem;
    }

    .vue-map-container {
        width: 100%;
        height: 400px;
        margin-bottom: 1rem;
    }

    .restaurant-reviews .tag {
        box-shadow: none;
    }

    .review {
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.25);
        background: white;
        padding: 1rem;
        margin-bottom: 1.5rem;
    }

    .review-comment {
        margin: 1rem;
    }

    .restaurant-hours {
        display: flex;
        flex-flow: column wrap;
        max-width: 500px;
        width: 100%;
        align-self: center;
    }

    .restaurant-hours .selection-day {
        display: flex;
        justify-content: space-between;
        border-top: 0.5px solid #ccc;
        margin: 0.5rem;
        padding-top: 0.5rem;
    }

    .restaurant-hours .selection-day:first-child {
        border-top: none;
    }

    .tag {
        display: flex;
        flex-flow: column wrap;
        padding: 0.25rem;
        max-width: 500px;
        width: 100%;
        border-radius: 0.5rem;
        align-self: center;
        text-align: center;
        margin: 1rem;
        -webkit-box-shadow: 0px 10px 30px -1px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 10px 30px -1px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 10px 30px -1px rgba(0, 0, 0, 0.25);
    }

    .tag .title {
        width: 200px;
        margin: -1rem 1rem;
        padding: 0.25rem;
        border-radius: 0.5rem;
        text-align: center;
        background-color: #d1d4e4;
        width: 200px;
        -webkit-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.25);
    }

    .tag .info {
        justify-content: end;
        display: flex;
        flex-direction: column;
        margin: 2rem 0 0.5rem -1rem;
        width: 100%;
        align-items: flex-end;
    }

    .restaurant-info {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 1rem;
        width: 50%;
        height: 100%;
        align-self: stretch;
        -webkit-box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
    }

    .restaurant-img {
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
        margin-top: -3rem;
    }

    .restaurant-neighborhood,
    .restaurant-address {
        text-align: center;
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

    @media only screen and (max-width: 390px) {
        .selection-day {
            flex-direction: column;
        }
    }

    @media only screen and (max-width: 750px) {
        .restaurant-info {
            width: auto;
            min-width: 256px;
            margin-top: 27rem;
        }

        .vue-map-container {
            width: 100%;
            position: absolute;
            top: 7rem;
            left: 0;
        }

        .container {
            width: 100%;
            margin: 2rem 0;
            padding: 0;
        }
    }
</style>
