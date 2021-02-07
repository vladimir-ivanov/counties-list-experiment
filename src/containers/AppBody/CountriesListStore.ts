import { Country } from '../../services/domain/Country';
import { SortDirection, SortField } from '../domain';

export class CountriesListStore {
  private readonly countriesList: Country[];
  private sortField: SortField = {} as SortField;
  private term: string = '';

  constructor(countries: Country[]) {
    this.countriesList = countries;
  }

  setSortField = (sortField: SortField) => {
    this.sortField = sortField;

    return this;
  };

  setTerm = (term: string) => {
    this.term = term;

    return this;
  };

  getUpdatedCountries = () => {
    let countries =  this.countriesList;

    if (this.sortField) {
      const {direction, field} = this.sortField;

      countries = [...countries].sort((a, b) => {
        // todo sort these boys out
        // @ts-ignore
        const fieldA = a[field] as any;
        // @ts-ignore
        const fieldB = b[field] as any;
        const directionIsAsc = direction === SortDirection.Asc;

        if (fieldA > fieldB) {
          return directionIsAsc ? 1 : -1;
        }

        if (fieldA < fieldB) {
          return directionIsAsc ? -1 : 1;
        }

        return 0;
      });
    }

    if (this.term) {
      countries = countries.filter(({ name }) => name.toLowerCase().indexOf(this.term) !== -1);
    }

    return countries;
  };
}