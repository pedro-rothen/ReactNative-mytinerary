import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from './slices/authSlice';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Registration Failed', 'Passwords do not match.');
      return;
    }

    if (email && password) {
      dispatch(login());
      Alert.alert('Registration Successful', 'You have successfully registered.');
    } else {
      Alert.alert('Registration Failed', 'Please fill in all fields.');
    }
  };

  return (
    <View className='flex-1 justify-center items-center p-4'>
      <Text className='text-2xl font-bold mb-4'>Register</Text>
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
      <TextInput
        className='w-full h-10 border border-gray-300 rounded px-2 mb-4'
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}