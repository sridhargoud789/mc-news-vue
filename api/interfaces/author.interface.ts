export interface Author {
  id:                        number;
  name:                      string;
  email:                     string;
  email_verified_at:         null;
  two_factor_secret:         null;
  two_factor_recovery_codes: null;
  date_birth:                Date | null;
  gender:                    null | string;
  adult:                     number;
  accept_private_policy:     number;
  role_id:                   number;
  level_id:                  number | null;
  language_id:               number | null;
  newsletter_id:             number | null;
  created_at:                Date;
  updated_at:                Date;
  deleted_at:                null;
  avatar:                    null;
}
