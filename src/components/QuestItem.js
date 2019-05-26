import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const QuestItem = ({ underline, src, title, subtitle, passedContainerStyle }) => (
    <View >
        <View style={[styles.itemContainer, passedContainerStyle]}>
            <Image source={src} />
            <View style={styles.textContainer}>
                <Text style={styles.subtitle}>{subtitle}</Text>
                <Text style={styles.title}>{title}</Text>
            </View>
            {underline ?
                <Image style={styles.arrow} source={require('../assets/images/arrow.png')} /> :
                null}
        </View>
        {underline ?
            <View style={styles.underline}></View> :
            null}
    </View>
)

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: 24,
    },
    arrow: {
        marginLeft: 'auto',
    },
    underline: {
        height: 1,
        width: '80%',
        backgroundColor: '#F6F6F4',
        marginTop: 16,
        marginBottom: 16,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    title: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 12,
        color: '#B1B3B4',
        marginTop: 10,
    },
    subtitle: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 16,
        color: '#2D3137',
    }
})

export default QuestItem