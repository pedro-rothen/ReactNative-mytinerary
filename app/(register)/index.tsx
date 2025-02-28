import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../slices/authSlice';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'expo-router';

const schema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z.string().min(6, 'Password must be at least 6 characters long'),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function RegisterScreen() {
    const dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors } } = useForm({
      resolver: zodResolver(schema),
    });
  
    const onSubmit = (data: { email: string; password: string; confirmPassword: string }) => {
      // Simulate registration logic
      if (data.email && data.password) {
        dispatch(login());
        Alert.alert('Registration Successful', 'You have successfully registered.');
      } else {
        Alert.alert('Registration Failed', 'Please fill in all fields.');
      }
    };
  
    return (
      <View className='flex-1 justify-center items-center p-4'>
        <Text className='text-2xl font-bold mb-4'>Register</Text>
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
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className='w-full h-10 border border-gray-300 rounded px-2 mb-4'
              placeholder="Confirm Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
        />
        {errors.confirmPassword && <Text className='text-red-500'>{errors.confirmPassword.message}</Text>}
        <Button title="Register" onPress={handleSubmit(onSubmit)} />
        <Link href="/login">
            <Text className='text-blue-500 mt-4'>Login</Text>
        </Link>
      </View>
    );
}