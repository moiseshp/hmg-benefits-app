import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Benefits() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>**Benefits Page**</Text>
      <Link href="/benefits/UUID-1234">Show Benefit</Link>
    </View>
  );
}
