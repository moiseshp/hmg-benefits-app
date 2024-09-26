import {
  TextInput as NativeTextInput,
  View,
  TouchableOpacity,
  TextInputProps as NativeTextInputProps,
} from 'react-native';
import { Text } from '@/components/ui/text';

type TextInputProps = {
  label?: string;
  hint?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
} & NativeTextInputProps;

export const TextInput: React.FC<TextInputProps> = ({
  label,
  hint,
  iconLeft,
  iconRight,
  ...props
}) => {
  return (
    <View>
      {label && <Text className="mb-2 pl-1">{label}</Text>}
      <View className="border rounded-md px-4 py-3 border-zinc-500">
        {iconLeft && <TouchableOpacity>{iconLeft}</TouchableOpacity>}
        <NativeTextInput placeholderTextColor="#999" {...props} />
        {iconRight && <TouchableOpacity>{iconRight}</TouchableOpacity>}
      </View>
      {hint && <Text className="mt-1 pl-1 text-red-500">{hint}</Text>}
    </View>
  );
};
