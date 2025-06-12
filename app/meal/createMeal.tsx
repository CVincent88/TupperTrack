import { Input } from '@/components/tupperTruck/Input';
import { TupperButton } from '@/components/tupperTruck/TupperButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function createMealModal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState<any>(null);
  const router = useRouter();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUrl(result.assets[0].uri);
    }
  };

  const onChangeIinput = ((inputType: string, str: string) => {
    switch (inputType) {
      case "Name":
        setName(str);
        break;
      case "Description":
        setDescription(str);

      default:
        break;
    }
  })

  const handleSubmit = async() => {    
    const meals = await AsyncStorage.getItem("meals");
    
    if(meals){
      const newMeals = [...JSON.parse(meals), {id: (meals.length + 1).toString(), name, description, imageUrl}]
      await AsyncStorage.setItem("meals", JSON.stringify(newMeals))
      
    }else{
      await AsyncStorage.setItem("meals", JSON.stringify([{id: "1", name, description, imageUrl}]))
    }
    router.back();
  }; 

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <View>
            <Input name="Name" onChange={onChangeIinput} />
            <Input name="Description" isMultiline={true} numberOfLines={4} onChange={onChangeIinput} />
            {
              imageUrl &&
              <Image style={styles.image} source={{ uri: imageUrl }} />
            }
            <TupperButton text={imageUrl ? "Change image" : "Add an image"} type='secondary' onPress={pickImage} iconName='image' />
          </View>
          <View>
            <TupperButton type='primary' text="Create" onPress={handleSubmit} />
          </View>

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    gap: 12,
    backgroundColor: '#fff',
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: '#f4f2f0',
    padding: 12,
    borderRadius: 6,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 8,
    resizeMode: 'cover', // optional for cropping
    marginBottom: 10,
  },
});
