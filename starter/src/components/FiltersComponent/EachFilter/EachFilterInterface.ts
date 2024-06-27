import { FiltersInterface } from "../FiltersInterface";

export interface EachFilterInterface {
  eachItem: FiltersInterface["filterItems"];
  category?: string;
  onFilterChange(value: string): void;
}
