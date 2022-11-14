import React, { useCallback } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import PropTypes from 'prop-types'

const Reactions = ({
    style,
    onReact,
    reaction,
    reactions,
}) => {

    const handlePressOut = useCallback(()=>{

    })

    const handleClick = useCallback(()=>{

    })

    const handleLongClick = useCallback(()=>{
        
    })

    return <Pressable style={[styles.root, style]}
            delayLongPress={100}
            onPressOut={handlePressOut}
            onPress={handleClick}
            onLongPress={handleLongClick}>
        <Text>👍🏼</Text>
    </Pressable>
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

Reactions.propTypes = {
    reactions: PropTypes.array.isRequired,
    onReact: PropTypes.func.isRequired
}

export default Reactions