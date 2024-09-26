import { Text } from '@/components/ui/text';
import { TextInput } from '@/components/ui/text-input';
import { useForm } from '@/hooks/use-form';
import { useSession } from '@/providers/session-provider';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import { Image, ScrollView, View } from 'react-native';

export default function SignIn() {
  const { signIn } = useSession();
  const { formData, updateForm } = useForm();
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
      {/* <Image
        source={require('@/assets/logo-login.jpg')}
        className="m-auto"
        style={{
          width: 245,
          height: 150,
        }}
      /> */}
      <View className="text-center px-8">
        <Text className="text-xl text-center">Beneficios para todos</Text>

        <Picker
        // selectedValue={selectedValue}
        // onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Select an option" value="" />
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </Picker>
        <TextInput
          label="Label"
          placeholder="Ingresa tu documento"
          value={formData.document}
          hint="Error message"
          onChangeText={(value) => updateForm({ document: value })}
        />
        <Text
          onPress={() => {
            signIn();
            router.replace('/');
          }}
        >
          Ingresar
        </Text>
        <Text>{formData.document}</Text>
      </View>
    </ScrollView>
  );
}
