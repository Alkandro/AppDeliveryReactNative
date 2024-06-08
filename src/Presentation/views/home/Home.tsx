import React, { useState } from "react";
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
import RoundedButton from "../../components/RoundedButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../components/CustomTextInput";

export const HomeScreen = () => {
  const { email, password, onChange } = useViewModel();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerKey}
    >
      <View style={styles.container}>
        <Image
          source={require("../../../../assets/chef.jpg")}
          style={styles.ImageBackground}
        />
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../../assets/logo.png")}
            style={styles.logoImage}
          />

          <Text style={styles.logoText}>FOOD APP</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.formText}>INGRESAR</Text>

          <CustomTextInput 
          image={require("../../../../assets/email.png")}
          placeholder="Correo electronico"
          keyboardType="email-address"
          property="email"
          onChangeText={onChange}
          value={email}
          />

          
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
              value={password}
              onChangeText={(text) => onChange('password', text)}
            />
          </View>

          <View style={{ marginTop: 30 }}>
            <RoundedButton
              text="ENTRAR"
              onPress={
                () => {
                  console.log("Email: " + email);
                  console.log("Password: " + password);
                }
                //   Toast.show("HOLA!!", {
                //     position: Toast.positions.CENTER,
                //     duration: Toast.durations.SHORT,
                //   })
              }
            />
          </View>
          <View style={styles.formRegister}>
            <Text>No tienes cuenta?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("RegisterScreen")}
            >
              <Text style={styles.formRegisterText}>Registrate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  containerKey: {
    flex: 1,
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    bottom: "30%",
  },
  form: {
    width: "100%",
    height: "40%",
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
  formRegister: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
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
    top: "15%",
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
