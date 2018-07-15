<template>
    <div>
        <nav-bar/>
        <nuxt/>
        <foot/>
    </div>

</template>

<style>
    html {
        font-family: "Merriweather", serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    body {
        background-color: #e9e9e9;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
    }
</style>
<script>
  import Foot from '../components/Foot'
  import NavBar from '../components/NavBar'

  export default {
    components: {NavBar, Foot}
  }
</script>
