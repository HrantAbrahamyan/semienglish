import React from 'react'
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native'

const FlexButton = ({ title, passedStyleContainer, onPress, active, src }) => (
    <TouchableOpacity
        style={[styles.container, passedStyleContainer, active ? styles.activeContainer : null]}
        onPress={onPress}
    >
        {src ? <Image source={src}/> : <Text
            style={[
                styles.textStyle, active ?
                    styles.activeTextStyle :
                    null
            ]}>
            {title}
        </Text>}
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        width: 92,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#F6F6F4'
    },
    activeContainer: {
        backgroundColor: '#F2FBDE'
    },
    textStyle: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 12,
        color: '#B1B3B4',
    },
    activeTextStyle: {
        color: '#73A500',
    }
})

export default FlexButton