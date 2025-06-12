import { Tabs, router } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 26,
          fontWeight: 'bold',
          color: "#000",
          fontFamily: 'Inter_600SemiBold',
        },
        headerStyle: {
          backgroundColor: "#FFFFFF",

        },
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor: "#FFF",
        }
        // tabBarStyle: Platform.select({
        //   ios: {
        //     // Use a transparent background on iOS to show the blur effect
        //     position: 'absolute',
        //   },
        //   default: {},
        // }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitleAlign: "center",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={22} />
          ),
        }}
      />
      <Tabs.Screen
        name="meals"
        options={{
          title: 'Meals',
          headerTitleAlign: "center",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'fish-sharp' : 'fish-outline'} color={color} size={22} />
          ),
          headerRight: () => (
            <Ionicons
              name="add"
              size={24}
              color="#000"
              marginRight={16}
              style={{ marginRight: 16 }}
              onPress={() => router.push('/meal/createMeal')}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="clients"
        options={{
          title: 'Clients',
          headerTitleAlign: "center",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'man-sharp' : 'man-outline'} color={color} size={22} />
          ),
        }}
      />
    </Tabs>
  );
}
