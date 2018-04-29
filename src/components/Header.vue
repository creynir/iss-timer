<template>
  <header>
    <h2 v-if="!getCurrCity.name">When can I see the ISS (International Space Station)?</h2>
    <h2 v-else>The next 10 passes of the International Space Station over {{getCurrCity.name}}</h2>
  </header>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: "app-header",
    computed: {
      ...
        mapGetters([
          'getCurrCity'
        ])
    }
  }
</script>

<style scoped>

</style>
