export const urlConstants = {
  issPassTimesApi: {
    apiLink: 'http://api.open-notify.org/iss-pass.json?',
    latitudePrefix: 'lat=',
    longitudePrefix: '&lon=',
    timesPrefix: '&n='
  },
  sunriseSunsetApi: {
    apiLink: 'https://api.sunrise-sunset.org/json?',
    latitudePrefix: 'lat=',
    longitudePrefix: '&lng=',
    datePrefix: '&date=',
    formatterPrefix: '&formatted=0'
  }
};
export default urlConstants;
