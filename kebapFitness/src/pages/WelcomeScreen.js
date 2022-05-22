import React from "react";
import {View,Text,StyleSheet} from 'react-native';
import MyButton from '../components/MyButton'
const Welcome = ({navigation}) => {
    const goToMemberSign = () => {
        navigation.navigate('MemberSignScreen')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome</Text>
            <MyButton text="Sign Up"  onPress={goToMemberSign}></MyButton>
        </View>
    )
}
export default Welcome

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    header:{
        textAlign:'center',
        fontSize: 30,
        fontWeight: '900',
        fontFamily:'RobotoFlex-Regular',
        color:'black',
        margin:10
    }
})