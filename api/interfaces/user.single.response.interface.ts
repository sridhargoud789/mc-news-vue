export interface UserSingleResponseInterface {
  id: number;
  name?: string;
  email?: string;
  email_verified_at?: string;
  two_factor_secret?: string;
  two_factor_recovery_codes?: string;
  date_birth?: string;
  gender?: string;
  adult?: string;
  accept_private_policy?: number;
  role_id?: number;
  level_id?: number;
  language_id?: number;
  newsletter_id?: number;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  avatar?: string;
}
