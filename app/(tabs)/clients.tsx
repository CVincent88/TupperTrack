import { StyleSheet, Text, View } from "react-native";

export default function ClientsScreen() {
  return (
    <View style={styles.container}>
      <Text>Hi !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});