const axios = require('axios')

const getGql = async(url, query) => {
  const { status, data } = await axios({
    url: url,
    method: 'post',
    data: {
      query
    }
  })
  return { status, data }
}

module.exports = { getGql }
