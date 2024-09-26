import { SessionProvider } from '@/providers/session-provider';
import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Root() {
  return (
    <SessionProvider>
      <SafeAreaView className="flex-1">
        <Slot />
      </SafeAreaView>
    </SessionProvider>
  );
}
