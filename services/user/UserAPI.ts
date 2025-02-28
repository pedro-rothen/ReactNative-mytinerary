import axios from 'axios';
import { RegisterUserRequest } from '@/interfaces/RegisterUserRequest';
import { LoginUserRequest } from '@/interfaces/LoginUserRequest';
import { UserDTO } from '@/interfaces/UserDTO';

const baseUrl = 'https://mytinerary-server.onrender.com/api/auth/';

const api = axios.create({
    baseURL: baseUrl,
});

export const loginUser = async (userData: LoginUserRequest): Promise<UserDTO> => {
    const response = await api.post<UserDTO>('login', userData);
    return response.data;
  };

export const registerUser = async (userData: RegisterUserRequest): Promise<UserDTO> => {
    const response = await api.post<UserDTO>('register', userData);
    return response.data;
};

export const tokenLogin = async (token: string): Promise<UserDTO> => {
    const response = await api.get<UserDTO>('token', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    });
  return response.data;
};