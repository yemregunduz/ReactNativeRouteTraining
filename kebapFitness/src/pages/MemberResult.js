import React from "react";
import { View, Text, StyleSheet } from 'react-native'

const MemberResult = ({ route }) => {
    const { user } = route.params
    console.log(user)
    return (
        <View>
            <Text style={styles.message}> KAYIT BAŞARILI!</Text>
            <Text style={styles.text}>Üye adı: {user.userName}</Text>
            <Text style={styles.text}>Üye soyadı: {user.userSurname}</Text>
            <Text style={styles.text}>Üye yaşı: {user.userAge} </Text>
            <Text style={styles.text}>Üye E-Posta: {user.userEmail}</Text>
            <Text style={styles.text}>Üye ili: {user.userHometown}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'RoboFlex-Regular',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 5,
    },
    message: {
        fontWeight: "900",
        fontSize: 40,
        textAlign: 'center'
    }

})

export default MemberResult