import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
// parent component
const Custompropex1 = () => {
  return (
    <View>
      <Childprops name="John" status="Software Developer" />
    </View>
  );
};

export default Custompropex1;

const Childprops = () => {
  return <View></View>;
};
 