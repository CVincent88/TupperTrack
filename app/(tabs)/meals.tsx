import { MealCard } from "@/components/tupperTruck/MealCard";
import { TMeal } from "@/types/app";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

export default function MealsScreen() {
  const [meals, setMeals] = useState<TMeal[]>([]);

  const fetchMeals = async () => {
    const keys = await AsyncStorage.getAllKeys();
    if(keys.includes("meals")){
      const meals = await AsyncStorage.getItem("meals");
      if(meals){

        const parsedMeals = JSON.parse(meals);
        setMeals(parsedMeals);
      }else{
        console.log("Meals saved, but could not get them.")
      }
    }else{
      console.log("No meal saved.");
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', flex: 1 }}>
        <FlatList
          style={{ width: '100%' }}
          data={meals}
          keyExtractor={(item, index) => index.toString()} // Or item.id if available
          renderItem={({ item }) => (
            <MealCard meal={item} />
          )}
          contentContainerStyle={{ gap: 16, alignItems: "center" }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
});
