import React, { useEffect } from "react";
import {
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import styles from "./Styles";
import RoundedButton from "../../components/RoundedButton";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../components/CustomTextInput";
import Toast from "react-native-root-toast";

export const RegisterScreen = () => {
  const {
    name,
    lastname,
    email,
    image,
    phone,
    password,
    confirmPassword,
    errorMessage,
    onChange,
    register, 
    pickImage,
    
  } = useViewModel();

  useEffect(() => {
    if (errorMessage != ""){
    Toast.show(errorMessage, {
      position: Toast.positions.CENTER,
      duration: Toast.durations.SHORT,
    })};
  }, [errorMessage])
  

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerkey}
    >
      <View style={styles.container}>
        <Image
          source={require("../../../../assets/chef.jpg")}
          style={styles.ImageBackground}
        />
        <View style={styles.logoContainer}>
          <TouchableOpacity onPress={() => pickImage()}>
            {
              image == ''
              ?  <Image
            source={require(".../../../../assets/user_image.png")}
            style={styles.logoImage}
          />
          : <Image
          source={{uri: image}}
          style={styles.logoImage}
        />
            }
         
          </TouchableOpacity>

          <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
        </View>

        <View style={styles.form}>
          <ScrollView>
            <Text style={styles.formText}>REGISTRARSE</Text>

            <CustomTextInput
              placeholder="Nombres"
              keyboardType="default"
              image={require("../../../../assets/user.png")}
              property="name"
              onChangeText={onChange}
              value={name}
            />

            <CustomTextInput
              placeholder="Apellidos"
              keyboardType="default"
              image={require("../../../../assets/my_user.png")}
              property="lastname"
              onChangeText={onChange}
              value={lastname}
            />

            <CustomTextInput
              placeholder="Correo electronico"
              keyboardType="email-address"
              image={require("../../../../assets/email.png")}
              property="email"
              onChangeText={onChange}
              value={email}
            />

            <CustomTextInput
              placeholder="Telefono"
              keyboardType="numeric"
              image={require("../../../../assets/phone.png")}
              property="phone"
              onChangeText={onChange}
              value={phone}
            />
            <CustomTextInput
              placeholder="Password"
              keyboardType="numeric"
              image={require("../../../../assets/password.png")}
              property="password"
              onChangeText={onChange}
              value={password}
              secureTextEntry={true}
            />

            <CustomTextInput
              placeholder="Confirmar Password"
              keyboardType="default"
              image={require("../../../../assets/confirm_password.png")}
              property="confirmPassword"
              onChangeText={onChange}
              value={confirmPassword}
              secureTextEntry={true}
            />

            <View style={{ marginTop: 30 }}>
              <RoundedButton
                text="CONFIRMAR"
                onPress={() => 
                  
                    register()
                  }
                
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
