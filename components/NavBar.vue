<template>
    <header class="header">
        <nav class="nav-bar" role="navigation">
            <h1>Restaurant Reviews</h1>
        </nav>
        <div class="breadcrumb">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link v-if="restaurant.id" :to="'/restaurant/' +restaurant.id" class="nuxt-link-exact-active">
                {{restaurant.name}}
            </nuxt-link>
        </div>
    </header>
</template>
<script>
  export default {
    computed: {
      restaurant: function () {
        return this.$store.state.restaurant
      }
    }
  }
</script>
<style>
    .header {
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        font-family: "Montserrat", sans-serif;
        text-align: center;
        justify-content: center;
    }

    .nav-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 4rem;
        font-size: 2rem;
        color: white;
        background-color: #401f7c;
    }

    .nav-bar a {
        font-size: 2rem;
        font-weight: 700;
        color: black;
        text-decoration: none;
    }

    .breadcrumb {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2rem;
        margin-top: -0.5rem;
        margin-bottom: 1rem;
    }

    .breadcrumb {
        box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.35);
        overflow: hidden;
        border-radius: 0.5rem;
    }

    .breadcrumb a {
        text-decoration: none;
        outline: none;
        display: block;
        float: left;
        font-size: 1rem;
        line-height: 2rem;
        font-weight: 700;
        padding: 0 1rem 0 2rem;
        background: white;
        color: black;
        transition: all 0.5s;
        position: relative;
    }

    .breadcrumb a:first-child {
        padding-left: 1rem;
        border-radius: 0.5rem 0 0 0.5rem;
    }

    .breadcrumb a:first-child:before {
        left: 14px;
    }

    .breadcrumb a:last-child {
        border-radius: 0 0.5rem 0.5rem 0;
        padding-right: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .breadcrumb a.nuxt-link-exact-active,
    .breadcrumb a:hover {
        background: #2c2246;
        color: white;
    }

    .breadcrumb a.nuxt-link-exact-active:after,
    .breadcrumb a:hover:after {
        background: #2c2246;
        color: white;
    }

    .breadcrumb a:after {
        content: "";
        position: absolute;
        top: 0;
        right: -1rem;
        width: 2rem;
        height: 2rem;

        transform: scale(0.707) rotate(45deg);
        z-index: 1;
        background: white;
        color: black;
        transition: all 0.5s;
        box-shadow: 2px -2px 0 2px rgba(0, 0, 0, 0.4),
        3px -3px 0 2px rgba(255, 255, 255, 0.1);
        border-radius: 0 5px 0 50px;
    }

    .breadcrumb a:last-child:after {
        content: none;
    }

    .breadcrumb a:before {
        border-radius: 100%;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        margin: 0.5rem 0;
        position: absolute;
        top: 0;
        left: 2rem;
        background: white;
        box-shadow: 0 0 0 1px #ccc;
        font-weight: bold;
    }

    @media only screen and (max-width: 492px) {
        .nav-bar {
            font-size: 1.25rem;
        }
    }
</style>
