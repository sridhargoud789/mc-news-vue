import { Link, New } from '.';

export interface NewDataResponse {
  current_page:   number;
  data:           New[];
  first_page_url: string;
  from:           number;
  last_page:      number;
  last_page_url:  string;
  links:          Link[];
  next_page_url:  string;
  path:           string;
  per_page:       string;
  prev_page_url:  null;
  to:             number;
  total:          number;
}
