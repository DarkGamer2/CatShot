import { StyleSheet, Text,View,TextInput, ScrollView, Pressable } from 'react-native'
import React from 'react'

const LoginScreen = ({navigation}) => {

    const handlePress=()=>{
        navigation.navigate("Home");
    }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>CAT SHOT</Text>
    <View>
        <Text style={styles.formItemTitle}>Username</Text>
        <TextInput/>
        <Text style={styles.formItemTitle}>Password</Text>
        <TextInput/>
        <Pressable style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
    </View>
    </ScrollView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
       flex:1,
        alignContent:"center",
    },
    title:{
        textAlign:"center"
    },
    formItemTitle:{
        textAlign:"center"
    },
    loginButton:{
        borderRadius:10,
        backgroundColor:"#3498eb",
        padding:10,
        justifyContent:"center",
        width:"30%"
    },
    loginButtonText:{
        textAlign:"center",
        color:"white",
    }
})