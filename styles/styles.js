import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e6e6e6",
    },
    title: {
        fontSize: 24,
    },
    userDataContainer: {
        width: "90%",
        alignItems: "center",
    },
    userDataInput: {
        paddingHorizontal: 4,
        borderWidth: 2,
        borderColor: "gray",
        backgroundColor: "white",
        borderRadius: 10,
        width: "100%",
        fontSize: 20,
        fontWeight: "700",
        marginVertical: "4%",
        height: 50,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 25,
    },
    reasonsContainer: {
        marginTop: 5,
        marginHorizontal: "5%",
        marginVertical: "1%",
        borderRadius: 20,
        backgroundColor: "#8bb4da",
        padding: 20,
    },
    reasonsText: {
        fontSize: 14,
        fontWeight: "700",
    },
    btn: {
        paddingVertical: 40,
        width: "60%",
    },
    infoScreen: {
        flex: 1,
        paddingHorizontal: 20,
        fontSize: 20,
    },
    infoTextStyle: {
        fontSize: 16,
        fontWeight: "600",
    },
});
