import type { NuxtAxiosInstance } from '@nuxtjs/axios';

export interface SubscribeProps {
  email: string;
  code: string;
}

export class NewsletterService {
  $api: NuxtAxiosInstance

  constructor(api: any) {
    this.$api = api
  }


  subscribe = async ( { email, code }: SubscribeProps ): Promise<{ data: any; status: any;} | undefined> => {
    const resource: string = 'subscribedusers';
    const data = {
      email,
      language: code
    }
    try {
      const response = await this.$api.post(resource, data )
        .then(
          (response) => {
            return {
              data: response.data,
              status: response.status
            }
          } )
        .catch( (error) => {
          return {
            data: error.response.data,
            status: error.response.status
          }
        } )
      if ( response === null ) return;
      return response;
    } catch (error) {
      // console.log(error)
    }
  }
}
