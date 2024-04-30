// To parse this data:
//
//   import { Convert, NewsResponse } from "./file";
import { NewDataResponse } from '.'
//
//   const newsResponse = Convert.toNewsResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface NewsResponse {
  notices: NewDataResponse
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
