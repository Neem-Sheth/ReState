import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Tabs } from "expo-router";

import icons from "@/constants/icons"

const  TabIcon = ({ focused, icon, title } : {focused: boolean; icon: any; title: string}) => (
    <View className="flex-1 mt-3 flex flex-col items-center">
        <Image source={icon} tintColor={focused? '#001ff' : '#666876'} resizeMode="contain" className="size-6"  />
        <Text className={`${focused? 'text-primary-300 font-rubik-medium' : 'text-black-200 font-rubik'} text-xs w-full text-center mt-1`}>
            {title}
        </Text>
    </View>
);


const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabIcon icon={icons.home} focused={focused} title="Home" /> 
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabsLayout;