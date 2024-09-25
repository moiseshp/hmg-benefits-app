import { Link, Redirect, Slot, Stack } from 'expo-router';
import { useSession } from '@/providers/session-provider';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AppLayout(props: any) {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    // <SafeAreaView className="flex-1">
    //   <View className="bg-red-300 p-6 flex flex-row justify-between">
    //     <View>
    //       <Text>Hola, Moisés</Text>
    //       <Text>D. 41157679</Text>
    //     </View>
    //     <Text>IC</Text>
    //   </View>
    //   <Slot />
    //   <View className="bg-red-300 p-6 flex flex-row gap-x-4">
    //     <Link href="/">Home</Link>
    //     <Link href="/benefits">Beneficios</Link>
    //     <Link href="/discounts">Descuentos</Link>
    //   </View>
    // </SafeAreaView>

    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="benefits/[uuid]" />
        <Stack.Screen name="discounts/[uuid]" />
      </Stack>
      {/* <View className="bg-red-300 p-6 flex flex-row gap-x-4">
        <Link href="/">Home</Link>
        <Link href="/benefits">Beneficios</Link>
        <Link href="/discounts">Descuentos</Link>
      </View> */}
    </>
  );
}
