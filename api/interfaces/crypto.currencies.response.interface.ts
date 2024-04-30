// To parse this data:
//
//   import { Convert, CryptoCurrenciesResponse } from "./file";
//
//   const cryptoCurrenciesResponse = Convert.toCryptoCurrenciesResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { CryptosResponseInterface } from "./cryptos.response.interface";

export interface CryptosCurrenciesResponseInterface {
  cryptos: CryptosResponseInterface;
}

// export interface Cryptos {
//   current_page:   number;
//   data:           Datum[];
//   first_page_url: string;
//   from:           number;
//   last_page:      number;
//   last_page_url:  string;
//   links:          Link[];
//   next_page_url:  null;
//   path:           string;
//   per_page:       string;
//   prev_page_url:  null;
//   to:             number;
//   total:          number;
// }
//
// export interface Datum {
//   id:                   number;
//   order:                number;
//   active:               boolean;
//   slug:                 string;
//   url_crypto:           string;
//   url_crypto_wallpaper: null;
//   academy_description:  null;
//   url_academy_notice:   null;
//   url_tokenomic:        null;
//   tag_id:               number;
//   api_crypto_id:        number;
//   language_id:          number;
//   created_at:           Date;
//   updated_at:           Date;
//   deleted_at:           null;
//   apicrypto:            Apicrypto;
//   tag:                  Tag;
//   wallet:               any[];
//   explorer:             any[];
//   community:            any[];
// }
//
// export interface Apicrypto {
//   id:                                        number;
//   order:                                     number;
//   slug:                                      string;
//   cg_id:                                     string;
//   cg_symbol:                                 string;
//   cg_name:                                   string;
//   cg_image:                                  string;
//   cg_current_price:                          string;
//   cg_market_cap:                             string;
//   cg_market_cap_rank:                        string;
//   cg_fully_diluted_valuation:                null | string;
//   cg_total_volume:                           string;
//   cg_high_24h:                               string;
//   cg_low_24h:                                string;
//   cg_price_change_24h:                       string;
//   cg_price_change_percentage_24h:            string;
//   cg_market_cap_change_24h:                  string;
//   cg_market_cap_change_percentage_24h:       string;
//   cg_circulating_supply:                     string;
//   cg_total_supply:                           null | string;
//   cg_max_supply:                             null | string;
//   cg_ath:                                    string;
//   cg_ath_change_percentage:                  string;
//   cg_ath_date:                               Date;
//   cg_atl:                                    string;
//   cg_atl_change_percentage:                  string;
//   cg_atl_date:                               Date;
//   cg_price_change_percentage_7d_in_currency: string;
//   cg_last_updated:                           Date;
//   banner:                                    number;
//   created_at:                                Date;
//   updated_at:                                Date;
//   deleted_at:                                null;
//   market_cap:                                string;
//   sparklines:                                string[];
// }
//
// export interface Tag {
//   id:            number;
//   name:          Name;
//   slug:          Slug;
//   notice_number: string;
//   tag_type_id:   number;
//   language_id:   number;
//   created_at:    Date;
//   updated_at:    Date;
//   deleted_at:    null;
// }
//
// export enum Name {
//   CadenaDeBloques = "cadena de bloques",
// }
//
// export enum Slug {
//   CadenaDeBloques = "cadena-de-bloques",
// }
//
// export interface Link {
//   url:    null | string;
//   label:  string;
//   active: boolean;
// }
//
// // Converts JSON strings to/from your types
// // and asserts the results of JSON.parse at runtime
// export class Convert {
//   public static toCryptoCurrenciesResponse(json: string): CryptoCurrenciesResponse {
//       return cast(JSON.parse(json), r("CryptoCurrenciesResponse"));
//   }
//
//   public static cryptoCurrenciesResponseToJson(value: CryptoCurrenciesResponse): string {
//       return JSON.stringify(uncast(value, r("CryptoCurrenciesResponse")), null, 2);
//   }
// }
//
// function invalidValue(typ: any, val: any, key: any = ''): never {
//   if (key) {
//       throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
//   }
//   throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
// }
//
// function jsonToJSProps(typ: any): any {
//   if (typ.jsonToJS === undefined) {
//       const map: any = {};
//       typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
//       typ.jsonToJS = map;
//   }
//   return typ.jsonToJS;
// }
//
// function jsToJSONProps(typ: any): any {
//   if (typ.jsToJSON === undefined) {
//       const map: any = {};
//       typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
//       typ.jsToJSON = map;
//   }
//   return typ.jsToJSON;
// }
//
// function transform(val: any, typ: any, getProps: any, key: any = ''): any {
//   function transformPrimitive(typ: string, val: any): any {
//       if (typeof typ === typeof val) return val;
//       return invalidValue(typ, val, key);
//   }
//
//   function transformUnion(typs: any[], val: any): any {
//       // val must validate against one typ in typs
//       const l = typs.length;
//       for (let i = 0; i < l; i++) {
//           const typ = typs[i];
//           try {
//               return transform(val, typ, getProps);
//           } catch (_) {}
//       }
//       return invalidValue(typs, val);
//   }
//
//   function transformEnum(cases: string[], val: any): any {
//       if (cases.indexOf(val) !== -1) return val;
//       return invalidValue(cases, val);
//   }
//
//   function transformArray(typ: any, val: any): any {
//       // val must be an array with no invalid elements
//       if (!Array.isArray(val)) return invalidValue("array", val);
//       return val.map(el => transform(el, typ, getProps));
//   }
//
//   function transformDate(val: any): any {
//       if (val === null) {
//           return null;
//       }
//       const d = new Date(val);
//       if (isNaN(d.valueOf())) {
//           return invalidValue("Date", val);
//       }
//       return d;
//   }
//
//   function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
//       if (val === null || typeof val !== "object" || Array.isArray(val)) {
//           return invalidValue("object", val);
//       }
//       const result: any = {};
//       Object.getOwnPropertyNames(props).forEach(key => {
//           const prop = props[key];
//           const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
//           result[prop.key] = transform(v, prop.typ, getProps, prop.key);
//       });
//       Object.getOwnPropertyNames(val).forEach(key => {
//           if (!Object.prototype.hasOwnProperty.call(props, key)) {
//               result[key] = transform(val[key], additional, getProps, key);
//           }
//       });
//       return result;
//   }
//
//   if (typ === "any") return val;
//   if (typ === null) {
//       if (val === null) return val;
//       return invalidValue(typ, val);
//   }
//   if (typ === false) return invalidValue(typ, val);
//   while (typeof typ === "object" && typ.ref !== undefined) {
//       typ = typeMap[typ.ref];
//   }
//   if (Array.isArray(typ)) return transformEnum(typ, val);
//   if (typeof typ === "object") {
//       return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
//           : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
//           : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
//           : invalidValue(typ, val);
//   }
//   // Numbers can be parsed by Date but shouldn't be.
//   if (typ === Date && typeof val !== "number") return transformDate(val);
//   return transformPrimitive(typ, val);
// }
//
// function cast<T>(val: any, typ: any): T {
//   return transform(val, typ, jsonToJSProps);
// }
//
// function uncast<T>(val: T, typ: any): any {
//   return transform(val, typ, jsToJSONProps);
// }
//
// function a(typ: any) {
//   return { arrayItems: typ };
// }
//
// function u(...typs: any[]) {
//   return { unionMembers: typs };
// }
//
// function o(props: any[], additional: any) {
//   return { props, additional };
// }
//
// function m(additional: any) {
//   return { props: [], additional };
// }
//
// function r(name: string) {
//   return { ref: name };
// }
//
// const typeMap: any = {
//   "CryptoCurrenciesResponse": o([
//       { json: "cryptos", js: "cryptos", typ: r("Cryptos") },
//   ], false),
//   "Cryptos": o([
//       { json: "current_page", js: "current_page", typ: 0 },
//       { json: "data", js: "data", typ: a(r("Datum")) },
//       { json: "first_page_url", js: "first_page_url", typ: "" },
//       { json: "from", js: "from", typ: 0 },
//       { json: "last_page", js: "last_page", typ: 0 },
//       { json: "last_page_url", js: "last_page_url", typ: "" },
//       { json: "links", js: "links", typ: a(r("Link")) },
//       { json: "next_page_url", js: "next_page_url", typ: null },
//       { json: "path", js: "path", typ: "" },
//       { json: "per_page", js: "per_page", typ: "" },
//       { json: "prev_page_url", js: "prev_page_url", typ: null },
//       { json: "to", js: "to", typ: 0 },
//       { json: "total", js: "total", typ: 0 },
//   ], false),
//   "Datum": o([
//       { json: "id", js: "id", typ: 0 },
//       { json: "order", js: "order", typ: 0 },
//       { json: "active", js: "active", typ: true },
//       { json: "slug", js: "slug", typ: "" },
//       { json: "url_crypto", js: "url_crypto", typ: "" },
//       { json: "url_crypto_wallpaper", js: "url_crypto_wallpaper", typ: null },
//       { json: "academy_description", js: "academy_description", typ: null },
//       { json: "url_academy_notice", js: "url_academy_notice", typ: null },
//       { json: "url_tokenomic", js: "url_tokenomic", typ: null },
//       { json: "tag_id", js: "tag_id", typ: 0 },
//       { json: "api_crypto_id", js: "api_crypto_id", typ: 0 },
//       { json: "language_id", js: "language_id", typ: 0 },
//       { json: "created_at", js: "created_at", typ: Date },
//       { json: "updated_at", js: "updated_at", typ: Date },
//       { json: "deleted_at", js: "deleted_at", typ: null },
//       { json: "apicrypto", js: "apicrypto", typ: r("Apicrypto") },
//       { json: "tag", js: "tag", typ: r("Tag") },
//       { json: "wallet", js: "wallet", typ: a("any") },
//       { json: "explorer", js: "explorer", typ: a("any") },
//       { json: "community", js: "community", typ: a("any") },
//   ], false),
//   "Apicrypto": o([
//       { json: "id", js: "id", typ: 0 },
//       { json: "order", js: "order", typ: 0 },
//       { json: "slug", js: "slug", typ: "" },
//       { json: "cg_id", js: "cg_id", typ: "" },
//       { json: "cg_symbol", js: "cg_symbol", typ: "" },
//       { json: "cg_name", js: "cg_name", typ: "" },
//       { json: "cg_image", js: "cg_image", typ: "" },
//       { json: "cg_current_price", js: "cg_current_price", typ: "" },
//       { json: "cg_market_cap", js: "cg_market_cap", typ: "" },
//       { json: "cg_market_cap_rank", js: "cg_market_cap_rank", typ: "" },
//       { json: "cg_fully_diluted_valuation", js: "cg_fully_diluted_valuation", typ: u(null, "") },
//       { json: "cg_total_volume", js: "cg_total_volume", typ: "" },
//       { json: "cg_high_24h", js: "cg_high_24h", typ: "" },
//       { json: "cg_low_24h", js: "cg_low_24h", typ: "" },
//       { json: "cg_price_change_24h", js: "cg_price_change_24h", typ: "" },
//       { json: "cg_price_change_percentage_24h", js: "cg_price_change_percentage_24h", typ: "" },
//       { json: "cg_market_cap_change_24h", js: "cg_market_cap_change_24h", typ: "" },
//       { json: "cg_market_cap_change_percentage_24h", js: "cg_market_cap_change_percentage_24h", typ: "" },
//       { json: "cg_circulating_supply", js: "cg_circulating_supply", typ: "" },
//       { json: "cg_total_supply", js: "cg_total_supply", typ: u(null, "") },
//       { json: "cg_max_supply", js: "cg_max_supply", typ: u(null, "") },
//       { json: "cg_ath", js: "cg_ath", typ: "" },
//       { json: "cg_ath_change_percentage", js: "cg_ath_change_percentage", typ: "" },
//       { json: "cg_ath_date", js: "cg_ath_date", typ: Date },
//       { json: "cg_atl", js: "cg_atl", typ: "" },
//       { json: "cg_atl_change_percentage", js: "cg_atl_change_percentage", typ: "" },
//       { json: "cg_atl_date", js: "cg_atl_date", typ: Date },
//       { json: "cg_price_change_percentage_7d_in_currency", js: "cg_price_change_percentage_7d_in_currency", typ: "" },
//       { json: "cg_last_updated", js: "cg_last_updated", typ: Date },
//       { json: "banner", js: "banner", typ: 0 },
//       { json: "created_at", js: "created_at", typ: Date },
//       { json: "updated_at", js: "updated_at", typ: Date },
//       { json: "deleted_at", js: "deleted_at", typ: null },
//       { json: "market_cap", js: "market_cap", typ: "" },
//       { json: "sparklines", js: "sparklines", typ: a("") },
//   ], false),
//   "Tag": o([
//       { json: "id", js: "id", typ: 0 },
//       { json: "name", js: "name", typ: r("Name") },
//       { json: "slug", js: "slug", typ: r("Slug") },
//       { json: "notice_number", js: "notice_number", typ: "" },
//       { json: "tag_type_id", js: "tag_type_id", typ: 0 },
//       { json: "language_id", js: "language_id", typ: 0 },
//       { json: "created_at", js: "created_at", typ: Date },
//       { json: "updated_at", js: "updated_at", typ: Date },
//       { json: "deleted_at", js: "deleted_at", typ: null },
//   ], false),
//   "Link": o([
//       { json: "url", js: "url", typ: u(null, "") },
//       { json: "label", js: "label", typ: "" },
//       { json: "active", js: "active", typ: true },
//   ], false),
//   "Name": [
//       "cadena de bloques",
//   ],
//   "Slug": [
//       "cadena-de-bloques",
//   ],
// };

