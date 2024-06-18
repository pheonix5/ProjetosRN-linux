import { useRef } from "react";

import { Tabs } from "expo-router";
import { Foundation, Ionicons, FontAwesome5 } from '@expo/vector-icons';

import BottomSheet from '@gorhom/bottom-sheet'

import { theme } from "@/theme";
import Avatar from "@/components/Avatar";

import { Menu } from "@/components/Menu";
import { View } from "react-native";

export default function TabLayout() {

  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand()
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)


  return (
    <View style={{flex: 1}}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.gray[600],
          tabBarStyle: {
            backgroundColor: theme.colors.black,
            borderColor: theme.colors.black
          }
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Foundation name="home" size={size} color={color} />
            )
          }}
        />

        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" size={size} color={color} />
            )
          }}
        />

        <Tabs.Screen
          name="menu"
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="plus" size={size} color={color} />
            )
          }}
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault();
              handleBottomSheetOpen()
            }

          })}
        />

        <Tabs.Screen
          name="messages"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubble-ellipses" size={size} color={color} />
            )
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <Avatar
                selected={focused}
                source={{ uri: "https://github.com/pheonix5.png" }} />
            )
          }}
        />
      </Tabs>

      <Menu ref={bottomSheetRef} onClose={handleBottomSheetClose}/>
    </View>
  )
}