export interface CountryApiResponse {
  name: string;
  alpha3Code: string;
  capital: string;
  population: number;
  currencies: Currency[];
  languages: Language[];
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}
