export interface User {
  firstName: string;
  lastName: string;
}

export interface LoginFormData extends User {
  phoneNumber: string;
  password: string;
}
