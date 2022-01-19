/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState, useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ButtonSocial} from '../button-social';
import Video from 'react-native-video';
import {useVideoStyle} from './styles';
import {VideoItemProps} from './types';
import Icon from 'react-native-vector-icons/AntDesign';
import {Views} from '../view';

export const VideoItem = ({data}: VideoItemProps) => {
  const {styles} = useVideoStyle();
  const videoPlayer = useRef<any>();
  const [paused, setPaused] = useState(false);

  const play = () => {
    setPaused(false);
  };

  const pause = () => {
    setPaused(true);
  };

  const onPressPaused = useCallback(() => {
    setPaused(!paused);
  }, [paused]);

  const handleChange = (isVisible: boolean) => {
    if (isVisible) {
      play();
    } else {
      pause();
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPressPaused}
      style={styles.container}>
      <Views onChange={handleChange}>
        <Video
          source={data.video}
          style={styles.videoContainer}
          paused={paused}
          ref={ref => (videoPlayer.current = ref)}
          resizeMode="cover"
          repeat={true}
          volume={0.5}
          playInBackground={true}
        />
        {paused && (
          <Icon
            name="caretright"
            size={70}
            color="#ffff"
            style={{alignSelf: 'center', position: 'absolute', top: 400}}
          />
        )}
        <View style={styles.socialBox}>
          <View style={{marginLeft: 20}}>
            <Text style={styles.username}>{data.username}</Text>
          </View>
          <ButtonSocial />
        </View>
        <Text style={styles.text}>{data.title}</Text>
        <Text style={styles.text}>Huych ngu musically</Text>
      </Views>
    </TouchableOpacity>
  );
};
