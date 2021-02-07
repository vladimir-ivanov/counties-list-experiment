import { CountriesListStore } from './CountriesListStore';
import { SortBy, SortDirection } from '../domain';

describe('CountriesListStore', () => {
  const countryListStore = new CountriesListStore([
    {
      'currencies': [],
      'languages': [],
      'name': 'Afghanistan',
      'alpha3Code': 'AFG',
      'capital': 'Kabul',
      'population': 1
    },
    {
      'currencies': [],
      'languages': [],
      'name': 'UK',
      'alpha3Code': 'GBR',
      'capital': 'London',
      'population': 2
    },
    {
      'currencies': [],
      'languages': [],
      'name': 'USA',
      'alpha3Code': 'USA',
      'capital': 'Washington DC',
      'population': 3
    }
  ]);


  describe('getUpdatedCountries()', () => {
    describe('withNoTermOrSort', () => {
      it('should return the input list as is', () => {
        expect(countryListStore.getUpdatedCountries()).toMatchSnapshot();
      });
    });

    describe('withTermNoSort', () => {
      it('should return the input list matches only', () => {
        expect(countryListStore.setTerm('u').getUpdatedCountries()).toMatchSnapshot();
      });
    });

    // ideally would need to test all scenarios if no time constraints to finish this test
    describe('withSortNoTerm', () => {
      it('should return the input list sorted by population', () => {
        expect(
          countryListStore
            .setSortField({
              field: SortBy.Population,
              direction: SortDirection.Desc
            })
            .getUpdatedCountries()
        ).toMatchSnapshot();
      });
    });

    describe('withSortAndTerm', () => {
      it('should return the input list sorted by population', () => {
        expect(
          countryListStore
            .setSortField({
              field: SortBy.Population,
              direction: SortDirection.Desc
            })
            .setTerm('u')
            .getUpdatedCountries()
        ).toMatchSnapshot();
      });
    });
  });
});