import React from 'react';
import { Text } from 'react-native';
import { View, StyleSheet, ImageBackground, Pressable, Image, } from 'react-native';


import CountDown from 'react-native-countdown-component';

const MyCard = () => {
    return (
        <View>

            <View >
                <ImageBackground
                    source={require('../Source/images/background.png')}
                    style={styles.back}
                    imageStyle={{ borderTopLeftRadius: 25, borderTopRightRadius: 25 }}
                >
                    <View style={{ marginRight: 25 }}>
                        <CountDown
                            size={30}
                            digitStyle={{ backgroundColor: 'transparent' }}
                            digitTxtStyle={{ color: 'white' }}
                            timeLabelStyle={{ color: 'white', fontWeight: 'bold', fontSize: 10 }}
                            separatorStyle={{ color: 'white' }}
                            timeLabels={{ d: 'DAYS', h: 'HOURS', m: 'MINUTES', s: '   SECONDS' }}
                            style={{}}
                            timeToShow={['D', 'H', 'M', 'S']}
                            until={400000}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: '60%', marginTop: 10 }}>
                        <Image source={require('../Source/images/arrow.png')} style={{ height: 30, width: 30, marginHorizontal: 20 }} />
                        <Image source={require('../Source/images/like.png')} style={{ height: 30, width: 30 }} />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 100, }}>
                        <Image source={require('../Source/images/loading.png')} style={{ height: 60, width: 60, marginHorizontal: 20 }} />
                        <View style={{ flexDirection: "column", }}>

                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ color: "white", fontSize: 15, fontFamily: 'Lato' }}> £5,000,000 GBP </Text>
                                <Image source={require('../Source/images/logo.png')} style={{ height: 30, width: 100, marginHorizontal: 10 }} />

                            </View>
                            <View>
                                <Image source={require('../Source/images/line.png')} style={{ height: 2, width: "90%", marginTop: 10 }} />

                            </View>
                        </View>
                    </View>
                    <Text style={{ color: "white", fontSize: 9.5, fontFamily: 'Lato', marginTop: 10 }}>
                        SHELTON STREET   COVENT GARDEN   LONDON   WC2H   UNITED KINGDOM
                    </Text>
                    <Text style={{ color: "white", fontSize: 10, fontFamily: 'Lato', marginTop: 5, marginLeft: 250 }}>
                        #ZM7861234567
                    </Text>








                </ImageBackground>
            </View>
            <View>

                <ImageBackground
                    source={require('../Source/images/dark.jpg')}
                    style={styles.back1}
                    imageStyle={{ borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}>
                        <View>
                            <Text style={{ color: "white", fontSize: 16, fontFamily: 'Lato',   }} >£25.00 GBP                          BUY ENTRY NOW</Text>
                            <Text style={{ color: "white", fontSize: 10, fontFamily: 'Lato', marginLeft: 230 }}>
                        #ZM7861234567
                    </Text>


                        </View>

                </ImageBackground>

            </View>

        </View>

    )

}

const styles = StyleSheet.create({
    back: {
        width: '100%',
        height: 350,
        padding: 10,
        margin: 10
    },
    back1: {
        width: '100%',
        height: 50,
        padding: 10,
        margin: 10,
        marginTop:-5,
    }

})

export default MyCard;
