import type { NuxtAxiosInstance } from '@nuxtjs/axios'
import { LoginResponseInterface } from '../api/interfaces/login.response.interface';
import { UserResponseInterface } from '../api/interfaces/user.response.interface';
import { FavoriteCryptoModel } from '../models/favorite.crypto.model';
import { UserModel } from '~/models/user.model';
import { UsersSingleResponseInterface } from '~/api/interfaces/users.single.response.interface';

export interface LoginProsInterface {
  email: string;
  password: string;
}

export interface WalletLoginProsInterface {
  walletAddress: string;
  hash: string;
  chainId : number;
}

export interface SingUpProsInterface {
  email: string;
  password: string;
  phone_number: string;
  adult: boolean;
  privacyPolicy: boolean;
}

export interface UpdateUserProsInterface {
  userId: number;
  name: string;
  birthday: string;
  levelId: number;
  newsletterId: number;
  languageId: number;
  cryptos: number[];
}

export class SessionService {
  $api: NuxtAxiosInstance;
  $auth: any;

  constructor(api: any, auth: any) {
    this.$api = api
    this.$auth = auth
  }

  login = async ({email, password}: LoginProsInterface ) => {
    const resource: string = 'login'
    try {
      const data = { email, password, code: 'USR' };
      const response = await this.$api
        .post<LoginResponseInterface>(`${resource}`, data)
        .then((response) => response.data)
        .catch((error) => {
          return error.response.data;
        }
      );
      if ( response === null) return 'anErrorHasOccurred';
      if ( typeof response.message !== 'undefined' ) return response.message;
      if ( response.access_token === 'undefined' ) return false;
      if ( response.expires_at === 'undefined' ) return false;
      if ( response.token_type === 'undefined' ) return false;
      if ( response.user === 'undefined' ) return false;
      const user = this.transformResponseUserToModelUser( response.user );

      const tokenType = response.token_type;
      const accessToken = response.access_token;
      const token = `${tokenType} ${accessToken}`;

      this.$auth.setToken('local', token );

      const customUser = {
        ...user,
        fullName: user.name,
        roles: ['user']
      }
      this.$auth.setUser( customUser );
      this.$auth.setToken('user', JSON.stringify(customUser))
      return true;
    } catch ( error ) {
      console.log(error)
    }
  }

  walletLogin = async ({walletAddress, hash, chainId}: WalletLoginProsInterface ) => {
    const resource: string = 'loginWallet'
      const data = {
        walletAddress,
        hash,
        chainId
      }
    try {
      //const data = { email, password, code: 'USR' };
      const response = await this.$api
        .post<LoginResponseInterface>(`${resource}`, data)
        .then((response) => response.data)
        .catch((error) => {
          return error.response.data;
        }
      );
      if ( response === null) return 'anErrorHasOccurred';
      if ( typeof response.message !== 'undefined' ) return response.message;
      if ( response.access_token === 'undefined' ) return false;
      if ( response.expires_at === 'undefined' ) return false;
      if ( response.token_type === 'undefined' ) return false;
      if ( response.user === 'undefined' ) return false;
      const user = this.transformResponseUserToModelUser( response.user );

      const tokenType = response.token_type;
      const accessToken = response.access_token;
      const token = `${tokenType} ${accessToken}`;

      this.$auth.setToken('local', token );

      //console.log(response)
      const customUser = {
        ...user,
        fullName: user.name,
        roles: ['user']
      }
      this.$auth.setUser( customUser );
      this.$auth.setToken('user', JSON.stringify(customUser))
      return true;
    } catch ( error ) {
      console.log(error)
    }
  }

  signUp = async ({email, password, phone_number, adult, privacyPolicy}: SingUpProsInterface ) => {
    const resource: string = 'signup'
    try {
      const data = { email, password, phone_number, adult, accept_private_policy: privacyPolicy };
      const response = await this.$api
        .post<any>(`${resource}`, data)
        .then((response) => response)
        .catch((error) => {
          return error.response;
        }
      );
      if ( response === null ) {
        return {
          status: 400,
          message: 'anErrorHasOccurred'
        }
      }

      let message = '';

      if ( response.status === 201 ) {
        if ( response.data === 'undefined' ) {
          return {
            status: response.status,
            message: 'anErrorHasOccurred'
          }
        };

        if ( response.data.access_token === 'undefined' ) {
          return {
            status: response.status,
            message: 'anErrorHasOccurred'
          }
        };

        if ( response.data.user === 'undefined' ) {
          return {
            status: response.status,
            message: 'anErrorHasOccurred'
          }
        };

        const user = this.transformResponseUserToModelUser( response.data.user );

        const accessToken = response.data.access_token;
        const token = `Bearer ${accessToken}`;

        this.$auth.setToken('local', token );

        const customUser = {
          ...user,
          fullName: user.name,
          roles: ['user']
        }

        this.$auth.setToken('user', JSON.stringify(customUser))

        return {
          status: response.status ?? response.status_code,
          message
        }
      } else if ( response.status >= 400 && response.status <= 500 ) {
        message = response.message ?? 'anErrorHasOccurred';

        if ( typeof response.data.errors !== 'undefined' ) {
          if ( typeof response.data.errors.email !== 'undefined' ) {
            message = response.data.errors.email[0];
          }
        }
        return {
          status: response.status ?? response.status_code,
          message
        }
      } else {
        return {
          status: response.status,
          message: response.message
        }
      }
    } catch ( error ) {
      console.log(error)
    }
  }

  updateUser = async (data: Map<any, string> ) => {
    let localUser = await this.$auth.getToken( 'user' );
    if ( typeof localUser === 'string' ) {
      localUser = JSON.parse( localUser );
    }
    const userModel = new UserModel( localUser );
    const userId = userModel.id;
    const resource: string = `user/${userId}/edit-profile`;
    const token = await this.$auth.getToken('local');

    try {
      this.$api.defaults.headers.common.Authorization = token;

      const response = await this.$api
        .put<any>(`${resource}`, data)
        .then((response) => response)
        .catch((error) => {
          return error.response;
        }
      );
      if ( response === null ) {
        return {
          status: 400,
          message: 'anErrorHasOccurred'
        }
      }

      let message = '';

      if ( response.status === 200 ) {

        if ( response.data.message === 'undefined' ) {
          return {
            status: 400,
            message: 'anErrorHasOccurred'
          }
        };

        if ( response.data.user === 'undefined' ) {
          return {
            status: 400,
            message: 'anErrorHasOccurred'
          }
        };

        const user = this.transformResponseUserToModelUser( response.data.user );

        console.log( 'response.data.user' );
        console.log( response.data.user );

        const customUser = {
          ...user,
          fullName: user.name,
          roles: ['user']
        }

        this.$auth.setToken('user', JSON.stringify(customUser));

        this.$auth.setUser( customUser );

        return {
          status: response.status,
          message: response.data.message
        }
      } else if ( response.status >= 400  && response.status <= 500) {
        message = response.message ?? 'anErrorHasOccurred';

        if ( typeof response.errors !== 'undefined' ) {
          if (typeof response.errors.email !== 'undefined' ) {
            message = response.errors.email[0];
          }
        }
        return {
          status: response.status ?? response.status_code,
          message
        }
      } else {
        return {
          status: response.status,
          message: response.message
        }
      }
    } catch ( error ) {
      console.log(error)
    }
  }

  // https://api.mundocrypto.com/api/users/

  deleteAccount = async () => {
    let localUser = await this.$auth.getToken( 'user' );
    if ( typeof localUser === 'string' ) {
      localUser = JSON.parse( localUser );
    }
    const userModel = new UserModel( localUser );
    const userId = userModel.id;
    const resource: string = `users/${userId}`;
    const token = await this.$auth.getToken('local');
    try {
      this.$api.defaults.headers.common.Authorization = token;
      const response = await this.$api
        .delete<any>(`${resource}`)
        .then((response) => response)
        .catch((error) => {
          return error.response;
        });

      if ( response === null ) {
        return {
          status: 400,
          message: 'anErrorHasOccurred'
        }
      }

      if ( response.status !== 200 ) {
        return {
          status: response.status,
          message: response.message
        }
      } else {
        this.$auth.setToken('local', null);
        this.$auth.setUser(null);
        this.$auth.setToken('user', null);
        return {
          status: response.status,
          message: response.message
        }
      }
    } catch ( error ) {
      console.error( error );
    }
  }

  logout = async () => {
    const resource: string = 'logout-api'
    if ( !this.$auth.$state.loggedIn ) return;
    const token = await this.$auth.getToken('local');
    try {
      this.$api.defaults.headers.common.Authorization = token;
      const response = await this.$api
        .post<any>(`${resource}`)
        .then((response) => response)
        .catch((error) => {
          return error.response;
        });

      if ( response === null ) {
        return {
          status: 400,
          message: 'anErrorHasOccurred'
        }
      }

      if ( response.status !== 200 ) {
        return {
          status: response.status,
          message: response.message
        }
      } else {
        this.$auth.setToken('local', null);
        this.$auth.setUser(null);
        this.$auth.setToken('user', null);
        localStorage.removeItem("wallet");
        return {
          status: response.status,
          message: response.message
        }
      }
    } catch ( error ) {
      console.error( error );
    }
  }

  user = async () => {
    const resource: string = 'user'
    if ( !this.$auth.$state.loggedIn ) return;
    const token = await this.$auth.getToken('local');
    try {
      this.$api.defaults.headers.common.Authorization = token;
      const response = await this.$api
        .get<UsersSingleResponseInterface>(`${resource}`)
        .then((response) => response)
        .catch((error) => {
          return error.response;
        });

      if ( response === null ) {
        return {
          status: 400,
          message: 'anErrorHasOccurred'
        }
      }

      if ( response === null ) return false;
      if ( response.data === null ) return false;
      if ( response.data.user === null ) return false;

      const userResponse = response.data.user;

      const user = new UserModel({
        id: userResponse.id,
        name: userResponse.name,
        email: userResponse.email,
        emailVerifiedAt: userResponse.email_verified_at,
        twoFactorSecret: userResponse.two_factor_secret,
        twoFactorRecoveryCodes: userResponse.two_factor_recovery_codes,
        dateBirth: userResponse.date_birth,
        gender: userResponse.gender,
        adult: userResponse.adult,
        acceptPrivatePolicy: userResponse.accept_private_policy,
        roleId: userResponse.role_id,
        levelId: userResponse.levelId,
        languageId: userResponse.language_id,
        newsletterId: userResponse.newsletter_id,
        createdAt: userResponse.created_at,
        updatedAt: userResponse.updated_at,
        deletedAt: userResponse.deleted_at,
        avatar: userResponse.avatar,
      });

      return user;

    } catch ( error ) {
      console.error( error );
    }
  }

  transformResponseUserToModelUser = (user: UserResponseInterface) => new UserModel({
    id: user.id,
    name: user.name,
    email: user.email,
    dateBirth: user.date_birth,
    gender: user.gender,
    role: user.role,
    levelCrypto: user.level_crypto,
    levelId : user.level_id,
    newsletterName: user.newsletter_name,
    newsletterCode: user.newsletter_code,
    favoritesCryptos: user.fav_cryptos?.map( (cryptos) => new FavoriteCryptoModel({
      id: cryptos.id,
      cgId: cryptos.cg_id,
      cgSymbol: cryptos.cg_symbol,
      cgName: cryptos.cg_name,
    }) )
  });


}
