import React, { Component } from "react";
import { View, TextInput, Button, AsyncStorage } from "react-native";

import { styles } from "../styles/styles";
import colors from "../colors/colors";

class UserDataScreen extends Component {
    constructor(props) {
        super(props);
        this.getData();
    }

    state = {
        fullName: "",
        address: "",
    };

    changeScreen = () => {
        if (this.state.fullName && this.state.address !== "")
            this.props.navigation.navigate("Λόγοι μετακίνησης");
        else alert("Δεν έχετε συμπληρώσει τα πεδία");
    };

    storeData = async () => {
        try {
            await AsyncStorage.setItem("name", this.state.fullName);
            await AsyncStorage.setItem("address", this.state.address);
        } catch (e) {
            console.log(e);
        }
    };

    confirmButton = () => {
        this.storeData();
        this.changeScreen();
    };

    getData = async () => {
        try {
            const name = await AsyncStorage.getItem("name");
            const addr = await AsyncStorage.getItem("address");
            if (name && addr !== null)
                this.props.navigation.navigate("Λόγοι μετακίνησης");

            if (name && addr !== null) {
                this.setState({ fullName: name });
                this.setState({ address: addr });
            }
        } catch (e) {
            console.log(e);
        }
    };

    removeData = async () => {
        try {
            await AsyncStorage.removeItem("name");
            await AsyncStorage.removeItem("address");
            this.setState({ fullName: null });
            this.setState({ address: null });
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.userDataContainer}>
                    <TextInput
                        style={styles.userDataInput}
                        placeholder="&#128100; Ονοματεπώνυμό"
                        value={this.state.fullName}
                        onChangeText={(value) =>
                            this.setState({ fullName: value })
                        }
                    />
                    <TextInput
                        style={styles.userDataInput}
                        placeholder="&#127968; Διεύθυνση"
                        value={this.state.address}
                        onChangeText={(value) =>
                            this.setState({ address: value })
                        }
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="ΕΠΑΝΑΦΟΡΑ"
                        onPress={this.removeData}
                        color={colors.btnReset}
                    />
                    <Button
                        title="ΕΠΙΒΕΒΑΙΩΣΗ"
                        color={colors.btn}
                        onPress={this.confirmButton}
                    />
                </View>
            </View>
        );
    }
}

export default UserDataScreen;
