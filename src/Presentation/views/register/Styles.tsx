import { StyleSheet } from "react-native";

const RegisterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
    containerkey: {
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
    height: "72%",
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
//   formInput: {
//     flexDirection: "row",
//     marginTop: 30,
//   },
//   formIcon: {
//     width: 25,
//     height: 25,
//     marginTop: 5,
//   },
//   formTextInput: {
//     flex: 1,
//     borderBottomWidth: 2,
//     borderBottomColor: "#AAAAAA",
//     marginLeft: 15,
//   },

//   formRegisterText: {
//     fontStyle: "italic",
//     color: "orange",
//     borderBottomWidth: 1,
//     borderBlockColor: "orange",
//     fontWeight: "bold",
//     marginLeft: 10,
//   },
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

export default RegisterStyles;
