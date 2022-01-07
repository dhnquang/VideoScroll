/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ButtonSocial} from './components/button-social';
import {HomeHeaderBar} from './components/header-bar/header-bar';
import Video from 'react-native-video';
import {useStyle} from './styles';

export const TikTok = () => {
  const {styles} = useStyle();
  const [paused, setPaused] = useState(false);

  const onPressSearch = useCallback(() => {}, []);
  const onPressPaused = useCallback(() => {
    setPaused(!paused);
  }, [paused]);

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPressPaused}
      style={styles.container}>
      <Video
        source={require('../../assets/video.mp4')}
        style={styles.videoContainer}
        // onEnd={onEnd}
        // onLoad={onLoad}
        // onLoadStart={onLoadStart}
        // onProgress={onProgress}
        paused={paused}
        // ref={ref => (videoPlayer.current = ref)}
        resizeMode="cover"
        repeat={true}
        volume={0.5}
        playInBackground={true}
      />
      <HomeHeaderBar safeAreaTop onPressSearch={onPressSearch} title="TikTok" />
      <View style={styles.socialBox}>
        <View style={{marginLeft: 20}}>
          <Text style={styles.username}>@Quangg760</Text>
        </View>
        <ButtonSocial />
      </View>
      <Text style={styles.text}>This is a description text</Text>
    </TouchableOpacity>
  );
};
