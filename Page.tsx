import React from "react";
import { useAuth } from "./Context/Auth.native";
import { StyleSheet, Text, View } from 'react-native';



export function Page() {

    const { getNumber } = useAuth();

    let d = getNumber();


    return (
        <View>
        <Text>{d}</Text>
        </View>
      );

}