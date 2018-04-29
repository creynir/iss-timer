<template>
  <transition name="slide-fade">
  <div v-if="getTimings.length<1">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/International_Space_Station_after_undocking_of_STS-132.jpg/2560px-International_Space_Station_after_undocking_of_STS-132.jpg"/>
  </div>
  </transition>
</template>

<script>
  import {mapGetters} from 'vuex';
    export default {
        name: "footer-img",
      computed: {
        ...
          mapGetters([
            'getTimings'
          ])
      }
    }
</script>

<style scoped>
img{
  height: 100%;
  width: 100%;
}
.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
