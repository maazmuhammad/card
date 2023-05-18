import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomVideoPlayer from './Component/CustomVideoPlayer';

const App = () => {
  const videos = [
    require('./Source/images/video/thirdvideo2.mp4'),
    require('./Source/images/video/secondvideo.mp4'),
    require('./Source/images/video/firstvideo1.mp4'),
  ];

  return (
    <View style={styles.container}>
      <CustomVideoPlayer videos={videos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
