<template>
    <v-container fluid>
      <v-layout row justify-center>
        <v-flex xs10>
          <v-select
            :items="cities"
            item-text="name"
            return-object
            v-model="currCity"
            label="Select a City"
            single-line
          ></v-select>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  import cityConstants from '../constants/city-constants';
  import {mapMutations, mapGetters} from 'vuex';

  export default {
    name: "dropdown-el",
    data: function () {
      return {
        cities: cityConstants.cities,
        currCity: {},
      }
    },
    methods: {
      ...mapMutations([
        'setCurrCity'
      ]),
      ...mapGetters([
        'getCurrCity'
      ])
    },
    watch:{
      currCity:function (val) {
        this.setCurrCity(val);
      }
    }
  }
</script>

<style scoped>

</style>
