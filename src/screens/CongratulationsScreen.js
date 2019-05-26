import React, { Component } from 'react'
import { paragraph } from '../styles/textStyle'
import { View, Text, Image, StyleSheet } from 'react-native'
import FlexButton from '../components/FlexButton'

class CongratulationsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerTitle}>Congratulations!</Text>
                <Image style={styles.congratulation} source={require('../assets/images/star.png')} />
                <View style={styles.mainTextContainer}>
                    <Text style={[paragraph, styles.mainText]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit.
                    </Text>
                    <FlexButton active title="Pick next" passedStyleContainer={styles.button} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 51,
        paddingLeft: 32,
        paddingRight: 32,
        paddingBottom: 32,
    },
    headerTitle: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 24,
        color: '#2D3137',
        marginBottom: 54,
        textAlign: 'center',
    },
    congratulation: {
        alignSelf: 'center',
    },
    mainText: {
        textAlign: 'center',
        marginTop: 64,
    },
    mainTextContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    button: {
        width: '100%',
    }
})

export default CongratulationsScreen