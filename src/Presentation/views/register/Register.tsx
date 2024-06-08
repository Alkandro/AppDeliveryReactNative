import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Toast from "react-native-root-toast";
import  RoundedButton from "../../components/RoundedButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";

export const RegisterScreen = () => {
  return (
    // <KeyboardAvoidingView
    // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    // style={styles.containerKey}>
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/chef.jpg")}
        style={styles.ImageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require(".../../../../assets/user_image.png")}
          style={styles.logoImage}
        />

        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>REGISTRARSE</Text>

        <View style={styles.formInput}>
          <Image
            source={require("../../../../assets/user.png")}
            style={styles.formIcon}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Nombres"
            keyboardType="default"
          />
        </View>

        <View style={styles.formInput}>
          <Image
            source={require("../../../../assets/my_user.png")}
            style={styles.formIcon}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Apellidos"
            keyboardType="default"
          />
        </View>

        <View style={styles.formInput}>
          <Image
            source={require("../../../../assets/email.png")}
            style={styles.formIcon}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Correo electronico"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.formInput}>
          <Image
            source={require("../../../../assets/phone.png")}
            style={styles.formIcon}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Telefon"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.formInput}>
          <Image
            source={require("../../../../assets/password.png")}
            style={styles.formIcon}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.formInput}>
          <Image
            source={require("../../../../assets/confirm_password.png")}
            style={styles.formIcon}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Confirmar Password"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <RoundedButton
            text="CONFIRMAR"
            onPress={() =>
              Toast.show("Registrado con suseso", {
                position: Toast.positions.CENTER,
                duration: Toast.durations.SHORT,
              })
            }
          />
        </View>
      </View>
    </View>
    //  </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
//   containerkey: {
//     flex: 1,
    
//   },
  ImageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    bottom: "30%",
  },
  form: {
    width: "100%",
    height: "70%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 30,
  },
  formText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  formInput: {
    flexDirection: "row",
    marginTop: 30,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: "#AAAAAA",
    marginLeft: 15,
  },

  formRegisterText: {
    fontStyle: "italic",
    color: "orange",
    borderBottomWidth: 1,
    borderBlockColor: "orange",
    fontWeight: "bold",
    marginLeft: 10,
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "5%",
    alignItems: "center",
  },
  logoImage: {
    height: 100,
    width: 100,
  },
  logoText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
});
