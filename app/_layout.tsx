import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { AuthProvider, useAuth } from '../context/AuthContext';

export default function RootLayout() {
  return (
    // <AuthProvider>
    <SafeAreaView className="flex-1">
      <Stack screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="(auth)/login" options={{ title: 'Login' }} />
        <Stack.Screen name="(auth)/signup" options={{ title: 'Signup' }} /> */}
        <Stack.Screen name="(app)/home" options={{ title: 'Home' }} />
      </Stack>
    </SafeAreaView>
    // </AuthProvider>
  );
}
