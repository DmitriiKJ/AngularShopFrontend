export interface User {
  id: Number,
  username: string,
  password: string,
  email: string
}

export interface Token {
  success: boolean,
  message: string,
  token: string
}

export interface RegisterRes {
  success: boolean
}
