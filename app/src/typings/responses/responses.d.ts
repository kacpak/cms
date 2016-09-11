export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
  created_at?: string;
  updated_at?: string;
  remember_token?: string;
}

export interface TokenResponse {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}
