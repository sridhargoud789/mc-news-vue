export interface FetchArticlesDataProps {
  page: number;
  limit: number;
  levels: Array<number>;
  categories: Array<string>;
  maxReadingTime: number;
  minReadingTime: number;
}
