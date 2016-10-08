export interface User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  created_at?: string;
  updated_at?: string;
  remember_token?: string;
  role?: Role;
}

export enum Role {
  user,
  writer,
  editor,
  administrator
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
  author_id?: number;
  created_at?: string;
  updated_at?: string;
  published_at?: string;
  deleted_at?: string;
  author?: {
    id?: string;
    name?: string;
  };
}
