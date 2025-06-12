import { TMeal } from "@/types/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function editMealModal() {
  const { mealId } = useLocalSearchParams();

  useEffect(() => { 
    const getMeal = async () => {
      const mealStr = await AsyncStorage.getItem("meals")
      if(mealStr){
        const meals = JSON.parse(mealStr)
        console.log(mealId);
        
        const meal = meals.filter((meal: TMeal) => meal.id === mealId)[0];
        console.log("meal: ", meal);
        
      }
    }
    getMeal();
   }, [])
  return(
    <View style={styles.container}>
      {/* <Image source={}> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})