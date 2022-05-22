import React from "react";
import {TouchableOpacity,Text} from 'react-native'
import styles from './MyButton.style'
const MyButton = ({text,onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}


export default MyButton