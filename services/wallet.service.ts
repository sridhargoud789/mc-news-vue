
import type { NuxtAxiosInstance } from '@nuxtjs/axios';

export class WalletService {
    $api: NuxtAxiosInstance;
    $auth: any;

    constructor(api: any, auth: any) {
      this.$api = api
      this.$auth = auth
    }

    saveWallet = async (wallet: {default:{}}) => {
        const resource: string = 'saveWallet';
        const token = await this.$auth.getToken('local');
        //const answers = {"answers" : data }
        try {
          this.$api.defaults.headers.common.Authorization = token;
          const response = await this.$api
              .post<any>(`${resource}`, wallet)
              .then((resp) => resp.data)
              .catch((error) => {
                console.error(
                  'The error occurred: ' +
                    error +
                    'when the resource was called: ' +
                    resource
                )
                return null
            });
            if (response === null) return;
            const walletResponse = response;
            //const testModel: TestModel = this.transformResponseToTestModel(testResponse);
            return walletResponse;
          } catch (error) {
          console.log(error)
        }
      }

}