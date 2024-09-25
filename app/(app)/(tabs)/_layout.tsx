import { AppBar } from '@/components/ui/app-bar';
import { Text } from '@/components/ui/text';
import { Link, Tabs } from 'expo-router';
import { View } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        header: (props) => {
          console.info({ props });
          const { route } = props;
          console.info({ route: props.navigation.goBack });
          if (route.name === 'index') {
            return (
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
                <Text onPress={props.navigation.goBack}>IC</Text>
              </AppBar>
            );
          }
          return (
            <View>
              <Text>Other Views</Text>
              <Text onPress={props.navigation.goBack}>Back</Text>
            </View>
          );
        },
      }}
      tabBar={(data) => {
        const {
          state: { routeNames, routes },
        } = data;
        // console.info({ routeNames, routes });
        return (
          <View className="bg-red-300 p-6 flex flex-row">
            <Link href="/">Home</Link>
            <Link href="/benefits">Beneficios</Link>
            <Link href="/discounts">Descuentos</Link>
            <Link href="/discounts">Mis Cupones</Link>
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
