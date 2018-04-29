import axios from 'axios';
import urlConstants from '../constants/url-constants';

export const externalApi = {

  getSunriseSunsetTiming: function (lat, lon, date) {
    let api = urlConstants.sunriseSunsetApi;
    let url = api.apiLink + api.latitudePrefix + lat +
      api.longitudePrefix + lon + api.datePrefix + date + api.formatterPrefix;
    return axios.get(url);
  },

  getIssTimingByCount: function (lat, lon, times) {
    let api = urlConstants.issPassTimesApi;
    let url = api.apiLink + api.latitudePrefix + lat +
      api.longitudePrefix + lon + api.timesPrefix + times;
    return axios.get(url);
  }

};
export default externalApi;
