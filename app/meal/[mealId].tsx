import ParallaxScrollView from "@/components/ParallaxScrollView";
import { TupperButton } from "@/components/tupperTruck/TupperButton";
import { TMeal } from "@/types/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useEffect, useLayoutEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Meal() {
  const { mealId } = useLocalSearchParams();
  const [meal, setMeal] = useState<TMeal | null>(null);
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    async function fetchMeal() {
      const meals = await AsyncStorage.getItem("meals");
      if (meals) {
        const parsedMeals: TMeal[] = JSON.parse(meals);
        const thisMeal = parsedMeals.filter((meal) => meal.id === mealId);

        setMeal(thisMeal[0] ?? null);
      }
    }
    if (mealId) {
      fetchMeal();
    }

  }, [mealId]);

  useLayoutEffect(() => {
    // Set the header title as the meal's name
    if (meal?.name) {
      navigation.setOptions({ title: meal.name });
    }
  }, [meal?.name]);

  const handleOnPressDelete = async() => {
    // Delete meal logic
    const meals = await AsyncStorage.getItem("meals");
    if(meals) {
      const parsedMeals = JSON.parse(meals)
      const newMeals = parsedMeals.filter((meal: TMeal) => meal.id !== mealId);
      await AsyncStorage.setItem("meals", JSON.stringify(newMeals));
    }
    
    router.back();
  }

  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "space-between"
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: 'cover', // optional for cropping
  },
  description: {
    fontWeight: "500",
    fontSize: 18,
    color: "#4a4949",
    fontFamily: ""
  }
});
