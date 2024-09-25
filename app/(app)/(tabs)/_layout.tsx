import { AppBar } from '@/components/ui/app-bar';
import { Text } from '@/components/ui/text';
import { Link, Tabs } from 'expo-router';
import { View } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        header: () => (
          <AppBar>
            <View className="flex flex-row space-x-3 items-center">
              <View className="h-12 w-12 rounded-full bg-zinc-600 flex flex-row items-center justify-center">
                <Text>M</Text>
              </View>
              <View>
                <Text className="text-xl font-bold">Hola, Moisés</Text>
                <Text>41157679</Text>
              </View>
            </View>
            <Text>IC</Text>
          </AppBar>
        ),
      }}
      tabBar={(data) => {
        const {
          state: { routeNames, routes },
        } = data;
        // console.info({ routeNames, routes });
        return (
          <View className="bg-red-300 p-6 flex flex-row gap-x-4">
            <Link href="/">Home</Link>
            <Link href="/benefits">Beneficios</Link>
            <Link href="/discounts">Descuentos</Link>
          </View>
        );
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="benefits" />
      <Tabs.Screen name="discounts" />
    </Tabs>
  );
}
