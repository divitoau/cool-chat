import { useEffect } from "react";
import { StyleSheet, View, Text, Button, ImageBackground } from "react-native";

const bgImage = { uri: "/assets/Background_Image.png" };

const Chat = ({ route, navigation }) => {
  const { name, bgColor } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <ImageBackground source={bgImage}>
        <Text>howdy Chat</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Chat;
