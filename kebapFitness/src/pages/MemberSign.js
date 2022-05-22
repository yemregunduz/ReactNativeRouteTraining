import React, { useState } from "react";
import {View,Text, Alert} from 'react-native'
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton"
const MemberSign = ({navigation}) => {
    const [userName,setUserName] = useState(null)
    const [userSurname,setUserSurname] = useState(null)
    const [userAge,setUserAge ]= useState(null)
    const [userEmail,setUserEmail] = useState(null)
    const [userHometown,setUserHometown] = useState(null)

    function handleSubmit(){
        if(!userName || !userSurname || !userAge || !userEmail || !userHometown)
        {
            Alert.alert('Kebap Fitness Salonu','Formu eksiksiz doldurunuz')
            return;
        }
        const user = {
            userName,
            userSurname,
            userAge,
            userEmail,
            userHometown
        }
        navigation.navigate("MemberResultScreen",{user});
        
    }

    return(
        <View>
            <Text>Member Sign</Text>
            <MyInput label="Ad" placeholder="Ad bilgisi giriniz." onChangeText={setUserName}></MyInput>
            <MyInput label="Soyad" placeholder="Soyad bilgisi giriniz." onChangeText={setUserSurname}></MyInput>
            <MyInput label="Yaş" placeholder="Yaş bilgisi giriniz." onChangeText={setUserAge}></MyInput>
            <MyInput label="E-posta" placeholder="E-posta bilgisi giriniz." onChangeText={setUserEmail}></MyInput>
            <MyInput label="İl" placeholder="İl bilgisi giriniz." onChangeText={setUserHometown}></MyInput>
            <MyButton text="Kaydı tamamla" onPress={handleSubmit}></MyButton>

        </View>
    )
}
export default MemberSign