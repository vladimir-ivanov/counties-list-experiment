import { CountryApiResponse } from './CountryApiResponse';

type PickProps = 'name' | 'alpha3Code' | 'capital' | 'population';

export interface Country extends Pick<CountryApiResponse, PickProps> {
  currencies: string[];
  languages: string[];
}
