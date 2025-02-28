export interface UserDTO {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    country?: string;
    image?: string;
    token: string;
  }