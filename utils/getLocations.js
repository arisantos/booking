const axios = require('axios')

export default (input, resLength = 6) => {
  return axios.get(`https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${resLength}&solrTerm=${input}`)
}
