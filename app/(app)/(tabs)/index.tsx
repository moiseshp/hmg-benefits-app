import { useSession } from '@/providers/session-provider';
import { Button, Text, View } from 'react-native';
import { router } from 'expo-router';

export default function Home() {
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          signOut();
        }}
      >
        Sign Out Tabs
      </Text>
    </View>
  );
}
