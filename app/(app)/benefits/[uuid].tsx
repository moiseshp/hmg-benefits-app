import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Benefit() {
  const { uuid } = useLocalSearchParams();
  console.info({ uuid });
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>benefit {uuid}</Text>
    </View>
  );
}
