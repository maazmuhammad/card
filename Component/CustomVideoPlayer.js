import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Dimensions, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';

const CustomVideoPlayer = ({ videos }) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [showControls, setShowControls] = useState(true);

    // const [isLoading, setIsLoading] = useState(false);
    const videoRef = React.createRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowControls(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [showControls]);

    const toggleControls = () => {
        setShowControls(!showControls);

        if (showControls) {
            const timer = setTimeout(() => {
                setShowControls(false);

            }, 5000);
            return () => clearTimeout(timer);
        }
    };

    const handleVideoPress = () => {
        toggleControls();
        
    };



    const handleVideoEnd = () => {
        if (currentVideoIndex < videos.length - 1) {
            
            setCurrentVideoIndex(currentVideoIndex + 1);
        }
    };

    // const handleBuffer = ({ isBuffering }) => {

    //     setIsLoading(isBuffering);

    // };

    return (
        <TouchableWithoutFeedback onPress={handleVideoPress}>
            <View style={styles.container}>
                <Video
                    ref={videoRef}
                    source={videos[currentVideoIndex]}
                    style={styles.video}
                    resizeMode="contain"
                    controls={false}
                   // paused={showControls}
                    onEnd={handleVideoEnd}
                //    onLoad={() => setIsLoading(true)}
                //     onBuffer={handleBuffer}
                />


                {/* <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="white" />
                </View> */}

               
                {showControls && (
                    <>
                        <View style={styles.topControls}>
                        <Image source={require('../Source/images/drawable-xxxhdpi/back.png')} style={{ height: 20, width:30, }} />
                        <Image source={require('../Source/images/drawable-xxxhdpi/logo.png')} style={{ height: 20, width:80, left:50 }} />
                        <Image source={require('../Source/images/drawable-xxxhdpi/arrow.png')} style={{ height: 20, width:20, left:50 }} />
                        <Image source={require('../Source/images/drawable-xxxhdpi/heart.png')} style={{ height: 20, width:20, left:10 }} />


                        </View>
                        <View style={styles.controls}>
                        <Text style={{ color: "white", fontSize: 20, }}>
                            {[currentVideoIndex + 1]} to 3

                        </Text>
                        </View>
                    </>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    topControls: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    logoContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '70%',
        height: 30,
    },
    controls: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    loaderContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CustomVideoPlayer;
