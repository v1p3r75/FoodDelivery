import React from 'react'
import { Button, Dimensions, Image, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import COLORS from '../constants/colors'
import ROUTES from '../constants/routes'
const { width, height } = Dimensions.get('screen')

function SignUp({navigation}) {

    const signUpAction = () => {
        return navigation.navigate(ROUTES.LOGIN);
    }

  return (
    <ScrollView>
        <View style={style.container}>
            <TouchableOpacity style={{paddingStart: '35%'}}>
                <Image style={{width: 100, height: 100, textAlign: 'center'}} source={require('../assets/images/dinde.png')}/>
            </TouchableOpacity>
            <Text style={style.title}>Sign Up</Text>
            <View>
                <Text style={style.label}>Email ID</Text>
                <TextInput style={style.input} placeholder='demo.example@gmail.com' placeholderTextColor={COLORS.silver} autoComplete='email'/>
            </View>
            <View style={{paddingVertical: 20}}>
                <Text style={style.label}>Password</Text>
                <TextInput style={style.input} placeholder="*********" placeholderTextColor={COLORS.silver} autoComplete="password" />
            </View>
            <View>
                <Text style={style.label}>Telephone</Text>
                <TextInput style={style.input} placeholder="Ex : 96457545" keyboardType='phone-pad' placeholderTextColor={COLORS.silver} autoComplete="tel" />
            </View>
            <View style={{marginVertical: 20}}>
                <TouchableOpacity onPress={signUpAction}>
                    <Text style={style.signin}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <Text style={{...style.label, textAlign: 'center', color: COLORS.black, paddingVertical: 20}}>Or</Text>
            <View style={style.socialsContainer}>
                <Text style={{...style.socials, backgroundColor: COLORS.primary}}>
                    <Icon name="google" backgroundColor={COLORS.primary} color= {COLORS.red} size={20}></Icon>
                    <Text style={{color: "silver"}}>&nbsp;&nbsp;Google</Text>
                </Text>
                <Text style={{...style.socials, backgroundColor: COLORS.blue}}>
                    <Icon name="facebook" backgroundColor={COLORS.blue} color={COLORS.primary} size={20}></Icon>
                    <Text style={{color: COLORS.primary}}>&nbsp;&nbsp;Facebook</Text>
                </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.LOGIN)}>
                <Text style={{...style.label, textAlign: 'center'}}>Already Member ?, <Text style={{color: COLORS.red}}>Login</Text></Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
    container: { flex: 1, backgroundColor : '#fff', height, paddingTop: '10%', paddingHorizontal: '5%', color: COLORS.black,},
    label: {color: COLORS.black, fontFamily: 'Poppins-Regular', fontSize: 13},
    signin: {fontFamily: 'Poppins-Bold', padding: 20, backgroundColor: "#f51929", textAlign: 'center', color: COLORS.primary, borderRadius: 10},
    title: { fontFamily: "Poppins-ExtraBold",fontSize: 30, textAlign: 'center', color: COLORS.black, marginVertical: '5%'},
    input: { fontFamily: 'Poppins-Regular', borderWidth: 2, padding: 10, borderStyle: 'solid', borderColor: '#f2f2f2', color: COLORS.black, borderRadius: 10, elevation: 30, shadowColor: "#f2f2f2", shadowOffset: {width: 100, height: 100}},
    socialsContainer: {display: 'flex', flexDirection: 'row', justifyContent: "space-between",paddingVertical: 20},
    socials: {fontFamily: 'Poppins-Bold', width: '45%', textAlign: 'center', color: COLORS.black,borderWidth: 2, borderRadius: 10, borderColor: "#f2f2f2", padding: '5%', elevation: 30, shadowColor: "#f2f2f2",},
})

export default SignUp