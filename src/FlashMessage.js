import React, { useState } from 'react';
import { Easing, Animated, Dimensions, StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'


const DistanceToBottom = -(Dimensions.get("window").height / 7);

export default FlashMessage = () => {

    const [NotifyMessage, setNotify] = useState({ title: '', desc: '', colorType: colors['NEUTRAL'] })

    const [positionAnim] = useState(new Animated.Value(DistanceToBottom))


    EventEmitter.listen('SHOW_FLASH', ({ type = 'NEUTRAL', title, desc, customColors = null }) => {

        if (customColor !== null) {
            setNotify({ title: title, desc: desc, colorType: customColors })
        } else {
            setNotify({ title: title, desc: desc, colorType: colors[type] })
        }

        showModal()
    })

    const showModal = () => {
        upAnimation()
        setTimeout(() => {
            downAnimation()
        }, 4000)
    }

    const upAnimation = () => {
        Animated.timing(positionAnim, {
            toValue: 0,
            easing: Easing.back(),
            useNativeDriver: false
        }).start();
    }

    const downAnimation = () => {
        Animated.timing(positionAnim, {
            toValue: DistanceToBottom,
            easing: Easing.elastic(),
            useNativeDriver: false
        }).start();
    }

    return (
        <Animated.View style={[styles.container, { top: positionAnim }]} >
            <LinearGradient style={styles.content_modal} colors={NotifyMessage.colorType}>

                <View style={styles.box_icon}></View>
                <View style={styles.box_text}>
                    <Text style={styles.title_text}>{NotifyMessage.title}</Text>
                    <Text style={styles.desc_text}>{NotifyMessage.desc}</Text>
                </View>

            </LinearGradient>
        </Animated.View>
    );
}

export const EventEmitter = {
    events: new Map(),
    listen: (topic, cb) => {
        const oldEvents = EventEmitter.events.get(topic)
        if (EventEmitter.events.has(topic)) {
            return EventEmitter.events.set(topic, [...oldEvents, cb])
        }
        return EventEmitter.events.set(topic, [cb])
    },
    emit: (topic, data) => {
        const myListeners = EventEmitter.events.get(topic)
        if (Array.isArray(myListeners) && myListeners.length) {
            myListeners.forEach(event => event(data))
        }
    }
}



const styles = StyleSheet.create({
    container: {
        zIndex: 100,
        position: "absolute",
        right: 0,
        height: -DistanceToBottom,
        width: '100%',
    },
    content_modal: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    box_icon: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    box_text: {
        flex: 4,
        alignItems: "center",
        justifyContent: "center"
    },
    title_text: {
        color: '#fff',
        fontSize: 13,
        fontWeight: "bold",
        alignSelf: "flex-start",
        letterSpacing: 0.2
    },
    desc_text: {
        color: '#ffff',
        fontSize: 14,
        fontWeight: "normal",
        alignSelf: "flex-start",
        letterSpacing: 0.2
    }
});

const colors = {
    DANGER: ['#e35f5b', '#e6504b'],
    NEUTRAL: ['#454545', '#3f3f3f'],
    WARNING: ['#f1d956', '#f0d43e'],
    SUCCESS: ['#00DE6A', '#00D264']
}