import { UserResponseInterface } from './user.response.interface'

export interface LoginResponseInterface {
  access_token?: string
  token_type?: string
  expires_at?: string
  user?: UserResponseInterface
}
