import Ionicons from '@expo/vector-icons/Ionicons';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function MealLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const { mealId } = useLocalSearchParams<{ mealId?: string }>();
  console.log('mealId from layout:', mealId);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="createMeal"
          options={{
            title: "Add a meal",
            presentation: 'modal',
            headerStyle: {
              backgroundColor: '#f5f5f5',   // Change background
            },
            headerTitleStyle: {
              fontSize: 24,
              color: '#000000', // Change title color
            },
            headerTintColor: '#000000', // Change back button color
            headerTitleAlign: "center"
          }}
        />
        <Stack.Screen
          name="[mealId]"
          options={{
            title: "Single meal",
            // presentation: 'modal',
            headerStyle: {
              backgroundColor: '#f5f5f5',   // Change background
            },
            headerTitleStyle: {
              fontSize: 24,
              color: '#000000', // Change title color

            },
            headerTitleAlign: "center",
            headerTintColor: '#000000', // Change back button color
            headerRight: () => (
              // <Ionicons
              //   name="clipboard-outline"
              //   size={24}
              //   color="#000"
              //   onPress={() => router.push('/meal/editMeal')}
              //   // style={{ marginRight: 16 }}
              // />
              <Pressable
                onPress={() => {
                  if (!mealId) return; // prevent crash if mealId is undefined
                  router.push({ pathname: '/meal/editMeal/[mealId]', params: { mealId } });
                }}
                hitSlop={80}
              >
                <Ionicons name="clipboard-outline" size={24} color="#000" />
              </Pressable>

            )
          }}
        />
        <Stack.Screen
          name="editMeal/[mealId]"
          options={{
            title: "edit this meal",
            presentation: 'modal',
            headerStyle: {
              backgroundColor: '#f5f5f5',   // Change background
            },
            headerTitleStyle: {
              fontSize: 24,
              color: '#000000', // Change title color
            },
            headerTintColor: '#000000', // Change back button color
            headerTitleAlign: "center"
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
