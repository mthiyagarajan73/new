export interface Login {
  Username: Number;
  Password: Number;
}

export interface loginReducerState {
  isLoading: boolean;
  error: string;
  data: Login;
}