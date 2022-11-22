export interface UserTypes {
  login: string;
  avatar_url?: string;
}

export interface IssuesDataTypes {
  number: number;
  title: string;
  created_at: string;
  comments: number;
  user: UserTypes;
}

export interface InitialTypes {
  loading: boolean;
  issuesData: IssuesDataTypes[];
  success: boolean;
  failure: boolean;
}

export type TypesActions =
  | { type: "initial" }
  | { type: "success"; payload: IssuesDataTypes[] }
  | { type: "failure"; payload: any };

export interface DetailTypes {
  number: number;
  title: string;
  created_at: string;
  comments: number;
  user: UserTypes;
  markDown: string;
}
