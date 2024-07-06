import React, { useState, useEffect } from "react";
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
import styles from "./Styles";
import RoundedButton from "../../components/RoundedButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../components/CustomTextInput";

interface Props extends StackScreenProps<RootStackParamList, "HomeScreen"> {}

export const HomeScreen = ({ navigation, route }: Props) => {
  const { email, password, errorMessage, onChange, login, user } =
    useViewModel();

  useEffect(() => {
    if (errorMessage !== "") {
      Toast.show(errorMessage, {
        position: Toast.positions.BOTTOM,
        duration: Toast.durations.SHORT,
      });
    }
  }, [errorMessage]);

  useEffect(() => {
    if (user?.id !== null && user?.id !== undefined) {
      navigation.replace("ProfileInfoScreen");
    }
  }, [user]);

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

          <CustomTextInput
            image={require("../../../../assets/password.png")}
            placeholder="Password"
            keyboardType="default"
            property="password"
            onChangeText={onChange}
            value={password}
            secureTextEntry={true}
          />

          <View style={{ marginTop: 30 }}>
            <RoundedButton
              text="ENTRAR"
              onPress={() => login()}

              //   Toast.show("HOLA!!", {
              //     position: Toast.positions.CENTER,
              //     duration: Toast.durations.SHORT,
              //   })
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
