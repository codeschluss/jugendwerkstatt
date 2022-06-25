export type JWTModel = {
  sub: string;
  scopes: string[];
  exp: number;

  id?: string;
  roles?: string[];
  verified?: boolean;
  approved?: boolean;
};
