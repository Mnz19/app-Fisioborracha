import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import * as Animatable from 'react-native-animatable'

export default function SignIn(){
    return (
        <View style={style.container}>
            <Animatable.View animation={"fadeInLeft"} style={style.containerHeader}>
                <Text style={style.message}>Bem-Vindo(a)</Text>
            </Animatable.View>
            <Animatable.View animation={"fadeInUp"} style={style.containerForm}>
                <Text style={style.title}>Usuário</Text>
                <TextInput
                    placeholder="Usuário"
                    style={style.input}
                />
                <Text style={style.title}>Senha</Text>
                <TextInput
                    placeholder="Senha"
                    style={style.input}
                />
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonRegister}>
                    <Text style={style.registerText}>Não possui conta? Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}
const style = StyleSheet.create({
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
        display:'flex',
        justifyContent:'center',
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