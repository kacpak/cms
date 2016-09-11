export interface User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  created_at?: string;
  updated_at?: string;
  remember_token?: string;
  author?: {
    id?: string;
    name?: string;
  };
}

export interface TokenResponse {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}

export interface News {
  id?: number;
  title?: string;
  content?: string;
  author?: number;
  created_at?: string;
  updated_at?: string;
  published_at?: string;
  deleted_at?: string;
}
