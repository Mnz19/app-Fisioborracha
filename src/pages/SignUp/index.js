import react from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'

export default function SignUp(){
    return(
        <View style={styles.container}>
            <Animatable.View style={styles.containerHeader}>
                <Text style={styles.containertitle}>Cadastra-se</Text>
            </Animatable.View>
            <Animatable.View style={styles.form}>
                <Text style={styles.formTitle}>Nome Completo</Text>
                <TextInput
                placeholder="Nome completo"
                style={styles.input}
                />
                <Text style={styles.formTitle}>Usuário</Text>
                <TextInput
                placeholder="Usuário"
                style={styles.input}
                />
                <Text style={styles.formTitle}>Senha</Text>
                <TextInput
                placeholder="Senha"
                style={styles.input}
                secureTextEntry={true}
                />
                <TouchableOpacity
                style={styles.button}
                >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        fontSize: 10,
        backgroundColor:'#00e0b7',
    },
    containerHeader:{
        marginTop:'19%',
        paddingStart:'5%',
        marginBottom: '8%',
    },
    containertitle:{
        fontSize: 40,
        fontWeight:'bold',
        color:'white',
    },
    form:{
        flex:2 ,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor:'white',
        marginTop: 10,
        alignItems:'center',
    },
    formTitle:{
        marginTop:28,
        fontSize:22,
    },
    input:{
        borderBottomWidth: 1,
        height:40,
        width: '45%',
    },
    button:{
        backgroundColor:'#00e0b7',
        borderRadius: 8,
        paddingVertical: 5,
        width: '45%',
        marginTop:'10%',
    },
    buttonText:{
        fontWeight:'bold',
        textAlign:'center',
        display:'flex',
        fontSize:15,
    }


}) 