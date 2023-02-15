const axios = require('axios')
const Parser = require('rss-parser')

const RSSP = new Parser()
const getData = async (url) => {
  const { data, status, statusText } = await axios.get(url)
  return { status, data }
}

/////////////////////////////////////////
// URLS

// HR Job Listings
const jobListingFeed = 'https://client.hrservicesinc.com/downloads/rss/portals/17059.xml'

// Events API
const eventsApi = 'https://my.aeries.com/api/Events'

// Wordpress CMS
const aeriesWP = 'http://cms.aeries.com/graphql'

////////////////////////////////////////
// FETCH FUNCTIONS

const jobs = async () => {
  const {status, data} = await getData(jobListingFeed)
  const feed = await RSSP.parseString(data)
  console.log('job status: ' + status)
}

const events = async() => {
  const {status, data} = await getData(eventsApi)
  console.log('events status: ' +status)
}

const wp = async(showd) => {
  const {status, data} = await axios({
    url: aeriesWP,
    method: 'post',
    data: {
      query: `{posts(first:20){nodes{title id}}}`
    }
  })
  console.log('wp status: ' + status, showd ? data.data.posts : '')
}

jobs()
events()
wp()
