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


  describe('execute()', () => {
    describe('withNoTermOrSort', () => {
      it('should return the input list as is', () => {
        expect(countryListStore.execute()).toMatchSnapshot();
      });
    });

    describe('withTermNoSort', () => {
      it('should return the input list matches only', () => {
        expect(countryListStore.setTerm('u').execute()).toMatchSnapshot();
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
            .execute()
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
            .execute()
        ).toMatchSnapshot();
      });
    });
  });
});