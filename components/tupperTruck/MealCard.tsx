import { TMeal } from "@/types/app";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export type MealProps = {
  meal: TMeal;
}

export function MealCard({ meal }: MealProps) {
  const router = useRouter();

  useEffect(() => {
    console.log(meal);

  }, [])
  return (
    <Pressable style={styles.container} onPress={() => router.push(`/meal/${meal.id}`)}>
      <Image
        source={
          typeof meal.imageUrl === 'string'
            ? { uri: meal.imageUrl }
            : meal.imageUrl // this will be a number (require)
        }
        style={styles.image}
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{meal.name}</Text>
        <Text numberOfLines={3} style={styles.description}>{meal.description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '97%',
    height: 120,
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
    backgroundColor: '#eee9e9',
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: 'cover', // optional for cropping
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
    gap: 7,
    
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: '#444242',
    fontSize: 16,
    fontWeight: 'normal',
  },
});