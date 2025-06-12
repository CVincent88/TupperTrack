import { Text, TextInput, View } from "react-native";

type InputProps = {
  name: string;
  isMultiline?: boolean;
  numberOfLines?: number;
  onChange: (inputType: string, str: string) => void;
}

export function Input({name, isMultiline, numberOfLines, onChange}: InputProps) {
  return (
    <View>
      <Text style={{ fontSize: 18, marginBottom: 8, fontWeight: 'bold'}}>{name}</Text>
      <TextInput
        style={{
          backgroundColor: '#f4f2f0',
          padding: 12,
          borderRadius: 6,
          marginBottom: 10,
        }}
        multiline={isMultiline}
        numberOfLines={numberOfLines}
        onChangeText={(e) => onChange(name, e)}
      />
    </View>
  );
}