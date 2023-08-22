import { useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Screen2 = ({ route, navigation }) => {
  const { name } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  return (
    <View style={styles.container}>
      <Text>howdy screen2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fee",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Screen2;
