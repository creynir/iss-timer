<template>
  <v-app>
      <div class="container">
        <v-content>
        <div class="row">
          <div class="col-xs-12">
            <app-header></app-header>
          </div>
        </div>
        <hr>
        <v-layout row wrap>
          <v-flex xs9>
            <iss-passes-table></iss-passes-table>
          </v-flex>

          <v-flex xs3>
            <select-el></select-el>
          </v-flex>
        </v-layout>
        <hr>
        <div class="row">
          <div class="col-xs-12">
            <footer-img></footer-img>
          </div>
        </div>
        </v-content>
      </div>

  </v-app>
</template>

<script>
  import Header from './components/Header.vue'
  import FooterImg from './components/FooterImg'
  import IssPassesTable from './components/IssPassesTable'

  export default {
    components: {
      'iss-passes-table': IssPassesTable,
      'app-header': Header,
      'footer-img': FooterImg
    }
  }
</script>

<style>

</style>
