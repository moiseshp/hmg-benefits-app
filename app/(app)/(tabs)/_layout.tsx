import { Link, Tabs } from 'expo-router';
import { Text, View } from 'react-native';

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        header: () => (
          <View>
            <Text>Navbar</Text>
          </View>
        ),
      }}
      tabBar={(data) => {
        const {
          state: { routeNames, routes },
        } = data;
        console.info({ routeNames, routes });
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
