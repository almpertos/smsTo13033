import React, { Component } from "react";
import { View, Text, AsyncStorage, FlatList } from "react-native";
import * as SMS from "expo-sms";
import { Reasons } from "../data/Reasons";
import { styles } from "../styles/styles";
import Snowflakes from "react-native-snowflakes";
import { Root, Popup } from "popup-ui";

const service = "13033";

class ReasonsScreen extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        fullName: "",
        address: "",
        keySelector: "",
    };

    sendSMS = async () => {
        try {
            const name = await AsyncStorage.getItem("name");
            const addr = await AsyncStorage.getItem("address");
            if (name && addr !== null) {
                this.setState({ fullName: name });
                this.setState({ address: addr });
            }
        } catch (e) {
            console.log(e);
        }

        if (this.state.keySelector === "") {
            alert("Δεν έχετε επιλέξει το λόγο μετακίνησης.");
        } else if (this.state.fullName !== "" || this.state.address !== "") {
            SMS.sendSMSAsync(
                `${service}`,
                `${this.state.keySelector} ${this.state.fullName} ${this.state.address}`
            );
        } else {
            alert("Δεν έχετε συμπληρώσει τα πεδία");
        }
    };

    renderData = (itemData) => {
        return (
            <View style={styles.reasonsContainer}>
                <Text
                    onPress={() => {
                        this.ch;
                        this.state.keySelector = itemData.item.key;
                        Popup.show({
                            type: "Success",
                            title: `Επιλέξατε το λόγο μετακίνησης ${this.state.keySelector}`,
                            textBody: `${itemData.item.message.slice(6)}`,
                            configButton: true,
                            configButtonText: "Συνέχεια",
                            cancelButton: true,
                            cancelButtonText: "Ακύρωση",
                            handleImage: this.state.keySelector.toString(),
                            cancelCallback: () => Popup.hide(),
                            configCallback: () => {
                                Popup.hide(),
                                    setTimeout(() => {
                                        this.sendSMS();
                                    }, 600);
                            },
                        });
                    }}
                >
                    <Text style={styles.reasonsText}>
                        {itemData.item.message}
                    </Text>
                </Text>
            </View>
        );
    };

    render() {
        return (
            <Root>
                <View>
                    <FlatList data={Reasons} renderItem={this.renderData} />
                </View>
            </Root>
        );
    }
}
export default ReasonsScreen;
