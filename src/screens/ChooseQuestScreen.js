import React, { Component } from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableHighlight, StyleSheet } from 'react-native';
import FlexButton from '../components/FlexButton'
import QuestItem from '../components/QuestItem'

const buttons = ['New', 'All', 'Passed']

const data = [
    {
        label: 'Lorem ipsum',
        title: 'Genre: Lorem ipsum',
        subtitle: 'Lorem ipsum',
        src: require('../assets/images/item_img.png'),
    },
    {
        label: 'Lorem ipsum',
        title: 'Genre: Lorem ipsum',
        subtitle: 'Lorem ipsum',
        src: require('../assets/images/item_img.png'),
    },
    {
        label: 'Lorem ipsum',
        title: 'Genre: Lorem ipsum',
        subtitle: 'Lorem ipsum',
        src: require('../assets/images/item_img.png'),
    },
    {
        label: 'Lorem ipsum',
        title: 'Genre: Lorem ipsum',
        subtitle: 'Lorem ipsum',
        src: require('../assets/images/item_img.png'),
    },
    {
        label: 'Lorem ipsum',
        title: 'Genre: Lorem ipsum',
        subtitle: 'Lorem ipsum',
        src: require('../assets/images/item_img.png'),
    },
    {
        label: 'Lorem ipsum',
        title: 'Genre: Lorem ipsum',
        subtitle: 'Lorem ipsum',
        src: require('../assets/images/item_img.png'),
    },
    {
        label: 'Lorem ipsum',
        title: 'Genre: Lorem ipsum',
        subtitle: 'Lorem ipsum',
        src: require('../assets/images/item_img.png'),
    },
]

class ChooseQuestScreen extends Component {

    state = {
        searchString: '',
        selectedItem: 'All'
    }

    onSearchHandler = (searchString) => {
        this.setState({
            searchString
        })
    }

    onButtonPressHandler = (selectedItem) => {
        this.setState({
            selectedItem
        })
    }

    renderItem = ({ item }) => (
        <TouchableHighlight onPress={() => alert('Press')} underlayColor="#F6F6F4">
            <QuestItem
                passedContainerStyle={styles.questItem}
                title={item.title}
                subtitle={item.subtitle}
                underline
                src={item.src}
            />
        </TouchableHighlight>
    )

    keyExtractor = (_, i) => `${i}`

    render() {
        const { selectedItem } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Choose a quest!</Text>
                    </View>
                    <View style={styles.searchSection}>
                        <Image source={require('../assets/images/search.png')} />
                        <TextInput
                            style={styles.input}
                            placeholder='Search'
                            onChangeText={this.onSearchHandler}
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        {buttons.map(title => (
                            <FlexButton
                                onPress={() => this.onButtonPressHandler(title)}
                                active={title === selectedItem}
                                key={title}
                                title={title}
                            />
                        ))}
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={data}
                        renderItem={this.renderItem}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={this.keyExtractor}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        paddingLeft: 32,
        paddingRight: 32,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 48,
    },
    titleContainer: {
        paddingTop: 51,
        paddingBottom: 48,
    },
    title: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 24,
        color: '#2D3137'
    },
    searchSection: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
        paddingLeft: 24,
        backgroundColor: '#F6F6F4',
        borderRadius: 8,
    },
    questItem: {
        paddingLeft: 32,
        paddingRight: 32,
    },
    input: {
        flex: 1,
        fontFamily: 'Comfortaa-Bold',
        color: '#424242',
        fontSize: 12,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        backgroundColor: '#F6F6F4',
    },

})

export default ChooseQuestScreen