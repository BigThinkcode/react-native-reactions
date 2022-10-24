import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default Reactions = ({
    style,
    reaction,
    onReact,
    reactions,
}) => {
    return <View style={[styles.root, style]}>
        <Text>👍🏼</Text>
    </View>
}

const styles = StyleSheet.create({
    root: {
        minWidth: 40,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ababab',
        borderRadius: 10
    }
})