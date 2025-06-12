import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type TupperButtonProps = {
  text: string;
  type: "primary" | "secondary" | "tertiary";
  onPress: () => void;
  iconName?: string;
}

export function TupperButton({ text, type, onPress, iconName }: TupperButtonProps) {
  return (
    <Pressable
      style={[styles.main, styles[type]]}
      onPress={onPress}
    >
      <View style={styles.text}>
        {
          iconName &&
            <Ionicons
              name={iconName as any}
              color={type === "primary" ? "#fff" : type === "secondary" ? "#000" : "#fff"}
              size={22}
            />
        }
        <Text style={[{fontSize: 20, fontWeight: 500}, { color: type === "primary" ? "#fff" : type === "secondary" ? "#000" : "#fff" }]}>
          {text}
        </Text>

      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#ec6213',
    color: '#fff',
  },
  secondary: {
    backgroundColor: '#dfdedc',
    color: '#000',
  },
  tertiary: {
    backgroundColor: '#ec1395',
    color: '#fff',
  },
  text: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  }
});