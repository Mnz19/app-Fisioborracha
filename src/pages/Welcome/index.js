import React from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation  } from "@react-navigation/native";

export default function Welcome(){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image delay={600} animation={'fadeIn'}
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%', height:'100%'}}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View animation={"fadeInUp"} style={styles.containerForm}>
                <Text style={styles.title}>Seja bem-vindo</Text>
                <Text style={styles.text}>Aqui você tem resultados</Text>

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn') }
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       backgroundColor: '#fff',
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center,'
    },
    containerForm:{
        flex:1,
        backgroundColor: '#00e0b7',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems:'center',
    },
    title:{
        fontWeight:"500",
        fontSize: 35,
        marginTop:20,
        marginBottom: 5,
    },
    text:{
        fontSize:18,
    },
    button:{
        position:'absolute',
        backgroundColor:'white',
        borderRadius: 50,
        paddingVertical: 10,
        width: '50%',
        bottom: '42%',
    },
    buttonText:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
    }
})