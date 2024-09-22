import { useEffect } from 'react';
import { Link, useRouter } from 'expo-router';
import { Text, View } from 'react-native';
// import { useAuth } from '../context/AuthContext';

export default function Index() {
  // const { isAuthenticated } = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     router.replace('/(app)/home');
  //   } else {
  //     router.replace('/(auth)/login');
  //   }
  // }, [isAuthenticated]);

  // return null; // No necesita renderizar nada
  return (
    <View>
      <Text>Index.tsx</Text>
      <Link href="/(app)/home">
      <Text>Go to Home Page</Text></Link>
    </View>
  )
}
