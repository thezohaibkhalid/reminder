import {StyleSheet, Text, View} from "react-native";

export default function Index() {
  return (
    <View
      style={
          styles.container
      }
    >
      <Text>Hi my name is Zohaib Khalid I hope you're doing fine.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white"
    }
})