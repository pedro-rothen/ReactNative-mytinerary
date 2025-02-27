import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../slices/authSlice';
import { Link } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <View className='flex-1 justify-center items-center p-4'>
      <Text className='text-2xl font-bold mb-4'>Login</Text>
      <TextInput
        className='w-full h-10 border border-gray-300 rounded px-2 mb-4'
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        className='w-full h-10 border border-gray-300 rounded px-2 mb-4'
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Link href="/register">
        <Text className='text-blue-500 mt-4'>Register</Text>
      </Link>
    </View>
  );
}