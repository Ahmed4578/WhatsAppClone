import { StatusBar } from 'expo-status-bar';
import { BackHandler, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import firebase from '../Config';

const auth = firebase.auth();
export default function Auth(props) {
    var email,pwd;
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
      }}>Bienvenue</Text>
      
      <TextInput
      onChangeText={(txt)=>{email=txt;}}
      placeholder='email@site.com' keyboardType="email-address" style={styles.textinputstyle}></TextInput>
      <TextInput
      onChangeText={(txt)=>{pwd=txt;}}
      style={styles.textinputstyle} placeholder='password' secureTextEntry={true}></TextInput>
      <View
      style={{flexDirection: "row",gap: 20,marginTop: 25 }}
      >
      <Button title='submit'
      onPress={() => {
        auth.signInWithEmailAndPassword(email,pwd)
        .then(()=> {
            props.navigation.replace("Home");
        })
        .catch((error)=> {alert(error)});

    }}
      ></Button>
      <Button
      onPress={() => {
        BackHandler.exitApp();
    }} 
       title='exit'></Button>
      </View>
      <Text
    onPress={() => {
        props.navigation.navigate("NewUser");
    }}  
    style= {{width: "100%",textAlign: "right", marginRight: 10, fontSize: 14, fontWeight:"bold"}}>create new user</Text>
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
