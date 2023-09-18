import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation  } from "@react-navigation/native";

import * as Animatable from 'react-native-animatable'

export default function SignIn(){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Animatable.View animation={"fadeInLeft"} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-Vindo(a)</Text>
            </Animatable.View>
            <Animatable.View animation={"fadeInUp"} style={styles.containerForm}>
                <Text style={styles.title}>Usuário</Text>
                <TextInput
                    placeholder="Usuário"
                    style={styles.input}
                />
                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Senha"
                    style={styles.input}
                    secureTextEntry={true}

                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.buttonRegister}
                onPress={ () => navigation.navigate('SignUp')}
                >
                    <Text style={styles.registerText}>Não possui conta? Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#00e0b7',
    },
    containerHeader:{
        paddingStart: '5%',
        marginTop: '19%',
        marginBottom:'8%',
    },
    message:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 40,
    },
    containerForm:{
        flex: 1,
        backgroundColor:'white',
        paddingStart:'5%',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingEnd: '5%',
    },
    title:{
        fontSize: 28,
        marginTop:28,
    },
    input:{
        borderBottomWidth:1,
        height:40,    
        marginBottom:10,    
    },
    button:{
        marginTop:20,
        backgroundColor: '#00e0b7',
        height: 31,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom:8,
    },
    buttonText:{
        fontSize:20,
        fontWeight: 'bold',
    },
    buttonRegister:{
        alignItems:'center',
        marginTop: 8,
    },
    registerText:{
        color: '#A1A1A1',
    }

    

})