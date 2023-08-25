import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { getAuth, signInAnonymously } from "firebase/auth";

//color selection options
const bgColors = {
  black: "#474056",
  darkGray: "#757083",
  paleBlue: "#8A95A5",
  paleGreen: "#B9C6AE",
};

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [bgColor, setBgColor] = useState("");

  const auth = getAuth();
  const signInUser = () => {
    signInAnonymously(auth)
      .then((result) => {
        navigation.navigate("Chat", {
          userID: result.user.uid,
          name: name ? name : "Friend",
          bgColor: bgColor ? bgColor : "#f8f8f8",
        });
        /*  Alert.alert("Signed in Successfully!"); */
      })
      .catch(() => {
        Alert.alert("Unable to sign in :( try again later.");
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Background_Image.png")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <Text style={styles.title}>App Title</Text>
        <View style={styles.menuContainer}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Your Name"
          />
          <Text style={styles.bgColorText}>Choose Background Color:</Text>
          <View style={styles.colorButtonContainer}>
            <TouchableOpacity
              style={[
                styles.colorButton,
                {
                  backgroundColor: bgColors.black,
                },
              ]}
              onPress={() => setBgColor(bgColors.black)}
            />
            <TouchableOpacity
              style={[
                styles.colorButton,
                {
                  backgroundColor: bgColors.darkGray,
                },
              ]}
              onPress={() => setBgColor(bgColors.darkGray)}
            />
            <TouchableOpacity
              style={[
                styles.colorButton,
                {
                  backgroundColor: bgColors.paleBlue,
                },
              ]}
              onPress={() => setBgColor(bgColors.paleBlue)}
            />
            <TouchableOpacity
              style={[
                styles.colorButton,
                {
                  backgroundColor: bgColors.paleGreen,
                },
              ]}
              onPress={() => setBgColor(bgColors.paleGreen)}
            />
          </View>
          <TouchableOpacity style={styles.chatButton} onPress={signInUser}>
            <Text style={styles.buttonText}>Start Chatting</Text>
          </TouchableOpacity>
        </View>
        {Platform.OS === "ios" ? (
          <KeyboardAvoidingView behavior="padding" />
        ) : null}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // have to figure out how to make this generate on a color button when clicked
/*   selectCircle: {
    height: 48,
    width: 48,
    borderRadius: 24,
    position: "absolute",
    right: -5,
    top: -5,
    borderWidth: 3,
    borderColor: "#757083",
  }, */
  bgImage: {
    flex: 1,
    padding: "6%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "#fff",
    marginTop: 60,
  },
  textInput: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "300",
  },
  bgColorText: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: "#757083",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  menuContainer: {
    height: "44%",
    backgroundColor: "#f8f8f8",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "6%",
  },
  colorButton: {
    height: 38,
    width: 38,
    borderRadius: 19,
    marginRight: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  colorButtonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  chatButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 60,
    backgroundColor: "#757083",
  },
});

export default Start;
