import React, { Component } from 'react';
import { View, Text, AsyncStorage, Button, TouchableOpacity, FlatList } from 'react-native';
import * as SMS from 'expo-sms';

import { Reasons } from '../data/Reasons';
import { styles } from '../styles/styles';
import colors from '../colors/colors';

const service = '13033';

class ReasonsScreen extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        fullName: '',
        address: '',
        keySelector: '',
        pressed: true
    }

    // changeColor = () => {
    //     if (this.state.pressed == true)
    //         this.setState({ pressed: false })
    //     else
    //         this.setState({ pressed: true })
    // }

    sendSMS = async () => {
        try {
            const name = await AsyncStorage.getItem('name');
            const addr = await AsyncStorage.getItem('address');
            if (name && addr !== null) {
                this.setState({ fullName: name });
                this.setState({ address: addr });
            }
        } catch (e) {
            console.log(e);
        }

        if (this.state.keySelector === '') {
            alert('Δεν έχετε επιλέξει το λόγο μετακίνησης.')
        } else if (this.state.fullName !== '' || this.state.address !== '') {
            SMS.sendSMSAsync(`${service}`, `${this.state.keySelector} ${this.state.fullName} ${this.state.address}`);
        } else {
            alert('Δεν έχετε συμπληρώσει τα πεδία')
        }
    }

    renderData = (itemData) => {
        return (
            <TouchableOpacity onPress={() => {
                this.ch
                this.state.keySelector = itemData.item.key
            }}>
                <View style={
                        this.state.pressed
                            ? styles.reasonsContainer
                            : styles.test
                    }>
                    <Text style={styles.reasonsText}>
                        {itemData.item.message}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.screen}>
                <FlatList
                    data={Reasons}
                    renderItem={this.renderData}
                />
                <View style={styles.btn}>
                    <Button
                        title="ΑΠΟΣΤΟΛΗ ΜΗΝΥΜΑΤΟΣ"
                        color={colors.btn}
                        onPress={this.sendSMS}
                    />
                </View>
            </View>
        )
    }
}

export default ReasonsScreen;