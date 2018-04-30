<template>
  <div v-if="tableData.length>0">
    <v-container fluid>
      <v-data-table
        :headers="headers"
        :items="tableData"
        :loading="isLoading"
        hide-actions
        class="elevation-1">
        <template slot="items" slot-scope="props">
          <tr :key='props.item.rise'>
          <td>{{ props.item.rise }}</td>
          <td class="text-xs-center">{{ props.item.duration}}</td>
          <td class="text-xs-center">
            <v-icon v-if="!props.item.isDay">far fa-moon</v-icon>
            <v-icon v-if="props.item.isDay">far fa-sun</v-icon>
          </td>
          </tr>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import externalApi from '../gateways/external-api';


  export default {
    name: "iss-passes-table",
    data: function () {
      return {
        tableData: [],
        passesTimes: 10,
        isLoading: false,
        headers: [
          {text: 'Rise', align: 'left', value: 'rise'},
          {text: 'Duration', value: 'duration', align: 'center'},
          {text: 'Day/Night', value: 'isDay', align: 'center'}
        ],
      }
    },
    computed: {
      ...
        mapGetters([
          'getCurrCity',
          'getTimings'
        ])
    },
    methods: {
      ...
        mapActions([
          'requestTimingByCount',
          'requestIsDayByCoord'
        ]),
      calculateTableData: function (timings) {
        let self = this;
        self.tableData = [];
        self.isLoading = true;

        timings.forEach(function (timing, index, array) {
          let date = new Date(timing.risetime * 1000);
          let utcDateString = date.toUTCString();

          externalApi.getSunriseSunsetTiming(self.getCurrCity.coordinates[0], self.getCurrCity.coordinates[1], utcDateString)
            .then(function (resolve) {
              let isDay = self.checkIsDayOrNight(resolve.data.results, date);
              self.tableData.push({rise: utcDateString, duration: timing.duration, isDay: isDay});

              // Checks if we are done with loading data
              if (index === array.length - 1) {
                self.isLoading = false;
              }

            }, function (reject) {
              console.log(reject);
            })
        });
      },
      checkIsDayOrNight: function (sunriseSunset, date) {
        let time = date.getTime();
        let sunset = new Date(sunriseSunset.sunset).getTime();
        let sunrise = new Date(sunriseSunset.sunrise).getTime();
        return time > sunrise && time < sunset;
      }
    },
    watch: {
      getCurrCity: function () {
        let payload = {
          latitude: this.getCurrCity.coordinates[0],
          longitude: this.getCurrCity.coordinates[1],
          passesTimes: 10
        };
        this.requestTimingByCount(payload);
      },
      getTimings: function (timings) {
        if (timings.length > 0) {
          this.calculateTableData(timings);
        }
      }
    }
  }
</script>

<style scoped>


</style>
