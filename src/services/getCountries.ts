import endpoints from './endpoints';
import { CountryApiResponse } from './domain/CountryApiResponse';
import { Country } from './domain/Country';

const apiToViewModel = (r: CountryApiResponse[]): Country[] =>
  r.map(
    ({
       name,
       currencies,
       alpha3Code,
       capital,
       population,
       languages
     }) => ({
      name,
      alpha3Code,
      capital,
      population,
      currencies: currencies.map(c => c.name),
      languages: languages.map(l => l.name)
    })
  );

const getCountries = () => new Promise<Country[]>(resolve => {
  fetch(endpoints.allCountries)
    .then(response => {
      response.json()
        .then((r: CountryApiResponse[]) => {
          resolve(apiToViewModel(r));
        })
        .catch(error => {
          console.warn(error);
        });
    })
    .catch(error => {
      console.warn(error);
    });
});


export default getCountries;