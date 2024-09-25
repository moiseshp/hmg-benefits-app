import { useSession } from '@/providers/session-provider';
import { View } from 'react-native';
import { router } from 'expo-router';
import { AppBar } from '@/components/ui/app-bar';
import { Text } from '@/components/ui/text';

export default function Home() {
  const { signOut } = useSession();
  return (
    <>
      <Text
        onPress={() => {
          signOut();
        }}
      >
        Sign Out Tabs
      </Text>
    </>
  );
}
