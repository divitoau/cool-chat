import { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

const Screen1 = ({ navigation }) => {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text>howdy screen1</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder="type your username here"
      />
      <Button
        title="go to screen2"
        onPress={() => navigation.navigate("Screen2", { name: name })}
      />
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
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
  },
});

export default Screen1;
