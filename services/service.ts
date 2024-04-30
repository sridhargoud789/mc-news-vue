import type { NuxtAxiosInstance } from '@nuxtjs/axios';

import { Code } from '~/api/enums';
import { NewsResponse } from '~/api/interfaces';

export class Service {
  $api: NuxtAxiosInstance;

  constructor(api: any) {
    this.$api = api;
  }

  getList = ( resource: string, page: number = 1, perPage: number = 20, code: Code = Code.ESP ) => {
    return this.$api.get<NewsResponse>(`${resource}?page=${page}&per_page=${perPage}&language=${code}`);
  }
}
