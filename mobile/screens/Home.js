import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>KiiT Sync</Text>
            <Text style={styles.headerRightText}>KSAC</Text>
        </View>
    );
};

const Row = ({ title }) => {
    return (
        <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.touchableCards}>
                <Text style={styles.rowText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.rowGroup}>
                <Row title="Students" />
                <Row title="Teachers" />
            </View>
            <Text style={styles.headerText}>Some Heading</Text>
            <Text style={styles.loremText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
            </Text>
            <TouchableOpacity style={styles.linkButton}>
                <Text style={styles.linkButtonText}>Learn more -></Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>Contributors</Text>
            <Text style={styles.loremText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </Text>
            <View style={styles.circleContainer}>
                <View style={styles.circle} />
                <View style={styles.circle} />
                <View style={styles.circle} />
                <View style={styles.circle} />
            </View>
            <TouchableOpacity style={styles.contributorTouchableOpacity}>
                <Text style={styles.contributorTouchableOpacityText}>Become a Contributor</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    circleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
      },
      circle: {
        backgroundColor: 'lightgray',
        width: 70,
        height: 70,
        borderRadius: 100,
        marginHorizontal: '10%',
      },
      circleSmaller: {
        width: 30,
        height: 30,
      },
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    headerRightText: {
        fontSize: 16,
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    rowGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    rowText: {
        fontSize: 16,
    },
    loremText: {
        padding: 10,
    },
    touchableCards: {
        backgroundColor: "rgba(58, 178, 73, 0.13)",
        width: 180,
        height: 180,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        margin: 10,
    },
    linkButton: {
        padding: 10,
        margin: 10,
    },
    linkButtonText: {
        color: "rgba(31, 121, 255, 1)",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "left",
    },
    contributorTouchableOpacity: {
        backgroundColor: 'rgba(27, 27, 27, 1)',
        marginLeft: '15%',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84, 
        elevation: 5, 
    },
    contributorTouchableOpacityText: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
