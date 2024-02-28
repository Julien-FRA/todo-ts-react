export type UserDto = {
  uid?: string;
  email: string;
  password: string;
};

export type UserContext = {
  currentUser: UserDto | null;
  userLoggedIn: boolean;
  loading: boolean;
};
