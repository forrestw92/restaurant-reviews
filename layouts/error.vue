<template>
    <section class="container">
        <h1 class="title" tabindex="0">
            {{ error.statusCode }}
        </h1>
        <h2 class="info" tabindex="0">
            {{ error.message }}
        </h2>
        <nuxt-link class="button" role="link" to="/" v-if="error.statusCode === 404">
            Homepage
        </nuxt-link>
    </section>
</template>
<script>
  export default {
    props: ['error']
  }
</script>

<style scoped>
    .container {
        display: flex;
        flex-flow: column wrap;
        align-items: center;

    }

    .title {
        margin-top: 15px;
        font-size: 4rem;
    }

    .info {
        font-weight: 300;
        color: red;
        margin: 0;
    }

    .button {
        margin: 3rem 0;
    }
</style>
