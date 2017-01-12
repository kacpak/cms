export interface User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  repeated_password?: string;
  created_at?: string;
  updated_at?: string;
  remember_token?: string;
  role?: Role;
}

export type Role = 'guest' | 'user' | 'writer' | 'editor' | 'administrator';

export interface TokenResponse {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}

export interface Author {
  id?: number;
  name?: string;
}

export interface News {
  id?: number;
  title?: string;
  icon?: string;
  excerpt?: string;
  content?: string;
  created_at?: string;
  updated_at?: string;
  published_at?: string;
  deleted_at?: string;
  author?: Author;
}

export interface MenuItem {
  id?: number;
  order?: number;
  href: string;
  name: string;
  parent_id?: number|null;
  requiredRole?: Role;
  isNewTab?: boolean;
  children?: MenuItem[];
}

export interface Article {
  id: number;
  slug?: string;
  title: string;
  content: string;
  created_at?: string;
  updated_at?: string;
  published_at?: string;
  deleted_at?: string;
  author?: Author;
}
