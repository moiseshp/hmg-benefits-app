import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Discount() {
  const { uuid } = useLocalSearchParams();
  console.info({ uuid });
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>discount {uuid}</Text>
    </View>
  );
}
