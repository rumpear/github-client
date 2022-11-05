import { IFullUser } from '../interfaces';

export interface IUsers {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string | null;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export interface IResponse {
  total_count: number;
  incomplete_results: boolean;
  items: IUsers[];
}

export interface IUsersData {
  data: IResponse;
}

export type TGetUsersData = (query: string, page: number) => Promise<IResponse>;

export interface IFullUserData {
  data: IFullUser;
}

export type TGetFullUserData = (userName: string) => Promise<IFullUser>;
