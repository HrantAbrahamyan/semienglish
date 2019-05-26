import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet, Platform } from 'react-native'
import FlexButton from '../components/FlexButton'

class DifficultyLevelScreen extends Component {

    state = {
        activeRange: 'Medium'
    }

    onRangeChangeHandler = (activeRange) => {
        this.setState({
            activeRange
        })
    }

    render() {
        const { activeRange } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.rangeLine} />
                <View style={styles.rangeContainer}>
                    <TouchableWithoutFeedback onPress={() => this.onRangeChangeHandler('Easy')}>
                        <View style={styles.easy}>
                            <View style={activeRange === 'Easy' ? styles.activeRange : styles.rangeItem} />
                            <Text style={activeRange === 'Easy' ? styles.selectedRangeText : styles.rangeText}>Easy</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.onRangeChangeHandler('Medium')}>
                        <View style={styles.medium}>
                            <View style={activeRange === 'Medium' ? styles.activeRange : styles.rangeItem} />
                            <Text style={activeRange === 'Medium' ? styles.selectedRangeText : styles.rangeText}>Medium</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.onRangeChangeHandler('Hard')}>
                        <View style={styles.hard}>
                            <View style={activeRange === 'Hard' ? styles.activeRange : styles.rangeItem} />
                            <Text style={activeRange === 'Hard' ? styles.selectedRangeText : styles.rangeText}>Hard</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.mainContainer}>
                    <View>
                        <Text style={styles.mainText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                        <Text style={styles.mainBottomText}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</Text>
                    </View>
                    <View>
                        <View >
                            <View style={styles.footerContainerTextContainer}>
                                <Text style={styles.footerText}>Do you remember it?</Text>
                                <Text style={styles.footerText}>Could you translate it later without a help?</Text>
                            </View>
                            <View style={styles.footerButtonContainer}>
                                <FlexButton passedStyleContainer={styles.activeButton} src={require('../assets/images/yes.png')}/>
                                <FlexButton passedStyleContainer={styles.button}  src={require('../assets/images/no.png')}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 68 : 48,
        paddingLeft: 32,
        paddingRight: 32,
        paddingBottom: 32,
    },
    rangeLine: {
        height: 1,
        width: '90%',
        backgroundColor: '#F6F6F4',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    rangeContainer: {
        flexDirection: 'row',
        position: 'relative',
        height: 46,
    },
    easy: {
        position: 'absolute',
        left: 0,
        alignItems: 'center',
    },
    medium: {
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    hard: {
        position: 'absolute',
        right: 0,
        alignItems: 'center',
    },
    rangeItem: {
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: -6,
        backgroundColor: '#F6F6F4',
    },
    activeRange: {
        height: 18,
        width: 18,
        borderRadius: 9,
        backgroundColor: '#F2FBDE',
        borderWidth: 3,
        marginTop: -9,
        borderColor: '#73A500',
    },
    rangeText: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 12,
        color: '#F6F6F4',
        marginTop: 10,
    },
    selectedRangeText: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 16,
        color: '#73A500',
        marginTop: 10,
    },
    mainContainer: {
        flex: 1, 
        marginTop: 64, 
        justifyContent: 'space-between'
    },
    mainText: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 16,
        color: '#2D3137',
    },
    mainBottomText: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 12,
        color: '#B1B3B4',
        marginTop: 32,
    },
    footerContainerTextContainer: {
        alignItems: 'center',
        marginBottom: 32,
    },
    footerText: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 12,
        color: '#2D3137',
    },
    footerButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    activeButton: {
        width: '45%',
        backgroundColor: '#F2FBDE',
    },
    button: {
        width: '45%',
    }
})

export default DifficultyLevelScreen