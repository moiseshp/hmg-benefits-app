import { Link, Redirect, Slot, Stack } from 'expo-router';
import { useSession } from '@/providers/session-provider';
import { Text, View } from 'react-native';
import { Button } from '@/components/ui/button';

export default function AppLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack
      screenOptions={{
        header: () => {
          return (
            <View>
              <Text className="text-lg font-bold">App Layout</Text>
              <Button>Volver</Button>
            </View>
          );
        },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="benefits/[uuid]" />
      <Stack.Screen name="discounts/[uuid]" />
    </Stack>
  );
}
