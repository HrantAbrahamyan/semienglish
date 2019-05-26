import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import QuestItem from '../components/QuestItem'
import FlexButton from '../components/FlexButton'

class SummaryScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerTitle}>SummaryScreen</Text>
                <Text style={[styles.mainText, styles.text]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                </Text>
                <Text style={[styles.mainText, styles.text]}>
                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </Text>
                <View style={styles.footerContainer}>
                    <View>
                        <QuestItem
                            subtitle="Lorem ipsum"
                            title={`Genre: Lorem ipsum`}
                            src={require('../assets/images/item_img.png')} />
                        <Text style={[styles.author, styles.text]}>Joahn Dou</Text>
                    </View>
                    <FlexButton active title="Finish" passedStyleContainer={styles.button}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 32,
        paddingRight: 32,
        paddingBottom: 32,
        paddingTop: 51,
    },
    headerTitle: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 24,
        color: '#2D3137',
    },
    mainText: {
        marginTop: 48,
    },
    text: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 12,
    },
    footerContainer: {
        flex: 1,
        marginTop: 64,
        justifyContent: 'space-between',
    },
    author: {
        marginTop: 15,
        textAlign: 'right',
    },
    button: {
        width: '100%',
    }
})

export default SummaryScreen