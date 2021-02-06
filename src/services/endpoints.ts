const baseUrl = 'https://restcountries.eu/rest/v2';

const endpoints = {
  allCountries: `${baseUrl}/all?fields=name;capital;currencies;alpha3Code;languages;population`
};

export default endpoints;