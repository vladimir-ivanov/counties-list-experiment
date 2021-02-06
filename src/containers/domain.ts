export enum SortBy {
  Name = 'name',
  Population = 'population'
}

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export interface SortField {
  field: SortBy | undefined,
  direction: SortDirection | undefined
}

