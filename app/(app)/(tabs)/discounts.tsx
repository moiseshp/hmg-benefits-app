import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Discounts() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>**Discounts Page**</Text>
      <Link href="/discounts/UUID-5678">Show Discount</Link>
    </View>
  );
}
