export interface CardInterface {
  filteredBikes: CardItem[];
}

export interface CardItem {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
}
