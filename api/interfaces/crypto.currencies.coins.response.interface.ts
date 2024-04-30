import { CryptoResponseInterface } from "./crypto.response.interface";

export interface CryptoCurrenciesCoinsResponseInterface {
    current_page:   number;
    data:           CryptoResponseInterface[];
    first_page_url: string;
    from:           number;
    last_page:      number;
    last_page_url:  string;
    links:          any[];
    next_page_url:  string;
    path:           string;
    per_page:       string;
    prev_page_url:  null;
    to:             number;
    total:          number;
}
