import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../slices/authSlice';
import { Link } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export default function LoginScreen() {
  const dispatch = useDispatch();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: { email: string; password: string }) => {
    if (data.email === 'user@example.com' && data.password === 'password') {
      dispatch(login());
      Alert.alert('Login Successful', 'You have successfully logged in.');
    } else {
      Alert.alert('Login Failed', 'Invalid email or password.');
    }
  };

  return (
    <View className='flex-1 justify-center items-center p-4'>
      <Text className='text-2xl font-bold mb-4'>Login</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          className='w-full h-10 border border-gray-300 rounded px-2 mb-4'
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
      />
      {errors.email && <Text className='text-red-500'>{errors.email.message}</Text>}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          className='w-full h-10 border border-gray-300 rounded px-2 mb-4'
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
      />
      {errors.password && <Text className='text-red-500'>{errors.password.message}</Text>}
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
      <Link href="/register">
        <Text className='text-blue-500 mt-4'>Register</Text>
      </Link>
    </View>
  );
}