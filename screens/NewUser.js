import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';




import firebase from '../Config';
const auth = firebase.auth();
export default function NewUser(props) {
    var email,pwd,confirmpwd;
  return (
    <ImageBackground 
    source={require("../assets/imgBackground.png")}
    style={styles.container}
      
    >
      <View style={{
        alignItems: "center",
        justifyContent: "center",
        height: 300,
        width: "95%",
        backgroundColor: "#0005",
        borderRadius: 15

      }}>
      <Text style={{
        fontSize: 34,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "#04f",
      }}>Create New User</Text>
      
      <TextInput onChangeText={(txt)=>{email=txt;}} placeholder='email@site.com' keyboardType="email-address" style={styles.textinputstyle}></TextInput>
      <TextInput onChangeText={(txt)=>{pwd=txt;}} style={styles.textinputstyle} placeholder='password' secureTextEntry={true}></TextInput>
      <TextInput onChangeText={(txt)=>{confirmpwd=txt;}} style={styles.textinputstyle} placeholder='confirm password' secureTextEntry={true}></TextInput>
      <View
      style={{flexDirection: "row",gap: 20,marginTop: 25 }}
      >
      <Button
      onPress={() => {
          auth.createUserWithEmailAndPassword(email,pwd)
          .then(()=> {props.navigation.replace("Auth");})
          .catch((error)=> {alert(error)});

      }}
      title='register'></Button>
      <Button title='exit'></Button>
      </View>
      
      </View>
      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinputstyle : {
    height: 45,
    width: "95%",
    backgroundColor: "red",
    marginTop: 10,
    borderRadius: 5,
    

  }
});
