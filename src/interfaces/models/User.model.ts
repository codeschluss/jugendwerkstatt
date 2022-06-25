export interface UserModel {
  approved: boolean;
  verified: boolean;
  email: string;
  roles: string[];
  scopes: string[];
}
