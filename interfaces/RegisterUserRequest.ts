export interface RegisterUserRequest {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    country: string;
    description?: string;
    image?: string;
  }