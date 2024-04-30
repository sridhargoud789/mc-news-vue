import { Context } from "@nuxt/types"

export default function ({ $axios }: Context, inject: any) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'Application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      // post: {
      //   'Accept':'*/*',
      //   'Content-Type': 'Application/json',
      //   'X-Requested-With': 'XMLHttpRequest',
      //   'Authorization': $auth.getToken('local'),
      // }
    }
  })

  // Set baseURL to something different

  api.setBaseURL('https://api.mundocrypto.com/api/')
  //api.setBaseURL('https://apinebolus.ole.agency/public/api');
  //api.setBaseURL('http://127.0.0.1:8000/api/')


  // Inject to context as $api
  inject('apiNebolus', api)
}
